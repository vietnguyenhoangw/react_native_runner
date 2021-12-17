import React, {useState, useRef, useEffect} from 'react';
import {View, Animated, Keyboard, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {
  Text,
  Button,
  TextInput,
  Container,
  Image,
  PopupAlert,
  SizedBox,
} from '@components';
import {Styles, useTheme, Images} from '@configs';
import Navigator from '@navigator';
import {validPhone, delay} from '@utils';
import {onBoardSelect} from '@selectors';
import styles from './styles';

const PHONE_LENGTH = 15;
const MIN_HEIGHT_FORM = 100;
const MAX_HEIGHT_FORM = 300;

export default function SignPhone({navigation, route}) {
  const {theme} = useTheme();
  const marginTop = useRef(new Animated.Value(MAX_HEIGHT_FORM)).current;
  const onboard = useRef(useSelector(onBoardSelect));
  const focus = useRef(route.params?.focus);
  const phoneRef = useRef();

  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!onboard.current?.SignPhone) {
      Navigator.onBoard({
        name: 'SignPhone',
        slides: null,
        callback: status => {
          phoneRef?.current?.focus?.();
        },
      });
    } else {
      if (focus.current) {
        setTimeout(() => {
          phoneRef?.current?.focus?.();
        }, 500);
      }
    }
  }, []);

  /**
   * on OTP
   *
   */
  const onOTP = async () => {
    Navigator.showLoading(true);
    await delay(1000);
    navigation.push('SignOTP', {phone, onClearPhone});
    Navigator.showLoading(false);
  };

  /**
   * on Next
   *
   */
  const onNext = async () => {
    Keyboard.dismiss();
    Navigator.showPopup({
      component: (
        <PopupAlert
          title="Xác thực OTP"
          message={
            <Text typography="h4">
              Chúng tôi sẽ gửi một mã xác thực đến SĐT{' '}
              <Text typography="h4" weight="bold">
                {phone}
              </Text>{' '}
              để xác thực đăng nhập, Bạn có muốn tiếp tục ?
            </Text>
          }
          primaryButton={{
            title: 'Đồng ý',
            onPress: onOTP,
          }}
          secondaryButton={{
            title: 'Đổi SĐT',
            onPress: onClearPhone,
          }}
        />
      ),
    });
  };

  /**
   * on change text
   * @param {*} value
   */
  const onChangeText = value => {
    const trimPhone = value?.trim?.();
    setPhone(trimPhone);
    setError(validPhone(trimPhone));
  };

  /**
   * on clear phone
   *
   */
  const onClearPhone = async () => {
    setPhone();
    await delay(500);
    phoneRef?.current?.focus?.();
  };

  /**
   * check disable next step
   */
  const disableNext = () => {
    if (!phone || error) {
      return true;
    }
    return false;
  };

  return (
    <Container style={{backgroundColor: theme.colors.card}}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.card]}
        style={Styles.flex}>
        <View style={[styles.imageContent, {height: MAX_HEIGHT_FORM + 24}]}>
          <Image
            source={Images.signin}
            style={Styles.flex}
            resizeMode="cover"
          />
        </View>
        <Animated.View
          style={[
            styles.content,
            {backgroundColor: theme.colors.card, marginTop: marginTop},
          ]}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[Styles.flex, Styles.padding24]}>
              <Text typography="h3" weight="bold">
                Xin chào!
              </Text>
              <SizedBox height={4} />
              <Text typography="title">
                Nhập số điện thoại để đăng ký hoặc đăng nhập
              </Text>
              <SizedBox height={24} />
              <TextInput
                ref={phoneRef}
                value={phone}
                label="Số điện thoại"
                placeholder="VD: 0990909090"
                onChangeText={onChangeText}
                keyboardType="number-pad"
                maxLength={PHONE_LENGTH}
                textContentType="telephoneNumber"
                error={error}
                onFocus={() => {
                  Animated.timing(marginTop, {
                    toValue: MIN_HEIGHT_FORM,
                    duration: 250,
                    useNativeDriver: false,
                  }).start();
                }}
                onBlur={() => {
                  Animated.timing(marginTop, {
                    toValue: MAX_HEIGHT_FORM,
                    duration: 250,
                    useNativeDriver: false,
                  }).start();
                }}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={Styles.buttonContent}>
            <Button onPress={onNext} disabled={disableNext()}>
              Tiếp tục
            </Button>
          </View>
        </Animated.View>
      </LinearGradient>
    </Container>
  );
}
