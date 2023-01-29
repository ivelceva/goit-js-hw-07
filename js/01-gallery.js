import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const divGallery = document.querySelector(".gallery");
const addImageGallery = createImageGallery(galleryItems);
divGallery.innerHTML = addImageGallery;
divGallery.addEventListener("click", onImageClick);

function createImageGallery(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
}


function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}"
        width="800"
        height="600">`
  );
  instance.show();

  divGallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}





