import styled from '@emotion/native';
import { Row } from '../../atoms/styled/elements';

const styles = {
  Wrapper: styled.TouchableHighlight`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.12);
    padding: 10px 12px 10px 12px;
  `,

  Detail: styled(Row)`
    padding-bottom: 4px;
  `,
  Info: styled.Text`
    font-size: 12px;
  `,

  Title: styled.Text`
    flex: 1;

    color: black;
    font-size: 16px;
  `,
  Description: styled.Text`
    flex: 1;
    padding-bottom: 4px;

    color: rgba(0, 0, 0, 0.48);
    font-size: 12px;
  `,
};

export default styles;
