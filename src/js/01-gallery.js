
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onItemClick);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join('');
       
}
function onItemClick(e) {
    e.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";