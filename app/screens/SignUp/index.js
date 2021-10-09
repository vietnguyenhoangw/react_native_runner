import React, {useEffect, useRef, useState} from 'react';
import {View, Keyboard, TouchableOpacity} from 'react-native';
import {Styles, useTheme} from '@configs';
import {Text, Button, Container, TextInput, SizedBox, Icon} from '@components';
import {validPassword} from '@utils';

export default function SignUpPassword({navigation}) {
  const {colors} = useTheme();
  const passRef = useRef();

  const [pass, setPass] = useState('');
  const [rePass, setRepass] = useState('');
  const [error, setError] = useState({pass: null, rePass: null});
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      passRef.current?.focus();
    }, 500);
  }, []);

  /**
   * on change pass
   * @param {*} value
   */
  const onChangePass = value => {
    setPass(value);
    setError({...error, pass: validPassword(value)});
  };

  /**
   * on change repass
   * @param {*} value
   */
  const onChangeRePass = value => {
    setRepass(value);
    setError({...error, rePass: validPassword(value, pass)});
  };

  /**
   * on next
   */
  const onNext = () => {
    Keyboard.dismiss();
    navigation.push('SignUpInfo');
  };

  /**
   * check disable next step
   */
  const disableNext = () => {
    if (!pass || !rePass) {
      return true;
    }
    if (error.pass || error.rePass) {
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
          ref={passRef}
          value={pass}
          size="small"
          label="Mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={onChangePass}
          keyboardType="number-pad"
          secureTextEntry={!showPass}
          onFocus={() => {
            setError({...error, pass: null});
          }}
          trailing={
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Icon
                name={showPass ? 'eye' : 'eye-off'}
                size={16}
                color={colors.secondary}
              />
            </TouchableOpacity>
          }
          error={error.pass}
        />
        <SizedBox height={16} />
        <TextInput
          value={rePass}
          size="small"
          label="Xác nhận mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={onChangeRePass}
          keyboardType="number-pad"
          secureTextEntry={!showPass}
          onFocus={() => {
            setError({...error, rePass: null});
          }}
          trailing={
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Icon
                name={showPass ? 'eye' : 'eye-off'}
                size={16}
                color={colors.secondary}
              />
            </TouchableOpacity>
          }
          error={error.rePass}
        />
        <SizedBox height={8} />
        <Text typography="subtitle" type="secondary">
          Bằng việc tiếp tục, bạn xác nhận đã đọc và đồng ý với{' '}
          <Text typography="subtitle" color="secondary">
            Điều khoản sử dụng
          </Text>
        </Text>
      </View>
      <View style={Styles.buttonContent}>
        <Button onPress={onNext} disabled={disableNext()}>
          Tiếp tục
        </Button>
      </View>
    </Container>
  );
}
