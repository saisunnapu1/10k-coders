let Slider= () =>{
    return ( 
 <div id="demo" class="container-fluid my-3 carousel slide bg-secondary" data-bs-ride="carousel">


    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
    
   
    <div class="carousel-inner">
      <div class="carousel-item active h">
        <img src="../images/react_banner.png" alt="Los Angeles" class="d-block height w-100"/>
      </div>
      <div class="carousel-item h">
        <img src="../images/node_js.png" alt="Chicago" class="d-block height w-100"/>
      </div>
      <div class="carousel-item h">
        <img src="../images/angular_banner.png" alt="New York" class="d-block height w-100 "/>
      </div>
    </div>
    
    
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
</div> )

}
export default Slider;