function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//parallax scroll
// window.addEventListener('scroll', function() {
//   const scrollPosition = window.pageYOffset;
//   const layers = document.querySelectorAll('.layer');
//   layers.forEach((layer, index) => {
//     const depth = index * 0.5; // Adjust the multiplier for different speeds
//     const movement = -(scrollPosition * depth);
//     layer.style.transform = `translateY(${movement}px)`;
//   });
// });

// Function to fetch and render expertise data
async function renderExperience() {
  const response = await fetch('./expertise.json'); // Fetch JSON file
  const data = await response.json(); // Parse JSON data
  const expertiseContainer = document.getElementById('expertise-container');

  // Clear existing content
  expertiseContainer.innerHTML = '';

  // Create a container for all expertise categories
  const aboutContainers = document.createElement('div');
  aboutContainers.classList.add('about-containers');

  // Loop through each expertise category
  data.expertise.forEach(category => {
      const detailsContainer = document.createElement('div');
      detailsContainer.classList.add('details-container');

      // Add category title
      const categoryTitle = document.createElement('h2');
      categoryTitle.classList.add('expertise-sub-title');
      categoryTitle.textContent = category.category;
      detailsContainer.appendChild(categoryTitle);

      // Add skills list
      const skillsList = document.createElement('ul');
      category.skills.forEach(skill => {
          const skillItem = document.createElement('li');
          skillItem.textContent = skill;
          skillsList.appendChild(skillItem);
      });
      detailsContainer.appendChild(skillsList);

      // Append the category container to the main container
      aboutContainers.appendChild(detailsContainer);
  });

  // Append the main container to the expertise section
  expertiseContainer.appendChild(aboutContainers);
}

// Function to fetch and render project data
async function renderProjects() {
  const response = await fetch('./projects.json'); // Fetch JSON file
  const data = await response.json(); // Parse JSON data
  const projectsContainer = document.getElementById('projects-container');

  // Clear existing content
  projectsContainer.innerHTML = '';

  // Create a container for all projects
  const aboutContainers = document.createElement('div');
  aboutContainers.classList.add('about-containers');

  // Loop through each project
  data.projects.forEach(project => {
      const detailsContainer = document.createElement('div');
      detailsContainer.classList.add('details-container', 'color-container');

      // Add project image
      const articleContainer = document.createElement('div');
      articleContainer.classList.add('article-container');
      const projectImg = document.createElement('img');
      projectImg.src = project.image;
      projectImg.alt = project.title;
      projectImg.classList.add('project-img');
      articleContainer.appendChild(projectImg);
      detailsContainer.appendChild(articleContainer);

      // Add project title
      const projectTitle = document.createElement('h2');
      projectTitle.classList.add('expertise-sub-title', 'project-title');
      projectTitle.textContent = project.title;
      detailsContainer.appendChild(projectTitle);

      // Add buttons
      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btn-container');
      const githubBtn = document.createElement('button');
      githubBtn.classList.add('btn', 'btn-color-2', 'project-btn');
      githubBtn.textContent = 'Github';
      githubBtn.onclick = () => window.open(project.githubLink, '_blank');
      btnContainer.appendChild(githubBtn);

      const descriptionBtn = document.createElement('button');
      descriptionBtn.classList.add('btn', 'btn-color-2', 'project-btn');
      descriptionBtn.textContent = 'Description';
      descriptionBtn.onclick = () => window.open(project.descriptionLink, '_blank');
      btnContainer.appendChild(descriptionBtn);

      detailsContainer.appendChild(btnContainer);

      // Append the project container to the main container
      aboutContainers.appendChild(detailsContainer);
  });

  // Append the main container to the projects section
  projectsContainer.appendChild(aboutContainers);
}

// Call the function to render expertise data
renderExperience();
// Call the function to render project data
renderProjects();

// //animation
// const sectionText = document.getElementsByClassName('section__text')[0];

// setTimeout(() => {
//   sectionText.style.display = 'block';
//   requestAnimationFrame(() => {
//     sectionText.style.opacity = '1';
//   });
// }, 1000);

