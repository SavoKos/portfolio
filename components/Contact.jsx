import styled from 'styled-components';
import { Tag } from '../Theme';
import Image from 'next/image';

function Contact() {
  return (
    <S.Container>
      <S.Contact>
        <S.Details>
          <Tag>Contact</Tag>
          <h1>Let's Get in Touch</h1>
          <p>
            Feel free to reach out for
            <br />
            collaborations or just
            <br />a friendly hello!
          </p>
          <S.Info>
            <S.Mail>
              <Image src='/mail.png' width={35} height={35} />
              <a href='mailto:savo.kos.sk@gmail.com' target='_blank'>
                savo.kos.sk@gmail.com
              </a>
            </S.Mail>
            <S.Github>
              <Image src='/github.png' width={35} height={35} />
              <a href='https://github.com/SavoKos' target='_blank'>
                github.com/SavoKos
              </a>
            </S.Github>
          </S.Info>
        </S.Details>
        <S.Right>
          <S.Planets>
            <Image src='/planets.png' layout='fill' objectFit='cover' />
          </S.Planets>
          <S.Form>
            <input type='text' placeholder='Name' />
            <input type='mail' placeholder='Email' />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Message'
            ></textarea>
            <S.Btn>Let's talk!</S.Btn>
          </S.Form>
        </S.Right>
      </S.Contact>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 3rem 5%;
  background-image: url('/wave.png');
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 400px) {
    padding: 3rem 10%;
  }
`;

S.Contact = styled.div`
  margin-top: 10rem;
  padding: 3rem 1rem;
  background-color: #fff;
  box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  display: flex;
  border-radius: 2rem;
  flex-direction: column;

  p {
    margin: 2rem 0;
    color: #828282;

    @media screen and (min-width: 880px) {
      margin: 4rem 0;
    }
  }

  @media screen and (min-width: 440px) {
    padding: 10rem 3rem;
  }

  @media screen and (min-width: 650px) {
    border-radius: 5rem;
    padding: 10rem 5rem;
  }

  @media screen and (min-width: 880px) {
    flex-direction: row;
  }
`;

S.Info = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #4f4f4f;
    margin-left: 1rem;
  }
`;

S.Mail = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
`;

S.Github = styled.div`
  align-items: center;
  display: flex;
`;

S.Details = styled.div`
  width: 100%;

  h1 {
    font-size: 56px;
    @media screen and (min-width: 400px) {
      font-size: 64px;
    }
  }
`;

S.Right = styled.div`
  position: relative;
  width: 100%;
`;

S.Planets = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: -40rem;
  right: -2rem;

  @media screen and (min-width: 440px) {
    top: -51rem;
    right: -5rem;
  }

  @media screen and (min-width: 480px) {
    top: -45rem;
  }

  @media screen and (min-width: 650px) {
    width: 300px;
    height: 300px;
    right: -7rem;
  }

  @media screen and (min-width: 880px) {
    top: -13rem;
  }

  @media screen and (min-width: 1000px) {
    width: 400px;
    height: 400px;
  }
`;

S.Form = styled.div`
  margin-top: 5rem;
  width: 100%;

  @media screen and (min-width: 880px) {
    margin-top: 25rem;
    flex-direction: row;
  }

  input,
  textarea {
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    padding: 1.5rem;
    outline: 0;
    border: 0;

    &:nth-of-type(2) {
      margin: 1rem 0;
    }

    @media screen and (min-width: 1200px) {
      width: 80%;
    }
  }
`;

S.Btn = styled.button`
  outline: 0;
  border: 0;
  border-radius: 10rem;
  padding: 1rem 3.5rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-size: 18px;
  margin-top: 5rem;
  cursor: pointer;
  position: relative;
`;

export default Contact;
