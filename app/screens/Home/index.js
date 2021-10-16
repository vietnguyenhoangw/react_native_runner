import React, {useState, useRef} from 'react';
import {View, RefreshControl, TouchableOpacity} from 'react-native';
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
  const {colors} = useTheme();
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const [color, setColor] = useState(colors.primary);
  const [refreshing, setRefreshing] = useState(false);

  /**
   * on refresh
   */
  const onRefresh = async () => {
    setRefreshing(true);
    await delay(1000);
    setRefreshing(false);
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
    <View style={[Styles.flex, {backgroundColor: colors.background}]}>
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
          colors.card,
          colors.card,
          colors.background,
        ]}>
        <SafeAreaView edges={['top']}>
          <Header notification={100} maximumCount={20} />
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
            tintColor={colors.text}
            title="Cập nhật"
            titleColor={colors.text}
            colors={[colors.text, colors.textSecondary]}
            progressBackgroundColor={colors.text}
          />
        }>
        <View style={{height: 1000}}></View>
      </Animated.ScrollView>
    </View>
  );
}
