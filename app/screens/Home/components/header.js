import React from 'react';
import {StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import {View} from 'react-native';
import {Text, Icon, SizedBox, Image} from '@components';
import {Colors, Images, useTheme} from '@configs';
import PropTypes from 'prop-types';

export default function Header(props) {
  const {theme} = useTheme();
  const {
    onScan,
    onSearch,
    onNotification,
    notification,
    maximumCount,
    onProfile,
    avatar,
  } = props;
  return (
    <View style={styles.headerRow}>
      <TouchableOpacity style={styles.headerIcon} onPress={onScan}>
        <Icon color={Colors.white} name="qrcode-scan" size={16} />
      </TouchableOpacity>
      <SizedBox width={12} />
      <Pressable style={styles.searchInput} onPress={onSearch}>
        <Icon
          name="magnify"
          size={18}
          color={Colors.white}
          style={styles.searchIcon}
        />
        <Text typography="subtitle" color="white">
          Tìm bất kể một cái gì đó?
        </Text>
      </Pressable>
      <SizedBox width={12} />
      <TouchableOpacity style={styles.headerIcon} onPress={onNotification}>
        <Icon color={Colors.white} name="bell-outline" size={18} />
        {notification > 0 && (
          <View
            style={[
              styles.notificationBadge,
              {
                backgroundColor: theme.colors.error,
              },
            ]}>
            <Text
              typography={notification > 9 ? 'overline' : 'caption'}
              color="white"
              weight="bold">
              {notification > maximumCount ? maximumCount : notification}
              {notification > maximumCount && '+'}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <SizedBox width={12} />
      <TouchableOpacity onPress={onProfile}>
        <Image source={avatar} style={styles.headerIcon} />
      </TouchableOpacity>
    </View>
  );
}

Header.propTypes = {
  onScan: PropTypes.func,
  onSearch: PropTypes.func,
  onNotification: PropTypes.func,
  onProfile: PropTypes.func,
  notification: PropTypes.number,
  maximumCount: PropTypes.number,
  avatar: PropTypes.any,
};

Header.defaultProps = {
  onScan: () => {},
  onSearch: value => {},
  onNotification: () => {},
  onProfile: () => {},
  notification: 0,
  maximumCount: 99,
  avatar: Images.avatar1,
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.black + '40',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 4,
  },
  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black + '40',
  },
  notificationBadge: {
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 4,
    top: -4,
    right: -4,
  },
});
