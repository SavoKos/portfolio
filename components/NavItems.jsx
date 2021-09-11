import styled from 'styled-components';
import Router from 'next/router';
import Icon from './UI/Icon';

function NavItems({ currentPage, menuActive, setMenuActive }) {
  console.log(menuActive);

  return (
    <S.NavItems menuActive={menuActive}>
      <Icon
        type='searchclose'
        className='close'
        onClick={() => setMenuActive(false)}
      />
      <S.NavItem
        currentPage={currentPage === 'home'}
        onClick={() => Router.push('/')}
      >
        Home
      </S.NavItem>
      <S.NavItem
        currentPage={currentPage === 'projects'}
        onClick={() => Router.push('/projects')}
      >
        Projects
      </S.NavItem>
      <S.NavItem
        currentPage={currentPage === 'about'}
        onClick={() => Router.push('/about')}
      >
        About
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
  background-color: #fef0f0;
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
    color: ${({ theme }) => theme.colors.orange};
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

S.NavItem = styled.a`
  margin: 0 2rem;
  color: ${({ currentPage, theme }) =>
    currentPage ? theme.colors.orange : '#4f4f4f'};
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
      background-color: ${({ theme }) => theme.colors.orange50};
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }
`;

export default NavItems;
