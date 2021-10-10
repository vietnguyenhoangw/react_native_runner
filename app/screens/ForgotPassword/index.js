import React, {useEffect, useRef, useState} from 'react';
import {View, Keyboard, TouchableOpacity} from 'react-native';
import {Styles, useTheme} from '@configs';
import {Text, Button, Container, TextInput, SizedBox, Icon} from '@components';
import {validPassword, delay} from '@utils';
import Navigator from '@navigator';

export default function ForgotPassword({navigation, route}) {
  const {colors} = useTheme();
  const passwordRef = useRef();

  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');
  const [error, setError] = useState({password: null, rePassword: null});
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
    setError({...error, password: validPassword(value)});
  };

  /**
   * on change repassword
   * @param {*} value
   */
  const onChangeRePassword = value => {
    setRepassword(value);
    setError({...error, rePassword: validPassword(value, password)});
  };

  /**
   * on next
   */
  const onNext = async () => {
    Keyboard.dismiss();
    Navigator.showLoading(true);
    await delay(1000);
    Navigator.showLoading(false);
    navigation.replace('SignIn');
  };

  /**
   * check disable next step
   */
  const disableNext = () => {
    if (!password || !rePassword) {
      return true;
    }
    if (error.password || error.rePassword) {
      return true;
    }
    return false;
  };

  return (
    <Container style={{backgroundColor: colors.card}}>
      <View style={[Styles.flex, Styles.padding24]}>
        <Text typography="h4" weight="bold">
          Tạo mật khẩu
        </Text>
        <SizedBox height={2} />
        <Text typography="title" weight="bold" type="secondary">
          Gồm 6 số để bảo vệ tài khoản của bạn tốt hơn
        </Text>
        <SizedBox height={32} />
        <TextInput
          ref={passwordRef}
          value={password}
          size="small"
          label="Mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={onChangePassword}
          keyboardType="number-pad"
          secureTextEntry={!showPassword}
          onFocus={() => {
            setError({...error, password: null});
          }}
          trailing={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={16}
                color={colors.secondary}
              />
            </TouchableOpacity>
          }
          error={error.password}
        />
        <SizedBox height={16} />
        <TextInput
          value={rePassword}
          size="small"
          label="Xác nhận mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={onChangeRePassword}
          keyboardType="number-pad"
          secureTextEntry={!showPassword}
          onFocus={() => {
            setError({...error, rePassword: null});
          }}
          trailing={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={16}
                color={colors.secondary}
              />
            </TouchableOpacity>
          }
          error={error.rePassword}
        />
      </View>
      <View style={Styles.buttonContent}>
        <Button onPress={onNext} disabled={disableNext()}>
          Tiếp tục
        </Button>
      </View>
    </Container>
  );
}
