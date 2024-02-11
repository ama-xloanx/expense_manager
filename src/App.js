import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/header';
import { Balance } from "./components/balance";
import { Income_expense } from './components/income_expense';
import { TransactionHistory } from './components/transactionHistory';
import { AddTransaction } from './components/addTransaction';
import { Analytics } from './components/analytics';




function App() {
  return (
    <div className="App">
      <Header /> 
      <GlobalProvider>
          <Container className='container'>
          <Row>
            <Col > 
              <Balance/>  
              <Income_expense /> 
            </Col>
          </Row>
          <Row>
            <Col> <AddTransaction /> </Col>
            <Col > <TransactionHistory/> </Col>
          </Row>
        </Container>
      </GlobalProvider>
    </div>

  );
}

export default App;
