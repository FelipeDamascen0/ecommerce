import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { BsFillTrashFill, BsFillCartFill } from "react-icons/bs";
import "./index.css"


export default function Carrinho() {
  const [div, setDiv] = useState(false);
  const { cart, handleRemoveItemToCart, clearCart } = useContext(CartContext);
  let [totalValue, setTotalValue] = useState();

  useEffect(() => {
    let value = 0
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      value += item.name.price
    })
    setTotalValue(value.toFixed(2))
  },[cart])


  return(
    <div>
      {
        div ? 
        <div className="meuCarrinho">
         <div className="header">

           <div className="close" onClick={() => {setDiv(!div)}}>
             x
           </div>

           <div>
              <h1>Meu Carrinho</h1>
           </div>

           <div className='clearButton'>
            <button onClick={() => clearCart(cart)}>Limpar Carrinho</button>
           </div>

         </div>

         <div className="headerCart">
           <div>Produto</div>
           <div>Valor</div>
         </div>

         <div>
           {
             cart.map((data) => {
               return(
                <div className="infoItemCart">
                  <div className="infoProduct">
                    <div><img src={data.name.img} width="100px" alt={data.name.name}/></div>
                    <div style={{marginLeft: "10px"}}>{data.name.name}</div>
                  </div>

                  <div className="clearButton">
                    <button onClick={() => handleRemoveItemToCart(data)}><BsFillTrashFill size={25} /></button>
                  </div>

                  <div>
                    R${totalValue}
                  </div>
                </div> 
                )
              })
           }
         </div>
        </div>
        :
        ''
      }
      <div className="containerCarrinho" onClick={() => {setDiv(!div)}}>
        <div>
          <div className='cartStatus'>
            {cart.length}
          </div>
          <BsFillCartFill size={25} />
        </div>
        <div><h3>Ver carrinho</h3></div>
        <div><h2>R${totalValue}</h2></div>
      </div>
    </div>
  );
}