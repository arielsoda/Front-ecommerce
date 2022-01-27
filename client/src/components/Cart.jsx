import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, delCart, delAllCart} from '../actions/actionProducts.js'
import { useNavigate } from 'react-router-dom';
import CartCard from './CartCard.jsx'
import swal from 'sweetalert';

export default function Cart () {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.firstRed.cart)
    const cartStorage = JSON.parse(window.localStorage.getItem('carrito'))
    const cartNav = useSelector((state) => state.firstRed.cartNav)
    // console.log('este es el carrito',cart)

    let total = 0;
    let totalQuantity = 0
    cart.length > 0 && cart.map((e) => {
        total = total + (e.price * e.quantity);
        totalQuantity = Number(totalQuantity) + Number(e.quantity)
    })
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })
    

    const handleDeleteAll = (e) =>  {
        e.preventDefault()
        dispatch(delAllCart())
        window.localStorage.setItem('carrito', JSON.stringify([]))
        swal("Carrito vaciado con exito!", {
            buttons: false,
            icon: 'success',
            timer: 2000,
          });
    }
    // animate__slideOutRight
    return (
        <div className = {cartNav === false ? "row animate__animated animate__slideOutRight" : "row animate__animated animate__slideInRight"} style={{position: 'absolute', right: '12px', top: '95px', background: '#E9E9E9', overflowY: "scroll", height: '90.5vh'}}>
                <div className="container-sm">
                    <div>
                        <div>
                            <button onClick = {(e) => handleDeleteAll(e)}className='btn btn-warning btn-lg' style={{margin: '5px 0 5px'}}>CLEAR CART</button>
                        </div>
                        {cart ? cart?.map((e) => {
                        return (
                            <div style={{margin: '5px',}}>
                                <hr />
                                <CartCard 
                                id = {e.id}
                                name = {e.name}
                                price = {e.price}
                                image = {e.image}
                                quantity = {e.quantity}
                                stock = {e.stock}
                                />
                            </div>
                            )
                        }): <h4>NO HAY NADA EN EL CARRITO</h4>}     
                    </div>
                    <div className='carrito_footer'>
                        <hr />
                        <h1>TOTAL = ${formato.format(total)}</h1>
                        <div className='carrito_izq'>
                            <div>
                                <hr />
                                <button className='btn btn-warning btn-lg' style={{margin: '5px 0'}}>CHECKOUT</button> 
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}