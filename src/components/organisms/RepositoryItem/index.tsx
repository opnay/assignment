import React from 'react';
import { GHRepository } from '../../../types/github';
import styles from './styles';

const { Wrapper, Title, FavoriteButton } = styles;

interface Props {
  data: GHRepository;
}
function RepositoryItem(props: Props) {
  const { data } = props;

  const handleFavoriteButton = React.useCallback(() => {
    console.log('test');
  }, []);

  return (
    <Wrapper>
      <>
        <Title>{data.full_name}</Title>
        <FavoriteButton title={'추가'} onPress={handleFavoriteButton}>
          추가
        </FavoriteButton>
      </>
    </Wrapper>
  );
}

export default RepositoryItem;
