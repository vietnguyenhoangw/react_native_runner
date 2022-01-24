import React, {useLayoutEffect, useState, useMemo, useRef} from 'react';
import {View, ScrollView, Linking} from 'react-native';
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

const TYPE = [
  {title: 'primary', value: 'primary'},
  {title: 'secondary', value: 'secondary'},
  {title: 'outline', value: 'outline'},
  {title: 'disable', value: 'disable'},
];

const SIZE = [
  {title: 'large', value: 'large'},
  {title: 'small', value: 'small'},
];

const SHAPE = [
  {title: 'circle', value: 'circle'},
  {title: 'rectangle', value: 'rectangle'},
];

const REFERENCE = 'https://github.com/oblador/react-native-vector-icons';

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const typeRef = useRef();
  const sizeRef = useRef();
  const shapeRef = useRef();
  const infoRef = useRef();

  const [type, setType] = useState('secondary');
  const [size, setSize] = useState('large');
  const [shape, setShape] = useState('circle');
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
    } catch (error) {
      return {};
    }
  }, [style]);

  return (
    <Container>
      <BottomSheetPicker
        ref={typeRef}
        title="Typography"
        onSelect={item => setType(item.value)}
        selected={{title: type, value: type}}
        data={TYPE}
      />
      <BottomSheetPicker
        ref={sizeRef}
        title="Size"
        onSelect={item => setSize(item.value)}
        selected={{title: size, value: size}}
        data={SIZE}
      />
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
            source={Images.text}
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
          <IconButton
            onPress={() => {}}
            type={type}
            size={size}
            shape={shape}
            style={styleObject}>
            <Icon name="file-code-outline" />
          </IconButton>
        </View>
        <SizedBox height={24} />
        <Text typography="h4" weight="bold">
          {t('props')}
        </Text>
        <SizedBox height={16} />
        <InputPicker
          label="type"
          value={type}
          placeholder="Props type"
          onPress={() => typeRef.current?.present()}
          style={Styles.flex}
        />
        <SizedBox height={4} />
        <View style={Styles.row}>
          <InputPicker
            label="size"
            value={size}
            placeholder="Props size"
            onPress={() => sizeRef.current?.present()}
            style={Styles.flex}
          />
          <SizedBox width={16} />
          <InputPicker
            label="shape"
            value={shape}
            placeholder="Props shape"
            onPress={() => shapeRef.current?.present()}
            style={Styles.flex}
          />
        </View>
        <SizedBox height={4} />
        <TextInput
          value={style}
          size="small"
          label="style"
          placeholder='Example: {"color":"red"}'
          onChangeText={value => {
            const text = value.replace(/[“”]/g, '"');
            setStyle(text);
          }}
        />
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
            } catch (error) {}
          }}>
          {REFERENCE}
        </Text>
        <SizedBox height={16} />
        <Text typography="h4" weight="bold">
          {t('example')}
        </Text>
        <SizedBox height={8} />
        <View style={Styles.row}>
          <IconButton type="primary" onPress={() => {}}>
            <Icon name="file-code-outline" color="white" />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="secondary" onPress={() => {}}>
            <Icon name="file-code-outline" />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="outline" onPress={() => {}}>
            <Icon name="file-code-outline" color={theme.colors.primary} />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="disable" onPress={() => {}}>
            <Icon name="file-code-outline" />
          </IconButton>
        </View>
        <SizedBox height={8} />
        <View style={Styles.row}>
          <IconButton type="primary" shape="rectangle" onPress={() => {}}>
            <Icon name="file-code-outline" color="white" />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="secondary" shape="rectangle" onPress={() => {}}>
            <Icon name="file-code-outline" />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="outline" shape="rectangle" onPress={() => {}}>
            <Icon name="file-code-outline" color={theme.colors.primary} />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="disable" shape="rectangle" onPress={() => {}}>
            <Icon name="file-code-outline" />
          </IconButton>
        </View>
        <SizedBox height={8} />
        <View style={Styles.row}>
          <IconButton type="primary" size="small" onPress={() => {}}>
            <Icon name="file-code-outline" color="white" />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="secondary" size="small" onPress={() => {}}>
            <Icon name="file-code-outline" />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="outline" size="small" onPress={() => {}}>
            <Icon name="file-code-outline" color={theme.colors.primary} />
          </IconButton>
          <SizedBox width={8} />
          <IconButton type="disable" size="small" onPress={() => {}}>
            <Icon name="file-code-outline" />
          </IconButton>
        </View>
      </ScrollView>
    </Container>
  );
}
