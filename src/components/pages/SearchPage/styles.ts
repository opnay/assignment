import styled from '@emotion/native';
import { Row } from '../../atoms/styled/elements';

const styles = {
  SearchRow: styled(Row)`
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.48);
  `,

  Input: styled.TextInput`
    flex: 1;

    background: rgba(0, 0, 0, 0.04);
    margin: 8px 8px 8px 8px;
    border-radius: 12px;
    padding: 12px 12px 12px 12px;
  `,
  SearchButton: styled.Button`
    justify-content: center;
    align-items: center;

    padding: 0px 12px 0px 12px;
  `,
};

export default styles;
