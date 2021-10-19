import React, {useEffect, useState, useRef} from 'react';
import {TouchableOpacity, View, TextInput} from 'react-native';
import {Icon, Text, SafeAreaView, getFontFamily} from '@components';
import {useTheme, Styles, Colors} from '@configs';
import styles from './styles';

export default function Search({navigation}) {
  const {theme, font} = useTheme();
  const inputRef = useRef();

  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  }, []);

  const onChangeText = value => {
    setKeyword(value);
  };

  const onClear = () => {
    inputRef.current?.clear();
    setKeyword('');
  };

  /**
   * build clear action
   */
  const buildClear = () => {
    if (keyword) {
      return (
        <TouchableOpacity onPress={onClear}>
          <Icon
            name="close-circle-outline"
            size={20}
            color={Colors.white}
            style={Styles.paddingHorizontal8}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={Styles.flex}>
      <View style={{backgroundColor: theme.colors.primary}}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerRow}>
            <View style={styles.searchInput}>
              <Icon
                name="magnify"
                size={18}
                color={Colors.white}
                style={styles.searchIcon}
              />
              <TextInput
                ref={inputRef}
                onChangeText={onChangeText}
                placeholder="Tìm bất kể một cái gì đó?"
                placeholderTextColor={Colors.white}
                style={[
                  styles.textInput,
                  {
                    fontFamily: getFontFamily({
                      fontFamily: font,
                    }),
                  },
                ]}
              />
              {buildClear()}
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.pop()}>
              <Text typography="title" color="white" weight="bold">
                Đóng
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <View
        style={[
          Styles.flex,
          {backgroundColor: theme.colors.background},
        ]}></View>
    </View>
  );
}
