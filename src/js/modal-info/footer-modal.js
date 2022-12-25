const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close-footer]');
const modal = document.querySelector('[data-modal-footer]');
window.addEventListener('keydown', closeFooterModalEsc);

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

function closeFooterModalEsc(e) {
  if (e.code === 'Escape') toggleModal();
}
