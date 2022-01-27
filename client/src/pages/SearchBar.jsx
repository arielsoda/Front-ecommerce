import React from 'react';
import { useEffect, useState } from "react";
import {getProductByName} from '../actions/actionProducts.js'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';

function SearchBar() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  /* useEffect(()=> {
    localStorage.setItem('products', name)
        let a = localStorage.getItem('products')
        console.log('aaaaaaa', a)
  }) */

  useEffect(() => {
    dispatch(getProductByName(name))
  }, [dispatch, name],console.log('NAME', name))

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
        dispatch(getProductByName(name));
        Navigate(`/search`)
    }
  };


  return (
  <form className="d-flex">
  <input className="form-control me-2"
      type="text"
      placeholder="Encuentra tu producto"
      aria-label="Search"
      autoComplete="off"
      value={name}
      onChange={(e) => handleChange(e)}
  />
  <button className="btn btn-outline-light" type= "submit"
      onClick= {(e) => handleSubmit(e)}
      >Buscar
  </button>
</form>
  )}

export default SearchBar;