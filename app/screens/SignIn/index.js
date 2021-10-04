import React, {useState, useRef, useEffect} from 'react';
import {View, Animated, Keyboard, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Button, TextInput, Container, Image} from '@components';
import {Styles, useTheme, Images} from '@configs';
import Navigator from '@navigator';
import {validPhone, delay} from '@utils';
import {onBoardSelect} from '@selectors';
import styles from './styles';
import {useSelector} from 'react-redux';

const PHONE_LENGTH = 15;
const MIN_HEIGHT_FORM = 70;
const MAX_HEIGHT_FORM = 250;

export default function SignIn({navigation}) {
  const {colors} = useTheme();
  const marginTop = useRef(new Animated.Value(MAX_HEIGHT_FORM)).current;
  const onboard = useRef(useSelector(onBoardSelect)).current;
  const phoneRef = useRef();

  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (onboard?.signin) {
      phoneRef?.current?.focus?.();
    } else {
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
   * on Next
   *
   */
  const onNext = async () => {
    Keyboard.dismiss();
    Navigator.showLoading(true);
    setTimeout(() => {
      navigation.push('SignOTP', {phone, onClearPhone});
      Navigator.showLoading(false);
    }, 1000);
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
              <Text typography="title" style={styles.subTitle}>
                Nhập số điện thoại để đăng ký hoặc đăng nhập
              </Text>
              <TextInput
                ref={phoneRef}
                value={phone}
                label="Số điện thoại"
                placeholder="VD: 0990909090"
                onChangeText={onChangeText}
                keyboardType="number-pad"
                maxLength={PHONE_LENGTH}
                autoCapitalize="none"
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
                style={styles.textInput}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.buttonContent}>
            <Button onPress={onNext} disabled={disableNext()}>
              Tiếp tục
            </Button>
          </View>
        </Animated.View>
      </LinearGradient>
    </Container>
  );
}
