import styled from 'styled-components';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function ScrollToTop() {
  return (
    <S.ScrollToTop onClick={() => window.scrollTo(0, 0)}>
      <MdOutlineKeyboardArrowUp className='icon' />
    </S.ScrollToTop>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.ScrollToTop = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 50px;
  height: 50px;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 4;
  display: grid;
  place-items: center;
  color: #fff;
  cursor: pointer;
  outline: 0;

  .icon {
    font-size: 28px;
  }
`;

export default ScrollToTop;
