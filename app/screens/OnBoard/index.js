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
  const {theme} = useTheme();
  const bottomSheetRef = useRef();
  const slides = route.params?.slides ?? DEFAULT;
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.primaryLight, true);
      return () => {
        StatusBar.setBackgroundColor(theme.colors.primary, true);
      };
    }
  }, [theme.colors]);

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
        style={[
          styles.buttonCircle,
          {backgroundColor: theme.colors.textSecondary},
        ]}>
        <Icon name="arrow-right" color={Colors.white} />
      </View>
    );
  };

  /**
   * build done button
   * @return {*}
   */
  const buildDoneButton = () => {
    return (
      <View
        style={[styles.buttonCircle, {backgroundColor: theme.colors.primary}]}>
        <Icon name="check" color={Colors.white} />
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
            style={{backgroundColor: theme.colors.primaryLight}}
            onPress={() => bottomSheetRef.current?.present()}
            size="small">
            <Icon name="web" color={Colors.white} />
          </IconButton>
        </SafeAreaView>
        <BottomSheetPicker
          ref={bottomSheetRef}
          title={t('choose_language')}
          onSelect={onChangeLanguage}
          selected={getNational(i18n.language)}
          data={Setting.languageSupport.map(item => getNational(item))}
        />
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[
        theme.colors.primaryLight,
        theme.colors.background,
        theme.colors.background,
      ]}
      style={Styles.flex}>
      <AppIntroSlider
        data={slides}
        activeDotStyle={{backgroundColor: theme.colors.primary}}
        dotStyle={{backgroundColor: theme.colors.textSecondary}}
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
