import React, {useRef} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Styles, Images, useTheme, Colors} from '@configs';
import {
  Image,
  Text,
  Icon,
  IconButton,
  SafeAreaView,
  BottomSheetModal,
  BottomSheetPicker,
} from '@components';
import {applicationActions} from '@actions';
import {useDispatch} from 'react-redux';
import styles from './styles';

const DEFAULT = [
  {
    title: 'Thanh toán tiện lợi\nNhanh Chóng',
    subtitle: 'Đảm bảo thanh toán tự động thành công.',
    image: Images.onboard1,
  },
  {
    title: 'Thanh toán đúng hạn',
    subtitle: 'Tự động nhắc hoá đơn khi đến hạn thanh toán',
    image: Images.onboard2,
  },
  {
    title: 'Ưu đãi hấp dẫn',
    subtitle: 'Vô vàn ưu đãi áp dụng ngay trên hoá đơn & cửa hàng.',
    image: Images.onboard3,
  },
];

export default function OnBoard({navigation, route}) {
  const {colors} = useTheme();
  const bottomSheetRef = useRef(null);
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
      <View
        style={[styles.buttonCircle, {backgroundColor: colors.textSecondary}]}>
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
      <View style={[styles.buttonCircle, {backgroundColor: colors.primary}]}>
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
        <Text typography="h3" weight="bold" style={styles.textTitle}>
          {item.title}
        </Text>
        <Text typography="title" style={styles.textSubtitle}>
          {item.subtitle}
        </Text>
      </View>
    );
  };

  /**
   * render change language
   * @return {*}
   */
  const renderLanguage = () => {
    return (
      <View style={styles.localization}>
        <SafeAreaView>
          <IconButton
            size="small"
            name="web"
            style={{backgroundColor: colors.primaryLight}}
            onPress={() => bottomSheetRef.current?.present()}
          />
        </SafeAreaView>
        <BottomSheetModal ref={bottomSheetRef}>
          <BottomSheetPicker />
        </BottomSheetModal>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[colors.primaryLight, colors.background, colors.background]}
      style={Styles.flex}>
      <AppIntroSlider
        data={slides}
        activeDotStyle={{backgroundColor: colors.primary}}
        dotStyle={{backgroundColor: colors.textSecondary}}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        onDone={() => onDone(true)}
        onSkip={() => onDone(false)}
      />
      {renderLanguage()}
    </LinearGradient>
  );
}
