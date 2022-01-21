import { createContext, useState } from "react";

export const CartContext = createContext({

})

export const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([])

  function handleAddItemToCart(name, price){
    const itemObejct = {name, price};
    setCart([...cart, itemObejct])
  }

  function handleRemoveItemToCart(clickedItem){
    let newCart = cart.filter((item) => item !== clickedItem )
    setCart([...newCart])

    console.log(newCart)
  }

  function clearCart(){
    setCart([])
  }


  return(
    <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveItemToCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}