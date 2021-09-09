import styled from 'styled-components';
import { Tag } from '../../Theme';
import Image from 'next/image';

function Specializing() {
  return (
    <S.Container>
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
              software, will they be able to understand what I have written
              here?”
            </p>
          </S.Card>
          <S.Card>
            <S.Icon>
              <S.Ring />
              <S.Image className='pencil'>
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
              that's exactly what I do. User focused design should be the
              primary goal of any website.
            </p>
          </S.Card>
        </S.Cards>
        <S.DotsImg>
          <Image
            src='/specializing-bg.png'
            objectFit='cover'
            layout='fill'
            className='dots'
          />
        </S.DotsImg>
      </S.Specializing>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 3rem 10%;
`;

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
    margin-top: 5rem;
  }
`;

S.Card = styled.div`
  position: relative;
  z-index: 3;
  padding: 5rem 1rem 2rem 1rem;
  border-radius: 1rem;
  box-shadow: -1px 11px 20px -7px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: -1px 11px 20px -7px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: -1px 11px 20px -7px rgba(0, 0, 0, 0.18);
  position: relative;
  margin: 10rem 0;
  background-color: #fff;

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
  top: -12rem;
  position: relative;
  height: 200px;
  width: 168px;
  left: 50%;
  transform: translateX(-50%);

  &.code {
    top: -12rem;
    height: 200px;
    width: 200px;
  }

  &.pencil {
    height: 208px;
    width: 189px;
    left: 59%;
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

S.DotsImg = styled.div`
  position: absolute;
  bottom: -125rem;
  right: 0;
  width: 300px;
  height: 300px;
  display: none;

  @media screen and (min-width: 630px) {
    display: block;
  }

  @media screen and (min-width: 1000px) {
    bottom: -75rem;
  }
`;

export default Specializing;
