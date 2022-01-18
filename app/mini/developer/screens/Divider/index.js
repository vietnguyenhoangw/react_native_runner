import React, {useLayoutEffect, useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Text,
  SizedBox,
  Container,
  Icon,
  Divider,
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

  const [thickness, setThickness] = useState(1);
  const [color, setColor] = useState();

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

  return (
    <Container>
      <BottomSheetView ref={infoRef}>
        <View style={Styles.padding8}>
          <Image
            source={Images.divider}
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
          <Divider thickness={thickness} color={color} />
        </View>
        <SizedBox height={24} />
        <Text typography="h4" weight="bold">
          {t('props')}
        </Text>
        <SizedBox height={16} />
        <TextInput
          value={`${thickness}`}
          size="small"
          label="thickness"
          placeholder="Example: 1"
          keyboardType="numeric"
          onChangeText={value => {
            const number = parseInt(value, 10);
            if (number) {
              setThickness(number);
            }
          }}
        />
        <SizedBox height={4} />
        <TextInput
          value={color}
          size="small"
          label="color"
          placeholder="Example: red"
          autoCapitalize="none"
          onChangeText={value => {
            setColor(value);
          }}
        />
        <Text typography="h4" weight="bold">
          {t('example')}
        </Text>
        <SizedBox height={16} />
        <Divider thickness={1} />
        <SizedBox height={8} />
        <Divider thickness={2} />
        <SizedBox height={8} />
        <Divider thickness={1} color={theme.colors.text} />
        <SizedBox height={8} />
        <Divider thickness={2} color={theme.colors.text} />
        <SizedBox height={8} />
        <Divider thickness={1} color={theme.colors.primary} />
        <SizedBox height={8} />
        <Divider thickness={2} color={theme.colors.primary} />
        <SizedBox height={8} />
        <Divider thickness={1} color={theme.colors.secondary} />
        <SizedBox height={8} />
        <Divider thickness={2} color={theme.colors.secondary} />
      </ScrollView>
    </Container>
  );
}
