import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Text, Icon} from '@components';
import {Opacity, useTheme} from '@configs';
import PropTypes from 'prop-types';

export default function Category(props) {
  const {theme} = useTheme();
  const {data} = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.map(item => (
          <TouchableOpacity
            key={item.category_id}
            onPress={() => {}}
            style={styles.item}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: theme.colors.primary + Opacity[15]},
              ]}>
              <Icon
                name={item.icon}
                size={22}
                color={theme.colors.primaryLight}
              />
            </View>
            <Text
              typography="caption"
              style={styles.title}
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

Category.propTypes = {
  data: PropTypes.array,
};

Category.defaultProps = {
  data: [
    {
      category_id: 'transfer',
      icon: 'account-cash-outline',
      title: 'Chuyển nhận tiền',
    },
    {
      category_id: 'bill',
      icon: 'clipboard-text-outline',
      title: 'Thanh toán hóa đơn',
    },
    {
      category_id: 'mobile',
      icon: 'cellphone-wireless',
      title: 'Dịch vụ viễn thông',
    },
    {
      category_id: 'financial-insurance',
      icon: 'shield-sun-outline',
      title: 'Tài chính\nBảo hiểm',
    },
    {
      category_id: 'payment-partner',
      icon: 'bag-personal-outline',
      title: 'Nạp tiền đối tác',
    },
    {
      category_id: 'travel',
      icon: 'airplane-takeoff',
      title: 'Du lịch',
    },
    {
      category_id: 'link-partner',
      icon: 'link-variant-plus',
      title: 'Dịch vụ liên kết',
    },
    {
      category_id: 'entertainment',
      icon: 'movie-filter-outline',
      title: 'Giải trí',
    },
    {
      category_id: 'ecommerce',
      icon: 'shopping-outline',
      title: 'Thương mai điện tử',
    },
    {
      category_id: 'other',
      icon: 'view-grid-plus-outline',
      title: 'Dịch vụ khác',
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
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
  title: {textAlign: 'center'},
});
