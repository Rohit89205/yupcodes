var blog = document.getElementById("latestBlog");
blog.insertAdjacentHTML("afterbegin", `<div class="container">
                
<div class="row">
    <div class="col-md-12">
        <div class="section-title">
            <h2 class="title-bold">Latest Blogs</h2>
            <p class="sub-title">Know more about future Technoogy & Explore them deeply.</p>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        
        <div class="single-blog">
            <div class="blog-wrapper first-blog">
                <a href="blog-details.html"><img src="images/blog-img/blog-home-1.jpg" alt="blog-img" class="img-responsive" /></a>
            </div>
            <div class="date-wrapper">
                <span class="blog-day date">20</span>
                <span class="blog-month date">Oct</span>
            </div>
            <h4><a href="blog-details.html">How to Create Contents That Get Traffic.</a></h4>
           
            
        </div>

    </div>
    <div class="col-md-6">
       
        <div class="single-blog">
            <div class="blog-wrapper">
                <a href="blog-details.html">
                    <img src="images/blog-img/blog-home-2.jpg" alt="blog-img" class="img-responsive" /></a>
            </div>
            <div class="date-wrapper">
                <span class="blog-day date">29</span>
                <span class="blog-month date">Oct</span>
            </div>
            <h4><a href="blog-details.html">How to Create Contents That Get Traffic.</a></h4>
          
        </div>
       
    </div>
    
    <div class="col-md-12 more-btn-wrapper">
        <a href="blog.html" class="btn btn-primary"> See More Blog</a>
    </div>
   
</div>
</div>`);
