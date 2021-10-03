const image = ["1.jpg","2.jpg","3.jpg","4.jpg"];
const choose = Math.floor(Math.random() * image.length);

const bgimage = document.createElement("img");

bgimage.src = `/src/img/${image[choose]}`;
bgimage.className = "background";

document.body.appendChild(bgimage);
