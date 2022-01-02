import React, {useLayoutEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Text,
  SizedBox,
  Container,
  Icon,
  InputPicker,
  IconButton,
} from '@components';
import {Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default function Index({navigation, route}) {
  const {theme} = useTheme();
  const {t} = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: props => {
        return (
          <IconButton
            {...props}
            onPress={() => {
              navigation.push('Code', route.params);
            }}>
            <Icon name="file-code-outline" />
          </IconButton>
        );
      },
    });
  }, [navigation, route.params]);

  return (
    <Container>
      <ScrollView
        style={[Styles.flex, {backgroundColor: theme.colors.card}]}
        contentContainerStyle={Styles.padding16}>
        <Text typography="h4" weight="bold">
          Interactive demo
        </Text>
        <SizedBox height={16} />
        <View style={Styles.rowCenter}>
          <Text typography="title">Hello World</Text>
        </View>
        <SizedBox height={16} />
        <InputPicker label="typography" value="title" />
        <Text typography="h4" weight="bold">
          Example
        </Text>
        <SizedBox height={16} />
        <Text typography="h1" weight="thin">
          H1
        </Text>
        <Text typography="h1" weight="ultraLight">
          H1
        </Text>
        <Text typography="h1" weight="light">
          H1
        </Text>
        <Text typography="h1" weight="regular">
          H1
        </Text>
        <Text typography="h1" weight="medium">
          H1
        </Text>
        <Text typography="h1" weight="semibold">
          H1
        </Text>
        <Text typography="h1" weight="bold">
          H1
        </Text>
        <Text typography="h1" weight="heavy">
          H1
        </Text>
        <Text typography="h1" weight="black">
          H1
        </Text>
        <SizedBox height={8} />
        <Text typography="h2" weight="thin">
          H2
        </Text>
        <Text typography="h2" weight="ultraLight">
          H2
        </Text>
        <Text typography="h2" weight="light">
          H2
        </Text>
        <Text typography="h2" weight="regular">
          H2
        </Text>
        <Text typography="h2" weight="medium">
          H2
        </Text>
        <Text typography="h2" weight="semibold">
          H2
        </Text>
        <Text typography="h2" weight="bold">
          H2
        </Text>
        <Text typography="h2" weight="heavy">
          H2
        </Text>
        <Text typography="h2" weight="black">
          H2
        </Text>
        <SizedBox height={8} />
        <Text typography="h3" weight="thin">
          H3
        </Text>
        <Text typography="h3" weight="ultraLight">
          H3
        </Text>
        <Text typography="h3" weight="light">
          H3
        </Text>
        <Text typography="h3" weight="regular">
          H3
        </Text>
        <Text typography="h3" weight="medium">
          H3
        </Text>
        <Text typography="h3" weight="semibold">
          H3
        </Text>
        <Text typography="h3" weight="bold">
          H3
        </Text>
        <Text typography="h3" weight="heavy">
          H3
        </Text>
        <Text typography="h3" weight="black">
          H3
        </Text>
        <SizedBox height={8} />
        <Text typography="h4" weight="thin">
          H4
        </Text>
        <Text typography="h4" weight="ultraLight">
          H4
        </Text>
        <Text typography="h4" weight="light">
          H4
        </Text>
        <Text typography="h4" weight="regular">
          H4
        </Text>
        <Text typography="h4" weight="medium">
          H4
        </Text>
        <Text typography="h4" weight="semibold">
          H4
        </Text>
        <Text typography="h4" weight="bold">
          H4
        </Text>
        <Text typography="h4" weight="heavy">
          H4
        </Text>
        <Text typography="h4" weight="black">
          H4
        </Text>
        <SizedBox height={8} />
        <Text typography="title" weight="thin">
          Title
        </Text>
        <Text typography="title" weight="ultraLight">
          Title
        </Text>
        <Text typography="title" weight="light">
          Title
        </Text>
        <Text typography="title" weight="regular">
          Title
        </Text>
        <Text typography="title" weight="medium">
          Title
        </Text>
        <Text typography="title" weight="semibold">
          Title
        </Text>
        <Text typography="title" weight="bold">
          Title
        </Text>
        <Text typography="title" weight="heavy">
          Title
        </Text>
        <Text typography="title" weight="black">
          Title
        </Text>
        <SizedBox height={8} />
        <Text typography="subtitle" weight="thin">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="ultraLight">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="light">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="regular">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="medium">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="semibold">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="bold">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="heavy">
          Subtitle
        </Text>
        <Text typography="subtitle" weight="black">
          Subtitle
        </Text>
        <SizedBox height={8} />
        <Text typography="caption" weight="thin">
          Caption
        </Text>
        <Text typography="caption" weight="ultraLight">
          Caption
        </Text>
        <Text typography="caption" weight="light">
          Caption
        </Text>
        <Text typography="caption" weight="regular">
          Caption
        </Text>
        <Text typography="caption" weight="medium">
          Caption
        </Text>
        <Text typography="caption" weight="semibold">
          Caption
        </Text>
        <Text typography="caption" weight="bold">
          Caption
        </Text>
        <Text typography="caption" weight="heavy">
          Caption
        </Text>
        <Text typography="caption" weight="black">
          Caption
        </Text>
        <SizedBox height={8} />
        <Text typography="overline" weight="thin">
          Overline
        </Text>
        <Text typography="overline" weight="ultraLight">
          Overline
        </Text>
        <Text typography="overline" weight="light">
          Overline
        </Text>
        <Text typography="overline" weight="regular">
          Overline
        </Text>
        <Text typography="overline" weight="medium">
          Overline
        </Text>
        <Text typography="overline" weight="semibold">
          Overline
        </Text>
        <Text typography="overline" weight="bold">
          Overline
        </Text>
        <Text typography="overline" weight="heavy">
          Overline
        </Text>
        <Text typography="overline" weight="black">
          Overline
        </Text>
      </ScrollView>
    </Container>
  );
}
