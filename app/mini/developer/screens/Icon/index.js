import React, {useLayoutEffect, useState, useMemo, useRef} from 'react';
import {View, ScrollView, Linking} from 'react-native';
import {
  Text,
  SizedBox,
  Container,
  Icon,
  IconButton,
  TextInput,
  BottomSheetPicker,
  BottomSheetView,
  Image,
  InputPicker,
} from '@components';
import {Images, Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

const TYPE = [
  {title: 'AntDesign', value: 'AntDesign'},
  {title: 'Entypo', value: 'Entypo'},
  {title: 'EvilIcons', value: 'EvilIcons'},
  {title: 'Feather', value: 'Feather'},
  {title: 'FontAwesome', value: 'FontAwesome'},
  {title: 'FontAwesome5', value: 'FontAwesome5'},
  {title: 'FontAwesome5Pro', value: 'FontAwesome5Pro'},
  {title: 'Fontisto', value: 'Fontisto'},
  {title: 'Foundation', value: 'Foundation'},
  {title: 'Ionicons', value: 'Ionicons'},
  {title: 'MaterialCommunityIcons', value: 'MaterialCommunityIcons'},
  {title: 'MaterialIcons', value: 'MaterialIcons'},
  {title: 'Octicons', value: 'Octicons'},
];

const REFERENCE = 'https://github.com/oblador/react-native-vector-icons';

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const typeRef = useRef(null);
  const infoRef = useRef(null);
  const [name, setName] = useState('shape-outline');
  const [type, setType] = useState('MaterialCommunityIcons');
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(24);
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
        ref={typeRef}
        title="Type"
        onSelect={item => setType(item.value)}
        selected={{title: type, value: type}}
        data={TYPE}
      />
      <BottomSheetView ref={infoRef}>
        <View style={Styles.padding8}>
          <Image
            source={Images.icon}
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
          <Icon
            type={type}
            name={name}
            size={size}
            color={color}
            style={styleObject}
          />
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
        <TextInput
          value={name}
          size="small"
          label="name"
          placeholder="Example: shape-outline"
          onChangeText={setName}
        />
        <SizedBox height={4} />
        <TextInput
          value={color}
          size="small"
          label="color"
          placeholder="Example: red"
          autoCapitalize="none"
          onChangeText={setColor}
        />
        <SizedBox height={4} />
        <TextInput
          value={`${size}`}
          size="small"
          label="size"
          placeholder="Example: 24"
          keyboardType="numeric"
          onChangeText={value => {
            const number = parseInt(value, 10);
            if (number) {
              setSize(number);
            }
          }}
        />
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
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Icon name="chevron-up" />
          <SizedBox width={4} />
          <Icon name="chevron-down" />
          <SizedBox width={4} />
          <Icon name="chevron-left" />
          <SizedBox width={4} />
          <Icon name="chevron-right" />
          <SizedBox width={4} />
          <Icon name="github" />
        </View>
      </ScrollView>
    </Container>
  );
}
