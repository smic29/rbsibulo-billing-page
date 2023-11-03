import './App.css';
import logo from './Assets/Company_Logo-nobg.png'
import BillingForm from './Pages/Billing Form';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="rbsibulo logistics" 
      className='main-logo'/>
      <BillingForm />
    </div>
  );
}

export default App;
