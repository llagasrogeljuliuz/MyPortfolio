document.getElementById('year').textContent = new Date().getFullYear();

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('.project').forEach(card => {
      card.addEventListener('click', () => {
        modalImg.src = card.dataset.img;
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modal.style.display = 'flex';
      });
    });
    closeModal.addEventListener('click', ()=> modal.style.display='none');
    window.addEventListener('click', e => { if(e.target === modal) modal.style.display='none'; });

    // Contact form thank-you popup
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(() => {
        modalImg.style.display = 'none';
        modalTitle.textContent = "✅ Thank you!";
        modalDesc.textContent = "Your message has been sent. I’ll get back to you soon.";
        modal.style.display = 'flex';
        form.reset();
      }).catch(() => alert("Error sending message."));
    });