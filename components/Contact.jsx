import styled from 'styled-components';
import { Tag } from '../Theme';
import Image from 'next/image';

function Contact() {
  return (
    <S.Container>
      <S.Contact>
        <S.Details>
          <Tag>Contact</Tag>
          <h1>Let's Get in</h1>
          <h1>Touch</h1>
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
  padding: 3rem 10%;
  background-image: url('/wave.png');
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

S.Contact = styled.div`
  margin-top: 10rem;
  padding: 10rem 5rem;
  background-color: #fff;
  box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 1px 1px 25px -1px rgba(0, 0, 0, 0.13);
  display: flex;
  border-radius: 5rem;

  p {
    margin: 4rem 0;
    color: #828282;
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
`;

S.Right = styled.div`
  position: relative;
  width: 100%;
`;

S.Planets = styled.div`
  position: absolute;
  top: -22rem;
  right: -22rem;
  width: 920px;
  height: 950px;
`;

S.Form = styled.div`
  margin-top: 25rem;
  width: 100%;

  input,
  textarea {
    width: 80%;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    padding: 1.5rem;
    outline: 0;
    border: 0;

    &:nth-of-type(2) {
      margin: 1rem 0;
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
