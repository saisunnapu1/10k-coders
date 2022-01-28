import "../css/cloud.css";
import p1 from "../Images/pictures/cloud/cloud.png";
import p2 from "../Images/pictures/cloud/cloud-business.png";
let Cloud=()=>{
    return(
<section class="body">
	<h1 class="text-center text-uppercase text-white my-4">Cloud computing</h1>
	<div class="container my-3">
		<div class="row">
			<div class="col-lg-6">
				<p class="text-white fs-4"> Cloud computing is the delivery of different services through the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software. ... As long as an electronic device has access to the web, it has access to the data and the software programs to run it. </p>
			</div>
			<div class="col-lg-6"> <img src={p1} class="w-100 border"/> </div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-6"> <img src={p2} class="w-100 border"/> </div>
			<div class="col-lg-6">
				<p class="text-white fs-4"> Cloud computing provides a way for your business to manage your computing resources online. The term has evolved over recent years, and can be used to describe the use of a third party for your storage and computing needs. The 'cloud' refers to the internet, and operating 'in the cloud' describes the way you store and access your data through an internet connection. </p>
			</div>
		</div>
	</div>
</section>
    )
}
export default Cloud;