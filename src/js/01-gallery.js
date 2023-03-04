// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';



const div = document.querySelector('.gallery');
const cardsMarkup = creatImageCards(galleryItems);


function creatImageCards(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
       <li>
       <img
       class="gallery__image"
       href="${original}"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
       >
       </li>
        `;
    }).join('');
}

div.insertAdjacentHTML('beforeend', cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});