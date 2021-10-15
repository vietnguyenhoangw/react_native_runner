import {StyleSheet} from 'react-native';
import {Colors} from '@configs';

export default StyleSheet.create({
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
    paddingHorizontal: 2,
    top: -4,
    right: -4,
  },
});
