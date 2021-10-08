import React, {useRef, useEffect} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Styles, Images, useTheme, Colors, Setting} from '@configs';
import {
  Image,
  Text,
  Icon,
  IconButton,
  SafeAreaView,
  BottomSheetPicker,
} from '@components';
import {getNational} from '@utils';
import {applicationActions} from '@actions';
import styles from './styles';

const DEFAULT = [
  {
    title: 'onboard_title_1',
    subtitle: 'onboard_message_1',
    image: Images.onboard1,
  },
  {
    title: 'onboard_title_2',
    subtitle: 'onboard_message_2',
    image: Images.onboard2,
  },
  {
    title: 'onboard_title_3',
    subtitle: 'onboard_message_3',
    image: Images.onboard3,
  },
];

export default function OnBoard({navigation, route}) {
  const {colors} = useTheme();
  const bottomSheetRef = useRef(null);
  const slides = route.params?.slides ?? DEFAULT;
  const dispatch = useDispatch();
  const {t} = useTranslation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primaryLight, true);
      return () => {
        StatusBar.setBackgroundColor(colors.primary, true);
      };
    }
  }, [colors]);

  /**
   * save onboard storage
   * @param {*} value
   */
  const onDone = value => {
    navigation.pop?.();
    route.params?.callback(value);
    if (value) {
      dispatch(applicationActions.saveOnBoard(route.params?.name));
    }
  };

  /**
   * on change language
   * @param {*} item
   */
  const onChangeLanguage = item => {
    dispatch(applicationActions.changeLanguge(item.value));
  };

  /**
   * build next button
   * @return {*}
   */
  const buildNextButton = () => {
    return (
      <View
        style={[styles.buttonCircle, {backgroundColor: colors.textSecondary}]}>
        <Icon name="arrow-right" color={Colors.white} size={24} />
      </View>
    );
  };

  /**
   * build done button
   * @return {*}
   */
  const buildDoneButton = () => {
    return (
      <View style={[styles.buttonCircle, {backgroundColor: colors.primary}]}>
        <Icon name="check" color={Colors.white} size={24} />
      </View>
    );
  };

  /**
   * build item of slides
   *
   * @param {*} {item}
   * @return {*}
   */
  const buildItem = ({item}) => {
    return (
      <View style={[Styles.flexCenter, Styles.padding16]}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text typography="h3" weight="bold" style={styles.textTitle}>
          {t(item.title)}
        </Text>
        <Text typography="title" style={styles.textSubtitle}>
          {t(item.subtitle)}
        </Text>
      </View>
    );
  };

  /**
   * build change language
   * @return {*}
   */
  const buildLanguage = () => {
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
        <BottomSheetPicker
          ref={bottomSheetRef}
          title={t('choose_language')}
          onSelect={onChangeLanguage}
          data={Setting.languageSupport.map(item => getNational(item))}
        />
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
        renderItem={buildItem}
        renderDoneButton={buildDoneButton}
        renderNextButton={buildNextButton}
        onDone={() => onDone(true)}
        onSkip={() => onDone(false)}
      />
      {buildLanguage()}
    </LinearGradient>
  );
}
