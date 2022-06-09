
import './App.css';
 import Photo from './component/profile/ProfilePhoto';
 import Name from './component/profile/FullName'
 import Address from './component/profile/address';


function App() {
  return (
    
    <div className="App">
      <div className='Spacer'></div>
      <Photo/>
      <div className='Spacer'></div>
      <Name/>
      <div className='Spacer'></div>
      <Address/>

      

    </div>
  );
}

export default App;
