import React, {useLayoutEffect, useState, useMemo, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Text,
  SizedBox,
  Container,
  Icon,
  Carousel,
  IconButton,
  TextInput,
  BottomSheetView,
  Image,
} from '@components';
import {Images, Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const infoRef = useRef(null);
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
      <BottomSheetView ref={infoRef}>
        <View style={Styles.padding8}>
          <Image
            source={Images.carousel}
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
        <View style={[Styles.rowCenter, styles.carousel100]}>
          <Carousel
            data={[
              {
                image: Images.homeBanner1,
                titleAction: 'Xem chi tiết',
              },
              {
                image: Images.homeBanner3,
                titleAction: 'Đặt ngay',
              },
              {
                image: Images.homeBanner5,
                titleAction: 'Xem chi tiết',
              },
            ]}
            onChange={item => {}}
            onPress={item => {}}
            style={styleObject}
          />
        </View>
        <SizedBox height={24} />
        <Text typography="h4" weight="bold">
          {t('props')}
        </Text>
        <SizedBox height={16} />
        <TextInput
          value={style}
          size="small"
          label="style"
          placeholder='Example: {"height": 100}'
          onChangeText={value => {
            const text = value.replace(/[“”]/g, '"');
            setStyle(text);
          }}
        />
        <Text typography="h4" weight="bold">
          {t('example')}
        </Text>
        <SizedBox height={16} />
        <View style={[Styles.rowCenter, styles.carousel100]}>
          <Carousel
            data={[
              {
                image: Images.homeBanner7,
                titleAction: 'Khám phá ngay',
              },
              {
                image: Images.homeBanner2,
                titleAction: 'Xem chi tiết',
              },
              {
                image: Images.homeBanner8,
                titleAction: 'Khám phá ngay',
              },
              {
                image: Images.homeBanner9,
                titleAction: 'Xem chi tiết',
              },
              {
                image: Images.homeBanner10,
                titleAction: 'Khám phá ngay',
              },
            ]}
          />
        </View>
        <SizedBox height={16} />
        <View style={[Styles.rowCenter, styles.carousel80]}>
          <Carousel
            data={[
              {
                image: Images.homeBanner1,
                titleAction: 'Xem chi tiết',
              },
              {
                image: Images.homeBanner3,
                titleAction: 'Đặt ngay',
              },
              {
                image: Images.homeBanner9,
                titleAction: 'Xem chi tiết',
              },
              {
                image: Images.homeBanner10,
                titleAction: 'Khám phá ngay',
              },
            ]}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
