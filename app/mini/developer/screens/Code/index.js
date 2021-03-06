import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {Styles, useTheme} from '@configs';

export default function Code({route}) {
  const {theme} = useTheme();

  return (
    <View style={[Styles.flex, {backgroundColor: theme.colors.background}]}>
      <WebView
        style={Styles.flex}
        originWhitelist={['*']}
        startInLoadingState={true}
        source={{
          uri: route.params?.uri ?? 'google.com',
        }}
        renderLoading={() => (
          <View style={[Styles.flexCenter, StyleSheet.absoluteFillObject]}>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </View>
        )}
      />
    </View>
  );
}
