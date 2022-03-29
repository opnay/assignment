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

const AppPaths = { Favorite, Search };
export default AppPaths;
