import styled from 'styled-components';
import { useRouter } from 'next/router';
import { IoClose } from 'react-icons/io5';

function NavItems({ currentPage, menuActive, setMenuActive }) {
  const router = useRouter();
  
  return (
    <S.NavItems menuActive={menuActive}>
      <IoClose className='close' onClick={() => setMenuActive(false)} />
      <S.NavItem
        currentPage={currentPage === 'home'}
        onClick={() => router.push('/')}
      >
        Home
      </S.NavItem>
      <S.NavItem
        currentPage={currentPage === 'projects'}
        onClick={() => router.push('/projects')}
      >
        Projects
      </S.NavItem>
      <S.NavItem
        currentPage={currentPage === 'about'}
        onClick={() => router.push('/about')}
      >
        About
      </S.NavItem>
      <S.NavItem
        currentPage={currentPage === 'contact'}
        onClick={() => router.push('/contact')}
      >
        Contact
      </S.NavItem>
    </S.NavItems>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.NavItems = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  flex-direction: column;
  right: 0;
  transform: translateX(${(props) => (props.menuActive ? '0' : '120%')});
  top: 0;
  height: 100vh;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.95);
  width: 100%;
  z-index: 5;
  transition: all ease 0.5s;

  @media screen and (min-width: 768px) {
    position: static;
    flex-direction: row;
    transform: translateX(0%) !important;
    width: unset;
    height: unset;
    background-color: transparent;
  }

  .close {
    position: absolute;
    left: 2rem;
    top: 2rem;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

S.NavItem = styled.a`
  margin: 0 2rem;
  color: ${({ currentPage, theme }) =>
    currentPage ? theme.colors.primary : 'rgba(255, 255, 255, 0.7)'};
  position: relative;
  transition: all ease 0.3s;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: unset;
  }

  &::after {
    transition: all ease 0.3s;
    content: '';
    width: 100%;
    height: 2px;
    background-color: transparent;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  &:hover {
    transition: all ease 0.3s;
    &::after {
      transition: all ease 0.3s;
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }
`;

export default NavItems;
