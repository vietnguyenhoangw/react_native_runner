import React, {useState} from 'react';
import {View, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {SafeAreaView, Carousel} from '@components';
import {delay} from '@utils';
import {Styles, useTheme, Opacity, Images} from '@configs';
import {userSelect} from '@selectors';
import Header from './components/header';
import Action from './components/action';
import Category from './components/category';
import Recommend from './components/recommend';
import Favorite from './components/favorite';
import New from './components/new';
import styles from './styles';

const HEIGHT_BANNER = 100;
const HEIGHT_ACTION = 135;

export default function Home({navigation}) {
  const {theme} = useTheme();
  const user = useSelector(userSelect);
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const [color, setColor] = useState(theme.colors.primary);
  const [refreshing, setRefreshing] = useState(false);

  /**
   * on refresh
   */
  const onRefresh = async () => {
    setRefreshing(true);
    await delay(1000);
    setRefreshing(false);
  };

  /**
   * on refresh
   */
  const onSearch = () => {
    navigation.push('Search');
  };

  const actionStyle = useAnimatedStyle(() => {
    const HEIGHT = HEIGHT_BANNER + 12 + HEIGHT_ACTION;
    let height = HEIGHT - translationY.value;
    if (height < HEIGHT_ACTION) {
      height = HEIGHT_ACTION;
    }
    if (height > HEIGHT) {
      height = HEIGHT;
    }
    return {
      height,
      position: 'relative',
    };
  });

  /**
   * build banner slider
   * @return {*}
   */
  const buildBanner = () => {
    return (
      <View style={[styles.bannerContainer, {height: HEIGHT_BANNER}]}>
        <Carousel
          data={[
            {
              image: Images.homeBanner1,
              titleAction: 'Xem chi tiết',
              color: '#ee4d2d',
            },
            {
              image: Images.homeBanner3,
              titleAction: 'Đặt ngay',
              color: '#f18ead',
            },
            {
              image: Images.homeBanner5,
              titleAction: 'Xem chi tiết',
              color: '#eeabfc',
            },
            {
              image: Images.homeBanner4,
              titleAction: 'Khám phá ngay',
              color: '#ee4d2d',
            },
            {
              image: Images.homeBanner6,
              titleAction: 'Xem chi tiết',
              color: '#e4dfe8',
            },
            {
              image: Images.homeBanner7,
              titleAction: 'Khám phá ngay',
              color: '#f3a0b9',
            },
            {
              image: Images.homeBanner2,
              titleAction: 'Xem chi tiết',
              color: '#ee4d2d',
            },
            {
              image: Images.homeBanner8,
              titleAction: 'Khám phá ngay',
              color: '#f6b0b0',
            },
            {
              image: Images.homeBanner9,
              titleAction: 'Xem chi tiết',
              color: '#faf098',
            },
            {
              image: Images.homeBanner10,
              titleAction: 'Khám phá ngay',
              color: '#c32c45',
            },
          ]}
          onChange={item => {
            setColor(item.color);
          }}
        />
      </View>
    );
  };

  /**
   * build action
   * @return {*}
   */
  const buildAction = () => {
    return (
      <View style={[styles.actionContainer, {height: HEIGHT_ACTION}]}>
        <Action balance={user.balance} />
      </View>
    );
  };

  return (
    <View style={[Styles.flex, {backgroundColor: theme.colors.card}]}>
      <LinearGradient
        colors={[
          color,
          color + Opacity[95],
          color + Opacity[90],
          color + Opacity[85],
          color + Opacity[80],
          color + Opacity[75],
          color + Opacity[70],
          color + Opacity[65],
          color + Opacity[60],
          theme.colors.card,
          theme.colors.card,
          theme.colors.card,
        ]}>
        <SafeAreaView edges={['top']}>
          <Header notification={100} maximumCount={20} onSearch={onSearch} />
        </SafeAreaView>
        <Animated.View style={actionStyle}>
          {buildBanner()}
          {buildAction()}
        </Animated.View>
      </LinearGradient>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={8}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.text}
            title="Cập nhật"
            titleColor={theme.colors.text}
            colors={[theme.colors.text, theme.colors.textSecondary]}
            progressBackgroundColor={theme.colors.text}
          />
        }>
        <Favorite />
        <Recommend />
        <Category />
        <New />
      </Animated.ScrollView>
    </View>
  );
}
