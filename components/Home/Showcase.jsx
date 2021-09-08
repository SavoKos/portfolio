import styled from 'styled-components';
import { Tag } from '../../Theme';
import Image from 'next/image';

function Showcase() {
  return (
    <S.Showcase>
      <S.ProjectsBg>
        <Image src='/ring-projects-bg.png' layout='fill' objectFit='cover' />
      </S.ProjectsBg>
      <S.Tag>Showcase</S.Tag>
      <h3>My Latest Projects</h3>
    </S.Showcase>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Showcase = styled.div`
  padding: 10rem 0;

  h3 {
    font-size: 40px;
    text-align: center;

    @media screen and (min-width: 500px) {
      font-size: 48px;
    }
  }
`;

S.Tag = styled(Tag)`
  text-align: center;
`;

S.ProjectsBg = styled.div`
  position: absolute;
  min-width: 15rem;
  left: 0;
  min-height: 21rem;

  @media screen and (min-width: 500px) {
    min-width: 26.5rem;
    min-height: 37rem;
  }
`;

export default Showcase;
