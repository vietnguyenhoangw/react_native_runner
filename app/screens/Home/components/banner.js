import React, {memo, useState} from 'react';
import {StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View} from 'react-native';
import {Text, Icon, SizedBox, Image} from '@components';
import {Colors, Images, Styles, useTheme, Opacity} from '@configs';
import PropTypes from 'prop-types';

function Banner(props) {
  const {theme} = useTheme();
  const {width} = useWindowDimensions();
  const {data, onChange, onPress} = props;
  const [active, setActive] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View style={Styles.flex}>
        <Image source={item.image} style={Styles.flex} />
        <TouchableOpacity style={styles.actionContent} onPress={onPress}>
          <View style={Styles.rowCenter}>
            <Text typography="caption" weight="bold" color="white">
              {item.titleAction}
            </Text>
            <SizedBox width={2} />
            <Icon name="chevron-right" size={12} color={Colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width - 32}
        itemWidth={width - 32}
        loop={true}
        currentIndex={active}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={index => {
          setActive(index);
          onChange(data[index]);
        }}
      />
      <View style={styles.paginationContent}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={active}
          containerStyle={styles.dotContent}
          dotStyle={[
            styles.dotActiveStyle,
            {
              backgroundColor: theme.colors.primary,
            },
          ]}
          inactiveDotStyle={{
            backgroundColor: Colors.white,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
}

export default memo(Banner);

Banner.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func,
  onChange: PropTypes.func,
};

Banner.defaultProps = {
  data: [
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
      titleAction: 'Khám phá thêm',
      color: '#ee4d2d',
    },
    {
      image: Images.homeBanner6,
      titleAction: 'Xem chi tiết',
      color: '#e4dfe8',
    },
    {
      image: Images.homeBanner7,
      titleAction: 'Xem chi tiết',
      color: '#f3a0b9',
    },
    {
      image: Images.homeBanner2,
      titleAction: 'Xem chi tiết',
      color: '#ee4d2d',
    },
    {
      image: Images.homeBanner8,
      titleAction: 'Xem chi tiết',
      color: '#f6b0b0',
    },
    {
      image: Images.homeBanner9,
      titleAction: 'Xem chi tiết',
      color: '#faf098',
    },
    {
      image: Images.homeBanner10,
      titleAction: 'Xem chi tiết',
      color: '#c32c45',
    },
  ],
  onPress: item => {},
  onChange: item => {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 12,
  },
  itemContent: {
    flex: 1,
  },
  actionContent: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    height: 24,
    backgroundColor: Colors.black + Opacity[25],
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContent: {
    position: 'absolute',
    bottom: 4,
    height: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContent: {width: 8},
  dotActiveStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.white,
  },
});
