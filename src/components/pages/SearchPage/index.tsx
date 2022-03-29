import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useFetchGithubRepositories } from '../../../query/serach-repositories/fetch';
import RepositoryItem from '../../organisms/RepositoryItem';
import styles from './styles';

const { SearchRow, Input, SearchButton } = styles;

function SearchPage() {
  const [query, setQuery] = React.useState('');
  const { data, isLoading, isError, refetch } = useFetchGithubRepositories(query);

  const handleSearchPress = React.useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <SafeAreaView>
      <SearchRow>
        <Input value={query} placeholder={'검색할 내용을 입력해주세요.'} onChangeText={setQuery} />
        <SearchButton title={'검색'} onPress={handleSearchPress}>
          검색
        </SearchButton>
      </SearchRow>
      {isLoading && <Text>로딩중...</Text>}
      {isError && <Text>불러오는데 문제가 발생했습니다</Text>}
      <ScrollView>
        {data?.pages.map((page) => page.data.items.map((it) => <RepositoryItem key={it.id} data={it} />))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchPage;
