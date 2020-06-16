import React from 'react';

import { Container, TitleText, ValueText } from './styles';

import formatValue from '../../../utils/formatValue';

interface RegisterProps {
  type: 'expense';
  value: Number;
  title: string;
  state: 'activated';
}

const Register: React.FC<RegisterProps> = ({ value, title, state }) => (
  <Container state={state}>
    <ValueText state={state}>{formatValue(value)}</ValueText>
    <TitleText state={state}>{title}</TitleText>
  </Container>
);

export default Register;
