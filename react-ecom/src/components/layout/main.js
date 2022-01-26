import card1 from './java.png';
import card2 from './images/css.png';
import card3 from './images/html.jfif';
import card4 from './images/angular.png';
import card5 from './images/react.png';
import card6 from './images/bootstrap.jpg';


let Main = () => {
    return(
        <section>
            <h1>Our core technologies</h1>
            <section class="container mt-3 "  >
  <div class="row">
   <div class="col-lg-4 " >
    <div class="card ch">
      <img class="card-img-top chi " src= {card1} alt="Card image" />
      <div class="card-body">
        <h4 class="card-title">JAVA</h4>
        <p class="card-text">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.Java is the world's most popular programming language.Java is Object Oriented. ·</p>
        <a href="https://www.oracle.com/in/java/" target="_blank" class="btn btn-primary">See Profile</a>
      </div>
    </div>   
   </div>
   <div class="col-lg-4 ">
    <div class="card ch" >
      <img class="card-img-top border chi" src={card2} alt="Card image"  />
      <div class="card-body">
        <h4 class="card-title">CSS</h4>
        <p class="card-text" >Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript</p>
        <a href="https://www.w3.org/Style/CSS/" target="_blank" class="btn btn-primary">See Profile</a>
      </div>
    </div>
    
  </div>
  <div class="col-lg-4 ">
    <div class="card ch">
      <img class="card-img-top" src={card3} alt="Card image" />
      <div class="card-body">
        <h4 class="card-title">HTML</h4>
        <p class="card-text">The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. </p>
        <a href="https://html.com/" target="_blank" class="btn btn-primary">See Profile</a>
      </div>
    </div>
    
  </div>
  </div>
</section>
<div class="container mt-3">
  <div class="row">
    <div class="col-lg-4 " >
      <div class="card ch">
        <img class="card-img-top chi" src={card4}  alt="Card image"/>
        <div class="card-body">
          <h4 class="card-title">ANGULAR</h4>
          <p class="card-text">Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS ·</p>
          <a href="https://www.oracle.com/in/java/" target="_blank" class="btn btn-primary">See Profile</a>
        </div>
      </div>   
     </div>
     <div class="col-lg-4 " >
      <div class="card ch">
        <img class="card-img-top chi" src={card5} alt="Card image"/>
        <div class="card-body">
          <h4 class="card-title">REACT</h4>
          <p class="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.  ·</p>
          <a href="https://www.oracle.com/in/java/" target="_blank" class="btn btn-primary">See Profile</a>
        </div>
      </div>   
     </div>
     <div class="col-lg-4 " >
      <div class="card ch">
        <img class="card-img-top chi"  src={card6}  alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">BOOTSTRAP</h4>
          <p class="card-text">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components. ·</p>
          <a href="https://www.oracle.com/in/java/" target="_blank" class="btn btn-primary">See Profile</a>
        </div>
      </div>   
     </div>

  </div>
</div>
        </section>
    )
}
export default Main;