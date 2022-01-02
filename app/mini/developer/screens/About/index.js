import React from 'react';
import {View} from 'react-native';
import {Text, Image, SizedBox, Container} from '@components';
import {Images, Styles, useTheme} from '@configs';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default function About({navigation}) {
  const {theme} = useTheme();
  const {t} = useTranslation();

  return (
    <Container
      style={[Styles.padding32, {backgroundColor: theme.colors.background}]}>
      <View style={Styles.columnCenter}>
        <Image
          source={Images.logo}
          style={[
            styles.icon,
            {
              backgroundColor: theme.colors.primary,
            },
          ]}
        />
        <SizedBox height={8} />
        <Text typography="title" weight="medium">
          {t('design_system')}
        </Text>
        <SizedBox height={16} />
        <Text typography="title" type="secondary" style={Styles.textCenter}>
          {t('design_system_desc')}
        </Text>
      </View>
    </Container>
  );
}
