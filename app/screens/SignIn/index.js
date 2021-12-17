import React, {useEffect, useRef, useState} from 'react';
import {View, Keyboard, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Styles, useTheme} from '@configs';
import {userSelect} from '@selectors';
import {
  Text,
  Button,
  Container,
  TextInput,
  SizedBox,
  Icon,
  PopupAlert,
  PopupOTP,
} from '@components';
import {delay, validPassword} from '@utils';
import Navigator from '@navigator';
import {authActions} from '@actions';

export default function SignIn({navigation}) {
  const {theme} = useTheme();
  const passwordRef = useRef();
  const user = useSelector(userSelect);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [errorResult, setErrorResult] = useState();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      passwordRef.current?.focus();
    }, 500);
  }, []);

  /**
   * on change password
   * @param {*} value
   */
  const onChangePassword = value => {
    setPassword(value);
    setError(validPassword(value));
  };

  /**
   * on sign in
   */
  const onSignIn = () => {
    Keyboard.dismiss();
    Navigator.showLoading(true);
    dispatch(
      authActions.onLogin({phone: user.phone, password}, response => {
        if (!response.success) {
          setErrorResult(response.message);
        }
        Navigator.showLoading(false);
      }),
    );
  };

  /**
   * on forgot password
   */
  const onForgotPassword = () => {
    Keyboard.dismiss();
    Navigator.showPopup({
      component: (
        <PopupAlert
          title="Xác thực OTP"
          message={
            <Text typography="h4">
              Chúng tôi sẽ gửi một mã xác thực đến SĐT{' '}
              <Text typography="h4" weight="bold">
                {user.phone}
              </Text>{' '}
              để xác thực khôi phục mật khẩu, Bạn có muốn tiếp tục ?
            </Text>
          }
          primaryButton={{
            title: 'Đồng ý',
            onPress: onOTP,
          }}
          secondaryButton={{
            title: 'Đóng',
          }}
        />
      ),
    });
  };

  /**
   * on change phone
   */
  const onChangePhone = () => {
    Keyboard.dismiss();
    Navigator.showPopup({
      component: (
        <PopupAlert
          title="Thay đổi SĐT"
          message="Bạn có muốn thay đổi SĐT khác, Bạn có muốn tiếp tục ?"
          primaryButton={{
            title: 'Đồng ý',
            onPress: () => {
              navigation.replace('SignPhone', {focus: true});
            },
          }}
          secondaryButton={{
            title: 'Đóng',
          }}
        />
      ),
    });
  };

  /**
   * on OTP
   *
   */
  const onOTP = async () => {
    Navigator.showLoading(true);
    await delay(1000);
    Navigator.showLoading(false);
    Navigator.showPopup({
      component: (
        <PopupOTP
          title="Xác thực OTP"
          onOTPCheck={otpCheck}
          reSendOTP={reSendOTP}
        />
      ),
      cancelable: false,
    });
  };

  /**
   * otp check
   */
  const otpCheck = async value => {
    Navigator.showLoading(true);
    await delay(1000);
    Navigator.showLoading(false);
    if (value !== '0000') {
      return 'Mã xác thực không chính xác';
    } else {
      navigation.replace('ForgotPassword', {phone: user.phone});
    }
  };

  /**
   * resend otp
   */
  const reSendOTP = async () => {
    Navigator.showLoading(true);
    await delay(1000);
    Navigator.showLoading(false);
  };

  /**
   * check disable sign in
   */
  const disableSignIn = () => {
    if (!password || error) {
      return true;
    }
    return false;
  };

  return (
    <Container style={{backgroundColor: theme.colors.card}}>
      <View style={[Styles.flex, Styles.padding24]}>
        <Text typography="h4" weight="bold">
          Xin chào, {user.name}!
        </Text>
        <SizedBox height={2} />
        <Text typography="title" weight="medium" type="secondary">
          {user.phone}
        </Text>
        <SizedBox height={24} />
        <TextInput
          ref={passwordRef}
          value={password}
          label="Mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={onChangePassword}
          keyboardType="number-pad"
          secureTextEntry={!showPassword}
          onFocus={() => {
            setError(null);
            setErrorResult(null);
          }}
          trailing={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
          }
          error={error ?? errorResult}
        />
        <SizedBox height={8} />
        <View style={Styles.rowSpace}>
          <TouchableOpacity onPress={onForgotPassword}>
            <Text typography="title" color="secondary">
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChangePhone}>
            <Text typography="title" color="secondary">
              Đổi SĐT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.buttonContent}>
        <Button onPress={onSignIn} disabled={disableSignIn()}>
          Đăng nhập
        </Button>
      </View>
    </Container>
  );
}
