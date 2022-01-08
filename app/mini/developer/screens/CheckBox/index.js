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
  CheckBox,
} from '@components';
import {Images, Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

const SHAPE = [
  {title: 'circle', value: 'circle'},
  {title: 'rectangle', value: 'rectangle'},
];

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const shapeRef = useRef(null);
  const infoRef = useRef(null);

  const [value, setValue] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState(24);
  const [shape, setShape] = useState('circle');

  const [style, setStyle] = useState(null);

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
    } catch (error) {
      return {};
    }
  }, [style]);

  return (
    <Container>
      <BottomSheetPicker
        ref={shapeRef}
        title="Shape"
        onSelect={item => setShape(item.value)}
        selected={{title: shape, value: shape}}
        data={SHAPE}
      />
      <BottomSheetView ref={infoRef}>
        <View style={Styles.padding8}>
          <Image
            source={Images.checkbox}
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
          <CheckBox
            value={value}
            disabled={disabled}
            size={size}
            shape={shape}
            style={styleObject}
            onPress={() => setValue(!value)}
          />
        </View>
        <SizedBox height={24} />
        <Text typography="h4" weight="bold">
          {t('props')}
        </Text>
        <SizedBox height={16} />
        <InputPicker
          label="shape"
          value={shape}
          placeholder="Props shape"
          onPress={() => shapeRef.current?.present()}
          style={Styles.flex}
        />
        <SizedBox height={4} />
        <TextInput
          value={style}
          size="small"
          label="style"
          placeholder='Example: {"color":"red"}'
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
          <Switch onValueChange={val => setDisabled(val)} value={disabled} />
        </View>
        <SizedBox height={16} />
        <Text typography="h4" weight="bold">
          {t('example')}
        </Text>
        <SizedBox height={4} />
        <View style={Styles.row}>
          <CheckBox value={true} onPress={() => {}} />
          <SizedBox width={16} />
          <CheckBox value={true} onPress={() => {}} shape="rectangle" />
          <SizedBox width={16} />
          <CheckBox value={false} onPress={() => {}} />
          <SizedBox width={16} />
          <CheckBox value={false} onPress={() => {}} shape="rectangle" />
          <SizedBox width={16} />
          <CheckBox value={false} onPress={() => {}} size={36} />
          <SizedBox width={16} />
          <CheckBox
            value={true}
            onPress={() => {}}
            shape="rectangle"
            size={36}
          />
          <SizedBox width={16} />
          <CheckBox
            value={true}
            onPress={() => {}}
            shape="rectangle"
            size={36}
            disabled={true}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
