import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useLinkPressHandler } from 'react-router-native';
import AppPaths from '../../../routes/paths';
import styles from './styles';

const { LinkButton } = styles;

function FavoritePage() {
  const handleLinkButtonPress = useLinkPressHandler(AppPaths.Search.path);

  return (
    <SafeAreaView>
      <LinkButton title={'검색하기'} onPress={handleLinkButtonPress}>
        검색하기
      </LinkButton>
      <Text>TEST</Text>
    </SafeAreaView>
  );
}

export default FavoritePage;
