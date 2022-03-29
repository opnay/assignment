import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useParams } from 'react-router-native';
import { useFetchRepositoryIssues } from '../../../query/query-repository-issues/fetch';
import IssueItem from '../../organisms/IssueItem';

interface Params {
  owner: string;
  repo: string;

  [x: string]: string | undefined;
}

function IssuePage() {
  const params = useParams<Params>();
  const { data: issues, isLoading, isError } = useFetchRepositoryIssues(`${params.owner}/${params.repo}`);

  return (
    <SafeAreaView>
      {isLoading && <Text>로딩중...</Text>}
      {isError && <Text>불러오는데 문제가 발생했습니다</Text>}
      <ScrollView>{issues?.pages.map((page) => page.data.map((it) => <IssueItem key={it.id} data={it} />))}</ScrollView>
    </SafeAreaView>
  );
}

export default IssuePage;
