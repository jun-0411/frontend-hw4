import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
