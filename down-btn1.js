function smoothScroll(target){
    const element = document.getElementById(target);
    element.scrollIntoView({behavior: "smooth", block: "center"});
}

// var productSection = document.querySelector(".product-section");
// console.log(productSection);
// var gallerySection = document.querySelector(".gallery");
// console.log(gallerySection);
// var productSectionBtn = document.getElementById("down-section");
// console.log(productSectionBtn);
// var gallerySectionBtn = document.getElementById("down-gallery");
// function getDown(target){
//     target.scrollIntoView({behavior: "smooth", block: "end"});
//     console.log(target);
// }
// productSectionBtn.addEventListener("click", getDown(productSection));
// gallerySectionBtn.addEventListener("click", getDown(gallerySection));