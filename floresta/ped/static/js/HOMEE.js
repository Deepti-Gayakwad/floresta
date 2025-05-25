function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}




let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const sliderWrapper = document.querySelector(".slider-wrapper");
        const totalSlides = slides.length;

        // Add the first slide to the end to create a continuous loop
        function addFirstSlideToEnd() {
            const firstSlide = slides[0].cloneNode(true);
            sliderWrapper.appendChild(firstSlide);
        }

        // Function to show the next slide with smooth transition
        function nextSlide() {
            if (currentIndex === totalSlides) {
                // When the last slide is reached, we jump to the first slide without transition
                sliderWrapper.style.transition = "none"; // Disable transition temporarily
                currentIndex = 0;
                sliderWrapper.style.transform = translateX(0); // Immediately jump to the first image
                setTimeout(() => {
                    sliderWrapper.style.transition = "transform 1s ease-in-out"; // Restore transition
                }, 50); // Short delay to allow the transition to be restored
            } else {
                currentIndex++;
                sliderWrapper.style.transform = `translateX(-${currentIndex*100}%)`;
            }
        }
        // Automatic slide change every 3 seconds
        setInterval(nextSlide, 3000);

        // Add the first slide to the end to create a continuous loop
        addFirstSlideToEnd();



















        
function toggleText(element) {
    let content = element.previousElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
        element.innerText = "Read Less";
    } else {
        content.style.display = "none";
        element.innerText = "Read More";
    }
}


// JavaScript to toggle visibility of the search bar
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    searchInput.focus();
});

// Define a mapping of multiple search terms to URLs (using .html files)
const searchMap = {
    "home": "home.html",
    "about": "about.html",
    "contact": "contact.html",
    "services": "services.html",
    "rose": "rose.html",
    "jasmine": "jasmine.html",
    "flower rose": "rose.html",
    "flower jasmine": "jasmine.html"
};

// Redirect user when they type in something and press Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== "") {
        const searchQuery = searchInput.value.trim().toLowerCase(); // Make it case-insensitive

        // Check if the search query matches a predefined URL
        if (searchMap[searchQuery]) {
            window.location.href = searchMap[searchQuery]; // Redirect to the corresponding .html page
        } else {
            alert("Sorry, no page found for: " + searchQuery); // Handle unknown searches
        }
    }
});
