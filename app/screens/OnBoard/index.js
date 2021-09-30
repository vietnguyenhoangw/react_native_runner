import React from 'react';
import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Styles, Images, useTheme, Colors} from '@configs';
import {Image, Text, Icon} from '@components';
import {applicationActions} from '@actions';
import {useDispatch} from 'react-redux';
import styles from './styles';

const DEFAULT = [
  {
    title: 'Đa dạng nguồn tiền/tài khoản',
    subtitle:
      'Túi Thần Tài, Ví Trả Sau… có thể dùng thanh toán dịch vụ liên kết (Apple, Lazada, Tiki…).',
    image: Images.onboard1,
  },
  {
    title: 'Thanh toán thuận lợi',
    subtitle: 'Đảm bảo thanh toán tự động thành công.',
    image: Images.onboard2,
  },
  {
    title: 'Cá nhân hoá',
    subtitle:
      'Tùy ý sắp xếp thứ tự và bật/tắt nguồn tiền/tài khoản để sử dụng thanh toán.',
    image: Images.onboard3,
  },
];

export default function OnBoard({navigation, route}) {
  const {colors} = useTheme();
  const slides = route.params?.slides ?? DEFAULT;
  const dispatch = useDispatch();

  /**
   * save onboard storage
   * @param {*} done
   */
  const onDone = done => {
    navigation.pop?.();
    route.params?.callback(done);
    if (done) {
      dispatch(applicationActions.saveOnBoard(route.params?.name));
    }
  };

  /**
   * render next button
   * @return {*}
   */
  const renderNextButton = () => {
    return (
      <View style={[styles.buttonCircle, {backgroundColor: colors.border}]}>
        <Icon name="arrow-right" color={Colors.white} size={24} />
      </View>
    );
  };

  /**
   * render done button
   * @return {*}
   */
  const renderDoneButton = () => {
    return (
      <View
        style={[styles.buttonCircle, {backgroundColor: colors.primaryLight}]}>
        <Icon name="check" color={Colors.white} size={24} />
      </View>
    );
  };

  /**
   * render item of slides
   *
   * @param {*} {item}
   * @return {*}
   */
  const renderItem = ({item}) => {
    return (
      <View style={[Styles.flexCenter, Styles.padding16]}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text typography="h3" weight="bold">
          {item.title}
        </Text>
        <Text typography="title" style={styles.textSubtitle}>
          {item.subtitle}
        </Text>
      </View>
    );
  };

  return (
    <View style={[Styles.flex, {backgroundColor: colors.card}]}>
      <AppIntroSlider
        data={slides}
        activeDotStyle={{backgroundColor: colors.primaryLight}}
        dotStyle={{backgroundColor: colors.border}}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        onDone={() => onDone(true)}
        onSkip={() => onDone(false)}
      />
    </View>
  );
}
