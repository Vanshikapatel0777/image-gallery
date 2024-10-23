const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('largeImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.gallery-img');

let currentIndex;
let zoomLevel=1;
const minzoom=1;
const maxzoom=3;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.textContent = img.alt;
        currentIndex = index;
        resetZoom();
    });
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
    
};

prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
};

nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
};

modal.onclick = function(event) {
    if (event.target !== modalImg && event.target !== nextBtn && event.target !== prevBtn) {
        modal.style.display = 'none';
    }
};
function updateModalContent(){
    modalImg.src=images[currentIndex].src;
    caption.textContent=images[currentIndex].alt;
    resetZoom();
}
function resetZoom(){
    zoomLevel=1;
    modalImg.style.transform='scale(${zoomLevel})';
}
modalImg.addEventListener('click', ()=>{
    if(zoomLevel<maxzoom)
    {
        zoomLevel+=1;
    }
    else{
        zoomLevel=minzoom;
    }
    modalImg.style.transform='scale(${zoomLevel})';
});