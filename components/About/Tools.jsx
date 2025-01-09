import styled from 'styled-components';
import Link from '../../Link';
import Contact from '../Contact';
import { FaBootstrap } from 'react-icons/fa';
import { IoLogoSass } from 'react-icons/io';
import { FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
function Tools() {
  return (
    <S.Container>
      <S.Top>
        <h2 data-aos='fade-up'>
          Tools &<br />
          Frameworks
        </h2>
        <S.Skills>
          <Link href='https://getbootstrap.com/'>
            <S.Skill data-aos='fade-up'>
              <FaBootstrap className='bootstrap icon' />
            </S.Skill>
          </Link>

          <Link href='https://sass-lang.com/'>
            <S.Skill data-aos='fade-up' data-aos-delay='200'>
              <IoLogoSass className='sass icon' />
            </S.Skill>
          </Link>

          <Link href='https://www.figma.com/'>
            <S.Skill data-aos='fade-up' data-aos-delay='400'>
              <FaFigma className='figma icon' />
            </S.Skill>
          </Link>

          <Link href='https://reactjs.org/'>
            <S.Skill data-aos='fade-up' data-aos-delay='600'>
              <FaReact type='React' className='react icon' />
            </S.Skill>
          </Link>

          <Link href='https://www.javascript.com/'>
            <S.Skill data-aos='fade-up' data-aos-delay='800'>
              <IoLogoJavascript className='javascript icon' />
            </S.Skill>
          </Link>

          <Link href='https://firebase.google.com/'>
            <S.Skill data-aos='fade-up' data-aos-delay='1000'>
              <IoLogoFirebase className='firebase icon' />
            </S.Skill>
          </Link>

          <Link href='https://git-scm.com/'>
            <S.Skill data-aos='fade-up' data-aos-delay='1200'>
              <FaGitAlt className='git icon' />
            </S.Skill>
          </Link>
        </S.Skills>
      </S.Top>
      <Contact />
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 3rem 5%;
  margin-top: 10rem;
  padding-top: 20rem;
  background-image: url('/about.png');
  background-position: top right;
  background-repeat: no-repeat;

  @media screen and (min-width: 1300px) {
    background-size: cover;
  }

  .copyright {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 16px;
    margin-top: 5rem;

    a {
      text-decoration: underline;
      color: #333333;
    }

    @media screen and (min-width: 400px) {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 400px) {
    padding: 3rem 10%;
  }
`;

S.Top = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20rem;

  h2 {
    font-size: 42px;
    margin-bottom: 5rem;
    color: #333333;

    @media screen and (min-width: 500px) {
      font-size: 56px;
    }
  }

  @media screen and (min-width: 380px) {
    padding: 20rem 0;
  }

  @media screen and (min-width: 1100px) {
    margin-bottom: 0;
  }
`;

S.Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  a{
    color: unset
  }
  @media screen and (min-width: 1100px) {
    margin-left: 3rem;
  }

`;

S.Skill = styled.div`
  border-radius: 50%;

  .icon {
    font-size: 4rem;
    position: relative;

    &.bootstrap{
      color: rgb(129,10,249);
    }
    &.sass{
      color: #C76494;
    }
    &.react{
      color: rgb(94,211,243);
    }
    &.javascript{
      color: #EFD81D;
    }
    &.firebase{
      color: #ED7B16;
    }
    &.git{
      color: rgb(232,78,49);
    }

    @media screen and (min-width: 450px) {
      font-size: 5rem;
    }

    @media screen and (min-width: 600px) {
      font-size: 6rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 8rem;
    }

    @media screen and (min-width: 1000px) {
      font-size: 10rem;
    }
  }
`;

export default Tools;
