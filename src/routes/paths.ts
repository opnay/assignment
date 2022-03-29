interface Path {
  title: string;
  path: string;
}

// Initial Path
const Favorite: Path = {
  title: '즐겨찾기',
  path: '/favorite',
};

const Search: Path = {
  title: '검색하기',
  path: '/search',
};

const Issue: Path = {
  title: '이슈보기',
  path: '/issue/:owner/:repo',
};

const IssueDetail: Path = {
  title: '이슈보기',
  path: '/issue/detail',
};

const AppPaths = { Favorite, Search, Issue, IssueDetail };
export default AppPaths;
