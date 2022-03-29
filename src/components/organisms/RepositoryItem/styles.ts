import styled from '@emotion/native';
import { Column, Row } from '../../atoms/styled/elements';

const styles = {
  Wrapper: styled(Row)`
    padding: 8px 12px 8px 12px;
  `,
  Title: styled.Text`
    flex: 1;
    font-size: 18px;
  `,
  FavoriteButton: styled.Button`
    font-size: 12px;
  `,

  ModalWrapper: styled(Column)`
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.24);
    width: 100%;
    height: 100%;
  `,
  ModalCard: styled(Column)`
    background: white;
    border-radius: 8px;
    min-width: 120px;
    min-height: 84px;
    overflow: hidden;
  `,
  ModalTitle: styled.Text`
    padding: 12px 16px 12px 16px;
    font-size: 18px;
  `,
  ModalDescription: styled.Text`
    padding: 1px 16px 24px 16px
    font-size: 14px;
  `,
};

export default styles;
