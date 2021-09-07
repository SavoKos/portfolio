import styled from 'styled-components';
import Navigation from '../components/Navigation';

function about() {
  return (
    <S.PageContainer>
      <Navigation active='about' />
    </S.PageContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PageContainer = styled.div`
  padding: 3rem 10%;
`;

export default about;
