import {StyleSheet} from 'react-native';
import {Colors, Opacity} from '@configs';

export default StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.black + Opacity[25],
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: Colors.white,
    fontSize: 12,
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 4,
  },
  closeButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
