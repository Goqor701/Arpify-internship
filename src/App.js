import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='/form' element={<Form/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
