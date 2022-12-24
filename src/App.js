import './App.css';
import { Provider } from 'react-redux';
import Store from './store/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ErrorHandleComponent from './components/errorHandle/ErrorHandleComponent';

function App() {
  const urlPath = window.location.pathname;
  let isFlag = false;
  if (urlPath === '/') {
    isFlag = true;
  }
  return (
    <Provider store={Store}>
      <BrowserRouter>
        {isFlag ? (
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path={urlPath} element={<ErrorHandleComponent />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
