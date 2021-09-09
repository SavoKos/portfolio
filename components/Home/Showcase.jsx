import styled from 'styled-components';
import { Tag } from '../../Theme';
import Image from 'next/image';
import Icon from '../UI/Icon';

function Showcase() {
  return (
    <S.Container>
      <S.Showcase>
        <S.ProjectsBg>
          <Image src='/ring-projects-bg.png' layout='fill' objectFit='cover' />
        </S.ProjectsBg>
        <S.Tag>Showcase</S.Tag>
        <h3>Latest Projects</h3>
        <S.Cards>
          <S.Card className='game-portal'>
            <S.DoubleCircle>
              <Image
                layout='fill'
                objectFit='cover'
                src='/doublecircle.png'
                className='circle'
              />
            </S.DoubleCircle>
            <S.Mockup className='game-portal'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/game-portal.png'
                className='circle'
              />
            </S.Mockup>
            <S.Top>
              <S.Details>
                <h3>Game Portal</h3>
                <p>Game Project | React (NextJS)</p>
              </S.Details>
              <Icon type='iov-arrow-right' />
            </S.Top>
          </S.Card>

          <S.Card className='moviegeek'>
            <S.Circle>
              <Image
                layout='fill'
                objectFit='cover'
                src='/circle.png'
                className='circle'
              />
            </S.Circle>
            <S.Mockup className='moviegeek'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/moviegeek.png'
                className='circle'
              />
            </S.Mockup>
            <S.Top>
              <S.Details>
                <h3>Movie Geek</h3>
                <p>Movie Project | HTML CSS JS</p>
              </S.Details>
              <Icon type='iov-arrow-right' />
            </S.Top>
          </S.Card>

          <S.Card className='tasty'>
            <S.Circle>
              <Image
                layout='fill'
                objectFit='cover'
                src='/circle.png'
                className='circle'
              />
            </S.Circle>
            <S.Mockup className='tasty'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/tasty.png'
                className='circle'
              />
            </S.Mockup>

            <S.Top>
              <S.Details>
                <h3>Tasty</h3>
                <p>Restaurant Project | HTML CSS JS</p>
              </S.Details>
              <Icon type='iov-arrow-right' />
            </S.Top>
          </S.Card>

          <S.Card className='old-portfolio'>
            <S.Circle>
              <Image
                layout='fill'
                objectFit='cover'
                src='/circle.png'
                className='circle'
              />
            </S.Circle>
            <S.Mockup className='old-portfolio'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/old-portfolio.png'
                className='circle'
              />
            </S.Mockup>

            <S.Top>
              <S.Details>
                <h3>Old Portfolio</h3>
                <p>Portfolio Project | HTML CSS JS</p>
              </S.Details>
              <Icon type='iov-arrow-right' />
            </S.Top>
          </S.Card>

          <S.Card className='excellence'>
            <S.Circle>
              <Image
                layout='fill'
                objectFit='cover'
                src='/circle.png'
                className='circle'
              />
            </S.Circle>
            <S.Mockup className='excellence'>
              <Image
                layout='fill'
                objectFit='cover'
                src='/excellence.png'
                className='circle'
              />
            </S.Mockup>

            <S.Top>
              <S.Details>
                <h3>Excellence</h3>
                <p>Bank Project | React (NextJS) & Firebase</p>
              </S.Details>
              <Icon type='iov-arrow-right' />
            </S.Top>
          </S.Card>
        </S.Cards>
      </S.Showcase>
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

S.Showcase = styled.div`
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

S.ProjectsBg = styled.div`
  position: absolute;
  min-width: 15rem;
  left: 0;
  min-height: 21rem;

  @media screen and (min-width: 500px) {
    min-width: 26.5rem;
    min-height: 37rem;
  }
`;

S.DoubleCircle = styled.div`
  width: 18rem;
  height: 16rem;
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 600px) {
    top: 55%;
    width: 25rem;
    height: 22rem;
  }

  @media screen and (min-width: 1000px) {
    width: 34rem;
    height: 30rem;
    top: 50%;
    left: 85%;
    transform: translate(-85%, -50%);
  }
`;

S.Circle = styled.div`
  width: 18rem;
  height: 18rem;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);

  @media screen and (min-width: 550px) {
    width: 26rem;
    height: 26rem;
  }
`;

S.Mockup = styled.div`
  width: 23rem;
  height: 12rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);

  &.tasty {
  }

  &.moviegeek {
    width: 17rem;
    height: 9rem;

    @media screen and (min-width: 500px) {
      width: 23rem;
      height: 12rem;
    }

    @media screen and (min-width: 750px) {
      width: 23rem;
      height: 12rem;
    }

    @media screen and (min-width: 1180px) {
      top: 62%;
    }
  }

  &.game-portal {
    width: 21rem;
    height: 15rem;
    top: 58%;
    left: 41%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 500px) {
      width: 31rem;
      height: 22rem;
      top: 53%;
      left: 48%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 850px) {
      width: 43rem;
      height: 31rem;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
  }

  &.excellence {
    left: 35%;
    width: 23rem;
    height: 23rem;
  }

  &.old-portfolio {
    width: 19rem;
    height: 18rem;

    @media screen and (min-width: 500px) {
      width: 23rem;
      height: 21rem;
    }
  }

  @media screen and (min-width: 1180px) {
    width: 33rem;
    height: 17rem;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
`;

S.Cards = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

S.Card = styled.div`
  width: 100%;
  padding: 3rem;
  position: relative;
  border-radius: 2rem;
  min-height: 40rem;
  cursor: pointer;
  margin-top: 2rem;

  &.game-portal {
    width: 100%;
    background-color: #847af2;
  }

  &.moviegeek {
    background-color: rgba(240, 180, 0);
  }

  &.tasty {
    background-color: #92ff81;
  }

  &.excellence {
    background-color: #2985f2;
  }

  &.old-portfolio {
    background-color: #8dbbc5;
  }

  @media screen and (min-width: 900px) {
    width: 49%;
  }
`;

S.Top = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .anticon {
    font-size: 48px;
  }

  h3 {
    text-align: left;
  }
`;

S.Details = styled.div`
  h3 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
  }

  @media screen and (min-width: 1120px) {
    h3 {
      font-size: 48px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export default Showcase;
