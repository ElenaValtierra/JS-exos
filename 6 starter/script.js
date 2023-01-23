'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = ()=>{
modal.classList.remove('hidden');
// You can also change the css : modal.style.display = 'block';
overlay.classList.remove('hidden');
}

// loop the nodelist to access all elements and then remove classes
for(let i= 0; i< btnsOpenModal.length; i++) 
btnsOpenModal[i].addEventListener('click', openModal);

// When clicking the cross btn the modal and overlay disappear
    // We are NOT calling the function immediately by using closeModal() as it would execute it before we click. We want it to execute on click.
btnCloseModal.addEventListener('click', closeModal);

// When clicking the overlay exterior modal and overlay disappear
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', (e)=>{
    console.log('A key was pressed', e);
    const keyvalue = e.key;
    console.log(keyvalue, typeof keyvalue);
    if(keyvalue === 'Escape' && !modal.classList.contains('hidden' )){   
            closeModal();
    }
});
