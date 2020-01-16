var header = document.getElementById("body");
header.insertAdjacentHTML("afterbegin",`<header id="top">
            

<nav class="navbar  navbar-expand-lg navbar-light top-navbar" data-toggle="sticky-onscroll">
    <div class="container">
        <a class="navbar-brand" href="#"><img src="images/favicon/favicon-32x32.png" alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav pull-right">
                <li class="nav-item ">
                    <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="index.html">About</a>
            </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Explore more <i class="icon-chevron-down"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="search-engine-optimization.html"> <span class="icon-find-replace"></span>Search Engine Optimization</a>
                        <a class="dropdown-item" href="search-engine-marketing.html">
                            <span class="icon-network"></span>Search Engine Marketing</a>
                        <a class="dropdown-item" href="social-media-marketing.html"> <span class="icon-group-work"></span>Social Media Marketing</a>
                        <a class="dropdown-item" href="pay-per-click.html"> <span class="icon-finger-tap"></span>Pay Per Click</a>
                        <a class="dropdown-item" href="content-marketing.html"> <span class="icon-register"></span> Content Marketing</a>
                        <a class="dropdown-item" href="custom-website-design.html"> <span class="icon-stream-check"></span>Custom Website Design</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                </li>
              
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#getInToucheModal">MORE INFO</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</header>`);