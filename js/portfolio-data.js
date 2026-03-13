/**
 * Portfolio Data Structure
 * Centralized data for dynamic content generation
 */

const portfolioData = {
  personal: {
    name: "Charles",
    fullName: "Charles Daniel B. Abuzo",
    title: "Full stack Developer",
    birthDate: "July 11, 1997",
    email: "abuzo.daniel@gmail.com",
    secondaryEmail: "charlesdaniel.abuzo@benilde.edu.ph",
    phone: "(+63) 936 240 2090",
    location: {
      street: "256, 25th street",
      village: "Fortune VIllage 5",
      barangay: "Barangay Parada",
      city: "Valenzuela City",
      postalCode: "1440",
      country: "PH",
    },
    profile:
      "Based in Valenzuela City, Philippines, I’m a developer who loves turning ideas into functional web applications while continuously learning and improving.",
    about:
      "Passionate Full Stack Developer with 4 years of experience crafting innovative web solutions with Laravel, React, and modern JavaScript frameworks. I transform complex challenges into elegant, scalable applications that drive business success. From SaaS platforms to enterprise systems, I deliver high-performance solutions that combine technical excellence with user-centric design. My diverse background in full-stack development, API integration, and system optimization enables me to tackle projects holistically and deliver exceptional results.",
  },
  skills: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "TypeScript" }, // added for modern JS projects
    { name: "PHP" },
    { name: "MySQL" },
    { name: "Laravel" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Vue.js" },
    { name: "Python" },
    { name: "RESTful APIs" }, // highlights API experience
    { name: "SaaS Development" }, // highlights SaaS experience
    { name: "Server Deployment" }, // highlights deployment experience
  ],
  education: [
    {
      level: "Bachelor Degree",
      institution: "De La Salle-College of Saint Benilde",
      period: "May 2014 - May 2022",
      description: "• Student-Athlete Scholar, balancing academics and competitive sports while maintaining strong academic performance<br>• Champion, NCAA 94th Season Seniors Division, demonstrating teamwork, discipline, and leadership on and off the field<br>• Participated in hackathons, applying problem-solving and coding skills in real-world challenges<br>• Studied and gained practical experience in C#, Java, C++, and PHP, building a strong foundation in software development<br>• Developed collaboration, time management, and technical skills through both academic projects and extracurricular activities",
    },
  ],
  workExperience: [
    {
      position: "Full Stack Developer",
      company: "Binary Digital",
      period: "May 2023 - Present",
      description: "• Developed and maintained full-stack web applications using Laravel, React, and MySQL, delivering scalable and high-performance solutions<br>• Built and integrated RESTful APIs to support internal systems, third-party services, and SaaS platforms<br>• Successfully deployed 20+ production web applications across multiple environments<br>• Developed responsive and dynamic front-end interfaces using React, Next.js, and Vue.js<br>• Designed and optimized database schemas and queries in MySQL to improve application performance<br>• Worked on SaaS platforms, implementing features such as authentication, role-based access control, and multi-tenant systems<br>• Managed server deployments, environment configurations, and production updates<br>• Optimized and refactored legacy codebases, improving maintainability and system performance",
    },
    {
      position: "Digital support and IT Junior Supervisor",
      company: "Megaworld Manila",
      period: "Apr 2022 - May 2023",
      description: "• Developed an inventory management system using Laravel, streamlining tracking and management of company assets<br>• Troubleshot and resolved computer hardware, software, and network issues to ensure smooth office operations<br>• Created mini-projects for company events, including a QR code scanning system to track event attendance efficiently<br>• Assisted with photo editing and visual content creation using Photoshop for marketing and internal use<br>• Contributed to SEO optimization for the company website, improving online visibility and search engine ranking",
    },
  ],
  projects: [
    {
      id: "modal-03",
      title: "Binary Digital",
      type: "Company Project",
      image: "images/reserveat1.jpg",
      description:
        "Professional web development company website showcasing digital services, portfolio, and client testimonials. Built with modern web technologies and responsive design principles.",
      link: "https://binary.digital/",
    },
    {
      id: "modal-04",
      title: "Tagline360",
      type: "Company Project",
      image: "images/ojt.jpg",
      description:
        "Digital marketing and branding platform offering comprehensive solutions for businesses. Features dynamic content management and client portal functionality.",
      link: "https://tagline360.com/",
    },
    {
      id: "modal-05",
      title: "Tagline Philippines",
      type: "Company Project",
      image: "images/reserveat1.jpg",
      description:
        "Philippine-based digital agency website with custom CMS, project management system, and integrated marketing tools for local businesses.",
      link: "https://www.tagline.com.ph/",
    },
    {
      id: "modal-06",
      title: "Moodboard Space",
      type: "Company Project",
      image: "images/ojt.jpg",
      description:
        "Creative design collaboration platform allowing teams to create, share, and manage visual moodboards for projects and campaigns.",
      link: "https://moodboard.space/",
    },
    {
      id: "modal-07",
      title: "Shoppers Alley",
      type: "Company Project",
      image: "images/reserveat1.jpg",
      description:
        "E-commerce platform with advanced product catalog, shopping cart system, payment integration, and inventory management features.",
      link: "https://shoppersalley.ph/",
    },
    {
      id: "modal-08",
      title: "AddForce Quantum Group",
      type: "Company Project",
      image: "images/ojt.jpg",
      description:
        "Corporate website for logistics and supply chain management company with tracking systems and client portal integration.",
      link: "https://addforce.quantumgroup-ph.com/",
    },
    {
      id: "modal-09",
      title: "FrowFW",
      type: "Company Project",
      image: "images/reserveat1.jpg",
      description:
        "Fashion and retail platform with product showcase, inventory management, and customer relationship management systems.",
      link: "https://frowfw.com/",
    },
    {
      id: "modal-01",
      title: "Reserv-Eat",
      type: "Capstone Project",
      image: "images/reserveat1.jpg",
      description:
        "Reserv-Eat is a convenient, safe, and contact-free web application and mobile application for dine-in restaurants. This application allows users to book a reservation ahead of time. It also has features such as a digital menu, contact-free payments, QR code for ticket reservations, and a directory of restaurants.",
      link: "https://github.com/iopas02/myproject",
    },
    {
      id: "modal-02",
      title: "Sibol-Pinoy website",
      type: "Internship Project",
      image: "images/ojt.jpg",
      description:
        "It is an internship project where in we were tasked to create a simple website for the company. Inside the website we highlight services offered, profile and booking of the company.",
      link: "https://github.com/iopas02/sibolpinoy",
    },
  ],
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/danielito.gwapit0/",
      icon: "fa-facebook",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/711danielito",
      icon: "fa-twitter",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/charles-abuzo-9b7b1a19b/",
      icon: "fa-linkedin",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/itsdanielet/",
      icon: "fa-instagram",
    },
    {
      platform: "github",
      url: "https://github.com/iopas02",
      icon: "fa-github",
    },
  ],
  hobbies: [
    {
      name: "Online Gaming",
      icon: "fa-gamepad",
      description: "Competitive online multiplayer games and staying connected with friends through virtual adventures.",
      level: "Advanced"
    },
    {
      name: "Chess",
      icon: "fa-puzzle-piece",
      description: "Strategic thinking and competitive chess playing, from casual games to tactical challenges.",
      level: "Advanced"
    },
    {
      name: "Basketball",
      icon: "fa-circle",
      description: "Team sports and staying active through basketball games and practice sessions.",
      level: "Intermediate"
    },
    {
      name: "Walking",
      icon: "fa-arrow-right",
      description: "Daily walks for fitness, mental clarity, and exploring the neighborhood.",
      level: "Intermediate"
    },
    {
      name: "Streaming",
      icon: "fa-video-camera",
      description: "Occasional streaming and content creation, sharing gaming moments and tech insights.",
      level: "Beginner"
    },
    {
      name: "Tech Content",
      icon: "fa-laptop",
      description: "Following tech trends, tutorials, and innovation content on social media platforms.",
      level: "Advanced"
    }
  ],
};

// Dynamic Content Generation Functions
function generateSkillBars(skills) {
  return skills
    .map(
      (skill) => `
        <span class="skill-tag">${skill.name}</span>
    `,
    )
    .join("");
}

function generateTimelineItems(items, type) {
  const iconClass = type === "education" ? "fa-graduation-cap" : "fa-briefcase";
  return items
    .map(
      (item) => `
        <div class="timeline-block">
            <div class="timeline-ico">
                <i class="fa ${iconClass}"></i>
            </div>
            <div class="timeline-header">
                <h3>${item.level || item.position}</h3>
                <p>${item.period}</p>
            </div>
            <div class="timeline-content">
                <h4>${item.institution || item.company}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

function generatePortfolioItems(projects) {
  return projects
    .map(
      (project, index) => `
        <div class="bgrid folio-item">
            <div class="item-wrap">
                <div class="project-placeholder ${getProjectClass(project.title)}">
                    ${project.title}
                </div>
                <a href="#${project.id}" class="overlay">
                    <div class="folio-item-table">
                        <div class="folio-item-cell">
                            <h3 class="folio-title">${project.title}</h3>
                            <span class="folio-types">${project.type}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `,
    )
    .join("");
}

// Helper function to get CSS class for project
function getProjectClass(title) {
  const classMap = {
    "Binary Digital": "binary-digital",
    "Tagline360": "tagline360",
    "Tagline Philippines": "tagline-ph",
    "Moodboard Space": "moodboard",
    "Shoppers Alley": "shoppers-alley",
    "AddForce Quantum Group": "addforce",
    "FrowFW": "frowfw",
    "Reserv-Eat": "reserv-eat",
    "Sibol-Pinoy website": "sibol-pinoy"
  };
  return classMap[title] || "binary-digital";
}

function generatePortfolioModals(projects) {
  return projects
    .map(
      (project) => `
        <div id="${project.id}" class="popup-modal slider mfp-hide">
            <div class="media">
                <div class="project-placeholder ${getProjectClass(project.title)}">
                    ${project.title}
                </div>
            </div>
            <div class="description-box">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="categories">${project.type}</div>
            </div>
            <div class="link-box">
                <a target="_blank" href="${project.link}">Details</a>
                <a href="#" class="popup-modal-dismiss">Close</a>
            </div>
        </div>
    `,
    )
    .join("");
}

function generateSocialLinks(socialLinks) {
  return socialLinks
    .map(
      (link) => `
        <li>
            <a target="_blank" href="${link.url}">
                <i class="fa ${link.icon}"></i>
            </a>
        </li>
    `,
    )
    .join("");
}

// Generate hobbies
function generateHobbies(hobbies) {
  return hobbies
    .map(
      (hobby) => `
        <div class="hobby-item">
            <div class="hobby-icon">
                <i class="fa ${hobby.icon}"></i>
            </div>
            <div class="hobby-info">
                <h3>${hobby.name}</h3>
                <p>${hobby.description}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

// Initialize Dynamic Content
function initializePortfolio() {
  // Update personal info
  const introTitle = document.querySelector(".intro-content h1");
  if (introTitle)
    introTitle.textContent = `I'm ${portfolioData.personal.name}.`;

  const introPosition = document.querySelector(".intro-position span");
  if (introPosition) introPosition.textContent = portfolioData.personal.title;

  const aboutLead = document.querySelector("#about .lead");
  if (aboutLead) aboutLead.textContent = portfolioData.personal.about;

  // Update profile info
  const profileText = document.querySelector("#about .col-six.tab-full p");
  if (profileText) profileText.textContent = portfolioData.personal.profile;

  const infoSpans = document.querySelectorAll("#about .info-list span");
  if (infoSpans.length >= 3) {
    infoSpans[0].textContent = portfolioData.personal.fullName;
    infoSpans[1].textContent = portfolioData.personal.birthDate;
    infoSpans[2].textContent = portfolioData.personal.email;
  }

  // Generate skills
  const skillBars = document.querySelector(".skill-tags");
  if (skillBars) skillBars.innerHTML = generateSkillBars(portfolioData.skills);

  // Generate education timeline
  const educationTimeline = document.querySelector("#education .timeline-wrap");
  if (educationTimeline)
    educationTimeline.innerHTML = generateTimelineItems(
      portfolioData.education,
      "education",
    );

  // Generate portfolio items
  const folioWrapper = document.getElementById("folio-wrapper");
  if (folioWrapper) {
    folioWrapper.innerHTML =
      generatePortfolioItems(portfolioData.projects) +
      generatePortfolioModals(portfolioData.projects);
    
    // Reinitialize MagnificPopup for dynamically generated content
    if (typeof $ !== 'undefined' && $.fn.magnificPopup) {
      $('.item-wrap a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        removalDelay: 300,
        showCloseBtn: false,
        mainClass: 'mfp-fade'
      });
      
      // Reinitialize popup modal dismiss event
      $(document).off('click', '.popup-modal-dismiss').on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    }
  }

  // Generate hobbies
  const hobbiesList = document.querySelector(".hobbies-list");
  if (hobbiesList) {
    hobbiesList.innerHTML = generateHobbies(portfolioData.hobbies);
  }

  // Generate social links
  document
    .querySelectorAll(".intro-social, .footer-social")
    .forEach((socialList) => {
      socialList.innerHTML = generateSocialLinks(portfolioData.socialLinks);
    });

  // Update contact info
  const location = portfolioData.personal.location;
  const locationElement = document.querySelector(".icon-pin + p");
  if (locationElement) {
    locationElement.innerHTML = `
            ${location.street}<br>
            ${location.village}<br>
            ${location.barangay}<br>
            ${location.city}<br>
            ${location.postalCode} ${location.country}
        `;
  }

  const emailElement = document.querySelector(".icon-mail + p");
  if (emailElement) {
    emailElement.innerHTML = `
            ${portfolioData.personal.email}<br>
            ${portfolioData.personal.secondaryEmail}
        `;
  }

  const phoneElement = document.querySelector(".icon-phone + p");
  if (phoneElement) {
    phoneElement.textContent = `Phone: ${portfolioData.personal.phone}`;
  }
}

// Add Work Experience Section
function addWorkExperienceSection() {
  const workSection = `
    <div class="col-twelve resume-header">
        <h2>Work Experience</h2>
    </div>
    <div class="col-twelve">
        <div class="timeline-wrap">
            ${generateTimelineItems(portfolioData.workExperience, "work")}
        </div>
    </div>
  `;

  // Insert work experience section into the first resume-timeline container
  const workExperienceContainer = document.querySelector("#work-experience .resume-timeline");
  if (workExperienceContainer) {
    workExperienceContainer.innerHTML = workSection;
  }
}

// Update Navigation
function updateNavigation() {
  // Navigation is already updated in HTML, no need to modify dynamically
  console.log("Portfolio data initialized successfully");
}
