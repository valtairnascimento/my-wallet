import * as React from 'react';
import { Container } from './styles';

const Content = ({ children }: any) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default Content;
