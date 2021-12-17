import React, {useState} from 'react';
import {View, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {SafeAreaView} from '@components';
import {delay} from '@utils';
import {Styles, useTheme, Opacity} from '@configs';
import {userSelect} from '@selectors';
import Header from './components/header';
import Banner from './components/banner';
import Action from './components/action';
import Category from './components/category';
import Recommend from './components/recommend';
import Favorite from './components/favorite';
import New from './components/new';
import styles from './styles';

const HEIGHT_BANNER = 100;
const HEIGHT_ACTION = 154;
const PADDING_TOP = 12;
const SHADOW = 2;

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
    if (height < HEIGHT_BANNER + SHADOW) {
      height = HEIGHT_BANNER + SHADOW;
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
          <Banner
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
      <Animated.View style={[{paddingBottom: SHADOW}, actionStyle]}>
        <View
          style={[
            styles.actionContainer,
            {shadowColor: theme.colors.text + Opacity[50]},
          ]}>
          <Action minHeight={HEIGHT_BANNER} balance={user.balance} />
        </View>
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
        <View style={{height: 1000}}>
          <Favorite />
          <Recommend />
          <Category />
          <New />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
