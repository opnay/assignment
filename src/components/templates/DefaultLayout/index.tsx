import React from 'react';
import styles from './styles';

const { Wrapper, Header, Title } = styles;

interface Props {
  children?: React.ReactNode;

  title: string;
}

function DefaultLayout(props: Props) {
  const { children, title } = props;

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      {children}
    </Wrapper>
  );
}

export default DefaultLayout;
