import styled from 'styled-components';
import { Tag } from '../../Theme';
import Image from 'next/image';

function Specializing() {
  return (
    <S.Specializing>
      <S.Tag>Specializing</S.Tag>
      <h3>What I Do?</h3>
      <S.Cards>
        <S.Card>
          <S.Icon>
            <S.Ring />
            <S.Image>
              <Image
                src='/rocket.png'
                layout='fill'
                objectFit='cover'
                className='icon-img'
              />
            </S.Image>
          </S.Icon>

          <h5>Performance</h5>
          <p>
            Having a fast website is key to keeping people around, which
            ultimately converts them into customers. Design is useless without
            performance
          </p>
        </S.Card>
        <S.Card>
          <S.Icon>
            <S.Ring />
            <S.Image className='code'>
              <Image
                src='/code.png'
                layout='fill'
                objectFit='cover'
                className='icon-img code'
              />
            </S.Image>
          </S.Icon>
          <h5>Readable Code</h5>
          <p>
            “If a programmer who just joined the development team reads my
            software, will they be able to understand what I have written here?”
          </p>
        </S.Card>
        <S.Card>
          <S.Icon>
            <S.Ring />
            <S.Image>
              <Image
                src='/pencil.png'
                layout='fill'
                objectFit='cover'
                className='icon-img pencil'
              />
            </S.Image>
          </S.Icon>
          <h5>Modern Design</h5>
          <p>
            A website should be designed for the people who will use it, so
            that's exactly what I do. User focused design should be the primary
            goal of any website.
          </p>
        </S.Card>
      </S.Cards>
    </S.Specializing>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Specializing = styled.div`
  padding: 10rem 0;

  h3 {
    font-size: 40px;
    text-align: center;

    @media screen and (min-width: 500px) {
      font-size: 48px;
    }
  }
`;

S.Tag = styled(Tag)`
  text-align: center;
`;

S.Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

S.Card = styled.div`
  padding: 5rem 1rem 2rem 1rem;
  border-radius: 1rem;
  box-shadow: -1px 11px 20px -7px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: -1px 11px 20px -7px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: -1px 11px 20px -7px rgba(0, 0, 0, 0.18);
  position: relative;
  margin: 10rem 0;

  h5 {
    text-align: center;
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    color: #828282;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    &:nth-child(2) {
      margin: 10rem 3rem;
    }
  }
`;

S.Image = styled.div`
  top: -5rem;
  position: absolute;
  height: 350px;
  width: 350px;
  left: 50%;
  transform: translateX(-50%);

  &.code {
    top: -1rem;
    height: 200px;
    width: 200px;
  }

  .icon-img {
    width: 100%;
    position: absolute;
    top: 0;
    height: 350px;
    left: 0;
  }
`;

S.Icon = styled.div`
  position: absolute;
  top: -8rem;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
`;

S.Ring = styled.div`
  background-color: ${({ theme }) => theme.colors.orange70};
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: auto;
`;

export default Specializing;
