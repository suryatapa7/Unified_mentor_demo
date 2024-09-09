//Style of navbar changes when navbar scrolls
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
}) /*window.scrollY returns the number of pixels the document is scrolled vertically.*/ 

//Show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })

    //change icon
    faq.addEventListener('click', () => {
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})

//show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)






// Mentor data
const mentors = [
    {
        id: 1,
        image: "./images/tm1.jpg",
        name: "John Doe",
        expertise: "Software Development",
        bio: "John is a seasoned software developer with over 10 years of experience.",
        details: "John has worked on numerous projects, including web and mobile applications. He is proficient in multiple programming languages, including JavaScript, Python, and Java."
    },
    {
        id: 2,
        image: "./images/tm2.jpg",
        name: "Jane Smith",
        expertise: "Data Science",
        bio: "Jane is a data scientist with a strong background in machine learning and statistics.",
        details: "Jane has worked on various projects, including predictive modeling and data visualization. She is proficient in multiple programming languages, including Python, R, and SQL."
    },
    {
        id: 3,
        image: "./images/tm3.jpg",
        name: "Bob Johnson",
        expertise: "Cybersecurity",
        bio: "Bob is a cybersecurity expert with over 10 years of experience in the field.",
        details: "Bob has worked on numerous projects, including penetration testing and vulnerability assessment. He is proficient in multiple programming languages, including Python, C++, and Java."
    },
    {
        id: 4,
        image: "./images/tm4.jpg",
        name: "friza",
        expertise: "Data Analysis",
        bio: "Friza is a data analyst with a strong background in statistics and data visualization.",
        details: "Friza has worked on various projects, including data mining and predictive modeling. She is proficient in multiple programming languages, including Python, R, and SQL."
    },
    {
        id: 5,
        image: "./images/tm5.jpg",
        name: "Rehana Saxena",
        expertise: "Data Analysis",
        bio: "Rehana is a data analyst with a strong background in statistics and data visualization.",
        details: "Rehana has worked on various projects, including data mining and predictive modeling. She is proficient in multiple programming languages, including Python, R, and SQL."

    },
    {
        id: 6,
        image: "./images/tm6.jpg",
        name: "Mitchell Marsh",
        expertise: "Data Analysis",
        bio: "Mitchell is a data analyst with a strong background in statistics and data visualization.",
        details: "Mitchell has worked on various projects, including data mining and predictive modeling. He is proficient in multiple programming languages, including Python, R, and SQL."
    },
    {
        id: 7,
        image: "./images/tm7.jpg",
        name: "Rose mary",
        expertise: "Data Science",
        bio: "Rose is a data scientist with a strong background in machine learning and statistics.",
        details: "Rose has worked on various projects, including predictive modeling and data visualization. She is proficient in multiple programming languages, including Python, R, and SQL."
    },
    {
        id: 8,
        image: "./images/tm8.jpg",
        name: "Sumit Ray",
        expertise: "Data Science",
        bio: "Sumit is a data scientist with a strong background in machine learning and statistics.",
        details: "Sumit has worked on various projects, including predictive modeling and data visualization. She is proficient in multiple programming languages, including Python, R, and SQL."
    }
  ];
  
  
  // Function to generate mentor profiles
  function generateMentorProfiles() {
    const mentorGrid = document.querySelector(".mentor-grid");
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput.value.toLowerCase();

     // Filter mentors based on search query
     const filteredMentors = mentors.filter((mentor) => {
        return mentor.expertise.toLowerCase().includes(searchQuery) || mentor.name.toLowerCase().includes(searchQuery);
    });

    mentorGrid.innerHTML = '';
    filteredMentors.forEach((mentor) => {
        const mentorProfile = document.createElement("div");
        mentorProfile.classList.add("mentor-profile");
        mentorProfile.innerHTML = `
            <img src="${mentor.image}" alt="">
            <h2>${mentor.name}</h2>
            <p>Expertise: ${mentor.expertise}</p>
            <p>${mentor.bio}</p>
            <button class="view-details">View Details</button>
            <button class="contact-mentor">Contact Mentor</button>
        `;
        mentorGrid.appendChild(mentorProfile);
  
        // Add event listeners to buttons
        const viewDetailsButton = mentorProfile.querySelector(".view-details");
        viewDetailsButton.addEventListener("click", () => {
            viewMentorDetails(mentor);
        });
  
        const contactMentorButton = mentorProfile.querySelector(".contact-mentor");
        contactMentorButton.addEventListener("click", () => {
            contactMentor(mentor);
        });
    });
  }

  // Function to view mentor details
  function viewMentorDetails(mentor) {
    const detailsModal = document.getElementById("details-modal");
    const mentorDetails = document.getElementById("mentor-details");
    mentorDetails.textContent = mentor.details;
    detailsModal.style.display = "block";
  
    // Add event listener to close button
    const closeButton = detailsModal.querySelector(".close");
    closeButton.addEventListener("click", () => {
        detailsModal.style.display = "none";
    });
  }
  
  // Function to contact mentor
  function contactMentor(mentor) {
    const contactModal = document.getElementById("contact-modal");
    contactModal.style.display = "block";
  
    // Add event listener to close button
    const closeButton = contactModal.querySelector(".close");
    closeButton.addEventListener("click", () => {
        contactModal.style.display = "none";
    });
  }
  


// Call the generateMentorProfiles function on page load
generateMentorProfiles();

// Add an event listener to the search input to trigger the search on keyup
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', generateMentorProfiles);

// Add an event listener to the search button to trigger the search on click
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', generateMentorProfiles);




  
  


