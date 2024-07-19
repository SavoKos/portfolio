import styled from 'styled-components';
import Image from 'next/image';
import Link from '../../Link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Projects() {
  return (
    <S.Container className='projects'>
      <S.Projects>
        <S.Cards>
          <Link
            href='https://kobalt.savokos.com'
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
                <MdOutlineKeyboardArrowRight className='icon' />
              </S.Top>
            </S.Card>
          </Link>

          <Link
            href='https://gameportal.savokos.com'
            target='_blank'
            rel='noopener noreferrer'
          >
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
                <MdOutlineKeyboardArrowRight className='icon' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://moviegeek.savokos.com'>
            <S.Card className='moviegeek'>
              <S.DoubleCircle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/doublecircle.png'
                  className='circle'
                />
              </S.DoubleCircle>
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
                  <S.Description data-aos='fade-up'>
                    Find upcoming, popular, top rated TV Shows or Movies. Also,
                    you can find all details about specific Movie or TV Show
                  </S.Description>
                </S.Details>
                <MdOutlineKeyboardArrowRight className='icon' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://greenery.savokos.com'>
            <S.Card className='greenery'>
              <S.DoubleCircle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/doublecircle.png'
                  className='circle'
                />
              </S.DoubleCircle>
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
                  <S.Description data-aos='fade-up'>
                    Greenery is E-Commerce website where you can find different
                    kinds of plants. Sort, filter them, change their size,
                    quantity, add them to the cart and wishlist. Also, you can
                    make an account and log in, log out and finish the purschase
                    in the checkout.
                  </S.Description>
                </S.Details>
                <MdOutlineKeyboardArrowRight className='icon' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://excellence.savokos.com'>
            <S.Card className='excellence'>
              <S.DoubleCircle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/doublecircle.png'
                  className='circle'
                />
              </S.DoubleCircle>
              <S.Mockup className='excellence'>
                <Image
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Bank application made by Savo Kos using React (NextJS)'
                  layout='fill'
                  objectFit='cover'
                  src='/excellence.png'
                  className='circle'
                />
              </S.Mockup>

              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Excellence</h3>
                  <p data-aos='fade-up'>
                    Bank Project | React (NextJS) & Firebase
                  </p>
                  <S.Description data-aos='fade-up'>
                    Excellence Holdings is a (fictional) bank, and its idea is
                    to allow people to manage their credit cards. <br />
                    Excellence Holdings has many features, like creating new
                    user, new card, filter transactions (All, Income, Outcome),
                    transfer money to another user, loan, make a deposit and
                    investment goals.
                  </S.Description>
                </S.Details>
                <MdOutlineKeyboardArrowRight className='icon' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://tasty.savokos.com'>
            <S.Card className='tasty'>
              <S.DoubleCircle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/doublecircle.png'
                  className='circle'
                />
              </S.DoubleCircle>
              <S.Mockup className='tasty'>
                <Image
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Tasty Restaurant project made by Savo Kos using JavaScript, HTML and CSS'
                  layout='fill'
                  objectFit='cover'
                  src='/tasty.png'
                  className='circle'
                />
              </S.Mockup>

              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Tasty</h3>
                  <p data-aos='fade-up'>Restaurant Project | HTML CSS JS</p>
                  <S.Description data-aos='fade-up'>
                    Nice design of a responsive restaurant website. It has a
                    fully developed light/dark mode. Mobile-Friendly.
                  </S.Description>
                </S.Details>
                <MdOutlineKeyboardArrowRight className='icon' />
              </S.Top>
            </S.Card>
          </Link>
        </S.Cards>
      </S.Projects>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 0rem 5%;

  @media screen and (min-width: 400px) {
    padding: 0rem 10%;
  }
`;

S.Projects = styled.div`
  h3 {
    font-size: 40px;
    text-align: center;

    @media screen and (min-width: 500px) {
      font-size: 48px;
    }
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
    width: 25rem;
    height: 22rem;
  }

  @media screen and (min-width: 850px) {
    top: 55%;
    left: 80%;
    transform: translate(-85%, -50%);
  }

  @media screen and (min-width: 1200px) {
    width: 34rem;
    height: 30rem;
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
  top: 65%;
  left: 26%;
  transform: translate(-50%, -50%);

  &.tasty {
    width: 19rem;
    height: 10rem;
    top: 63%;
    left: 48%;

    @media screen and (min-width: 450px) {
      width: 24rem;
      height: 14rem;
      top: 62%;
    }

    @media screen and (min-width: 600px) {
      width: 23rem;
      height: 12rem;
      top: 63%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 850px) {
      top: 54%;
      left: 65%;
    }

    @media screen and (min-width: 1200px) {
      width: 31rem;
      height: 16rem;
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

  &.moviegeek {
    width: 17rem;
    height: 9rem;
    top: 63%;
    left: 52%;

    @media screen and (min-width: 600px) {
      width: 23rem;
      height: 12rem;
      top: 61%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 850px) {
      top: 50%;
      left: 66%;
    }

    @media screen and (min-width: 1200px) {
      width: 31rem;
      height: 16rem;
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

  &.excellence {
    width: 23rem;
    height: 23rem;

    @media screen and (min-width: 850px) {
      top: 55%;
      left: 52%;
    }

    @media screen and (min-width: 1300px) {
      top: 55%;
      left: 58%;
    }
  }

  &.greenery {
    width: 19rem;
    height: 11rem;
    top: 62%;
    left: 51%;

    @media screen and (min-width: 600px) {
      width: 28rem;
      height: 16rem;
    }

    @media screen and (min-width: 850px) {
      top: 55%;
      left: 68%;
    }
  }

  @media screen and (min-width: 1180px) {
    width: 33rem;
    height: 17rem;
  }
`;

S.Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    width: 100%;
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

  .icon {
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

export default Projects;
