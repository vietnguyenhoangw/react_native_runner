import React, {useEffect, useRef, useState} from 'react';
import {View, Keyboard, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {Styles, useTheme} from '@configs';
import {
  Text,
  Button,
  Container,
  TextInput,
  SizedBox,
  CheckBox,
} from '@components';
import {validName, validEmail} from '@utils';
import Navigator from '@navigator';
import {authActions} from '@actions';

export default function SignUpPassword({navigation, route}) {
  const {theme} = useTheme();
  const nameRef = useRef();
  const dispatch = useDispatch();

  const [gender, setGender] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({name: null, email: null});

  useEffect(() => {
    setTimeout(() => {
      nameRef.current?.focus();
    }, 500);
  }, []);

  /**
   * on change name
   * @param {*} value
   */
  const onChangeName = value => {
    setName(value);
    setError({...error, name: validName(value)});
  };

  /**
   * on change repass
   * @param {*} value
   */
  const onChangeEmail = value => {
    setEmail(value);
    setError({...error, email: validEmail(value)});
  };

  /**
   * on next
   */
  const onNext = () => {
    Keyboard.dismiss();
    Navigator.showLoading(true);
    dispatch(
      authActions.onRegister({...route.params, gender, name, email}, result => {
        Navigator.showLoading(false);
        navigation.replace('SignIn');
      }),
    );
  };

  /**
   * check disable next step
   */
  const disableNext = () => {
    if (!gender || !name || !email) {
      return true;
    }
    if (error.name || error.email) {
      return true;
    }
    return false;
  };

  return (
    <Container style={{backgroundColor: theme.colors.card}}>
      <ScrollView
        style={Styles.flex}
        contentContainerStyle={Styles.padding24}
        bounces={true}>
        <Text typography="h4" weight="bold">
          Nhập thông tin
        </Text>
        <SizedBox height={2} />
        <Text typography="title" weight="bold" type="secondary">
          Thông tin của bạn sẽ được mã hóa và cam kết bảo mật
        </Text>
        <SizedBox height={24} />
        <View style={Styles.row}>
          <View style={Styles.row}>
            <CheckBox
              value={gender === 'male'}
              onPress={() => setGender('male')}
            />
            <SizedBox width={8} />
            <Text>Nam</Text>
          </View>
          <SizedBox width={32} />
          <View style={Styles.row}>
            <CheckBox
              value={gender === 'female'}
              onPress={() => setGender('female')}
            />
            <SizedBox width={8} />
            <Text>Nữ</Text>
          </View>
        </View>
        <SizedBox height={24} />
        <TextInput
          ref={nameRef}
          value={name}
          size="small"
          label="Họ và tên"
          placeholder="VD: Nguyễn Văn A"
          onChangeText={onChangeName}
          onFocus={() => {
            setError({...error, name: null});
          }}
          error={error.name}
        />
        <SizedBox height={16} />
        <TextInput
          value={email}
          size="small"
          label="Email"
          placeholder="VD: abc@gmail.com"
          onChangeText={onChangeEmail}
          onFocus={() => {
            setError({...error, email: null});
          }}
          error={error.email}
        />
        <SizedBox height={8} />
        <Text typography="subtitle" type="secondary">
          Bằng việc tiếp tục, bạn xác nhận đã đọc và đồng ý với{' '}
          <Text typography="subtitle" color="secondary">
            Điều khoản sử dụng
          </Text>
        </Text>
      </ScrollView>
      <View style={Styles.buttonContent}>
        <Button onPress={onNext} disabled={disableNext()}>
          Tiếp tục
        </Button>
      </View>
    </Container>
  );
}
