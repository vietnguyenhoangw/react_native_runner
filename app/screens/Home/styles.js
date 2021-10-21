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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
});
