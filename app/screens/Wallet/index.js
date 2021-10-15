import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, PopupAlert} from '@components';
import {useTheme, Styles} from '@configs';
import Navigator from '@navigator';
import {authActions} from '@actions';
import styles from './styles';

export default function Wallet({navigation}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();

  const onLogout = async () => {
    Navigator.showPopup({
      component: (
        <PopupAlert
          title="Thoát tài khoản"
          message="Bạn có muốn kết thúc phiên đăng nhập này không?"
          primaryButton={{
            title: 'Đồng ý',
            onPress: () => {
              Navigator.showLoading(true);
              dispatch(
                authActions.onLogout({}, () => {
                  Navigator.showLoading(false);
                }),
              );
            },
          }}
          secondaryButton={{
            title: 'Đóng',
          }}
        />
      ),
    });
  };

  return (
    <View style={[Styles.flexCenter, Styles.padding16]}>
      <Button onPress={onLogout}>SignOut</Button>
    </View>
  );
}
