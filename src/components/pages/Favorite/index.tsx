import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useLinkPressHandler } from 'react-router-native';
import AppPaths from '../../../routes/paths';
import useFavoriteStore from '../../../store/favorite';
import RepositoryItem from '../../organisms/RepositoryItem';
import styles from './styles';

const { LinkButton } = styles;

function FavoritePage() {
  const repositories = useFavoriteStore((it) => it.repositories);

  const handleLinkButtonPress = useLinkPressHandler(AppPaths.Search.path);

  return (
    <SafeAreaView>
      <LinkButton title={'검색하기'} onPress={handleLinkButtonPress}>
        검색하기
      </LinkButton>
      <ScrollView>
        {repositories.map((it) => (
          <RepositoryItem key={it.html_url} data={it} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FavoritePage;
