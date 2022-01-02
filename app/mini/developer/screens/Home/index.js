import React, {useEffect, useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import Navigator from '@navigator';
import {ListItem, IconButton, Icon, Divider} from '@components';
import {Styles} from '@configs';
import styles from './styles';

const DATA = [
  {
    id: 'Text',
    title: 'Text',
    subtitle: 'The typography system',
    uri: 'https://github.com/wem2017/react_native_components/blob/master/Text/index.js',
    icon: (
      <View style={Styles.flexCenter}>
        <Icon name="format-color-text" />
      </View>
    ),
  },
  {
    id: 'Text Input',
    title: 'Text Input',
    subtitle: 'Text fields let users enter and edit text',
    icon: (
      <View style={Styles.flexCenter}>
        <Icon name="card-text-outline" />
      </View>
    ),
  },
];

export default function Home({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: props => {
        return (
          <IconButton onPress={() => Navigator.pop()}>
            <Icon name="arrow-left" />
          </IconButton>
        );
      },
      headerRight: props => {
        return (
          <IconButton
            onPress={() => {
              navigation.push('About');
            }}>
            <Icon name="dots-horizontal" />
          </IconButton>
        );
      },
    });
  }, [navigation]);

  /**
   * onPress component
   * @param {*} item
   */
  const onPress = item => {
    navigation.push(item.id, {...item});
  };

  /**
   * build item list view
   * @param {*} {item}
   */
  const renderItem = ({item}) => (
    <ListItem
      size={32}
      title={item.title}
      subtitle={item.subtitle}
      icon={item.icon}
      onPress={() => onPress(item)}
    />
  );

  return (
    <View style={Styles.flex}>
      <FlatList
        contentContainerStyle={Styles.paddingVertical8}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}
