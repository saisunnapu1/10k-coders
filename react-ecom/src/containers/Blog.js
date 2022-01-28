import "../css/blog.css";
import p1 from "../Images/pictures/htmllogo.png";
import p2 from "../Images/pictures/csslogo.png";
import p3 from "../Images/pictures/jslogo.png";

let Blog=()=>{
    return(
<div class="container my-5">
	<div class="row">
		<div class="col-lg-4"> <img src={p1} class="w-100 img1"/> </div>
		<div class="col-lg-4"> <img src={p2} class="w-100 img1"/> </div>
		<div class="col-lg-4"> <img src={p3} class="w-100 img1"/> </div>
	</div>
</div>
        
    )
}
export default Blog;