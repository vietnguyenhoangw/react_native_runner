import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bannerContainer: {
    position: 'absolute',
    width: '100%',
  },
  actionContainer: {
    flex: 1,
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
  },
});
