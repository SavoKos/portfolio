import styled from 'styled-components';
import { Tag } from '../Theme';
import Image from 'next/image';
import Icon from './UI/Icon';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

function Contact() {
  const [submitState, setSubmitState] = useForm('xdoyjzwj');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  console.log(submitState);

  console.log(message);

  useEffect(() => {
    console.log(submitState.succeeded);
    if (submitState.succeeded) {
      setEmail('');
      setMessage('');
      setName('');
      notification();
    }
  }, [submitState.succeeded]);

  const notification = () =>
    toast.success(
      'Thank you for getting in touch! Your submission is recieved and I will contact you soon.',
      { style: { textAlign: 'center' }, position: 'bottom-left' }
    );

  return (
    <>
      <S.Contact id='contact'>
        <Toaster toastOptions={{ duration: 5000 }} />
        <S.Details>
          <Tag data-aos='fade-down'>Contact</Tag>
          <h1 data-aos='fade-down'>
            Let's Get in <br /> Touch
          </h1>
          <p data-aos='fade-up'>
            Feel free to reach out for
            <br />
            collaborations or just
            <br />a friendly hello!
          </p>
          <S.Info>
            <S.Mail data-aos='fade-up'>
              <S.InfoRing>
                <Icon type='email1' />
              </S.InfoRing>
              <a href='mailto:savo.kos.sk@gmail.com' target='_blank'>
                savo.kos.sk@gmail.com
              </a>
            </S.Mail>
            <S.Github data-aos='fade-up'>
              <S.InfoRing>
                <Icon type='github' />
              </S.InfoRing>
              <a href='https://github.com/SavoKos' target='_blank'>
                github.com/SavoKos
              </a>
            </S.Github>
          </S.Info>
        </S.Details>
        <S.Right>
          <S.Planets data-aos='fade-down'>
            <Image src='/planets.png' layout='fill' objectFit='cover' />
          </S.Planets>
          <S.Form data-aos='fade-up' onSubmit={setSubmitState}>
            <input
              type='text'
              placeholder='Name'
              name='name'
              id='name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <ValidationError prefix='Name' field='name' />
            <input
              type='email'
              placeholder='Email'
              name='_replyto'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={submitState.errors}
            />
            <textarea
              id='message'
              cols='30'
              rows='10'
              placeholder='Message'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            ></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={submitState.errors}
            />
            <S.Btn
              data-aos='fade-up'
              type='submit'
              disabled={submitState.submitting}
            >
              Let's talk!
            </S.Btn>
          </S.Form>
        </S.Right>
      </S.Contact>
      <p className='copyright'>Copyright © Developed by Savo. .</p>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Contact = styled.div`
  position: relative;
  margin-top: 10rem;
  padding: 5rem 3rem;
  background-color: #fff;
  box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  display: flex;
  border-radius: 2rem;
  flex-direction: column;

  @media screen and (min-width: 880px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1000px) {
    padding: 5rem;
  }

  p {
    margin: 2rem 0;
    color: #828282;
    font-size: 16px;

    @media screen and (min-width: 1000px) {
      font-size: 18px;
    }
  }
`;

S.Info = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #4f4f4f;
    margin-left: 1rem;
    font-size: 14px;

    @media screen and (min-width: 1000px) {
      font-size: 16px;
    }
  }
`;

S.InfoRing = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  color: #fff;
  display: grid;
  place-items: center;

  @media screen and (min-width: 1000px) {
    width: 40px;
    height: 40px;

    .anticon {
      font-size: 24px;
    }
  }

  .anticon {
    font-size: 19px;
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
    font-size: 48px;
    @media screen and (min-width: 1000px) {
      font-size: 56px;
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
  right: -4rem;

  @media screen and (min-width: 387px) {
    top: -39rem;
    right: -4rem;
  }

  @media screen and (min-width: 440px) {
    right: -5rem;
  }

  @media screen and (min-width: 650px) {
    width: 300px;
    height: 300px;
    right: -7rem;
  }

  @media screen and (min-width: 880px) {
    top: -13rem;
  }
`;

S.Form = styled.form`
  margin-top: 5rem;
  width: 100%;

  @media screen and (min-width: 880px) {
    margin-top: 13rem;
    flex-direction: row;
  }

  input,
  textarea {
    resize: none;
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    padding: 1rem;
    outline: 0;
    border: 0;

    @media screen and (min-width: 1000px) {
      padding: 1.5rem;

      &:nth-of-type(2) {
        margin: 1rem 0;
      }
    }

    &:nth-of-type(2) {
      margin: 0.5rem 0;
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
  padding: 0.7rem 2.3rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-size: 16px;
  margin-top: 3rem;
  cursor: pointer;
  position: relative;

  @media screen and (min-width: 1000px) {
    padding: 1rem 3rem;
    font-size: 16px;
  }
`;

export default Contact;
