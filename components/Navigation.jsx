import styled from 'styled-components';
import Image from 'next/image';
import NavItems from './NavItems';
import Icon from './UI/Icon';
import { useState } from 'react';
import Router from 'next/router';

function Navigation({ currentPage }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <S.Container>
      <S.Navigation>
        <Image
          alt='Savo Kos Logo'
          src='/logo.png'
          objectFit='cover'
          width='50'
          height='50'
          onClick={() => Router.push('/')}
          className='logo'
        />
        <NavItems
          currentPage={currentPage}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
        <a href='#contact'>
          <S.ContactBtn>Contact</S.ContactBtn>
        </a>
        <Icon
          type='menu'
          className='hamburger-menu'
          onClick={() => setMenuActive((prevActive) => !prevActive)}
        />
      </S.Navigation>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 1.7rem 10%;
  position: fixed;
  z-index: 5;
  background-color: #ffffffeb;
  width: 100%;
`;

S.Navigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .logo {
    cursor: pointer;
  }

  .hamburger-menu {
    font-size: 36px;
    cursor: pointer;
    color: #828282;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

S.ContactBtn = styled.button`
  border-radius: 10rem;
  outline: 0;
  border: 0;
  padding: 0.7rem 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export default Navigation;
