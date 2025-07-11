import styled from 'styled-components';
import Image from 'next/image';
import { Tag } from '../../Theme';
import { FiDownload } from 'react-icons/fi';

function Hero() {
  return (
    <S.Container className='hero'>
      <S.Hero>
        <S.Content>
          <S.Tag data-aos='fade-up'>About Me</S.Tag>
          <S.Title>
            <h1 data-aos='fade-up'>Savo Kos</h1>
            <h1 data-aos='fade-up'>
              <span>Web Developer</span>
            </h1>
          </S.Title>
          <S.Description data-aos='fade-up'>
            I am Savo Kos, Front-End Web Developer based in Bosnia. My story as
            a Front-End Web Developer begins when I was 16 years old. That is
            the first time I came across HTML and CSS, and I fell in love. I
            started learning from then on.
            <br />
            <br />
            I am a Self-taught Developer and student. <br />
            <br />
            If you have a business proposal, question, or offer, you can contact
            me by e-mail or using the contact form at the end of the page.
          </S.Description>
          <a href='/CV.pdf' target='_blank' download rel='noopener noreferrer'>
            <S.HireBtn data-aos='fade-up'>
              <FiDownload className='icon' />
              Download CV
            </S.HireBtn>
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

  .icon {
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
