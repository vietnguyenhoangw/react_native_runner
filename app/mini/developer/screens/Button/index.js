import React, {useLayoutEffect, useState, useMemo, useRef} from 'react';
import {View, ScrollView, Linking, Switch} from 'react-native';
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
  Button,
} from '@components';
import {Images, Styles, useTheme, Colors} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

const TYPE = [
  {title: 'primary', value: 'primary'},
  {title: 'secondary', value: 'secondary'},
  {title: 'outline', value: 'outline'},
  {title: 'text', value: 'text'},
];

const SIZE = [
  {title: 'large', value: 'large'},
  {title: 'medium', value: 'medium'},
  {title: 'small', value: 'small'},
];

const REFERENCE = 'https://reactnative.dev/docs/touchableopacity#props';

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const typeRef = useRef();
  const sizeRef = useRef();
  const infoRef = useRef();

  const [type, setType] = useState('primary');
  const [size, setSize] = useState('large');
  const [full, setFull] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [children, setChildren] = useState('Title');
  const [style, setStyle] = useState();
  const [textStyle, setTextStyle] = useState();

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

  const textStyleObject = useMemo(() => {
    try {
      return JSON.parse(textStyle);
    } catch (e) {
      return {};
    }
  }, [textStyle]);

  return (
    <Container>
      <BottomSheetPicker
        ref={typeRef}
        title="Type"
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
      <BottomSheetView ref={infoRef}>
        <View style={Styles.padding8}>
          <Image
            source={Images.button}
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
        <SizedBox height={16} />
        <View style={Styles.rowCenter}>
          <Button
            type={type}
            size={size}
            full={full}
            disabled={disabled}
            loading={loading}
            style={styleObject}
            textStyle={textStyleObject}>
            {children}
          </Button>
        </View>
        <SizedBox height={16} />
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
          value={children}
          label="children"
          placeholder="Input children"
          onChangeText={setChildren}
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
        <SizedBox height={4} />
        <TextInput
          value={textStyle}
          size="small"
          label="textStyle"
          placeholder='Example: {"color":"blue"}'
          onChangeText={val => {
            const text = val.replace(/[“”]/g, '"');
            setTextStyle(text);
          }}
        />
        <View style={Styles.rowSpace}>
          <Text typography="title" weight="bold">
            full
          </Text>
          <SizedBox width={24} />
          <Switch onValueChange={val => setFull(val)} value={full} />
        </View>
        <SizedBox height={8} />
        <View style={Styles.rowSpace}>
          <Text typography="title" weight="bold">
            disabled
          </Text>
          <SizedBox width={24} />
          <Switch onValueChange={val => setDisabled(val)} value={disabled} />
        </View>
        <SizedBox height={8} />
        <View style={Styles.rowSpace}>
          <Text typography="title" weight="bold">
            loading
          </Text>
          <SizedBox width={24} />
          <Switch onValueChange={val => setLoading(val)} value={loading} />
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
        <SizedBox height={8} />
        <Button
          type="primary"
          loading={true}
          leading={<Icon color={Colors.white} name="home-outline" />}>
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="primary">Title</Button>
        <SizedBox height={4} />
        <Button type="secondary">Title</Button>
        <SizedBox height={4} />
        <Button type="outline">Title</Button>
        <SizedBox height={4} />
        <Button type="text">Title</Button>
        <SizedBox height={4} />
        <Button type="primary" size="medium">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="secondary" size="medium">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="outline" size="medium">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="text" size="medium">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="primary" size="small">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="secondary" size="small">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="outline" size="small">
          Title
        </Button>
        <SizedBox height={4} />
        <Button type="text" size="small">
          Title
        </Button>

        <SizedBox height={4} />

        <View style={Styles.rowCenter}>
          <Button type="primary" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="secondary" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="outline" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="text" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="primary" size="medium" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="secondary" size="medium" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="outline" size="medium" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="text" size="medium" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="primary" size="small" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="secondary" size="small" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="outline" size="small" full={false}>
            Title
          </Button>
        </View>
        <SizedBox height={4} />
        <View style={Styles.rowCenter}>
          <Button type="text" size="small" full={false}>
            Title
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
