import styled, { css } from 'styled-components/native';

interface RegisterProps {
  state?: 'activated';
}

export const Container = styled.View<RegisterProps>`
  background: #f1f1f1;
  padding: 20px 15px;
  max-width: 300px;
  height: 100px;
  border-radius: 15px;
  justify-content: center;
  margin-right: 20px
    ${(props) =>
      props.state === 'activated' &&
      css`
        background: #22272b;
      `};
`;

export const ValueText = styled.Text<RegisterProps>`
  color: #22272b;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 6px;

  ${(props) =>
    props.state === 'activated' &&
    css`
      color: #ffffff;
    `}
`;
export const TitleText = styled.Text<RegisterProps>`
  color: #8a8c8e;
  text-align: center;
  font-size: 18px;
  font-weight: 500;

  ${(props) =>
    props.state === 'activated' &&
    css`
      color: #4f5255;
    `}
`;
