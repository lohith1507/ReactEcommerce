import { BrowserRouter } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import AppRoutes from './routes/routes';

export const globalContext = createContext();

function App() {

  const [authData, setAuthData] = useState();
  const [productsData, setProductsData] = useState();
  
  const getAuthData = async () =>{
    await fetch("http://localhost:5000/auth")
    .then(res => {return res.json()})
    .then(data => {
      setAuthData(data)
    })
  }

  const fetchProductsData = async () =>{
    await fetch("http://localhost:5000/products")
    .then(res => {return res.json()})
    .then(data =>{
      setProductsData(data);
    })
  }

  useEffect(() =>{
    getAuthData();
    fetchProductsData();
  },[])

  return (
      <globalContext.Provider value={{authData, productsData}}>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </globalContext.Provider>
  );
}

export default App;
