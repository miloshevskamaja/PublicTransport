import React, { useContext } from "react";
import { useCart } from "react-use-cart"
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate=useNavigate();

    const buy = () =>{
        navigate('/success');
    };
    
    // const checkout = async()=>{
    //     await fetch('http://localhost:4242/checkout',{
    //         method:"POST",
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //        // mode:"cors",
    //         body: JSON.stringify({items: items})
    //     }).then((response)=>{
    //         return response.json();
    //     }).then((response)=>{
    //         if(response.url){
    //             window.location.assign(response.url);
    //         }
        
    // })
//}

// const checkout =async()=>{
//     fetch("http://localhost:4000/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 3 },
//         { id: 2, quantity: 1 },
//       ],
//     }),
//   })
//     .then(res => {
//       if (res.ok) return res.json()
//       return res.json().then(json => Promise.reject(json))
//     })
//     .then(({ url }) => {
//       window.location = url
//     })
//     .catch(e => {
//       console.error(e.error)
//     })
// }

    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
         } = useCart();
    if (isEmpty) return <h1 className="text-center">Вашата Корпа Е Празна</h1>
    return (
        <section className="py-4 container">
        <div className="row justify-content-center">
            <div className="col-12">
                <h5>Избрани производи ({totalUniqueItems})  Вкупна количина: ({totalItems})</h5>
                <table className="table table-light table-hover m-0">
                    <tbody>
                    {items.map((item, index)=>{
                        return (
                        <tr key={index}>
                            <td>
                                <img src={item.img} style={{height: '6rem'}}/>
                            </td>
                            <td>{item.title}</td>
                            <td>€ {item.price}</td>
                            <td>Количина ({item.quantity})</td>
                            <td>
                                <button className="btn btn-info ms-2"
                                onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                <button className="btn btn-info ms-2"
                                 onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                <button className="btn btn-danger ms-2"
                                onClick={() =>removeItem(item.id)}>Избриши Производ</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
             <div className="col-auto ms-auto">
                <h2>Вкупно: {cartTotal}€</h2>
             </div>
             <div className="col-auto">
                <button className="btn btn-danger m-2"
                onClick={()=> emptyCart()}>Испразни Корпа</button>
                <button variant="success" className="btn btn-primary m-2" onClick={buy}>Плати</button>
             </div>
        </div>
        </section>
    );
};

export default Cart;