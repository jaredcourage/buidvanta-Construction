<?php
include('header.php'); 
?>











<!---- the up images -->


<section class="section-image-up">

    <div class="image-up-contianer">
    
    <img src="https://images.pexels.com/photos/26754646/pexels-photo-26754646/free-photo-of-interior-of-a-railway-station.jpeg?auto=compress&cs=tinysrgb&w=800"> 
    </div>
    
    </section>





<!------- the first section-->



<section class="fist-section">

    <div class="fisrt-contianer">


    <div class="add-two">


    <div class="black-rule"></div>
    <p>About BVC</p>  
    </div>

    <div class="clearfix"></div>




    <div class="first-batch">
     <h1>Together we build success</h1> 
    </div>



    <div class="first-batch">
        <p>
         

            From small renovations to complex billion-dollar projects. From modular construction to advanced digital  <br>
            technologies to cutting-edge sustainability, BVC has you covered.technologies to cutting-edge sustainability, BVC has you covered.<br>
            We redefine full-service and bring expertise across all project types, at all scales and under all procurement <br> 
            models. As innovative solution providers and construction specialists, we leverage our expertise to customize the <br>
            right approach for your project, maximizing value for the best price.
        </p>  


        

       </div>




    </div>     

    </section>







<!-- galerry section -->




<section class="gallery-section">




    <div class="gallery-container">
        <img src="https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 1" onclick="openLightbox(this)">
        <img src="https://images.pexels.com/photos/69483/pexels-photo-69483.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 2" onclick="openLightbox(this)">
        <img src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 3" onclick="openLightbox(this)">
        <img class="you" src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 4" onclick="openLightbox(this)">
    </div>

    <!-- Lightbox Modal -->
    <div class="lightbox" id="lightbox">
        <span class="close-btn" onclick="closeLightbox()">&times;</span>
        <img id="lightbox-img">
    </div>



</section>






<!----the purpose  codes -->


<section  class="purpose-section">
<div class="mega">
<h1>Our Purpose</h1>

<p>
    As industry leaders, we model the highest standards of <br>
    corporate social responsibility with uncompromising <br> 
    commitment to diversity, inclusion, sustainability and <br>
    innovation. We do this in collaboration with our clients, partners <br>
    and communities to build a better future, together.     
</p>
</div>
</section>








<!------- the first section-->



<section class="fist-section">

    <div class="fisrt-contianer">


    <div class="add-two">


    <div class="black-rule"></div>
    <p>Our Commitments</p>  
    </div>

    <div class="clearfix"></div>




    <div class="first-batch">
     <h1>We know that every decision has an impact  </h1> 
    </div>



    <div class="first-batch">
        <p>
            <br>
            Our commitments to safety, quality, sustainability and community stewardship <br>
            ensure your lasting success.
        </p>  


        

       </div>
    </div>     

    </section>








    <!-- galerry section 2 -->




<section class="gallery-section">




    <div class="gallery-container">
        <img src="https://images.pexels.com/photos/5583254/pexels-photo-5583254.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Gallery Image 1" onclick="openLightbox(this)">
        <img src="https://images.pexels.com/photos/6990603/pexels-photo-6990603.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Gallery Image 2" onclick="openLightbox(this)">
        <img src="https://images.pexels.com/photos/4482009/pexels-photo-4482009.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Gallery Image 3" onclick="openLightbox(this)">
        <img class="you" src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 4" onclick="openLightbox(this)">
    </div>

    <!-- Lightbox Modal -->
    <div class="lightbox" id="lightbox">
        <span class="close-btn" onclick="closeLightbox()">&times;</span>
        <img id="lightbox-img">
    </div>



</section>







    <!---- the widgwt aections -->


<section class="widget-section">

    <!-- Widget Button -->
    <div class="widget">
        <h2>Ready to work together?</h2>
        <p>Whether you have a project in mind or looking for a career move, we want to hear from you!</p>
        <a href="#" id="openForm">Get Started</a>
        <a href="Buid A Career With Us.php" id="openForm">Buid A Career with us</a>
    </div>
    
    <!-- Pop-Up Modal -->
    <div class="modal" id="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
    
            <!-- Step 1: Choose Project -->
            <div class="step" id="step1">
                <h3>Choose Your Project</h3>
                <label><input type="checkbox" name="project" value="Residential"> Residential Construction</label>
                <label><input type="checkbox" name="project" value="Commercial"> Commercial Construction</label>
                <label><input type="checkbox" name="project" value="Renovation"> Renovation</label>
                <button class="next-btn" onclick="nextStep(2)">Next</button>
            </div>
    
            <!-- Step 2: Describe Project -->
            <div class="step" id="step2" style="display: none;">
                <h3>Describe Your Project</h3>
                <textarea id="description" placeholder="Enter details about your project..."></textarea>
                <button class="next-btn" onclick="nextStep(3)">Next</button>
            </div>
    
            <!-- Step 3: Contact Form -->
            <div class="step" id="step3" style="display: none;">
                <h3>Get in Touch</h3>
                <form id="contactForm">
                    <input type="text" id="firstName" placeholder="First Name" required>
                    <input type="text" id="lastName" placeholder="Last Name" required>
                    <input type="tel" id="phone" placeholder="Phone Number" required>
                    <input type="email" id="email" placeholder="Email Address" required>
                    <label><input type="checkbox" id="promotions"> Keep receiving promotional emails</label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
    
    
    
    
    </section>
    









    
    
    <!------ the feature list -->
    
    



<main class="border-devide">

    <!-- Feature Border Section -->
    <section class="new-feature-border">
        <div class="feature-border">
            
            <div class="feature-content">
                <h1>Innovative</h1>
                <p></p>
            </div>
    
            <div class="feature-image">
                <img src="https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Feature Image">
            </div>
    
            <p class="feature-text">
                We anticipate challenges and proactively develop new capabilities to address the evolving   <br>
                needs of our clients. Our relentless focus on innovation leads to smarter building practices   <br>
                and technology that reduces complexity throughout our projects.
            </p>
    
    
    
        </div>
    </section>
    
    
    </main>
    
    
    <!----- the second features border -->
    
    
    
    <main class="border-devide">
    
    <section class="new-feature-border">
        <div class="feature-border">
            
            <div class="feature-content">
                <h1>Focused</h1>
                <p></p>
            </div>
    
            <div class="feature-image">
                <img src="https://images.pexels.com/photos/4091205/pexels-photo-4091205.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Feature Image">
            </div>
    
            <p class="feature-text">
                On projects, we look beyond the immediate construction needs to develop comprehensive   <br>
                solutions that support your larger business goals. We take that same view with our   <br>
                business, constantly evaluating how to make future partnerships more successful. 
            </p>
    
    
    
        </div>
    </section>
    
    
    </main>
    
    <div class="clearfix"></div>







    <!-- Counter Section -->
<section class="counter-section">
    <div class="counter-container">

        <div class="counter-border-rule"></div>

        <!-- Counter Item 1 -->
        
        <div class="counter-item">
            <h1 class="counter" data-target="100">0</h1>  
            <p> employee-owned</p> 
            <p></p>
            <p></p>
        </div>


        <!-- Counter Item 2 -->
        
        <div class="counter-item">
            <h1 class="counter" data-target="800">0</h1>  
            <p>Employees</p> 
            <p></p>
        </div>



        <!-- Counter Item 3 -->
        
        <div class="counter-item">
            <h1 class="counter" data-target="30">0</h1>  
            <p>Offices</p> 
            <p></p>
        </div>


         <!-- Counter Item 4 -->
        
         <div class="counter-item">
            <h1 class="counter" data-target="1000">0</h1>  
            <p>projects Underwear</p> 
            <p></p>
        </div>

    </div>
</section>








<!----- get in touch -->







<section class="owner-section">


    <div>
 
     <div class="add-two" style="display: none;">
 
 
         <div class="black-rule"></div>
         <p>Featured Projects</p>  
         </div>
     
         <div class="clearfix"></div>
     
     
     
     
         <div class="first-batch" style="display: none;">
          <h1>Agribusiness, Food and Beverage</h1> 
         </div>
     
     
     
         <div class="first-batch" style="display: none;">
             <p>
              
     
                 As owners, we are more accountable to you and more invested in your success. Across all levels of our organization, our experienced, innovative, <br> 
                 solution providers put our culture of ownership to work for you. When you succeed, we succeed.<br>
             </p>  
             <div class="add-two" style="display: none;">
                 <a href="Special Projects.php" style="margin-left: 30px;">LEARN MORE</a> 
                 
              <div  class= "black-rule" style="color: green; display: none;"></div>  
                          </div>
                      
                          <div class="clearfix"></div>
 
    </div>
 
 
 
 
 <div class="owner-div">
 <div class="float-evy">
 <div class="owner-image">
    <img src="https://images.pexels.com/photos/7959652/pexels-photo-7959652.jpeg?auto=compress&cs=tinysrgb&w=800">
 </div>
 
 </div>
 
 <div class="owner-name">
     <div class="float-evy">
 <h1>Get in Touch</h1>
 <p></p>
 <p>
    With more than 25 years of experience, Lisa provides strategic leadership to ensure project teams have the resources necessary to    <br>
    execute projects successfully and deliver excellence to our clients. She's integral to the creation of the Toronto office's Diversity and  <br>
    Inclusion team and models the way as a strong female leader and trusted mentor.  <br> 
   
</p>
     

    <div class="touch-links">
    <ul>
   <li><a>Operations Manager</a></li>
   <li> <i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/andyaherndt" target="_blank"></a>Lisa Kurina</li>
   <li> <i class="fas fa-envelope"></i> <a href="mailto:lisakurina@buildvantaconstruction.com"></a>lisakurina@buildvantaconstruction.com</li>
    </ul>

    </div>


     </div>
 
 
 </div>
 
 
 </div>
 
 
 
 
 </section>
 
 
 <div class="clearfix"></div>











  <!------- the first section for images -->



<section class="fist-section">

    <div class="fisrt-contianer">


    <div class="add-two">


    <div class="black-rule"></div>
    <p>Awards & Accolades</p>  
    </div>

    <div class="clearfix"></div>




    <div class="first-batch">
     <h1> </h1> 
    </div>



    <div class="first-batch">
    
            <div class="certiflied-tm"> <img src="https://www.pcl.com/content/dam/logos/Great%20Place%20to%20Work%202024.jpg"></div>  

        

       </div>




    </div>     

    </section>









     <!------- the second section for images -->





<section class="fist-section">

    <div class="fisrt-contianer">


    <div class="add-two">


    <div class="black-rule"></div>
    <p>Best Managed Company in Canada 2024</p>  
    </div>

    <div class="clearfix"></div>




    <div class="first-batch">
     <h1> </h1> 
    </div>



    <div class="first-batch">
    
            <div class="certiflied-tm"> <img src="https://www.pcl.com/content/dam/logos/ENR%20Top%20250%202024.png"></div>  

        

       </div>




    </div>     

    </section>











<!------- the third section for images -->





<section class="fist-section">

    <div class="fisrt-contianer">


    <div class="add-two">


    <div class="black-rule"></div>
    <p>#49 ENR Top 100 Design-Build Firms</p>  
    </div>

    <div class="clearfix"></div>




    <div class="first-batch">
     <h1> </h1> 
    </div>



    <div class="first-batch">
    
            <div class="certiflied-tm"> <img src="https://www.pcl.com/content/dam/logos/ENR%20Top%20250%202024.png"></div>  

        

       </div>




    </div>     

    </section>








<!------- the fouth section for images -->





<section class="fist-section">

    <div class="fisrt-contianer">


    <div class="add-two">


    <div class="black-rule"></div>
    <p>Awards & Accolades</p>  
    </div>

    <div class="clearfix"></div>




    <div class="first-batch">
     <h1> </h1> 
    </div>



    <div class="first-batch">
    
            <div class="certiflied-tm"> <img src="https://www.pcl.com/content/dam/logos/ENR%20Top%20250%202024.png"></div>  

        

       </div>




    </div>     

    </section>








    
    
    
    
    
    
    
    <!---- the newsletter section codes -->





    <section class="newsletter-section">
        <div class="newsletter">
            <h1>Get our insights delivered straight to your inbox</h1>
            <p>
                Subscribe now to get the latest information about <br>
                construction trends, innovation, and best practices from BVC.
            </p>

            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
    
    
    
    
    
    <br>
    

<div class="facebook-footer">
        <p>Contact us on Facebook</p>
        <br>
    <a href="https://web.facebook.com/BuildVantaConstruction.Ca/" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
             alt="Follow us on Facebook" class="facebook-icon">
    </a>
 
</div>






















<?php
include('footer.php'); 
?>

</body>
</html>
<script src="constuct.js"></script>
