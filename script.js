// Smooth scroll ONLY for internal nav links (starting with "#")
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submission (basic simulation)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});
// Toggle dropdowns on click
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent closing on body click
    const targetId = 'dropdown-' + this.dataset.dropdown;
    const dropdown = document.getElementById(targetId);

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(dc => {
      if (dc !== dropdown) dc.style.display = 'none';
    });

    // Toggle the clicked one
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-content').forEach(dc => {
    dc.style.display = 'none';
  });
});


// Enlarged Image Modal Logic
const logoBtn = document.getElementById('logo-btn');
const imageModal = document.getElementById('image-modal');

logoBtn.addEventListener('click', () => {
  imageModal.style.display = 'flex';
});

// Close when clicking outside image or pressing Escape
imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    imageModal.style.display = 'none';
  }
});
