import {Animated} from 'react-native';
import {useEffect, useRef} from 'react';
const {multiply} = Animated;

export function forVerticalIOS({current, inverted, layouts: {screen}}) {
  const translateY = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.height, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  return {
    cardStyle: {
      transform: [{translateY}],
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: current.progress.interpolate({
        inputRange: [0, 0.5, 0.99, 1],
        outputRange: [0, 0.01, 0.01, 1],
      }),
    },
  };
}

export function validPhone(value) {
  if (!value) {
    return 'Vui lòng nhập số điện thoại';
  }
  if (value.length < 10) {
    return 'Số điện thoạị chưa chính xác';
  }
  const isnum = /^\d+$/.test(value);
  if (!isnum) {
    return 'Số điện thoạị chưa chính xác';
  }
}

export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function getNational(code) {
  switch (code) {
    case 'vi':
      return {
        value: 'vi',
        title: 'Việt Nam',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/vn.png',
      };
    case 'ar':
      return {
        value: 'ar',
        title: 'Arabic',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/sa.png',
      };

    case 'da':
      return {
        value: 'da',
        title: 'Danish',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/dk.png',
      };

    case 'de':
      return {
        value: 'de',
        title: 'German',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/de.png',
      };

    case 'el':
      return {
        value: 'el',
        title: 'Greek',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/gr.png',
      };

    case 'fr':
      return {
        value: 'fr',
        title: 'French',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/fr.png',
      };

    case 'he':
      return {
        value: 'he',
        title: 'Hebrew',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/il.png',
      };

    case 'id':
      return {
        value: 'id',
        title: 'Indonesian',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/id.png',
      };

    case 'ja':
      return {
        value: 'ja',
        title: 'Japanese',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/jp.png',
      };

    case 'ko':
      return {
        value: 'ko',
        title: 'Korean',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/kr.png',
      };

    case 'lo':
      return {
        value: 'lo',
        title: 'Lao',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/la.png',
      };

    case 'nl':
      return {
        value: 'nl',
        title: 'Dutch',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/nl.png',
      };

    case 'zh':
      return {
        value: 'zh',
        title: 'Chinese',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/cn.png',
      };

    case 'fa':
      return {
        value: 'fa',
        title: 'Persian',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/ir.png',
      };

    case 'km':
      return {
        value: 'km',
        title: 'Cambodian',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/kh.png',
      };

    default:
    case 'en':
      return {
        value: 'en',
        title: 'English',
        icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/us.png',
      };
  }
}
