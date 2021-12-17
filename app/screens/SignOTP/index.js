import React, {useEffect, useRef, useState, useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Text,
  Button,
  Container,
  OTPInput,
  PopupAlert,
  SizedBox,
} from '@components';
import {Styles, useTheme} from '@configs';
import Navigator from '@navigator';
import {authActions} from '@actions';
import styles from './styles';

export default function SignOTP({navigation, route}) {
  const {theme} = useTheme();
  const otpRef = useRef();
  const phone = route.params?.phone ?? '0999999999';
  const dispatch = useDispatch();

  const [otpError, setOTPError] = useState();
  const [otp, setOTP] = useState('');
  const [time, setTime] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      focusOTP();
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  /**
   * focus OTP
   */
  const focusOTP = () => {
    setOTPError(null);
    otpRef.current.focus();
  };

  /**
   * on change otp
   * @param {*} value
   */
  const handleChange = useCallback(value => {
    setOTP(value);
  }, []);

  /**
   * on change phone
   */
  const onChangePhone = () => {
    Navigator.showPopup({
      component: (
        <PopupAlert
          title="Thay đổi SĐT"
          message="Bạn muốn đổi sang số điện thoại khác?"
          primaryButton={{
            title: 'Đồng ý',
            onPress: () => {
              navigation.pop();
              route.params?.onClearPhone();
            },
          }}
          secondaryButton={{
            title: 'Không',
            onPress: () => {},
          }}
        />
      ),
    });
  };

  /**
   * resend otp
   */
  const onResendOTP = () => {
    setTime(60);
  };

  /**
   * on next
   */
  const onNext = async () => {
    Navigator.showLoading(true);
    dispatch(
      authActions.onPhoneCheck({phone, otp}, response => {
        Navigator.showLoading(false);
        if (response.success) {
          if (response.data) {
            navigation.replace('SignIn');
          } else {
            navigation.replace('SignUp', {phone});
          }
        } else {
          setOTPError(response.message);
        }
      }),
    );
  };

  /**
   * build resend otp
   * @return {*}
   */
  const buildSendOTP = () => {
    if (time > 0) {
      return (
        <Text typography="title" type="secondary">
          Gửi lại OTP sau ({time})
        </Text>
      );
    }
    return (
      <TouchableOpacity onPress={onResendOTP}>
        <Text typography="title" color="secondary">
          Gửi lại OTP
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container style={{backgroundColor: theme.colors.card}}>
      <View style={[Styles.flex, Styles.padding24]}>
        <Text typography="h4" weight="bold">
          Nhập mã xác thực OTP
        </Text>
        <SizedBox height={2} />
        <Text typography="title" type="secondary">
          Mã xác thực 4 số được gửi đến{' '}
          <Text typography="title" weight="bold">
            {phone}
          </Text>
        </Text>
        <View style={styles.otpContainer}>
          <OTPInput
            ref={otpRef}
            handleChange={handleChange}
            numberOfInputs={4}
            clearTextOnFocus
            selectTextOnFocus={false}
            error={otpError}
          />
        </View>
        <View style={Styles.rowSpace}>
          {buildSendOTP()}
          <TouchableOpacity onPress={onChangePhone}>
            <Text typography="title" color="secondary">
              Đổi SĐT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[Styles.paddingHorizontal16, Styles.paddingVertical8]}>
        <Button disabled={otp?.length < 4} onPress={onNext}>
          Tiếp tục
        </Button>
      </View>
    </Container>
  );
}
