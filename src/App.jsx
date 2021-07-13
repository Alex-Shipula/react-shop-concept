import Layout from "./layout/layout";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        <h1>Hello !!!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
