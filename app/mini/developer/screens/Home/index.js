import React, {useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import Navigator from '@navigator';
import {ListItem, IconButton, Icon, Divider} from '@components';
import {Styles} from '@configs';

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
    id: 'TextInput',
    title: 'TextInput',
    subtitle: 'Text fields let users enter and edit text',
    uri: 'https://github.com/wem2017/react_native_components/blob/master/TextInput/index.js',
    icon: (
      <View style={Styles.flexCenter}>
        <Icon name="card-text-outline" />
      </View>
    ),
  },
  {
    id: 'InputPicker',
    title: 'InputPicker',
    subtitle: 'InputPicker allow users to choose a specific value.',
    uri: 'https://github.com/wem2017/react_native_components/blob/master/InputPicker/index.js',
    icon: (
      <View style={Styles.flexCenter}>
        <Icon name="arrow-down-drop-circle-outline" />
      </View>
    ),
  },
  {
    id: 'Button',
    title: 'Button',
    subtitle: 'Button component that should render nicely on any platform.',
    uri: 'https://github.com/wem2017/react_native_components/blob/master/Button/index.js',
    icon: (
      <View style={Styles.flexCenter}>
        <Icon name="gesture-tap-button" />
      </View>
    ),
  },
  {
    id: 'CheckBox',
    title: 'CheckBox',
    subtitle: 'CheckBox allow the user to select one or more items from a set.',
    uri: 'https://github.com/wem2017/react_native_components/blob/master/CheckBox/index.js',
    icon: (
      <View style={Styles.flexCenter}>
        <Icon name="checkbox-marked-outline" />
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
      leading={item.icon}
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
