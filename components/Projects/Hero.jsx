import styled from 'styled-components';
import { Tag } from '../../Theme';

function Hero() {
  return (
    <S.Container className='hero'>
      <S.Hero>
        <S.Content>
          <S.Tag data-aos='fade-up'>My Projects</S.Tag>
          <S.Title>
            <h1 data-aos='fade-up'>
              Developing modern websites and web applications
            </h1>
          </S.Title>
        </S.Content>
      </S.Hero>
    </S.Container>
  );
}
// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 3rem 5% 1rem 5%;

  @media screen and (min-width: 400px) {
    padding: 3rem 10% 2rem 10%;
  }
`;

S.Hero = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 7rem;

  @media screen and (min-width: 400px) {
    padding-top: 10rem;
  }
`;

S.Content = styled.div`
  width: 100%;
  position: relative;
  z-index: 4;

  @media screen and (min-width: 1300px) {
    width: 70%;
  }

  @media screen and (min-width: 1500px) {
    width: 60%;
  }
`;

S.Title = styled.div`
  margin: 2rem 0;

  h1 {
    font-size: 48px;
    color: #333333;

    @media screen and (min-width: 768px) {
      font-size: 64px;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

S.Tag = styled(Tag)``;

export default Hero;
