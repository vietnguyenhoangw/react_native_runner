import React, {useState, useRef} from 'react';
import {View, KeyboardAvoidingView, Animated, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Button, TextInput, SafeAreaView, Image} from '@components';
import {useTheme, Images} from '@configs';
import messaging from '@react-native-firebase/messaging';
import styles from './styles';

export default function SignIn({navigation}) {
  const {colors} = useTheme();
  const marginTop = useRef(new Animated.Value(260)).current;
  const [phone, setPhone] = useState();

  const onChangeText = text => {
    setPhone(text);
  };

  const onNext = async () => {
    Keyboard.dismiss();
    const authStatus = await messaging().requestPermission();
    console.log('Authorization status:', authStatus);
    const token = await messaging().getToken();
    const getAPNSToken = await messaging().getAPNSToken();
    console.log('token', token);
    console.log('getAPNSToken', getAPNSToken);
  };

  return (
    <SafeAreaView
      style={[styles.flex, {backgroundColor: colors.card}]}
      edges={['bottom']}>
      <LinearGradient
        colors={[colors.primary, colors.card]}
        style={styles.flex}>
        <View style={styles.imageContent}>
          <Image source={Images.signin} style={styles.flex} />
        </View>
        <KeyboardAvoidingView style={styles.flex} behavior="height">
          <Animated.View
            style={[
              styles.content,
              {backgroundColor: colors.card, marginTop: marginTop},
            ]}>
            <View style={styles.inputContent}>
              <Text typography="h3" weight="bold">
                Xin chào!
              </Text>
              <Text typography="title" style={styles.subTitle}>
                Nhập số điện thoại để đăng ký hoặc đăng nhập
              </Text>
              <TextInput
                value={phone}
                label="Số điện thoại"
                placeholder="VD: 0990909090"
                onChangeText={onChangeText}
                keyboardType="number-pad"
                onFocus={() => {
                  Animated.timing(marginTop, {
                    toValue: 70,
                    duration: 250,
                    useNativeDriver: false,
                  }).start();
                }}
                onBlur={() => {
                  Animated.timing(marginTop, {
                    toValue: 260,
                    duration: 250,
                    useNativeDriver: false,
                  }).start();
                }}
                style={styles.textInput}
              />
            </View>
            <View style={styles.buttonContent}>
              <Button onPress={onNext}>Tiếp tục</Button>
            </View>
          </Animated.View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}
