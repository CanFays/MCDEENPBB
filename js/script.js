console.log('script.js loaded');

// Date section: timer

const timeLeft = () => {
  const weddingDate = new Date(2023, 8, 16, 11);
  const today = new Date();
  const timeLeft = weddingDate - today;
  return timeLeft;
}

const timeCalculator = (timeLeft) => {
  const putDays = document.getElementById('date-timer-days');
  const putHours = document.getElementById('date-timer-hours');
  const putMinutes = document.getElementById('date-timer-minutes');
  const putSeconds = document.getElementById('date-timer-seconds');

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  putDays.innerHTML = daysLeft;
  putHours.innerHTML = hoursLeft;
  putMinutes.innerHTML = minutesLeft;
  putSeconds.innerHTML = secondsLeft;
}

const goodTimingText = (timeLeft) => {
  const putBeforeOrAfter = document.getElementById('before-after');
  if (timeLeft < 0) {
    putBeforeOrAfter.innerHTML = 'depuis';
  } else {
    putBeforeOrAfter.innerHTML = 'dans';
  }
}

const countdown = () => {
  setInterval(() => {
    timeCalculator(timeLeft());
  }, 1000);;
  goodTimingText();
}

countdown();












// Notice section: LOAD CHECKING
// needs to stay above loading asked section: depends on its addEventListener

const isNoticeSectionLoaded = () => {
  const noticeSection = document.querySelector('.notice-section');
  return noticeSection !== null;
}

const waitForNoticeSection = (callback) => {
  const checkInterval = 100;
  const maxAttempts = 50;
  let attempts = 0;

  const checkLoaded = () => {
    if (isNoticeSectionLoaded() || attempts >= maxAttempts) {
      clearInterval(interval);
      callback(isNoticeSectionLoaded());
    }
    attempts++;
  }
  const interval = setInterval(checkLoaded, checkInterval);
}

waitForNoticeSection((isLoaded) => {
  if (isLoaded) {
    console.log('.notice-section loaded.');
    // const noticeSection = document.querySelector('.notice-section');
    // noticeSection.addEventListener('click', (event) => {
    //   console.log('j arrive jusqu ici: waitfornoticeSectionListener');
    // showChosenImage(event);
    // });
  } else {
    console.log('notice section not loaded');
  }
});


// Notice section: GALLERY

const showChosenImage = (event) => {
  const noticeImages = document.querySelectorAll('.section__notice-image-container');
  const noticeImagesArray = Array.from(noticeImages);
  const currentImage = document.querySelector('.section__notice-image-container:not(.hidden)');
  const currentImageIndex = noticeImagesArray.indexOf(currentImage);
  const nextImage = noticeImagesArray[currentImageIndex + 1];
  const previousImage = noticeImagesArray[currentImageIndex - 1];
  const noticeNextBtn = document.querySelector('.section__notice--next-btn');
  const noticePrevBtn = document.querySelector('.section__notice--prev-btn');

  if (event.target === noticePrevBtn && currentImageIndex > 0) {
    previousImage.classList.remove('hidden');
    currentImage.classList.add('hidden');
  } else if (event.target === noticeNextBtn && currentImageIndex < noticeImagesArray.length - 1) {
    nextImage.classList.remove('hidden');
    currentImage.classList.add('hidden');
  }
}

const noticeSectionListener = () => {
  const noticeSection = document.getElementById('section__notice');
  // const noticePrevBtn = document.querySelector('.notice-section');
  noticeSection.addEventListener('click', (event) => {
    showChosenImage(event);
  });
}


// Asked-section: loading of the partial after click

// needs to stay behind notice section, wich depends on fetchAskedPartial
// to do: insert bg and transition of added section insted of already have it in html

const sectionsList = ['map', 'notice', 'contact', 'photos', 'timeline']
// add every honeycomb section here + its id (same word) in html
const navListening = document.querySelectorAll('.nav--listening');


const fetchAskedPartial = (sectionName) => {
  if (sectionsList.includes(sectionName)) {
    const askedSection = document.getElementById('main__asked-section');
    fetch(`./_${sectionName}.html`)
    .then(response => response.text())
    .then(content => askedSection.innerHTML = content);

    if (sectionName === 'notice') {
      waitForNoticeSection((isLoaded) => {
        if (isLoaded) {
          noticeSectionListener();
        }
      });
    }
    askedSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

const loadingAskedPartial = (sectionWanted) => {
  const askedSection = document.getElementById('main__asked-section');
  askedSection.innerHTML = '';
  fetchAskedPartial(sectionWanted);
}

const isolateClickedClass = (clk) => {
  const clickedClasses = Array.from(clk.classList);
  console.log("array clickedClasses", clickedClasses);
  const clickedClass = clickedClasses.find(cls => sectionsList.includes(cls));
  return clickedClass;
}

navListening.forEach((nav) => {
  nav.addEventListener('click', event => {
    const clickedElement = event.target;
    console.log("clickedElement in navListening", clickedElement);
    const clickedClass = isolateClickedClass(clickedElement);
    loadingAskedPartial(clickedClass);
  });
});



// Lottie animation reader

const giveMeFun = (animationNameAndID) => {
  const path = `../elements/images/${animationNameAndID}.json`;
  const location = document.getElementById(animationNameAndID);

  const animation = bodymovin.loadAnimation({
    // Uncaught ReferenceError: bodymovin is not defined
    container: location,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path
  });
  return animation;
}

console.log('giveMeFun active');
giveMeFun('mobile');
// giveMeFun('bear');
// giveMeFun('cat');
// giveMeFun('watermelon');
// giveMeFun('poele');
// giveMeFun('calandar');






// hamburger menu
