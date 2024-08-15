// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }
    // square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));

// Remove the transition class
const square2 = document.querySelector('.square2');
square2.classList.remove('square2-transition');

// Create the observer, same as before:
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square2.classList.add('square2-transition');
      return;
    }

    // square2.classList.remove('square2-transition');
  });
});

observer2.observe(document.querySelector('.square2-wrapper'));

const square3 = document.querySelector('.square3');
square3.classList.remove('square3-transition');

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      return;
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer5.observe(el));

const hiddenElementsFirst = document.querySelectorAll('.hiddenFirst');
hiddenElementsFirst.forEach((el) => observer5.observe(el));

const hiddenElementsSecond = document.querySelectorAll('.hiddenSecond');
hiddenElementsSecond.forEach((el)  => observer5.observe(el));

const hiddenElementsThird = document.querySelectorAll('.hiddenThird');
hiddenElementsThird.forEach((el) => observer5.observe(el));

const hiddenElementsFourth = document.querySelectorAll('.hiddenFourth');
hiddenElementsFourth.forEach((el) => observer5.observe (el));

const hiddenElementsFifth = document.querySelectorAll('.hiddenFifth');
hiddenElementsFifth.forEach((el) => observer5.observe(el));



const hiddenElementsBottom = document.querySelectorAll('.hidden-from-bottom');
hiddenElementsBottom.forEach((el) => observer5.observe(el));

const hiddenElementsBottomZero = document.querySelectorAll('.hidden-from-bottom-zero');
hiddenElementsBottomZero.forEach((el) => observer5.observe(el));

const hiddenElementsBottomFirst = document.querySelectorAll('.hidden-from-bottom-first');
hiddenElementsBottomFirst.forEach((el) => observer5.observe(el));

const hiddenElementsBottomSecond = document.querySelectorAll('.hidden-from-bottom-second');
hiddenElementsBottomSecond.forEach((el) => observer5.observe(el));

const hiddenElementsBottomThird = document.querySelectorAll('.hidden-from-bottom-third');
hiddenElementsBottomThird.forEach((el) => observer5.observe(el));

const hiddenElementsBottomFourth = document.querySelectorAll('.hidden-from-bottom-fourth');
hiddenElementsBottomFourth.forEach((el) => observer5.observe(el));

const hiddenElementsBottomFifth = document.querySelectorAll('.hidden-from-bottom-fifth');
hiddenElementsBottomFifth.forEach((el) => observer5.observe(el));

const hiddenElementsBottomSixth = document.querySelectorAll('.hidden-from-bottom-sixth');
hiddenElementsBottomSixth.forEach((el) => observer5.observe(el));

const hiddenElementsBottomAlt = document.querySelectorAll('.hidden-from-bottom-alt');
hiddenElementsBottomAlt.forEach((el) => observer5.observe(el));

const hiddenElementsBottomBeta = document.querySelectorAll('.hidden-from-bottom-beta');
hiddenElementsBottomBeta.forEach((el) => observer5.observe(el));