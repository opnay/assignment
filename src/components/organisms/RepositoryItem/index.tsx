import React from 'react';
import { Button, Modal } from 'react-native';
import useFavoriteStore from '../../../store/favorite';
import { GHRepository } from '../../../types/github';
import styles from './styles';

const { Wrapper, Title, FavoriteButton, ModalWrapper, ModalCard, ModalTitle, ModalDescription } = styles;

interface Props {
  data: GHRepository;
}
function RepositoryItem(props: Props) {
  const { data } = props;
  const favorite = useFavoriteStore();
  const isFavorite = React.useMemo(
    () => favorite.repositories.find((it) => it.id === data.id),
    [data.id, favorite.repositories]
  );

  const [visibleModal, setVisibleModal] = React.useState(false);

  const handleFavoriteButton = React.useCallback(() => {
    favorite.append(data).catch(() => {
      setVisibleModal(true);
    });
  }, [data, favorite]);

  const handleFavoriteDeleteButton = React.useCallback(() => favorite.remove(data), [data, favorite]);

  const handleClose = React.useCallback(() => {
    setVisibleModal((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <Title>{data.full_name}</Title>
      {!isFavorite && (
        <FavoriteButton title={'추가'} onPress={handleFavoriteButton}>
          추가
        </FavoriteButton>
      )}
      {isFavorite && (
        <FavoriteButton title={'삭제'} onPress={handleFavoriteDeleteButton}>
          삭제
        </FavoriteButton>
      )}

      <Modal transparent={true} visible={visibleModal} onRequestClose={handleClose}>
        <ModalWrapper>
          <ModalCard>
            <ModalTitle>오류</ModalTitle>
            <ModalDescription>최대 4개 까지 추가 가능합니다.</ModalDescription>
            <Button title={'확인'} onPress={handleClose}>
              확인
            </Button>
          </ModalCard>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
}

export default RepositoryItem;
