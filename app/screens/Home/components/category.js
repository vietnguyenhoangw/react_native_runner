import React from 'react';
import {StyleSheet, TouchableOpacity, Pressable, FlatList} from 'react-native';
import {View} from 'react-native';
import {Text, Icon, SizedBox, Image} from '@components';
import {Colors, Images, Opacity, useTheme} from '@configs';
import PropTypes from 'prop-types';

export default function Category(props) {
  const {theme} = useTheme();
  const {data} = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.map(item => (
          <TouchableOpacity
            key={item.id}
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
              typography="subtitle"
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
      id: '1',
      icon: 'clipboard-text-outline',
      title: 'Thanh toán hóa đơn',
    },
    {
      id: '2',
      icon: 'cellphone-wireless',
      title: 'Dịch vụ viễn thông',
    },
    {
      id: '3',
      icon: 'shield-sun-outline',
      title: 'Tài chính\nBảo hiểm',
    },
    {
      id: '4',
      icon: 'bag-personal-outline',
      title: 'Nạp tiền đối tác',
    },
    {
      id: '5',
      icon: 'airplane-takeoff',
      title: 'Du lịch',
    },
    {
      id: '6',
      icon: 'link-variant-plus',
      title: 'Dịch vụ liên kết',
    },
    {
      id: '7',
      icon: 'movie-filter-outline',
      title: 'Giải trí',
    },
    {
      id: '8',
      icon: 'shopping-outline',
      title: 'Thương mai điện tử',
    },
    {
      id: '9',
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
