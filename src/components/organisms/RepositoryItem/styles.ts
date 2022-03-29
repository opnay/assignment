import styled from '@emotion/native';
import { Row } from '../../atoms/styled/elements';

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
};

export default styles;
