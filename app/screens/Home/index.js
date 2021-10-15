import React, {useEffect} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  Button,
  Container,
  Icon,
  SafeAreaView,
  SizedBox,
  Image,
} from '@components';
import {Colors, Styles, Images, useTheme} from '@configs';
import styles from './styles';

export default function Home({navigation}) {
  const {colors} = useTheme();
  useEffect(() => {}, []);

  return (
    <View style={[Styles.flex, {backgroundColor: colors.background}]}>
      <LinearGradient
        colors={[
          colors.primary,
          colors.primary + 'E6',
          colors.primary + 'CC',
          colors.primary + 'B3',
          colors.primary + '99',
          colors.primary + '80',
          colors.card,
        ]}
        style={{height: 300}}>
        <SafeAreaView edges={['top']}>
          <View
            style={[
              Styles.row,
              Styles.paddingHorizontal16,
              Styles.paddingVertical8,
            ]}>
            <View style={styles.headerIcon}>
              <Icon color={Colors.white} name="qrcode-scan" size={16} />
            </View>
            <SizedBox width={12} />
            <View
              style={{
                flex: 1,
                height: 32,
                backgroundColor: colors.card,
                borderRadius: 16,
              }}></View>
            <SizedBox width={12} />
            <View style={styles.headerIcon}>
              <Icon color={Colors.white} name="bell-outline" size={18} />
              <View
                style={[
                  styles.notificationBadge,
                  {
                    backgroundColor: colors.error,
                  },
                ]}>
                <Text typography="caption" color="white" weight="bold">
                  9
                </Text>
              </View>
            </View>
            <SizedBox width={12} />
            <Image source={Images.avatar1} style={styles.headerIcon} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
