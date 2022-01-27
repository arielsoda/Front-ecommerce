import React from "react";
import { orderAZ, orderZA, minPrice, maxPrice } from '../actions/actionProducts.js'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const ProductsBySearch = ({products, orderAZ, orderZA, minPrice, maxPrice}) => {

    return (
        
        <div className="row">
            <div className="col-lg-3">

                <div className="container-sm " style={{ padding: 20 } }>   
                    <div >
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>orderAZ()}>Orden  A...Z</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>orderZA()}>Orden  Z...A</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>minPrice()}>Precio min...max</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>maxPrice()}>Precio max...min</button>
                        </div>
                    </div>
                </div>
            </div>



                <div className=" card col-lg-8">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row row-cols-0 row-cols-md-3 g-5 mask" Style="background-color: #FAFAFA"    >
                            {
                                products.map(e =>
                                    <div className="col" key={e.id}>
                                        <div className="card animate__animated animate__bounceIn" >
                                            <img src={e.image !== 'not found' ? e.image : "https://i.postimg.cc/SK600jXG/OIP.jpg"} className="card-img-top img-fluid" alt={e.image} style={{padding:"30 0", height: "300px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.category}  ${e.price}</p>
                                                <Link to={`/details/${e.id}`}>
                                                    <button className="btn btn-outline-secondary rounded-pill">ver más...</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.thirdRed.products2,
    };
};

const wrapper = connect(mapStateToProps,{ orderAZ, orderZA, minPrice, maxPrice });
const component = wrapper(ProductsBySearch);

export default component;