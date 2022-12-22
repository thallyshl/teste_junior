import Header from './components/Header';
import BoxMain from './components/BoxMain';
import ButtonPagination from './components/ButtonPagination';
import styled from 'styled-components';

function App() {

  return (
    <>
      <Header />
      <BoxMain />
      <Container>
        <ButtonPagination
          text={'Anterior'}
          action={'handlePreviousPagination'}
        />
        <ButtonPagination
          text={'Próximo'}
          action={'handleNextPagination'}
        />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  width: 60%;
  //background-color: blue;
`;
