import React, {useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {Styles, useTheme} from '@configs';

export default function Code({route}) {
  const {theme} = useTheme();
  const [loading, setLoading] = useState(true);

  const renderLoading = () => {
    if (loading) {
      return (
        <View style={[Styles.flexCenter, StyleSheet.absoluteFillObject]}>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </View>
      );
    }
  };
  return (
    <View style={[Styles.flex, {backgroundColor: theme.colors.background}]}>
      <WebView
        style={Styles.flex}
        originWhitelist={['*']}
        source={{
          uri: route.params?.uri ?? 'google.com',
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
      />
      {renderLoading()}
    </View>
  );
}
