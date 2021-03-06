import React, {useState, memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, Icon} from '@components';
import {Colors, Styles, useTheme} from '@configs';
import {getCurrency} from '@utils';
import PropTypes from 'prop-types';

function Action(props) {
  const {t, i18n} = useTranslation();
  const {theme} = useTheme();
  const [showBalance, setShowBalance] = useState(true);

  const {balance, onCashIn, onCashOut, onQRCode, onScan, onAccount, minHeight} =
    props;

  const exportBalance = () => {
    if (showBalance) {
      return getCurrency(balance);
    }
    return '*****************';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}>
      <View style={styles.action}>
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
      <View style={styles.line}>
        <View style={styles.lineContent}>
          {Array.from(Array(150).keys()).map((item, index) => {
            return (
              <View
                key={item}
                style={[styles.dot, {backgroundColor: theme.colors.text}]}
              />
            );
          })}
        </View>
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
            style={!showBalance ? styles.styleTextSecure : {}}>
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
  onCashIn: () => {},
  onCashOut: () => {},
  onQRCode: () => {},
  onScan: () => {},
  onAccount: () => {},
  minHeight: 100,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    flex: 1,
  },
  item: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  line: {
    paddingHorizontal: 12,
    height: 1,
  },
  lineContent: {flex: 1, flexDirection: 'row', overflow: 'hidden'},
  dot: {
    width: 2,
    marginHorizontal: 1.5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
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
  styleTextSecure: {height: 14},
});

export default memo(Action);
