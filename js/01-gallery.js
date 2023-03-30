import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery")

const markup = galleryItems
.map(({ preview, original, description }) => `<li class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image" 
data-source = "${original}" 
src="${preview}" 
alt="${description}" />
</a>
</li>`);
galleryList.insertAdjacentHTML("beforeend", markup.join(""));
galleryList.addEventListener("click", onImageClick);

function onImageClick(evt) {
    //console.log(evt.target);
    evt.preventDefault();
    const { target } = evt;
    if (!target.dataset.source) {
        return
    }

const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="1280" height="auto">`,
    {
        onShow: () => {
          window.addEventListener("keydown", exitEscape);
        },
        onClose: () => {
          window.removeEventListener("keydown", exitEscape);
        },
      }
    );
function exitEscape(evt) {
    if(evt.code === "Escape") {
        instance.close();
    }
}
instance.show();
}

//console.log(galleryItems);


