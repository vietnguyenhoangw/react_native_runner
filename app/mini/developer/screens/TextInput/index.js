import React, {useLayoutEffect, useState, useMemo, useRef} from 'react';
import {
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  Text,
  SizedBox,
  Container,
  Icon,
  InputPicker,
  IconButton,
  TextInput,
  BottomSheetPicker,
  BottomSheetView,
  Image,
} from '@components';
import {Images, Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

const SIZE = [
  {title: 'large', value: 'large'},
  {title: 'small', value: 'small'},
];

const REFERENCE = 'https://reactnative.dev/docs/textinput#props';

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const sizeRef = useRef(null);
  const infoRef = useRef(null);

  const [value, setValue] = useState('');
  const [size, setSize] = useState('large');
  const [label, setLabel] = useState('Label');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(true);
  const [style, setStyle] = useState(null);

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={Styles.row}>
            <IconButton onPress={() => infoRef.current?.present()}>
              <Icon name="information-outline" />
            </IconButton>
            <SizedBox width={8} />
            <IconButton
              onPress={() => {
                navigation.push('Code', route.params);
              }}>
              <Icon name="file-code-outline" />
            </IconButton>
          </View>
        );
      },
    });
  }, [navigation, route.params]);

  const styleObject = useMemo(() => {
    try {
      return JSON.parse(style);
    } catch (e) {
      return {};
    }
  }, [style]);

  return (
    <Container>
      <BottomSheetPicker
        ref={sizeRef}
        title="Size"
        onSelect={item => setSize(item.value)}
        selected={{title: size, value: size}}
        data={SIZE}
      />
      <BottomSheetView ref={infoRef}>
        <View style={Styles.padding8}>
          <Image
            source={Images.textinput}
            resizeMode="contain"
            style={styles.example}
          />
        </View>
      </BottomSheetView>
      <ScrollView
        style={[Styles.flex, {backgroundColor: theme.colors.card}]}
        contentContainerStyle={Styles.padding16}>
        <Text typography="h4" weight="bold">
          {t('interactive_demo')}
        </Text>
        <SizedBox height={24} />
        <View style={Styles.rowCenter}>
          <TextInput
            size={size}
            value={value}
            label={label}
            error={error}
            placeholder={placeholder}
            onChangeText={setValue}
            info={info}
            onPressInfo={() => infoRef.current?.present()}
            style={styleObject}
          />
        </View>
        <Text typography="h4" weight="bold">
          {t('props')}
        </Text>
        <SizedBox height={16} />
        <InputPicker
          label="size"
          value={size}
          placeholder="Props size"
          onPress={() => sizeRef.current?.present()}
          style={Styles.flex}
        />
        <SizedBox height={4} />
        <TextInput
          size="small"
          value={label}
          label="label"
          placeholder="Input label"
          onChangeText={setLabel}
        />
        <SizedBox height={4} />
        <TextInput
          size="small"
          value={placeholder}
          label="placeholder"
          placeholder="Input placeholder"
          onChangeText={setPlaceholder}
        />
        <SizedBox height={4} />
        <TextInput
          size="small"
          value={error}
          label="error"
          placeholder="Input error"
          onChangeText={setError}
        />
        <SizedBox height={4} />
        <TextInput
          value={style}
          size="small"
          label="style"
          placeholder='Example: {"backgroundColor":"red"}'
          onChangeText={val => {
            const text = val.replace(/[“”]/g, '"');
            setStyle(text);
          }}
        />
        <View style={Styles.rowSpace}>
          <Text typography="title" weight="bold">
            info
          </Text>
          <SizedBox width={24} />
          <Switch onValueChange={val => setInfo(val)} value={info} />
        </View>
        <SizedBox height={16} />
        <Text typography="h4" weight="bold">
          {t('reference')}
        </Text>
        <SizedBox height={4} />
        <Text
          typography="title"
          color="secondary"
          onPress={() => {
            try {
              Linking.openURL(REFERENCE);
            } catch (e) {}
          }}>
          {REFERENCE}
        </Text>
        <SizedBox height={16} />
        <Text typography="h4" weight="bold">
          {t('example')}
        </Text>
        <SizedBox height={16} />
        <TextInput
          size="small"
          value={password}
          label="Mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          info={true}
          trailing={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
          }
        />
        <SizedBox height={4} />
        <TextInput
          value={password}
          label="Mật khẩu"
          placeholder="Mật khẩu"
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          info={true}
          trailing={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                type="MaterialIcons"
                name={showPassword ? 'favorite' : 'favorite-outline'}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
          }
        />
      </ScrollView>
    </Container>
  );
}
