import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `    
    <a class="gallery__item" href="${original}">
      <img loading="lazy" class="gallery__image" src="${preview}" alt="${description}" width="350"
      height="240""/>
    </a> 
    `,
    )
    .join('');
}
containerGallery.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

const modalLightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});