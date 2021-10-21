import React, {useState, memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, Icon} from '@components';
import {Colors, Styles, useTheme} from '@configs';
import PropTypes from 'prop-types';

function Action(props) {
  const {t, i18n} = useTranslation();
  const {theme} = useTheme();
  const [showBalance, setShowBalance] = useState(true);

  const {
    balance,
    currency,
    onCashIn,
    onCashOut,
    onQRCode,
    onScan,
    onAccount,
    minHeight,
  } = props;

  const exportBalance = () => {
    if (showBalance) {
      return new Intl.NumberFormat(i18n.language, {
        style: 'currency',
        currency,
      }).format(balance);
    }
    return '*****************';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      <View style={[styles.action, {height: minHeight}]}>
        <View style={Styles.flexCenter}>
          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
            onPress={onCashIn}>
            <Icon name="cash-plus" color={Colors.white} size={22} />
          </TouchableOpacity>
          <Text typography="subtitle" weight="bold">
            Nạp tiền
          </Text>
        </View>
        <View style={Styles.flexCenter}>
          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
            onPress={onCashOut}>
            <Icon name="cash-multiple" color={Colors.white} size={22} />
          </TouchableOpacity>
          <Text typography="subtitle" weight="bold">
            Rút tiền
          </Text>
        </View>
        <View style={Styles.flexCenter}>
          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
            onPress={onScan}>
            <Icon name="qrcode-scan" color={Colors.white} size={20} />
          </TouchableOpacity>
          <Text typography="subtitle" weight="bold">
            Quét mã
          </Text>
        </View>
        <View style={Styles.flexCenter}>
          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
            onPress={onQRCode}>
            <Icon name="qrcode" color={Colors.white} size={22} />
          </TouchableOpacity>
          <Text typography="subtitle" weight="bold">
            Mã QR
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
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowBalance(!showBalance)}>
            <Icon name="eye-outline" />
          </TouchableOpacity>
          <Text
            typography="h4"
            weight="bold"
            style={!showBalance ? {height: 14} : {}}>
            {exportBalance()}
          </Text>
        </View>
        <TouchableOpacity
          style={[Styles.row, styles.accountTextButtom]}
          onPress={onAccount}>
          <Text typography="subtitle">Thông tin tài khoản</Text>
          <Icon name="chevron-right" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(Action);

Action.propTypes = {
  balance: PropTypes.number,
  currency: PropTypes.string,
  onCashIn: PropTypes.func,
  onCashOut: PropTypes.func,
  onQRCode: PropTypes.func,
  onScan: PropTypes.func,
  onAccount: PropTypes.func,
  minHeight: PropTypes.number,
};

Action.defaultProps = {
  balance: 125200000,
  currency: 'VND',
  onCashIn: () => {},
  onCashOut: () => {},
  onQRCode: () => {},
  onScan: () => {},
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
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 2,
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
