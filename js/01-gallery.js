import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");
const addImageGallery = createImageGallery(galleryItems);
divGallery.innerHTML = addImageGallery;
divGallery.addEventListener("click", onImageClick);

function createImageGallery(items) {
  return items.map(
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




// const divRef = document.querySelector(".gallery");

// function createImageGallery(items) {
//     return items.map(
//       (item) => `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`
//     )
//     .join("");
// }

// const addImageGallery = createImageGallery(galleryItems);

// divRef.innerHTML = addImageGallery;
// divRef.addEventListener("click", onImageClick);

// function onImageClick(event) {
//     blockStandartAction(event);

//     if (event.target.nodeName !== "IMG") {
//         return;
        
//     }

//     const instance = basicLightbox.create(
//         `<img src="${event.target.dataset.source}"
//         width="800"
//         height="600">`
//     );
//     instance.show();

//     divRef.addEventListener("keydown", (event) => {
//         if (event.code === "Escape") {
//             instance.close();
//         }
//     });

//     function blockStandartAction(event) {
//         event.preventDefault();
//     }
// }


