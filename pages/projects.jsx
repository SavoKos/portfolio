import styled from 'styled-components';
import Navigation from '../components/Navigation';

function projects() {
  return (
    <S.PageContainer>
      <Navigation currentPage='projects' />
    </S.PageContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PageContainer = styled.div`
  padding: 3rem 10%;
`;

export default projects;
