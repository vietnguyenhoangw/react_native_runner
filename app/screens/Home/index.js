import React, {useState} from 'react';
import {View, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {SafeAreaView} from '@components';
import {delay} from '@utils';
import {Styles, useTheme} from '@configs';
import Header from './components/header';
import Banner from './components/banner';
import Action from './components/action';
import styles from './styles';

const HEIGHT_BANNER = 100;
const HEIGHT_ACTION = HEIGHT_BANNER + 54;

export default function Home({navigation}) {
  const {theme} = useTheme();
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
    let marginTop = HEIGHT_BANNER + 12 - translationY.value;
    if (height < HEIGHT_BANNER) {
      height = HEIGHT_BANNER;
    }
    if (marginTop < 0) {
      marginTop = 0;
    }
    if (height > HEIGHT_ACTION) {
      height = HEIGHT_ACTION;
    }
    if (marginTop > HEIGHT_BANNER + 12) {
      marginTop = HEIGHT_BANNER + 12;
    }

    return {
      height,
      marginTop,
      overflow: 'hidden',
    };
  });

  return (
    <View style={[Styles.flex, {backgroundColor: theme.colors.background}]}>
      <LinearGradient
        colors={[
          color,
          color + 'F2',
          color + 'E6',
          color + 'D9',
          color + 'CC',
          color + 'BF',
          color + 'B3',
          color + 'A6',
          color + '99',
          theme.colors.card,
          theme.colors.card,
          theme.colors.background,
        ]}>
        <SafeAreaView edges={['top']}>
          <Header notification={100} maximumCount={20} onSearch={onSearch} />
        </SafeAreaView>
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
        <Animated.View style={actionStyle}>
          <View style={styles.actionContainer}>
            <Action minHeight={HEIGHT_BANNER} />
          </View>
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
        <View style={{height: 1000}}></View>
      </Animated.ScrollView>
    </View>
  );
}
