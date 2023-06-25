/* Header */
const hamburger = document.getElementById('burger');
const headerButton = document.querySelector('header button');

const navList = document.querySelectorAll('.nav-links li');
/* Booking buttons */
const bookingButtons = document.querySelectorAll('.btn');
const bookNavLink = document.querySelector('.book-nav-link');
/* Select Element */
const peopleNum = document.getElementById('person');

/* Menu Section */
const starters = document.getElementById('starters');
const first = document.getElementById('first');
const second = document.getElementById('second');
const dessert = document.getElementById('dessert');

/* Menu Box */
const menuBox = document.querySelector('.menu-box');


/* Header */
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});


/* Open Sidebar */
hamburger.addEventListener('click', () => {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    gsap.to(".nav-links", { x: 0 });
    gsap.fromTo(
      ".nav-links a",
      { opacity: 0, y: 0, },
      { opacity: 1, y: 20, duration: .5, delay: .3, stagger: .3 }
    );
  } else {
    gsap.to(".nav-links", { x: "100%" });
  }
})

let navListArr = Array.from(navList);

navListArr.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.toggle("active");
    gsap.to(".nav-links", { x: "100%" });
  })
})

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 768) {
    bookNavLink.style.display = 'none';
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      bookNavLink.style.display = 'block';
    } else {
      bookNavLink.style.display = 'none';
    }
  })
})

/* Booking Section */
bookingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const contactsSection = document.querySelector('.contact-section');

    // Effettua lo scorrimento verso la sezione dei contatti
    contactsSection.scrollIntoView({ behavior: 'smooth' });
  })
})

/* Creo option element per select element */
for (let i = 1; i <= 15; i++) {
  const optionEl = document.createElement('option');
  optionEl.innerText = i
  optionEl.setAttribute('value', i)
  peopleNum.append(optionEl);
}

/* Menu Arrays */
const starterDishes = [
  {
    id: 1,
    name: "Antipasto della casa",
    price: "€12.00",
    ingredients: "Selezione di salumi e formaggi locali, bruschette miste, crostini e altre specialità."
  },
  {
    id: 2,
    name: "Carpaccio di manzo",
    price: "€12.00",
    ingredients: "Fette sottili di manzo crudo, rucola, scaglie di Parmigiano-Reggiano, olio extravergine di oliva, succo di limone, sale e pepe."
  },
  {
    id: 3,
    name: "Caprese di bufala",
    price: "€8.00",
    ingredients: "Mozzarella di bufala, pomodori, basilico fresco, olio extravergine di oliva, aceto balsamico, sale e pepe."
  },
  {
    id: 4,
    name: "Funghi trifolati",
    price: "€7.00",
    ingredients: "Funghi (champignon o porcini), aglio, prezzemolo, olio extravergine di oliva, succo di limone, sale e pepe."
  },
  {
    id: 5,
    name: "Bruschette al pomodoro",
    price: "€5.00",
    ingredients: "Pane croccante con pomodoro, cipolla, olio extravergine di oliva, sale."
  }
];
const firstDishes = [
  {
    id: 1,
    name: 'Risotto ai Funghi Porcini',
    ingredients: 'Riso Arborio, funghi porcini freschi, cipolla, brodo vegetale, parmigiano reggiano, burro',
    price: '€12.00'
  },
  {
    id: 2,
    name: 'Penne all\'Arrabbiata',
    ingredients: 'Penne, pomodoro, aglio, peperoncino, olio d\'oliva, prezzemolo',
    price: '€9.00'
  },
  {
    id: 3,
    name: 'Gnocchi al Pesto',
    ingredients: 'Gnocchi di patate, basilico, pinoli, olio d\'oliva, aglio, parmigiano reggiano',
    price: '€11.50'
  },
  {
    id: 4,
    name: 'Linguine allo Scoglio',
    ingredients: 'Linguine, vongole, cozze, pomodoro, aglio, prezzemolo',
    price: '€13.50'
  },
  {
    id: 5,
    name: 'Cannelloni al Forno',
    ingredients: 'Cannelloni, ricotta, spinaci, carne macinata, pomodoro, mozzarella',
    price: '€10.50'
  },
  {
    id: 6,
    name: 'Tagliatelle al Ragù Bolognese',
    ingredients: 'Tagliatelle, carne macinata, pomodoro, cipolla, carota, sedano, vino rosso, parmigiano reggiano',
    price: '€11.00'
  },
];
const dinnerDishes = [
  {
    id: 1,
    name: 'Bistecca alla Fiorentina',
    ingredients: 'Bistecca di manzo, sale, pepe, olio d\'oliva',
    price: '€25.00'
  },
  {
    id: 2,
    name: 'Saltimbocca alla Romana',
    ingredients: 'Fettine di vitello, prosciutto crudo, salvia, burro, vino bianco',
    price: '€18.00'
  },
  {
    id: 3,
    name: 'Risotto ai Frutti di Mare',
    ingredients: 'Riso Arborio, frutti di mare misti, pomodoro, aglio, prezzemolo',
    price: '€22.50'
  },
  {
    id: 4,
    name: 'Salmone alla Griglia',
    ingredients: 'Filetto di salmone, olio d\'oliva, limone, sale, pepe',
    price: '€20.00'
  },
  {
    id: 5,
    name: 'Tagliata di Manzo',
    ingredients: 'Fettine di manzo, rucola, scaglie di Parmigiano-Reggiano, aceto balsamico',
    price: '€19.00'
  },
  {
    id: 6,
    name: 'Orata al Cartoccio',
    ingredients: 'Orata, pomodorini, olive, capperi, prezzemolo, vino bianco',
    price: '€17.50'
  },
];
const dessertDishes = [
  {
    id: 1,
    name: "Tiramisù",
    ingredients: "Savoiardi, caffè, mascarpone, cacao in polvere",
    price: '€6.50'
  },
  {
    id: 2,
    name: "Cheesecake al limone",
    ingredients: "Biscotti digestive, formaggio cremoso, limone, zucchero",
    price: '€5.50'
  },
  {
    id: 3,
    name: "Gelato alla vaniglia",
    ingredients: "Latte, panna, zucchero, estratto di vaniglia",
    price: '€4.00'
  },
  {
    id: 4,
    name: "Panna cotta",
    ingredients: "Panna, zucchero, gelatina, vaniglia",
    price: '€5.00'
  },
  {
    id: 5,
    name: "Crostata di frutta",
    ingredients: "Pasta frolla, frutta fresca, zucchero a velo",
    price: '€4.50'
  }
];

const menuIcons = document.querySelectorAll('.menu-icon-card');
menuIcons.forEach(item => {
  /* Evento per ogni elemento */
  item.addEventListener('click', () => {
    menuIcons.forEach(icon => {
      /* Rimuoviamo a tutti la classe prima di applicarla a quello che ci interessa */
      icon.classList.remove('menu-active')
    })
    item.classList.add('menu-active');
    fadeIn(showMenu);
  });
})

starters.addEventListener('click', () => showMenu(starterDishes));
first.addEventListener('click', () => showMenu(firstDishes));
second.addEventListener('click', () => showMenu(dinnerDishes));
dessert.addEventListener('click', () => showMenu(dessertDishes));

function fadeIn(callback) {
  menuBox.style.opacity = 0;
  let opacity = 0;

  const fadeInInterval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      menuBox.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 50);
  callback();
}

function showMenu(arr) {
  menuBox.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const menuTextBox = document.createElement('div');
    menuTextBox.classList.add('menu-text-box');

    const menuName = document.createElement('p');
    menuName.classList.add('menu-name');
    menuName.textContent = arr[i].name;

    const menuPrice = document.createElement('p');
    menuPrice.classList.add('menu-price');
    menuPrice.textContent = arr[i].price;

    menuTextBox.appendChild(menuName);
    menuTextBox.appendChild(menuPrice);

    const ingredients = document.createElement('small');
    ingredients.textContent = `Ingredienti: ${arr[i].ingredients}`;

    menuCard.appendChild(menuTextBox);
    menuCard.appendChild(ingredients);

    menuBox.appendChild(menuCard);
  }
}


// Nav Container Animations
gsap.from('.nav-container', {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.nav-container',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});

// Hero Section Animations
gsap.from('.hero-container', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: '.hero-container',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});

// Section Title Animations
gsap.from('.section-title', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.section-title',
    start: 'top 80%',
    end: 'bottom 20%',
  },
});

// About Animations
const aboutAnimations = [
  { target: '.about-1', from: { opacity: 0, y: 80 }, img: false },
  { target: '.about-2', from: { opacity: 0, y: 80 }, img: false },
  { target: '.about-img-1', from: { opacity: 0, x: -100 }, img: true },
  { target: '.about-img-2', from: { opacity: 0, x: 100 }, img: true },
];

aboutAnimations.forEach(function (animation) {
  const { target, from, img } = animation;

  gsap.from(target, {
    ...from,
    duration: img ? 1 : 0.7,
    scrollTrigger: {
      trigger: target,
      start: 'top 70%',
      end: 'bottom 30%',
    },
  });
});


// Services Animations
gsap.from('.service-card img', {
  opacity: 0,
  y: -50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.service-card',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});
gsap.from('.service-card p', {
  opacity: 0,
  y: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.service-card',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});
gsap.from('.service-card small', {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.service-card',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});

// Menu Animations
gsap.from('.menu-box', {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: '.menu-box',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});
gsap.from('.menu-icons-box div', {
  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.menu-icons-box',
    start: 'top 90%',
    end: 'bottom 10%',
  },
});

// Booking Animations
gsap.from('.reservation-form', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: '.reservation-form',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});

// Gallery Animations
gsap.from('.collage', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: '.collage',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});
gsap.from('.review-box', {
  opacity: 0,
  y: 50,
  delay: .5,
  duration: 1,
  scrollTrigger: {
    trigger: '.review-box',
    start: 'top 70%',
    end: 'bottom 30%',
  },
});
