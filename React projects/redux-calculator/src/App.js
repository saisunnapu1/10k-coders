import logo from './logo.svg';
import './App.css';
import CalculatorApp from './CalculatorApp';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <div className="App">
   <div className="container-fluid p-5 bg-primary text-white text-center keypad w-25 mt-4">
  <h1>Calculator App</h1>
  {/* <p>Resize this responsive page to see the effect!</p>  */}
</div>
  

    <Provider store={store} >
    <CalculatorApp/>
    </Provider>


    </div>
  );
}

export default App;
