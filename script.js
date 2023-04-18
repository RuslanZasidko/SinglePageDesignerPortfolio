// const carousel = document.querySelector(".carousel");
// const slides = carousel.querySelector(".slides");
// const slideList = carousel.querySelectorAll(".slides img");
// const leftButton = document.querySelector(".left-button");
// const rightButton = document.querySelector(".right-button");

// let currentIndex = 0;
// let translateValue = 0;

// // Helper function to set transform property of slides container
// function setTranslate(value) {
//   slides.style.transform = `translateX(${value}px)`;
// }

// // Helper function to calculate the translate value
// function calculateTranslateValue() {
//   const slideWidth = slideList[currentIndex].clientWidth + 30;
//   return -slideWidth * currentIndex;
// }

// // Initialize the carousel
// function initializeCarousel() {
//   // Set the initial translate value and apply it to the slides container
//   translateValue = calculateTranslateValue();
//   setTranslate(translateValue);

//   // Add event listeners to buttons
//   leftButton.addEventListener("click", handleLeftButtonClick);
//   rightButton.addEventListener("click", handleRightButtonClick);
// }

// // Handle left button click event
// function handleLeftButtonClick() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     translateValue += slideList[currentIndex].clientWidth + 30;
//     setTranslate(translateValue);
//   } else {
//     // Move to the last slide
//     currentIndex = slideList.length - 1;
//     translateValue = calculateTranslateValue();
//     setTranslate(translateValue);
//   }
// }

// function handleRightButtonClick() {
//   if (currentIndex < slideList.length - 1) {
//     currentIndex++;
//     translateValue -= slideList[currentIndex].clientWidth + 30;
//     setTranslate(translateValue);
//     console.log(currentIndex);
//   } else {
//     currentIndex = 0;
//     translateValue = 0;
//     setTranslate(translateValue);
//   }
// }

// initializeCarousel();
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");
const slideList = carousel.querySelectorAll(".slides img");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let currentIndex = 0;
let translateValue = 0;

// Helper function to set transform property of slides container
const setTranslate = (value) => {
  slides.style.transform = `translateX(${value}px)`;
};

// Helper function to calculate the translate value
const calculateTranslateValue = () => {
  const slideWidth = slideList[currentIndex].clientWidth + 30;
  return -slideWidth * currentIndex;
};

// Initialize the carousel
const initializeCarousel = () => {
  // Set the initial translate value and apply it to the slides container
  translateValue = calculateTranslateValue();
  setTranslate(translateValue);

  // Add event listeners to buttons
  leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      translateValue += slideList[currentIndex].clientWidth + 30;
      setTranslate(translateValue);
    } else {
      // Move to the last slide
      currentIndex = slideList.length - 1;
      translateValue = calculateTranslateValue();
      setTranslate(translateValue);
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentIndex < slideList.length - 1) {
      currentIndex++;
      translateValue -= slideList[currentIndex].clientWidth + 30;
      setTranslate(translateValue);
    } else {
      currentIndex = 0;
      translateValue = 0;
      setTranslate(translateValue);
    }
  });
};

initializeCarousel();
