import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    orange: 'rgb(255, 102, 102)',
    orange70: 'rgb(255, 102, 102,0.7)',
    orange50: 'rgb(255, 102, 102,0.5)',
    orange30: 'rgb(255, 102, 102, 0.3)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Tag = styled.h6`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export default Theme;
