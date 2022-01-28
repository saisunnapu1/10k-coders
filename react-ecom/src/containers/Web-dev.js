import "../css/webdev.css";
import p1 from "../Images/pictures/full-stack.png";
import p2 from "../Images/pictures/fend.png";
import p3 from "../Images/pictures/bend.png";
import p4 from "../Images/pictures/database.png";
import p5 from "../Images/pictures/roadmap-wb.png";
let WebDev=()=>{
    return(
        // <h1>we update</h1>
       <section className="body">
	<section class="container my-5 ">
		<div class="row my-3">
			<div class="col-lg-6 "> 
                 <img src={p1} class="w-100"/>
            </div>
			<div class="col-lg-6 ">
				<h1 class="text-white fw-bolder text-uppercase ">Web development</h1>
				<li class="text-white fs-3">frontend</li>
				<li class="text-white fs-3">Backend</li>
				<li class="text-white fs-3">Database</li>
				<div class="row">
					<div class="col-lg-4"> <img src={p2} class="w-100 fsh"/> </div>
					<div class="col-lg-4"> <img src={p3} class="w-100 fsh"/> </div>
					<div class="col-lg-4"> <img src={p4} class="w-100 fsh"/> </div>
				</div>
			</div>
		</div>
	</section>
    <div class="container">
            <div class="row text">
                <div class="col-lg-6">
                    <h3>Web development</h3>
                    <p>Web development refers to building website and deploying on the web. Web development requires use of scripting languages both at the server end as well as at client end</p>
                    <h4>Web development tools</h4>
                    <p>Web development tools helps the developer to test and debug the web sites. Now a days the web development tooll come with the web browsers as add-ons. All web browsers have built in tools for this purpose. Thsese tools allow the web developer to use HTML, CSS and JavaScript etc.. These are accessed by hovering over an item on a web page and selecting the “Inspect Element” from the context menu. </p> <img src="https://www.flyingpenguins.in/blogs/wp-content/uploads/2020/08/Web-Development.jpg" class="w-100"/>
                    <p>An ever-growing set of tools and technologies have helped developers build more dynamic and interactive Web sites. Further, Web developers now help to deliver applications as Web services which were traditionally only available as applications on a desk-based computer. This has allowed for many opportunities to decentralize information and media distribution.</p>
                </div>
                <div class="col-lg-6">
                    <img src={p5} class="w-100 sh"/> 
                    
                    
                     
                </div>
            </div>
    </div>
</section>
     
    )
}
export default WebDev;