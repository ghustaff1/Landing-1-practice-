const openModal=document.querySelectorAll('.contact'),
      closeModal=document.querySelector('.modal__close'),
      modal=document.querySelector('.modal');
openModal.forEach(btn=>{
  btn.addEventListener('click', e=>{
    modal.classList.toggle('hidden');
  });
});
closeModal.addEventListener('click', e=>{
  modal.classList.toggle('hidden');
});