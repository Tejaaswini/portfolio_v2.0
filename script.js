// Toggle the mobile navigation menu
function toggleMenu() {
	const navLinks = document.getElementById("navLinks");
	if (navLinks.style.display === "flex") {
	  navLinks.style.display = "none";
	} else {
	  navLinks.style.display = "flex";
	}
  }
  
  // Smooth scrolling to a specific section
  function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
	  window.scrollTo({
		top: section.offsetTop - 60, // Adjust offset for the sticky navbar
		behavior: "smooth",
	  });
	}
  }
  