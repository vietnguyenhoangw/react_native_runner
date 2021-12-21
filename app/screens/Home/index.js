import React, {useState} from 'react';
import {View, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {SafeAreaView, CornerStone} from '@components';
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
const HEIGHT_ACTION = 150;
const PADDING_TOP = 12;

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
    let height = HEIGHT_ACTION - translationY.value;
    let marginTop = HEIGHT_BANNER + PADDING_TOP - translationY.value;
    if (height < HEIGHT_BANNER) {
      height = HEIGHT_BANNER;
    }
    if (marginTop < 0) {
      marginTop = 0;
    }
    if (height > HEIGHT_ACTION) {
      height = HEIGHT_ACTION;
    }
    if (marginTop > HEIGHT_BANNER + PADDING_TOP) {
      marginTop = HEIGHT_BANNER + PADDING_TOP;
    }

    return {
      height,
      marginTop,
      overflow: 'hidden',
      paddingHorizontal: 16,
    };
  });

  /**
   * build banner slider
   * @return {*}
   */
  const buildBanner = () => {
    return (
      <View>
        <View
          style={[
            styles.bannerContainer,
            {
              height: HEIGHT_BANNER,
            },
          ]}>
          <CornerStone
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
      </View>
    );
  };

  /**
   * build action
   * @return {*}
   */
  const buildAction = () => {
    return (
      <Animated.View style={actionStyle}>
        <Action minHeight={HEIGHT_BANNER} balance={user.balance} />
      </Animated.View>
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
        {buildBanner()}
        {buildAction()}
      </LinearGradient>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={8}
        decelerationRate={0.5}
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
