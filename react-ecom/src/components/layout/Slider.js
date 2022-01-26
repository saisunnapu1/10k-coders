  function Slider(){//normal function was used instead of arrow  function
    return ( 
 <div id="demo" className="container-fluid my-3 carousel slide bg-secondary" data-bs-ride="carousel">


    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
    
   
    <div className="carousel-inner">
      <div className="carousel-item active h">
        <img src="../images/react_banner.png" alt="Los Angeles" className="d-block height w-100"/>
      </div>
      <div className="carousel-item h">
        <img src="../images/node_js.png" alt="Chicago" className="d-block height w-100"/>
      </div>
      <div className="carousel-item h">
        <img src="../images/angular_banner.png" alt="New York" className="d-block height w-100 "/>
      </div>
    </div>
    
    
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
</div> )

}
export default Slider;