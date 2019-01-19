import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
// COMO É UM COMPONENTE DIFERENTE, UTILIZA-SE O styled COMO UMA FUNÇÃO.
export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 0 20px 30px 0;
  width: 250px;
  text-decoration: none;

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover {
    opacity: 0.4;
  }
`;
