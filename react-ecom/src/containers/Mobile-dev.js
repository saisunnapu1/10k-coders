import "../css/mobdev.css";
import p1 from "../Images/pictures/mobile/mobile1.png"
let MobDev=()=>{
    return(
<section class="body">
	<h1 class="text-white text-center text-uppercase mt-3">
          mobile development</h1>
	<div class="container my-5">
		<div class="row">
			<div class="col-lg-2"> </div>
			<div class="col-lg-8"> <img src={p1} alt="mob" class="w-100 border"/> </div>
			<div class="col-lg-2"> </div>
		</div>
	</div>
	<p class="text-white fs-3 container"> In the smartphone era, people bring their portable devices everywhere with them, depending on and putting many everyday life informations, such as appointments or groceries lists in them. Whether it is a phone or a tablet, you will always find a mobile app on it, helping someone manage their schedule, improve their productiveness or entertain them. All thanks to one of the software development’s division – mobile development. It allows to create a specific app to fit your expectations. There are few types of it, as well as platforms that apps operate on. Determined by your target audience’s needs and app characteristics, you are able to pick the best technique for your product. </p>
</section>
    )
}
export default MobDev;