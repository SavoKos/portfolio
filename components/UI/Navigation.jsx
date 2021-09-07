import styled from 'styled-components';
import Image from 'next/image';
import NavItems from './NavItems';

function Navigation({ active }) {
  return (
    <S.Navigation>
      <Image src='/logo.png' objectFit='cover' width='50' height='50' />
      <NavItems active={active} />
      <S.ContactBtn>Contact</S.ContactBtn>
    </S.Navigation>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Navigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

S.ContactBtn = styled.button`
  border-radius: 10rem;
  outline: 0;
  border: 0;
  padding: 0.7rem 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  cursor: pointer;
`;

export default Navigation;
