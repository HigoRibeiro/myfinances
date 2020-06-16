import styled, { css } from 'styled-components/native';

interface MonthProps {
  activated?: boolean;
}
export const Month = styled.TouchableOpacity<MonthProps>`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  ${(props) =>
    props.activated &&
    css`
      background: #22272b;
    `};
`;
export const MonthText = styled.Text<MonthProps>`
  font-size: 22px;
  color: #a2a2a2;

  ${(props) =>
    props.activated &&
    css`
      font-weight: 500;
      color: #ffffff;
    `};
`;
