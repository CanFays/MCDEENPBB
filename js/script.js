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

  putDays.innerHTML = Math.abs(daysLeft);
  putHours.innerHTML = Math.abs(hoursLeft);
  putMinutes.innerHTML = Math.abs(minutesLeft);
  putSeconds.innerHTML = Math.abs(secondsLeft);
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
  goodTimingText(timeLeft());
}

countdown();

// ##########################################  LOADING SECTIONS ##########################################

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
  noticeSection.addEventListener('click', (event) => {
    showChosenImage(event);
  });
}

// CAROUSEL : speech section and guestbook section

// const globalCarousel = (event, className) => {
//   const btnPath = event.target;
//   const currentImg = document.querySelector('.section-carousel__img:not(.hidden)');
//   const imgCollectionArray = Array.from(document.querySelectorAll('.section-carousel__img'));
//   let i = imgCollectionArray.indexOf(currentImg);

//   if (btnPath.classList.contains('section__carousel--next-btn')) {
//     i === imgCollectionArray.length - 1 ? i = 0 : i = i + 1;
//   } else if (btnPath.classList.contains('section__carousel--prev-btn')) {
//     i === 0 ? i = imgCollectionArray.length - 1 : i = i - 1;
//   }

//   currentImg.classList.add('hidden');
//   imgCollectionArray[i].classList.remove('hidden');
// }


// const carouselSectionListener = () => {
//   const carouselBtns = document.querySelectorAll('.carousel-btn');
//   carouselBtns.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       globalCarousel(event, className);
//     });
//   });
// }


// Speech section


// on écoute la classe section-speech__listened, au click:
  // hidden tous les éléments de classe section-speech--open-container
  // pour chaque élément:
    // on récupère l'id de l'élément cliqué
    // on fait une collection avec tous les éléments de classe 'speech-${id}'
    // on enlève la classe hidden à l'élément d'index 0
    // on appelle la méthode qui écoute l'élément click sur le carousel
    const isSpeechSectionLoaded = () => {
      const SpeechSection = document.querySelector('.section-speech__listened');
      return SpeechSection !== null;
    }
    
    const waitForSpeechSection = (callback) => {
      const checkInterval = 100;
      const maxAttempts = 50;
      let attempts = 0;
    
      const checkLoaded = () => {
        if (isSpeechSectionLoaded() || attempts >= maxAttempts) {
          clearInterval(interval);
          callback(isSpeechSectionLoaded());
        }
        attempts++;
      }
      const interval = setInterval(checkLoaded, checkInterval);
    }





const speechSectionListener = () => {
  console.log('inside speech section');

  const speechListening = document.querySelectorAll('section-speech__listened')
  
  console.log(speechListening);
  speechListening.forEach((link) => {
    console.log('speech section écouter chaque élément:', link)
    link.addEventListener('click', (event) => {
      console.log('speech section écouter l évènement: ok')
      const speechOpenContainers = document.querySelectorAll('.section-speech--open-container');
      speechOpenContainers.forEach((container) => {
        container.classList.add('hidden');
      });
      const clickedElement = event.target;
      const clickedId = clickedElement.id;
      const speechOpenContainer = document.querySelectorAll(`.speech-${clickedId}`);
      speechOpenContainer[0].classList.remove('hidden');
      // carouselSectionListener();
    });
  });
};










// ecouter event sur la classe section-speech__link
// on récupère l'élément cliqué avec event.target
// on récupère l'id associé à cet élément
// on trouve la classe section-speech--open-container qui a le même nom de classe que l'id
// on lui enlève la classe hidden
// on écoute l'évènement click sur le carousel

// const speechSectionListener = () => {

//   console.log('inside speechSectionListener');
//   const speechListening = document.querySelectorAll('.section-speech__listened');
//   console.log(speechListener);
//   speechListener.forEach( (link) => {
//     link.addEventListener('click', (event) => {
//     console.log('inside speechSectionListener event');
//     console.log(event.target);
//     // const clickedElement = event.target;
//     // const clickedClass = isolateClickedClass(clickedElement);
//     // const speechOpenContainer = document.querySelector(`.${clickedClass}`);
//     // speechOpenContainer.classList.remove('hidden');
//     });
//   });
// }









// Asked-section: loading of the partial after click
// needs to stay behind notice section, wich depends on fetchAskedPartial

const sectionsList = ['map', 'notice', 'contact', 'photos', 'timeline', 'speech', 'guestbook']
// add every honeycomb section here + its same word class name in html
const navListening = document.querySelectorAll('.nav--listening');

const fetchAskedPartial = (sectionName) => {
  if (sectionsList.includes(sectionName)) {
    const askedSection = document.getElementById('main__asked-section');
    const hiddenBg = document.querySelectorAll('.hidden-bg-partial');

    fetch(`./_${sectionName}.html`)
    .then(response => response.text())
    .then(content => askedSection.innerHTML = content);

    if (sectionName === 'notice') {
      waitForNoticeSection((isLoaded) => {
        if (isLoaded) {
          noticeSectionListener();
        }
      });
    } else if (sectionName === 'speech') {
      waitForSpeechSection((isLoaded) => {
        if (isLoaded) {
          speechSectionListener();
        }
      });
    };

    hiddenBg.forEach((bg) => {
      bg.classList.remove('hidden');
    });
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
  const clickedClass = clickedClasses.find(cls => sectionsList.includes(cls));
  return clickedClass;
}

navListening.forEach((nav) => {
  nav.addEventListener('click', event => {
    const clickedElement = event.target;
    const clickedClass = isolateClickedClass(clickedElement);
    loadingAskedPartial(clickedClass);
  });
});



// Lottie animation reader

const giveMeFun = (animationNameAndID) => {
  const path = `../elements/images/${animationNameAndID}.json`;
  const location = document.getElementById(animationNameAndID);

  const animation = bodymovin.loadAnimation({
    container: location,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path
  });
  return animation;
}

// giveMeFun('mobile');
// giveMeFun('bear');
// giveMeFun('cat');
// giveMeFun('watermelon');
// giveMeFun('poele');
// giveMeFun('calandar');
