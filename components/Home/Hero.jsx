import styled from 'styled-components';
import Image from 'next/image';
import { Tag } from '../../Theme';

function Hero() {
  return (
    <S.Container className='hero'>
      <S.Hero>
        <S.Content>
          <S.Tag>Introduction</S.Tag>
          <S.Title>
            <h1>Hello, I'm Savo.</h1>
            <h1>
              I'm a <span>Web developer</span>.
            </h1>
          </S.Title>
          <S.Description>
            Self-taught developer and student who enjoy developing websites and
            web applications using latest web technologies. Looking forward to
            collaborate with you!
          </S.Description>
          <S.HireBtn>Hire me</S.HireBtn>
        </S.Content>
        <S.RingImg>
          <Image src='/ring-hero-home.png' objectFit='cover' layout='fill' />
        </S.RingImg>
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
  padding-bottom: 10rem;
  display: flex;
  align-items: flex-end;
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

  @media screen and (min-width: 500px) {
    min-width: 26.5rem;
    min-height: 37rem;
  }
`;

export default Hero;
