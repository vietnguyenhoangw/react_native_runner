import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Text, Icon, Button, Image} from '@components';
import {Opacity, useTheme, Images} from '@configs';
import PropTypes from 'prop-types';

export default function Recommend(props) {
  const {theme} = useTheme();
  const {data} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.titleRow, {borderColor: theme.colors.border}]}>
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
            onPress={() => {}}
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
    </View>
  );
}

Recommend.propTypes = {
  data: PropTypes.array,
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
};

const styles = StyleSheet.create({
  container: {},
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 8,
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
});
