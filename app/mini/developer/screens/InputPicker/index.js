import React, {useLayoutEffect, useState, useMemo, useRef} from 'react';
import {View, ScrollView, Switch} from 'react-native';
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

const INPUT = [
  {title: 'option 1', value: 'option 1'},
  {title: 'option 2', value: 'option 2'},
  {title: 'option 3', value: 'option 3'},
  {title: 'option 4', value: 'option 4'},
];

const SIZE = [
  {title: 'large', value: 'large'},
  {title: 'small', value: 'small'},
];

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();

  const inputRef = useRef();
  const sizeRef = useRef();
  const infoRef = useRef();

  const [value, setValue] = useState();
  const [size, setSize] = useState('large');
  const [label, setLabel] = useState('Label');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [error, setError] = useState();
  const [info, setInfo] = useState(true);
  const [style, setStyle] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={Styles.row}>
            <IconButton onPress={() => infoRef.current?.present()}>
              <Icon name="information-outline" />
            </IconButton>
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
        ref={inputRef}
        title="Select Option"
        onSelect={item => setValue(item.value)}
        selected={{title: value, value: value}}
        data={INPUT}
      />
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
            source={Images.inputpicker}
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
          <InputPicker
            size={size}
            value={value}
            label={label}
            error={error}
            placeholder={placeholder}
            info={info}
            onPressInfo={() => infoRef.current?.present()}
            onPress={() => inputRef.current?.present()}
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
          {t('example')}
        </Text>
        <SizedBox height={16} />
        <InputPicker
          label="Label"
          placeholder="Placeholder"
          info={true}
          onPress={() => {}}
          style={Styles.flex}
        />
        <InputPicker
          size="large"
          label="Label"
          placeholder="Placeholder"
          info={true}
          onPress={() => {}}
          style={Styles.flex}
        />
      </ScrollView>
    </Container>
  );
}
