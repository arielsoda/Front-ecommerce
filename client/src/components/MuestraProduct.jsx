import React from "react";

const MuestraProduct = ()=>{
    return(
        <div>
            <h2>soy carousel 1</h2>
            <div className="row">
                <div className="col" Style="background-color: gray">
                        <div className="carousel-item active">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="images/apple.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..."/>
                            </div>
                        </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default MuestraProduct;