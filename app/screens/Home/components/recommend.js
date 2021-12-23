import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Text, Icon, Button, Image, CornerStone} from '@components';
import {Opacity, useTheme, Images} from '@configs';
import PropTypes from 'prop-types';

export default function Recommend(props) {
  const {theme} = useTheme();
  const {data, dataCornerStone, onPress, onPressCornerStone} = props;

  /**
   * render CornerStone
   *
   */
  const renderCornerStone = () => {
    if (dataCornerStone?.length > 0) {
      return (
        <View style={styles.cornerStone}>
          <CornerStone
            data={dataCornerStone}
            onChange={item => {}}
            onPress={item => onPressCornerStone(item)}
            style={{borderRadius: 8}}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text typography="h4" weight="bold">
          Đề xuất cho bạn
        </Text>
        <Button
          type="secondary"
          leading={<Icon name="grid" size={16} />}
          full={false}
          size="small">
          Tất cả
        </Button>
      </View>
      <View style={styles.row}>
        {data.map(item => (
          <TouchableOpacity
            key={item.service_id}
            onPress={() => onPress(item)}
            style={styles.item}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: theme.colors.primary + Opacity[15]},
              ]}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <Text
              typography="caption"
              style={styles.text}
              numberOfLines={2}
              ellipsizeMode="middle">
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderCornerStone()}
    </View>
  );
}

Recommend.propTypes = {
  data: PropTypes.array,
  dataCornerStone: PropTypes.array,
  onPress: PropTypes.func,
  onPressCornerStone: PropTypes.func,
};

Recommend.defaultProps = {
  data: [
    {
      service_id: 'transfer',
      icon: Images.serviceTransfer,
      title: 'Chuyển tiền',
    },
    {
      service_id: 'food',
      icon: Images.serviceFood,
      title: 'Đặt đồ ăn',
    },
    {
      service_id: 'mobile',
      icon: Images.serviceMobile,
      title: 'Nạp tiền điện thoại',
    },
    {
      service_id: 'electric',
      icon: Images.serviceElectric,
      title: 'Thanh toán điện',
    },
    {
      service_id: 'airplane',
      icon: Images.serviceAirplane,
      title: 'Đặt vé máy bay',
    },
    {
      service_id: 'hotel',
      icon: Images.serviceHotel,
      title: 'Đặt khách sạn',
    },
    {
      service_id: 'movie',
      icon: Images.serviceMovie,
      title: 'Đặt vé xem phim',
    },
    {
      service_id: 'apartment',
      icon: Images.serviceApartment,
      title: 'Phí chung cư',
    },
    {
      service_id: 'delivery',
      icon: Images.serviceDelivery,
      title: 'Vận chuyển & giao hàng',
    },
    {
      service_id: 'taxi',
      icon: Images.serviceTaxi,
      title: 'Đặt xe',
    },
  ],
  dataCornerStone: [
    {
      image: Images.homeBanner7,
      titleAction: 'Khám phá ngay',
    },
    {
      image: Images.homeBanner6,
      titleAction: 'Xem chi tiết',
    },
    {
      image: Images.homeBanner2,
      titleAction: 'Xem chi tiết',
    },
    {
      image: Images.homeBanner9,
      titleAction: 'Xem chi tiết',
    },
    {
      image: Images.homeBanner8,
      titleAction: 'Khám phá ngay',
    },
    {
      image: Images.homeBanner10,
      titleAction: 'Khám phá ngay',
    },
  ],
  onPress: item => {},
  onPressCornerStone: item => {},
};

const styles = StyleSheet.create({
  container: {},
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '20%',
    alignItems: 'center',
    padding: 4,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 12,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {textAlign: 'center'},
  icon: {width: 24, height: 24},
  cornerStone: {
    height: 80,
    marginTop: 8,
  },
});
