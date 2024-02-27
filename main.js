const next1 = document.querySelector('.next1');
const prev1 = document.querySelector('.prev1');
const slides1 = document.querySelectorAll('.slide1');
const dots1 = document.querySelectorAll('.dot1');

let indexSlide1 = 0;

const activeSlide1 = num => {
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].classList.remove('active');
  }
  slides1[num].classList.add('active');
};

const nextSlide1 = () => {
  if (indexSlide1 === (slides1.length - 1)) {
    indexSlide1 = 0;
    activeSlide1(indexSlide1);
    activeDot1(indexSlide1);
  } else {
    indexSlide1++;
    activeSlide1(indexSlide1);
    activeDot1(indexSlide1);
  }
};

const activeDot1 = num => {
  for (let i = 0; i < dots1.length; i++) {
    dots1[i].classList.remove('active');
  }
  dots1[num].classList.add('active');
};

const prevSlide1 = () => {
  if (indexSlide1 === 0) {
    indexSlide1 = slides1.length - 1;
    activeSlide1(indexSlide1);
    activeDot1(indexSlide1);
  } else {
    indexSlide1--;
    activeSlide1(indexSlide1);
    activeDot1(indexSlide1);
  }
};

for (let i = 0; i < dots1.length; i++) {
  dots1[i].addEventListener('click', () => {
    indexSlide1 = i;
    activeSlide1(indexSlide1);
    activeDot1(indexSlide1);
  });
}

prev1.addEventListener('click', prevSlide1);
next1.addEventListener('click', nextSlide1);

// Другий набір
const next2 = document.querySelector('.next2');
const prev2 = document.querySelector('.prev2');
const slides2 = document.querySelectorAll('.slide2');
const dots2 = document.querySelectorAll('.dot2');

let indexSlide2 = 0;

const activeSlide2 = num => {
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].classList.remove('active');
  }
  slides2[num].classList.add('active');
};

const nextSlide2 = () => {
  if (indexSlide2 === (slides2.length - 1)) {
    indexSlide2 = 0;
    activeSlide2(indexSlide2);
    activeDot2(indexSlide2);
  } else {
    indexSlide2++;
    activeSlide2(indexSlide2);
    activeDot2(indexSlide2);
  }
};

const activeDot2 = num => {
  for (let i = 0; i < dots2.length; i++) {
    dots2[i].classList.remove('active');
  }
  dots2[num].classList.add('active');
};

const prevSlide2 = () => {
  if (indexSlide2 === 0) {
    indexSlide2 = slides2.length - 1;
    activeSlide2(indexSlide2);
    activeDot2(indexSlide2);
  } else {
    indexSlide2--;
    activeSlide2(indexSlide2);
    activeDot2(indexSlide2);
  }
};

for (let i = 0; i < dots2.length; i++) {
  dots2[i].addEventListener('click', () => {
    indexSlide2 = i;
    activeSlide2(indexSlide2);
    activeDot2(indexSlide2);
  });
}

prev2.addEventListener('click', prevSlide2);
next2.addEventListener('click', nextSlide2);

// Третій набір
const next3 = document.querySelector('.next3');
const prev3 = document.querySelector('.prev3');
const slides3 = document.querySelectorAll('.slide3');
const dots3 = document.querySelectorAll('.dot3');

let indexSlide3 = 0;

const activeSlide3 = num => {
  for (let i = 0; i < slides3.length; i++) {
    slides3[i].classList.remove('active');
  }
  slides3[num].classList.add('active');
};

const nextSlide3 = () => {
  if (indexSlide3 === (slides3.length - 1)) {
    indexSlide3 = 0;
    activeSlide3(indexSlide3);
    activeDot3(indexSlide3);
  } else {
    indexSlide3++;
    activeSlide3(indexSlide3);
    activeDot3(indexSlide3);
  }
};

const activeDot3 = num => {
  for (let i = 0; i < dots3.length; i++) {
    dots3[i].classList.remove('active');
  }
  dots3[num].classList.add('active');
};

const prevSlide3 = () => {
  if (indexSlide3 === 0) {
    indexSlide3 = slides3.length - 1;
    activeSlide3(indexSlide3);
    activeDot3(indexSlide3);
  } else {
    indexSlide3--;
    activeSlide3(indexSlide3);
    activeDot3(indexSlide3);
  }
};

for (let i = 0; i < dots3.length; i++) {
  dots3[i].addEventListener('click', () => {
    indexSlide3 = i;
    activeSlide3(indexSlide3);
    activeDot3(indexSlide3);
  });
}

prev3.addEventListener('click', prevSlide3);
next3.addEventListener('click', nextSlide3);

// Четвертий набір
const next4 = document.querySelector('.next4');
const prev4 = document.querySelector('.prev4');
const slides4 = document.querySelectorAll('.slide4');
const dots4 = document.querySelectorAll('.dot4');

let indexSlide4 = 0;

const activeSlide4 = num => {
  for (let i = 0; i < slides4.length; i++) {
    slides4[i].classList.remove('active');
  }
  slides4[num].classList.add('active');
};

const nextSlide4 = () => {
  if (indexSlide4 === (slides4.length - 1)) {
    indexSlide4 = 0;
    activeSlide4(indexSlide4);
    activeDot4(indexSlide4);
  } else {
    indexSlide4++;
    activeSlide4(indexSlide4);
    activeDot4(indexSlide4);
  }
};

const activeDot4 = num => {
  for (let i = 0; i < dots4.length; i++) {
    dots4[i].classList.remove('active');
  }
  dots4[num].classList.add('active');
};

const prevSlide4 = () => {
  if (indexSlide4 === 0) {
    indexSlide4 = slides4.length - 1;
    activeSlide4(indexSlide4);
    activeDot4(indexSlide4);
  } else {
    indexSlide4--;
    activeSlide4(indexSlide4);
    activeDot4(indexSlide4);
  }
};

for (let i = 0; i < dots4.length; i++) {
  dots4[i].addEventListener('click', () => {
    indexSlide4 = i;
    activeSlide4(indexSlide4);
    activeDot4(indexSlide4);
  });
}

prev4.addEventListener('click', prevSlide4);
next4.addEventListener('click', nextSlide4);
