import styled from 'styled-components';
import Image from 'next/image';
import Icon from '../UI/Icon';
import Link from '../../Link';

function Projects() {
  return (
    <S.Container className='projects'>
      <S.Projects>
        <S.Cards>
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
                <Icon type='iov-arrow-right' />
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
                <Icon type='iov-arrow-right' />
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
                <Icon type='iov-arrow-right' />
              </S.Top>
            </S.Card>
          </Link>

          <Link href='https://oldportfolio.savokos.com'>
            <S.Card className='old-portfolio'>
              <S.DoubleCircle>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/doublecircle.png'
                  className='circle'
                />
              </S.DoubleCircle>
              <S.Mockup className='old-portfolio'>
                <Image
                  data-aos='fade-up'
                  data-aos-delay='300'
                  alt='Project made by Savo Kos using JavaScript, HTML and CSS'
                  layout='fill'
                  objectFit='cover'
                  src='/old-portfolio.png'
                  className='circle'
                />
              </S.Mockup>

              <S.Top>
                <S.Details>
                  <h3 data-aos='fade-up'>Old Portfolio</h3>
                  <p data-aos='fade-up'>Portfolio Project | HTML CSS JS</p>
                  <S.Description data-aos='fade-up'>
                    This was one of my first real projects. It's meant to be my
                    personal portfolio. But, I don't like it anymore, so I
                    decided to change it with this one.
                  </S.Description>
                </S.Details>
                <Icon type='iov-arrow-right' />
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
                <Icon type='iov-arrow-right' />
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
  padding: 3rem 5%;

  @media screen and (min-width: 400px) {
    padding: 3rem 10%;
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

  &.old-portfolio {
    width: 19rem;
    height: 18rem;
    top: 62%;
    left: 51%;

    @media screen and (min-width: 600px) {
      width: 23rem;
      height: 21rem;
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

export default Projects;
