import React, {useState, useRef} from 'react';
import {View, KeyboardAvoidingView, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Button, TextInput, SafeAreaView, Image} from '@components';
import {Colors, useTheme, Images} from '@configs';
import styles from './styles';
export default function SignIn({navigation}) {
  const {colors} = useTheme();
  const marginTop = useRef(new Animated.Value(250)).current;
  const [phone, setPhone] = useState();

  const onChangeText = text => {
    setPhone(text);
  };

  return (
    <LinearGradient colors={[colors.primary, Colors.white]} style={styles.flex}>
      <SafeAreaView style={styles.flex}>
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
                onFocus={() => {
                  Animated.timing(marginTop, {
                    toValue: 50,
                    duration: 250,
                    useNativeDriver: false,
                  }).start();
                }}
                onBlur={() => {
                  Animated.timing(marginTop, {
                    toValue: 250,
                    duration: 250,
                    useNativeDriver: false,
                  }).start();
                }}
                style={styles.textInput}
              />
            </View>
            <View style={styles.buttonContent}>
              <Button>Tiếp tục</Button>
            </View>
          </Animated.View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
