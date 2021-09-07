import styled from 'styled-components';

function NavItems({ active }) {
  return (
    <S.NavItems>
      <S.NavItem active={active === 'home'} onClick={() => Router.push('/')}>
        Home
      </S.NavItem>
      <S.NavItem
        active={active === 'projects'}
        onClick={() => Router.push('/projects')}
      >
        Projects
      </S.NavItem>
      <S.NavItem
        active={active === 'about'}
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
`;

S.NavItem = styled.a`
  margin: 0 2rem;
  color: ${({ active, theme }) => (active ? theme.colors.orange : '#4f4f4f')};
  position: relative;
  transition: all ease 0.3s;

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
