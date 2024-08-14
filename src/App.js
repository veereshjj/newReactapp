import logo from './logo.svg';
import './App.css';
import './Header/Header'
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
