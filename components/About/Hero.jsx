import styled from 'styled-components';
import Image from 'next/image';
import { Tag } from '../../Theme';
import Icon from '../UI/Icon';

function Hero() {
  return (
    <S.Container className='hero'>
      <S.Hero>
        <S.Content>
          <S.Tag>About Me</S.Tag>
          <S.Title>
            <h1>Savo Kos</h1>
            <h1>
              <span>Web Developer</span>
            </h1>
          </S.Title>
          <S.Description>
            I am Savo Kos, Front-End Web Developer based in Bosnia. My story as
            a Front-End Web Developer begins when I was 16 years old. That is
            the first time I came across HTML and CSS, and I fell in love. I
            started learning from then on.
            <br />
            <br />
            I am a Self-taught Developer and student. Currently, I am
            unemployed, but I know I will find a job because this is the thing I
            am really passionate about. <br />
            <br />
            If you have a business proposal, question, or offer, you can contact
            me by e-mail or using the contact form at the end of the page.
          </S.Description>
          <S.HireBtn>
            <Icon type='download' />
            Download CV
          </S.HireBtn>
        </S.Content>
        <S.RingImg>
          <Image src='/ring-right.png' objectFit='cover' layout='fill' />
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
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-size: 18px;
  margin-top: 5rem;
  cursor: pointer;
  position: relative;

  .anticon {
    margin-right: 1rem;
    font-size: 22px;
  }
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
