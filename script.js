let grid = document.querySelector(".grid");
let msnry;
let intervalId;
let isScrollingOrMoving = false;

function initializeMasonry() {
  msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: 220,
    gutter: 10,
    fitWidth: true,
  });
}

function handleDownload(imageAddress) {
  let downloadOverlay = document.querySelector(".download-overlay");
  downloadOverlay.style.display = "block";

  let downloader = document.querySelector(".downloader");
  downloader.style.display = "flex";
  let left = document.querySelector(".left");
  let leftHTML = `<img src="${imageAddress}"/>`
  left.innerHTML =  leftHTML;

  downloadOverlay.addEventListener("click", function () {
    downloadOverlay.style.display = "none";
    downloader.style.display = "none";
  });
}

function renderGridItems(items) {
  let clutter = "";
  items.forEach((obj) => {
    let newElement = `<div class="grid-item" onclick="handleDownload('${obj.imgAddress}')">
                        <div class="image">
                          <div class="overlay"></div>
                          <img src="${obj.imgAddress}" />
                        </div>
                      </div>`;
    clutter += newElement;
  });
  grid.innerHTML = clutter;
}

function handleSearchInput() {
  clearInterval(intervalId);
  let toBeSearched = search.value.trim().toLowerCase();
  let matchingImages = data.filter(function (image) {
    return image.name.toLowerCase().includes(toBeSearched);
  });
  renderGridItems(matchingImages);

  msnry.reloadItems();
  msnry.layout();
}

function restartInterval() {
  clearInterval(intervalId);
  if (!isScrollingOrMoving) {
    intervalId = setInterval(shuffleImages, 10000);
  }
}

function shuffleImages() {
  data.sort(() => Math.random() - 0.5);
  renderGridItems(data);
  msnry.reloadItems();
  msnry.layout();
}

let search = document.querySelector("#searchInput");
search.addEventListener("input", handleSearchInput);

search.addEventListener("blur", restartInterval);

window.addEventListener("scroll", function () {
  isScrollingOrMoving = true;
  clearInterval(intervalId);
  setTimeout(function () {
    isScrollingOrMoving = false;
    restartInterval();
  }, 10000);
});

window.addEventListener("mousemove", function () {
  isScrollingOrMoving = true;
  clearInterval(intervalId);
  setTimeout(function () {
    isScrollingOrMoving = false;
    restartInterval();
  }, 10000);
});

initializeMasonry();
renderGridItems(data);
restartInterval();


setTimeout(function(){
  shuffleImages();
},2000)
