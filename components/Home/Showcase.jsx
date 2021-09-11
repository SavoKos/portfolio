import styled from 'styled-components';
import { Tag } from '../../Theme';
import Image from 'next/image';
import Icon from '../UI/Icon';
import Link from '../../Link';

function Showcase() {
  return (
    <S.Container>
      <S.Showcase>
        <S.RingTopLeft>
          <Image src='/ring-left.png' layout='fill' objectFit='cover' />
        </S.RingTopLeft>
        <S.Tag>Showcase</S.Tag>
        <h3>Latest Projects</h3>
        <S.Cards>
          <Link href='https://gameportal.savokos.com'>
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
                  <S.Description>
                    Game portal is the place where you can search and discover
                    your next favorite game. There are over 245 000 game titles.
                    Sort and filter games by tags, genres, stores, developers.
                    Read detailed reviews about games, find similar games and
                    stores where you can purchase it.
                  </S.Description>
                </S.Details>
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://moviegeek.savokos.com'>
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
          </Link>

          <Link href='https://tasty.savokos.com'>
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
          </Link>

          <Link href='https://oldportfolio.savokos.com'>
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
          </Link>

          <Link href='https://excellence.savokos.com'>
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
          </Link>
        </S.Cards>
        <S.RingBottomRight>
          <Image src='/ring-right.png' layout='fill' objectFit='cover' />
        </S.RingBottomRight>
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

S.RingTopLeft = styled.div`
  position: absolute;
  min-width: 15rem;
  left: 0;
  min-height: 21rem;

  @media screen and (min-width: 500px) {
    min-width: 26.5rem;
    min-height: 37rem;
  }
`;

S.RingBottomRight = styled.div`
  position: absolute;
  min-width: 15rem;
  right: 0;
  min-height: 21rem;
  display: none;

  @media screen and (min-width: 500px) {
    min-width: 26.5rem;
    min-height: 37rem;
  }

  @media screen and (min-width: 1000px) {
    display: block;
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
    width: 19rem;
    height: 10rem;

    @media screen and (min-width: 450px) {
      width: 24rem;
      height: 14rem;
      top: 62%;
    }
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
      left: 40%;
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
    left: 26%;
    width: 23rem;
    height: 23rem;

    @media screen and (min-width: 500px) {
      left: 35%;
    }
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

  a {
    width: 100%;

    @media screen and (min-width: 900px) {
      width: 49%;

      &:nth-of-type(1) {
        width: 100%;
      }
    }
  }
`;

S.Card = styled.div`
  width: 100%;
  padding: 2rem;
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
    background-color: #80dc71;
  }

  &.excellence {
    background-color: #2985f2;
  }

  &.old-portfolio {
    background-color: #8dbbc5;
  }
`;

S.Top = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .anticon {
    font-size: 48px;
    opacity: 80%;
  }

  h3 {
    text-align: left;
  }
`;

S.Details = styled.div`
  h3 {
    font-size: 36px;
  }

  p {
    font-size: 16px;
  }

  @media screen and (min-width: 400px) {
    h3 {
      font-size: 40px;
    }
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

S.Description = styled.p`
  width: 40%;
  margin-top: 3rem;
  display: none;

  @media screen and (min-width: 850px) {
    display: block;
  }
`;

export default Showcase;
