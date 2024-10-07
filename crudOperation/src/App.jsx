import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form1';
import UserData from './components/UserData';


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Form/>} />
        <Route exact path="/userData" element={<UserData/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
