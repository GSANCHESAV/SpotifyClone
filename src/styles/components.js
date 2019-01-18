import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px;
  background-repeat: no-repeat;
  background-position: top;
`;