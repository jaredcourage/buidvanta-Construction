function redirectToSearch() {
    let input = document.getElementById('searchInput').value.trim();

    if (input !== "") {
        // Redirect to search-results.html with query parameter
        window.location.href = `search-results.html?query=${encodeURIComponent(input)}`;
    } else {
        alert("Please enter a search term.");
    }
}





document.addEventListener("DOMContentLoaded", function () {
    function getQueryParameter(name) {
        let params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    let searchTerm = getQueryParameter("query");
    document.getElementById("searchInput").value = searchTerm; // Pre-fill search bar
    document.getElementById("searchInput").focus(); // Focus on search bar
    document.getElementById("searchTerm").textContent = searchTerm;

    let navLinks = [
        { text: "Home", url: "index.html" },
        { text: "Services", url: "services.html" },
        { text: "Apply for Job", url: "apply.html" },
        { text: "Contact", url: "contact.html" },
        { text: "Immigration", url: "immigration.html" },
        { text: "Visa", url: "visa.html" },
        { text: "Citizenship", url: "citizenship.html" }
    ];

    let resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = ""; 

    let matchFound = false;

    navLinks.forEach(link => {
        if (link.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            let newItem = document.createElement("li");
            newItem.innerHTML = `<a href="${link.url}">${link.text}</a>`;
            resultsList.appendChild(newItem);
            matchFound = true;
        }
    });

    if (!matchFound) {
        resultsList.innerHTML = "<li>No results found.</li>";
    }
});

// Function for searching again
function redirectToSearch() {
    let input = document.getElementById('searchInput').value.trim();
    if (input !== "") {
        window.location.href = `search-results.html?query=${encodeURIComponent(input)}`;
    } else {
        alert("Please enter a search term.");
    }
}





const toggle_btn = document.querySelector('.toggle_btn')
const toggle_btnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')


 toggle_btn.onclick = function () {
   dropDownMenu.classList.toggle('open')
   const isOpen = dropDownMenu.classList.contains('open')

   toggle_btnIcon.classList = isOpen
   ? 'fa-solid fa-xmark'
   : 'fa-solid fa-bars'
 

 }
 


 


 document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.getElementById("links");
    const sectionDiv = document.querySelector(".section-div");

    menuToggle.addEventListener("click", function () {
        if (menuList.classList.contains("hidden")) {
            menuList.classList.remove("hidden");
            sectionDiv.style.marginTop = `${menuList.offsetHeight + 20}px`; // Move section down
        } else {
            menuList.classList.add("hidden");
            sectionDiv.style.marginTop = "20px"; // Reset position
        }
    });
});















/// the codes for getting  search button


document.addEventListener("DOMContentLoaded", function () {
    // Toggle filter options
    document.querySelectorAll(".toggle-btn-1").forEach(button => {
        button.addEventListener("click", function () {
            let filterOptions = this.parentElement.nextElementSibling;
            if (filterOptions.style.display === "block") {
                filterOptions.style.display = "none";
                this.textContent = "+";
            } else {
                filterOptions.style.display = "block";
                this.textContent = "-";
            }
        });
    });

    // Search functionality
    document.getElementById("search-btn").addEventListener("click", function () {
        let searchQuery = document.getElementById("search-input").value.toLowerCase();
        let selectedCategory = document.querySelector('input[name="category"]:checked');
        let selectedPrice = document.querySelector('input[name="price"]:checked');

        let category = selectedCategory ? selectedCategory.value : "Any";
        let price = selectedPrice ? selectedPrice.value : "Any";

        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        // Example search results
        let results = [
            { title: "AI in 2025", sub: "Technology", desc: "Future of AI and Machine Learning.", price: "Paid" },
            { title: "Healthy Living", sub: "Health", desc: "How to stay fit and eat healthy.", price: "Free" },
            { title: "Stock Market Tips", sub: "Finance", desc: "Learn the basics of investing.", price: "Paid" },
        ];

        let filteredResults = results.filter(result =>
            (category === "Any" || result.sub === category) &&
            (price === "Any" || result.price === price) &&
            (searchQuery === "" || result.title.toLowerCase().includes(searchQuery))
        );

        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        } else {
            filteredResults.forEach(result => {
                let div = document.createElement("div");
                div.classList.add("result-item");
                div.innerHTML = `
                    <h1>${result.title}</h1>
                    <h2>${result.sub}</h2>
                    <p>${result.desc}</p>
                    <p class="price">${result.price} - Not Accepting Applications</p>
                `;
                resultsContainer.appendChild(div);
            });
        }
    });
});


// feedback

function showFeedback() {
    // Hide the feedback box
    document.getElementById("feedback-box").style.display = "none";
    
    // Show the feedback message
    document.getElementById("thank-you-message").style.display = "flex";
}








///////





document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.step-header i'); // Select only the icon

    headers.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent triggering the parent click event

            // Set the URL where you want to navigate
            window.location.href = "http://127.0.0.1:5500/css/index.html"; // Change to your desired URL
        });
    });
});





///////


document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.step-head');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                icon.style.transform = 'rotate(90deg)';
            }
        });
    });
});






  //////widgetb



  document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const openFormButtons = document.querySelectorAll("#openForm");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");
    const steps = document.querySelectorAll(".step");
    let currentStep = 1;

    // Open modal
    openFormButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
            showStep(1);
        });
    });

    // Close modal
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Function to show a specific step
    function showStep(stepNumber) {
        steps.forEach((step, index) => {
            step.style.display = (index + 1 === stepNumber) ? "block" : "none";
        });
        currentStep = stepNumber;
    }

    // Function to go to the next step
    window.nextStep = function (stepNumber) {
        if (stepNumber > steps.length) return;
        showStep(stepNumber);
    };

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        modal.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const openFormButtons = document.querySelectorAll("#openForm");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");
    const steps = document.querySelectorAll(".step");
    let currentStep = 1;

    // Open modal
    openFormButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
            showStep(1);
        });
    });

    // Close modal
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Function to show a specific step
    function showStep(stepNumber) {
        steps.forEach((step, index) => {
            step.style.display = (index + 1 === stepNumber) ? "block" : "none";
        });
        currentStep = stepNumber;
    }

    // Function to go to the next step
    window.nextStep = function (stepNumber) {
        if (stepNumber > steps.length) return;
        showStep(stepNumber);
    };

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        modal.style.display = "none";
    });
});


















  
  //////// menu list sub menu 


  document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const submenus = document.querySelectorAll(".submenu-page");
    const backButtons = document.querySelectorAll(".back-btn");
    const dropdownMenu = document.querySelector(".dropdown_menu"); // Get the main dropdown menu

    dropdownItems.forEach((item) => {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSubmenu = document.getElementById(targetId);

            if (targetSubmenu) {
                targetSubmenu.style.display = "flex"; // Show the submenu
                dropdownMenu.style.display = "none"; // Hide dropdown menu
            }
        });
    });

    backButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.closest(".submenu-page").style.display = "none"; // Hide submenu
            dropdownMenu.style.display = "block"; // Show dropdown menu again
        });
    });
});




  /* gallery */


  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let index = 0;

    function moveSlide() {
        index++;
        if (index > 3) index = 0; // Reset to first image
        slider.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(moveSlide, 4000); // Change every 4 seconds
});



//heat map


//Function to show the selected map image when a country is clicked
        function showMap(country) {
            // Hide all map images
            const allMaps = document.querySelectorAll('.map-container');
            allMaps.forEach(map => {
                map.style.display = 'none';
            });

            // Show the map for the selected country
            const selectedMap = document.getElementById(country + '-map');
            selectedMap.style.display = 'block';
        }










        /// picutes code 


        /// picutes code 


      document.addEventListener('DOMContentLoaded', () => {
  // Select all the headings and image containers
  const headings = document.querySelectorAll('.heading');
  const images = document.querySelectorAll('.image');

  // Function to show the corresponding image
  function showImage(imageId) {
    // Remove active class from all images
    images.forEach(image => image.classList.remove('active'));

    // Add active class to the selected image
    const selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('active');
  }

  // Add event listeners to headings for click event
  headings.forEach(heading => {
    heading.addEventListener('click', () => {
      const imageId = heading.getAttribute('data-image');
      showImage(imageId);
    });

    // Optional: Add hover event to show image on hover
    heading.addEventListener('mouseover', () => {
      const imageId = heading.getAttribute('data-image');
      showImage(imageId);
    });
  });

  // Initialize the first image as active when the page loads
  showImage('image1');
});












/// the seond featuyres 



/// the seond featuyres 



document.addEventListener('DOMContentLoaded', () => {
  // Select all the titles and image containers
  const titles = document.querySelectorAll('.title-option');
  const pictures = document.querySelectorAll('.picture');

  // Function to show only the selected picture
  function showPicture(picId) {
    // Remove active class from all pictures
    pictures.forEach(pic => pic.classList.remove('active'));

    // Add active class to the selected picture
    document.getElementById(picId).classList.add('active');
  }

  // Add event listeners to titles for click and hover events
  titles.forEach(title => {
    title.addEventListener('click', () => {
      const picId = title.getAttribute('data-pic');
      showPicture(picId);
    });

    title.addEventListener('mouseover', () => {
      const picId = title.getAttribute('data-pic');
      showPicture(picId);
    });
  });

  // Initialize the first picture as active when the page loads
  showPicture('pic1');
});





/// features insigts 
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".insights-wrapper");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.addEventListener("click", () => {
        wrapper.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        wrapper.scrollBy({ left: 320, behavior: "smooth" });
    });
});




////widget 








//// counter codes 

//// counter codes 



document.addEventListener('DOMContentLoaded', () => {
    // Counter Animation Function
    const counters = document.querySelectorAll('.counter');
    const counterSection = document.querySelector('.counter-section');
    let started = false;

    function startCounter() {
        if (!started) {
            counters.forEach(counter => {
                counter.innerText = '0';
                const target = +counter.getAttribute('data-target');
                const increment = target / 100; // Adjust speed

                function updateCounter() {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 20); // Adjust speed
                    } else {
                        counter.innerText = target;
                    }
                }

                updateCounter();
            });

            started = true;
        }
    }

    // Detect when the counter section is visible
    function checkScroll() {
        const sectionTop = counterSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100; // Trigger when close to view
        if (sectionTop < triggerPoint) {
            startCounter();
            window.removeEventListener('scroll', checkScroll);
        }
    }

    // Listen for scroll event
    window.addEventListener('scroll', checkScroll);
});















///jobs







function searchJobs() {
    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    
    let jobs = [" Machine Line Operator", "Equipment Technician", " Driver", "Cleaner", "Engineer",
    "Supervisor", "Construction Laborer", "Electrician", "Plumber", "Safety Officer"];
    
     
    jobs.forEach(job => {
        let jobElement = document.createElement("div");
        jobElement.classList.add("job-item");
        jobElement.textContent = job;
        jobElement.onclick = function() {
            showJobResults(job);
        };
        resultsContainer.appendChild(jobElement);
    });
}

function showJobResults(jobId) {
    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    
    let jobDetails = {
        " Machine Line Operator" : "Machine Line Operator - Based in Ontario, Urgent Hiring",
        "Equipment Technician": "Equipment Technician - Contract, Based in Ontario, Urgent Hiring",
        "Driver": "Driver - Fulltime",
        "Cleaner": "Cleaner - Onsite - Based in Ontario, Urgent Hiring",
        "Engineer": "Engineer - Onsite - Based in Ontario, Urgent Hiring",
        " Supervisor" : "Supervisor - Based in Ontario, Urgent Hiring",
        "Construction Laborer": "Equipment Technician - Contract, Based in Ontario, Urgent Hiring",
        "Electrician": "Electrician - Fulltime",
        "Plumber": "Plumber - Onsite - Based in Ontario, Urgent Hiring",
        "Safety Officer": "Safety Oficer - Onsite - Based in Ontario, Urgent Hiring"

    };
    
    let jobDetailElement = document.createElement("div");
    jobDetailElement.classList.add("job-item");
    jobDetailElement.textContent = jobDetails[jobId] || "Job details not available";
    
    let applyButton = document.createElement("button");
    applyButton.textContent = "Apply Now";
    applyButton.classList.add("filter-btn");
    applyButton.onclick = function() {
        window.location.href = "form.html?jobId=" + jobId;
    };
    
    resultsContainer.appendChild(jobDetailElement);
    resultsContainer.appendChild(applyButton);
}



// galery codes 


function openLightbox(imgElement) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = imgElement.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}



//location codes


function showLocations(event, country) {
    event.preventDefault();
    document.querySelectorAll('.locations').forEach(loc => loc.style.display = 'none');
    document.getElementById(country).style.display = 'block';
}

function showPopup(event, title, img, subtitle) {
    event.preventDefault();
    let existingPopup = event.target.nextElementSibling;
    if (existingPopup && existingPopup.classList.contains('popup')) {
        existingPopup.remove();
        return;
    }
    let popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <h1> ${Fort}</h1>
        <img src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRI5I1YQooj1mVb-kg3VHcvV5GXsXujjVkuwDCG6wGKwyYcDqsUFqMIIOH20TcUpzbP" 
       alt="${t2.gstatic.com}">
        <h2>${Fort,Lauderdale,Buildings}</h2>
        <p>Explore more about this beautiful location.</p>
        <button class="close" onclick="this.parentElement.remove()">Close</button>
    `;
    event.target.insertAdjacentElement('afterend', popup);
}




// contact codes




document.addEventListener("DOMContentLoaded", function () {
    // Populate country list
    const regionSelect = document.getElementById("region");
    const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "Japan"];
    countries.forEach(country => {
        let option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        regionSelect.appendChild(option);
    });

    // Form submission handling
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(this);

        fetch(this.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Your message has been sent successfully!");
                this.reset(); // Clear form fields after submission
            } else {
                alert("There was an issue submitting the form. Please try again.");
            }
        }).catch(error => {
            alert("Error: Unable to send your message.");
        });
    });
});
