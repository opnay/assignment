import styled from '@emotion/native';
import { Text } from 'react-native';
import { Row } from '../../atoms/styled/elements';

const styles = {
  Wrapper: styled.SafeAreaView``,

  Header: styled(Row)`
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.24);
    padding: 14px 18px 14px 18px;
  `,

  Title: styled(Text)`
    flex: 1;

    font-size: 24px;
  `,
};

export default styles;
