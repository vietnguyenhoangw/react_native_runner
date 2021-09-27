import React, {useState, useRef} from 'react';
import {View, KeyboardAvoidingView, Animated, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Button, TextInput, SafeAreaView, Image} from '@components';
import {useTheme, Images} from '@configs';
import styles from './styles';
export default function SignIn({navigation}) {
  const {colors} = useTheme();
  const marginTop = useRef(new Animated.Value(250)).current;
  const [phone, setPhone] = useState();

  const onChangeText = text => {
    setPhone(text);
  };

  const onNext = () => {
    Keyboard.dismiss();
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
        <KeyboardAvoidingView style={styles.flex} behavior="padding">
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
                    toValue: 300,
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
