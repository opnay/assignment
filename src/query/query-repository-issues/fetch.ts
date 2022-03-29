import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { GHIssue } from '../../types/github';
import { QueryKey } from '../QueryKey';

function useFetchRepositoryIssues(fullName: string) {
  return useInfiniteQuery(
    [QueryKey.REPOSITORY_ISSUES, fullName],
    async (context) => {
      const { pageParam = 1 } = context;

      const url = `https://api.github.com/repos/${fullName}/issues?page=${pageParam}`;
      const res = await axios.get<GHIssue[]>(url);
      return { data: res.data, pageParam };
    },
    {
      enabled: !!/^.*\/.*$/.test(fullName),
      getNextPageParam: (lastPage) => lastPage.pageParam + 1,
    }
  );
}

export { useFetchRepositoryIssues };
