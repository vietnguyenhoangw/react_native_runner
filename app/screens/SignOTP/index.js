import React, {useEffect, useRef, useState, useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Button, Container, OTPInput} from '@components';
import {Styles, useTheme} from '@configs';
import Navigator from '@navigator';
import {delay} from '@utils';
import styles from './styles';

export default function SignOTP({navigation, route}) {
  const {colors} = useTheme();
  const otpRef = useRef();
  const phone = route.params?.phone ?? '0999999999';

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
    navigation.pop();
    route.params?.onClearPhone();
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
    await delay(1000);
    Navigator.showLoading(false);
    if (otp !== '0000') {
      setOTPError('Mã xác nhận không chính xác');
    } else {
    }
  };

  /**
   * render resend otp
   * @return {*}
   */
  const renderSendOTP = () => {
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
    <Container style={{backgroundColor: colors.card}}>
      <View style={[Styles.flex, Styles.padding24]}>
        <Text typography="h4" weight="bold">
          Nhập mã xác thực OTP
        </Text>
        <Text typography="title" type="secondary" style={styles.marginTop2}>
          Mã xác thực 4 số được gửi đến {phone}
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
          {renderSendOTP()}
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
