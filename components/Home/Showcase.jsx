import styled from 'styled-components';
import { Tag } from '../../Theme';
import Image from 'next/image';
import Icon from '../UI/Icon';
import Link from '../../Link';

function Showcase() {
  return (
    <S.Container className='showcase'>
      <S.Showcase>
        <S.RingTopLeft>
          <Image src='/ring-left.png' layout='fill' objectFit='cover' />
        </S.RingTopLeft>
        <S.Tag data-aos='fade-up'>Showcase</S.Tag>
        <h3 data-aos='fade-up'>Latest Projects</h3>
        <S.Cards>
          <Link
            href='https://kobalt.savo-kos.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <S.Card className='kobalt'>
              <S.DoubleCircle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/doublecircle.png'
                  className='circle'
                />
              </S.DoubleCircle>
              <S.Mockup className='kobalt'>
                <Image
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Kobalt project made by Savo Kos using NextJS, NodeJS, MongoDB'
                  layout='fill'
                  objectFit='cover'
                  src='/kobalt.png'
                />
              </S.Mockup>
              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Kobalt</h3>
                  <p data-aos='fade-up'>
                    Kobalt | NextJS, NodeJS, MongoDB, Express
                  </p>
                  <S.Description data-aos='fade-up'>
                    Kobalt will get you anything you want to your doorstep. You
                    order online, you'll have it! Kobalt has many features:
                    Register/Login, Edit user data, Reset password, Filter food,
                    Add to cart, Buy food, Leave review, Subscribe to
                    newsletter, Delete account, View prevous orders. Admin:
                    Delete food, Delete whole category (along with food)
                  </S.Description>
                </S.Details>
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://moviegeek.savo-kos.com'>
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
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Movie Geek project made by Savo Kos using JavaScript, HTML and CSS'
                  layout='fill'
                  objectFit='cover'
                  src='/moviegeek.png'
                  className='circle'
                />
              </S.Mockup>
              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Movie Geek</h3>
                  <p data-aos='fade-up'>Movie Project | HTML CSS JS</p>
                </S.Details>
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://greenery.savo-kos.com'>
            <S.Card className='greenery'>
              <S.Circle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/circle.png'
                  className='circle'
                />
              </S.Circle>
              <S.Mockup className='greenery'>
                <Image
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Project made by Savo Kos using React(NextJS), Redux & Firebase'
                  layout='fill'
                  objectFit='cover'
                  src='/greenery.png'
                  className='circle'
                />
              </S.Mockup>

              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Greenery</h3>
                  <p data-aos='fade-up'>
                    Plants Store Project | React(NextJS), Redux & Firebase
                  </p>
                </S.Details>
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://gameportal.savo-kos.com'>
            <S.Card className='game-portal'>
              <S.Circle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/circle.png'
                  className='circle'
                />
              </S.Circle>
              <S.Mockup className='game-portal'>
                <Image
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Game Portal project made by Savo Kos using React (NextJS)'
                  layout='fill'
                  objectFit='cover'
                  src='/game-portal.png'
                  className='circle'
                />
              </S.Mockup>
              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Game Portal</h3>
                  <p data-aos='fade-up'>Game Project | React (NextJS)</p>
                  <S.Description data-aos='fade-up'>
                    Game portal is the place where you can search and discover
                    your next favorite game. There are over 245 000 game titles.
                    Sort and filter games by tags, genres, stores, developers.
                    Read detailed reviews about games, find similar games and
                    stores where you can purchase them.
                  </S.Description>
                </S.Details>
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://excellence.savo-kos.com'>
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
                  data-aos='fade-up'
                  data-aos-delay='600'
                  alt='Bank application made by Savo Kos using React (NextJS)'
                  layout='fill'
                  objectFit='cover'
                  src='/excellence.png'
                  className='circle'
                />
              </S.Mockup>

              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up' data-aos-delay='400'>
                    Excellence
                  </h3>
                  <p data-aos='fade-up' data-aos-delay='400'>
                    Bank Project | React (NextJS) & Firebase
                  </p>
                </S.Details>
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://tasty.savo-kos.com'>
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
                  data-aos='fade-up'
                  data-aos-delay='600'
                  alt='Tasty Restaurant project made by Savo Kos using JavaScript, HTML and CSS'
                  layout='fill'
                  objectFit='cover'
                  src='/tasty.png'
                  className='circle'
                />
              </S.Mockup>

              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up' data-aos-delay='400'>
                    Tasty
                  </h3>
                  <p data-aos='fade-up' data-aos-delay='400'>
                    Restaurant Project | HTML CSS JS
                  </p>
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
  opacity: 0.5;

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
  opacity: 0.5;

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

  &.kobalt {
    width: 18rem;
    height: 12rem;
    top: 58%;
    left: 46%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 500px) {
      width: 22rem;
      height: 16rem;
      top: 57%;
      left: 45%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 850px) {
      width: 28rem;
      height: 18rem;
      top: 50%;
      left: 65%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 1180px) {
      width: 36rem;
      height: 26rem;
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
      width: 32rem;
      height: 23rem;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 1180px) {
      width: 43rem;
      height: 31rem;
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

  &.greenery {
    width: 19rem;
    height: 11rem;

    @media screen and (min-width: 500px) {
      width: 25rem;
      height: 15rem;
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

      &:nth-of-type(1),
      &:nth-of-type(4) {
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

  &.kobalt {
    width: 100%;
    background-color: rgb(244, 107, 69);
  }

  &.game-portal {
    width: 100%;
    background-color: #847af2;
  }

  &.moviegeek {
    background-color: rgba(240, 180, 0);
  }

  &.tasty {
    background-color: #ff8181;
  }

  &.excellence {
    background-color: #2985f2;
  }

  &.greenery {
    background-color: #80dc71;
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
