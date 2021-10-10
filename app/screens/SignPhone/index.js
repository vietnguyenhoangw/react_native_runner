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
const MIN_HEIGHT_FORM = 70;
const MAX_HEIGHT_FORM = 250;

export default function SignPhone({navigation}) {
  const {colors} = useTheme();
  const marginTop = useRef(new Animated.Value(MAX_HEIGHT_FORM)).current;
  const onboard = useRef(useSelector(onBoardSelect)).current;
  const phoneRef = useRef();

  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!onboard?.signin) {
      Navigator.onBoard({
        name: 'signin',
        slides: null,
        callback: status => {
          phoneRef?.current?.focus?.();
        },
      });
    }
  }, [onboard]);

  /**
   * on OTP
   *
   */
  const onOTP = () => {
    Navigator.showLoading(true);
    setTimeout(() => {
      navigation.push('SignOTP', {phone, onClearPhone});
      Navigator.showLoading(false);
    }, 1000);
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
          message={`Chúng tôi sẽ gửi một mã xác thực đến SĐT ${phone} để tiếp tục ?`}
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
    <Container style={{backgroundColor: colors.card}}>
      <LinearGradient
        colors={[colors.primary, colors.card]}
        style={Styles.flex}>
        <View style={styles.imageContent}>
          <Image source={Images.signin} style={Styles.flex} />
        </View>
        <Animated.View
          style={[
            styles.content,
            {backgroundColor: colors.card, marginTop: marginTop},
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
