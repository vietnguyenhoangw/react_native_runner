import {Images} from '@configs';
import {Animated} from 'react-native';

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

export function validPassword(value, match) {
  if (!value) {
    return 'Vui lòng nhập mật khẩu';
  }
  if (value.length < 6) {
    return 'Vui lòng nhập mật khẩu gồm ít nhất 6 số';
  }
  if (match && match !== value) {
    return 'Mật khẩu không trùng khớp';
  }
  const isnum = /^\d+$/.test(value);
  if (!isnum) {
    return 'Vui lòng nhập mật khẩu số';
  }
}

export function validName(value) {
  if (!value) {
    return 'Vui lòng nhập tên';
  }
  const name = /^[a-zA-Z-\s]+$/.test(value);
  if (!name) {
    return 'Định dạng tên chưa chính xác';
  }
}

export function validEmail(value) {
  if (!value) {
    return 'Vui lòng nhập email';
  }
  const email = /\S+@\S+\.\S+/.test(value);
  if (!email) {
    return 'Định dạng email chưa chính xác';
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
        icon: Images.vi,
      };
    case 'ar':
      return {
        value: 'ar',
        title: 'Arabic',
        icon: Images.ar,
      };

    case 'da':
      return {
        value: 'da',
        title: 'Danish',
        icon: Images.da,
      };

    case 'de':
      return {
        value: 'de',
        title: 'German',
        icon: Images.de,
      };

    case 'el':
      return {
        value: 'el',
        title: 'Greek',
        icon: Images.el,
      };

    case 'fr':
      return {
        value: 'fr',
        title: 'French',
        icon: Images.fr,
      };

    case 'he':
      return {
        value: 'he',
        title: 'Hebrew',
        icon: Images.he,
      };

    case 'id':
      return {
        value: 'id',
        title: 'Indonesian',
        icon: Images.id,
      };

    case 'ja':
      return {
        value: 'ja',
        title: 'Japanese',
        icon: Images.ja,
      };

    case 'ko':
      return {
        value: 'ko',
        title: 'Korean',
        icon: Images.ko,
      };

    case 'lo':
      return {
        value: 'lo',
        title: 'Lao',
        icon: Images.lo,
      };

    case 'nl':
      return {
        value: 'nl',
        title: 'Dutch',
        icon: Images.nl,
      };

    case 'zh':
      return {
        value: 'zh',
        title: 'Chinese',
        icon: Images.zh,
      };

    case 'fa':
      return {
        value: 'fa',
        title: 'Persian',
        icon: Images.fa,
      };

    case 'km':
      return {
        value: 'km',
        title: 'Cambodian',
        icon: Images.km,
      };

    default:
    case 'en':
      return {
        value: 'en',
        title: 'English',
        icon: Images.en,
      };
  }
}
