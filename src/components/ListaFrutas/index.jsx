import { useContext, useEffect, useState } from "react";
import fruits from '../../fruit.json'
import { CartContext } from "../../context/cartContext";
import './index.css';

export default function ListaFrutas(){
  let [num, setNum] = useState(0);
  const { handleAddItemToCart } = useContext(CartContext)

  return(
    <div className="containerFrutas">
      { 
        
        fruits.map((data) => {
          return(
            <div className="catalagoFrutas">
              <div className="title">
                <div>
                  {data.name}
                  <p style={{marginRight: '10px'}}>
                    informações nutricionais: <br/>
                    Calorias:{data.nutritions.calories},
                    Carboidratos:{data.nutritions.carbohydrates}<br />
                    Gordura:{data.nutritions.fat},
                    Proteina:{data.nutritions.protein}<br />
                    Açucar:{data.nutritions.sugar}
                  </p>
                </div>
                <div>
                  <img src={data.img} width='100px' alt={data.name}/>
                </div>
              </div>
              <div className="namePrice">
                <div className="price">
                  <button onClick={() => handleAddItemToCart(data)}>Adicionar R${data.price}</button>
                </div>
              </div>
            </div>
          );
        })
      
      }
    </div>
  );
}