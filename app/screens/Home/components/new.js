import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Text, Icon, Button, Image} from '@components';
import {Opacity, useTheme, Images} from '@configs';
import PropTypes from 'prop-types';

export default function New(props) {
  const {theme} = useTheme();
  const {data} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.titleRow, {borderColor: theme.colors.border}]}>
        <Text typography="h4" weight="bold">
          Có gì mới hôm nay
        </Text>
        <Button
          type="secondary"
          leading={<Icon name="grid" size={16} />}
          full={false}
          size="small">
          Tất cả
        </Button>
      </View>
      <View style={styles.list}>
        {data.map(item => (
          <TouchableOpacity
            key={item.service_id}
            onPress={() => {}}
            style={styles.item}>
            <Image source={Images.banner} style={styles.image} />
            <View style={styles.itemContent}>
              <Text typography="subtitle" type="secondary">
                Đặt xe
              </Text>
              <Text typography="title" type="secondary">
                Đặt xe
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

New.propTypes = {
  data: PropTypes.array,
};

New.defaultProps = {
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
  container: {
    marginTop: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  image: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  itemContent: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
