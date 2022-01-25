let Header = ()=>{
    return (   
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
    <div class="container-fluid">
        <img src="https://www.10000coders.co/assets/10000coders-logo.png?v=1.0" alt="logo" class="bg-white m-3 " width="10%"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                    <a class="nav-link active text-danger m-3 active" aria-current="page" href="#">Home</a>
                </li>
              
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white m-3" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Training
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="web_development.html">Web devlopment</a></li>
                        <li><a class="dropdown-item" href="cloud_compute.html">Cloud computing</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="mobile_development.html">Moblie Application</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white m-3" href="client.html">Client</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white m-3" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white m-3" href="about.html">About</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li class="nav-item">
                    <a class="nav-link active bg-dark" aria-current="page" href="#loginform">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#myModal">Log in</button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#exampleModal">
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#myModal1">Register</button></a>
                            </li>
            </ul>
            
        </div>
    </div>
    </nav>
    )
}
export default Header;
