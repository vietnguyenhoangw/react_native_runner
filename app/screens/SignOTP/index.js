import React, {useEffect, useRef, useState} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {Text, Button, SafeAreaView, OTPInput} from '@components';
import {Styles, useTheme} from '@configs';
import styles from './styles';
export default function Empty({navigation, route}) {
  const {colors} = useTheme();
  const otpRef = useRef();
  const phone = route.params?.phone ?? '0999999999';
  const headerHeight = useHeaderHeight();

  const [otpError, setOTPError] = useState();
  const [otp, setOTP] = useState('');

  useEffect(() => {}, []);

  const focusOTP = () => {
    setOTPError(null);
  };

  const resetOTP = () => {
    otpRef.current.reset();
  };

  /**
   * on change otp
   * @param {*} value
   */
  const handleChange = value => {
    setOTP(value);
    console.log('CCCC', value);
  };

  return (
    <SafeAreaView>
      <View style={[Styles.flex, Styles.padding24]}>
        <Text typography="h4" weight="bold">
          Nhập mã xác thực OTP
        </Text>
        <Text typography="title" type="secondary" style={styles.marginTop2}>
          Mã xác thực 4 số được gửi đến {phone}
        </Text>
        <View style={[Styles.rowCenter, Styles.padding24]}>
          <OTPInput
            ref={otpRef}
            handleChange={handleChange}
            numberOfInputs={4}
            clearTextOnFocus
            error={otpError}
          />
        </View>
      </View>
      <View style={[Styles.paddingHorizontal16, Styles.paddingVertical8]}>
        <Button disabled={otp?.length < 4}>Tiếp tục</Button>
      </View>
    </SafeAreaView>
  );
}
