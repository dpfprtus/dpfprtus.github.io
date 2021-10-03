const image = ["1 (1).jpg","2 (1).jpg","3 (1).jpg","4 (1).jpg"];
const choose = Math.floor(Math.random() * image.length);

const bgimage = document.createElement("img");

bgimage.src = `/src/img/${image[choose]}`;
bgimage.className = "background";

document.body.appendChild(bgimage);
