import './App.css';
import {useState} from 'react' ;
import FormComponent from './components/form/FormComponent';
import Contacts from './components/contacts/Contacts';

/* her sayfayı yenilediğimde forma yazılanları boşaltmak istiyorum bu yüzden boş stringe eşitliyorum ve state initialvalues ekliyorum*/

const initialValues={
  username : "" ,
  phoneNumber : "" ,
  gender : "NO INFO"
}


function App() {
  /* Forma yazılacak bilgileri bir değişkende tutmakiçin bir state oluşturuyorum.Ve forma göndermek için buradan info ve setinfo değerlerini FormComponent e ekliyorum */
  const [info, setInfo] = useState(initialValues)

  const handleFormSubmit = (e)=> {
    e.preventDefault()
    console.log(info)
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} />
      <Contacts />
    </div>
  );
}

export default App;
