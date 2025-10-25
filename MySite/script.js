// === Dynamic Year ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Project Modal ===
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');
const viewDocBtn = document.getElementById('viewDocBtn');

// When a project card is clicked
document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;

    // Set the documentation link dynamically
    const docLink = card.dataset.link;
    viewDocBtn.onclick = () => {
      window.location.href = docLink;
    };

    modal.style.display = 'flex';
  });
});

// Close modal when "Close" button is clicked
closeModal.addEventListener('click', () => (modal.style.display = 'none'));

// Close modal when clicking outside of it
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// === Contact Form Thank-you Popup ===
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then(() => {
        modalImg.style.display = 'none';
        modalTitle.textContent = "✅ Thank you!";
        modalDesc.textContent = "Your message has been sent. I’ll get back to you soon.";
        viewDocBtn.style.display = 'none'; // Hide View Doc button
        modal.style.display = 'flex';
        form.reset();
      })
      .catch(() => alert("Error sending message."));
  });
}


