import React, { useEffect, useState } from "react";
import Header from './components/Header/index';
import ListaFrutas from './components/ListaFrutas/index'
import Carrinho from './components/Carrinho/index'


function App() {
  
  return (
    <div className="App">
      <Header />
      <ListaFrutas />
      <Carrinho />
    </div>
  );
}

export default App;
