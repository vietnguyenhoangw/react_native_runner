import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text, Button} from '@components';
import {Styles, useTheme} from '@configs';
import styles from './styles';
export default function Empty({navigation}) {
  const {colors} = useTheme();
  useEffect(() => {}, []);
  return (
    <View style={[Styles.flex, {backgroundColor: colors.card}]}>
      <View style={[Styles.flex, Styles.padding24]}>
        <Text typography="h4" weight="bold">
          Nhập mã xác thực OTP
        </Text>
        <Text typography="title" type="secondary" style={styles.marginTop2}>
          Mã xác thực 4 số được gửi đến 0923123123
        </Text>
      </View>
    </View>
  );
}
