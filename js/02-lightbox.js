import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");
const addSecondGallery = createSecondGallery(galleryItems);
ulGallery.innerHTML = addSecondGallery;
ulGallery.addEventListener("click", onImageClick);

function createSecondGallery(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" 
        href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        alt="${item.description}" />
</a>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function onImageClick(e) {
  e.preventDefault();
}










