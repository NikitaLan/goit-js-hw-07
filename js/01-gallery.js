import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
         <img
         loading="lazy"
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
        alt="${description}"
        width="350"
        height="240"
      />
    </a>
  </div>`,
    )
    .join('');
}

containerGallery.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

containerGallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const urlOriginalImage = event.target.dataset.source;
  createModalWindow(urlOriginalImage);
}

function createModalWindow(url) {
  window.addEventListener('keydown', onEscKeyDown);
  const modalWindow = basicLightbox.create(
    `<img src="${url}" width="1280" height="900">`,
  );
  modalWindow.show();

  function onEscKeyDown(event) {
    if (event.code === 'Escape') {
      modalWindow.close();
    }
    window.removeEventListener('keydown', onEscKeyDown);
  }
}
