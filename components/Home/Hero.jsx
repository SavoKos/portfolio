import styled from 'styled-components';
import Image from 'next/image';

function Hero() {
  return (
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
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Hero = styled.div`
  padding: 10rem 0;
  display: flex;
  align-items: flex-end;
`;

S.Content = styled.div`
  width: 50%;
`;

S.Title = styled.div`
  margin: 2rem 0;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

S.Tag = styled.h6`
  color: ${({ theme }) => theme.colors.orange};
`;

S.Description = styled.h6`
  color: #828282;
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
`;

S.RingImg = styled.div`
  position: absolute;
  right: 0;
  bottom: -7rem;
  min-width: 26.5rem;
  min-height: 37rem;
`;

export default Hero;
