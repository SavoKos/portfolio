import styled from 'styled-components';
import Image from 'next/image';
import { Tag } from '../../Theme';

function Hero() {
  return (
    <S.Container className='hero'>
      <S.Hero>
        <S.Content>
          <S.Tag data-aos='fade-up'>Introduction</S.Tag>
          <S.Title>
            <h1 data-aos='fade-up'>Hello, I am Savo Kos.</h1>
            <h1 data-aos='fade-up'>
              I am a <span>Web developer</span>.
            </h1>
          </S.Title>
          <S.Description data-aos='fade-up'>
            Self-taught Front-end Web Developer and student who enjoys
            developing websites and web applications using the latest web
            technologies. Looking forward to collaborating with you!
          </S.Description>
          <a href='#contact'>
            <S.HireBtn data-aos='fade-up'>Hire me</S.HireBtn>
          </a>
        </S.Content>
      </S.Hero>
    </S.Container>
  );
}
// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 3rem 5%;

  @media screen and (min-width: 400px) {
    padding: 3rem 10%;
  }
`;

S.Hero = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 7rem 0;

  @media screen and (min-width: 400px) {
    padding: 10rem 0 8rem 0;
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

S.Description = styled.h6`
  color: #828282;
  position: relative;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

S.HireBtn = styled.button`
  outline: 0;
  border: 0;
  border-radius: 10rem;
  padding: 1rem 3.5rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-size: 18px;
  margin-top: 5rem;
  cursor: pointer;
  position: relative;
`;

S.RingImg = styled.div`
  position: absolute;
  right: 0;
  bottom: -7rem;
  min-width: 15rem;
  min-height: 21rem;
  opacity: 0.5;

  @media screen and (min-width: 500px) {
    min-width: 26.5rem;
    min-height: 37rem;
  }
`;

export default Hero;
