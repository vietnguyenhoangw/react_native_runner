import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Text, Icon, SizedBox, Image} from '@components';
import {Colors, Images, Styles, useTheme} from '@configs';
import PropTypes from 'prop-types';

export default function Action(props) {
  const {colors} = useTheme();
  const {onCashIn, onCashOut, onQRCode, onTransfer, onAccount, minHeight} =
    props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
        },
      ]}>
      <View style={[styles.action, {height: minHeight}]}>
        <View style={Styles.flexCenter}>
          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.primary,
              },
            ]}>
            <Icon name="cash-plus" size={24} color={Colors.white} />
          </View>
          <Text typography="subtitle" weight="bold">
            Nạp tiền
          </Text>
        </View>
        <View style={Styles.flexCenter}>
          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.primary,
              },
            ]}>
            <Icon name="cash-multiple" size={24} color={Colors.white} />
          </View>
          <Text typography="subtitle" weight="bold">
            Rút tiền
          </Text>
        </View>
        <View style={Styles.flexCenter}>
          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.primary,
              },
            ]}>
            <Icon name="qrcode" size={24} color={Colors.white} />
          </View>
          <Text typography="subtitle" weight="bold">
            Mã QR
          </Text>
        </View>
        <View style={Styles.flexCenter}>
          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.primary,
              },
            ]}>
            <Icon name="account-cash-outline" size={24} color={Colors.white} />
          </View>
          <Text typography="subtitle" weight="bold">
            Chuyển tiền
          </Text>
        </View>
      </View>
      <View style={Styles.paddingHorizontal16}>
        <Text
          typography="overline"
          numberOfLines={1}
          ellipsizeMode="clip"
          type="secondary">
          {Array(100).join('- ')}
        </Text>
      </View>
      <View style={styles.infoRow}>
        <View style={Styles.row}>
          <TouchableOpacity style={styles.eyeButton}>
            <Icon name="eye-outline" />
          </TouchableOpacity>
          <Text typography="h4" weight="bold">
            125.000.000đ
          </Text>
        </View>
        <View style={[Styles.row, styles.accountTextButtom]}>
          <Text typography="subtitle">Thông tin tài khoản</Text>
          <Icon name="chevron-right" size={16} />
        </View>
      </View>
    </View>
  );
}

Action.propTypes = {
  onCashIn: PropTypes.func,
  onCashOut: PropTypes.func,
  onQRCode: PropTypes.func,
  onTransfer: PropTypes.func,
  onAccount: PropTypes.func,
  minHeight: PropTypes.number,
};

Action.defaultProps = {
  onCashIn: () => {},
  onCashOut: () => {},
  onQRCode: () => {},
  onTransfer: () => {},
  onAccount: () => {},
  minHeight: 100,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 11,
    overflow: 'hidden',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  item: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 4,
  },
  eyeButton: {
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 4,
  },
  accountTextButtom: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
