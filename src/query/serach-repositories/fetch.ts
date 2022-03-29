import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { GHRepository, GHSearch } from '../../types/github';
import { QueryKey } from '../QueryKey';

function useFetchGithubRepositories(query: string) {
  return useInfiniteQuery(
    [QueryKey.SEARCH_REPOSITORIES, query],
    async (context) => {
      const { pageParam = 1 } = context;

      const url = `https://api.github.com/search/repositories?q=${query}&page=${pageParam}`;
      const res = await axios.get<GHSearch<GHRepository>>(url);
      return { data: res.data, pageParam };
    },
    {
      enabled: !!query,
      getNextPageParam: (lastPage) => lastPage.pageParam + 1,
    }
  );
}

export { useFetchGithubRepositories };
