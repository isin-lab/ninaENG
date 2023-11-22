
const headerNav = document.getElementById('headerNav');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navPopUp = document.getElementById('navPopUp');
const logoHeader = document.getElementById('logoHeader');

//OGE
const btnOgeOpen1 = document.getElementById('btn_oge1');
const btnOgeOpen2 = document.getElementById('btn_oge2');
const btnOgeOpen3 = document.getElementById('btn_oge3');
const btnOgeOpen4 = document.getElementById('btn_oge4');

const Oge1 = document.getElementById('oge1');
const Oge2 = document.getElementById('oge2');
const Oge3 = document.getElementById('oge3');
const Oge4 = document.getElementById('oge4');

const closeOge1 = document.getElementById('close_oge1');
const closeOge2 = document.getElementById('close_oge2');
const closeOge3 = document.getElementById('close_oge3');
const closeOge4 = document.getElementById('close_oge4');

//ofer
const publicBtn = document.getElementById('public_btn');
const popUpPublic = document.getElementById('popUpPublic');
const closePublic = document.getElementById('close_public');

//telega
const btnTelegram1 = document.getElementById('btn_telegram1');
const btnTelegram2 = document.getElementById('btn_telegram2');
const btnTelegram3 = document.getElementById('btn_telegram3');

const telega1 = document.getElementById('telega1');
const telega2 = document.getElementById('telega2');
const telega3 = document.getElementById('telega3');

const closeTelega1 = document.getElementById('close_telega1');
const closeTelega2 = document.getElementById('close_telega2');
const closeTelega3 = document.getElementById('close_telega3');

//Speaking1
const btnSpeaking1 = document.getElementById('btn_Speaking1');
const Speaking1 = document.getElementById('Speaking1');
const closeSpeaking1 = document.getElementById('close_Speaking1');

//Speaking1
btnSpeaking1.addEventListener("click", function() {
  Speaking1.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeSpeaking1.addEventListener("click", function() {
  Speaking1.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//telega1
btnTelegram1.addEventListener("click", function() {
  telega1.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeTelega1.addEventListener("click", function() {
  telega1.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//telega2
btnTelegram2.addEventListener("click", function() {
  telega2.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeTelega2.addEventListener("click", function() {
  telega2.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//telega3
btnTelegram3.addEventListener("click", function() {
  telega3.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeTelega3.addEventListener("click", function() {
  telega3.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
})


//popUp public
publicBtn.addEventListener("click", function() {
  popUpPublic.classList.toggle('hide')
});
closePublic.addEventListener('click', function() {
  popUpPublic.classList.add('hide');
});

//oge1
btnOgeOpen1.addEventListener("click", function() {
  Oge1.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeOge1.addEventListener("click", function() {
  Oge1.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//oge2
btnOgeOpen2.addEventListener("click", function() {
  Oge2.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeOge2.addEventListener("click", function() {
  Oge2.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//oge3
btnOgeOpen3.addEventListener("click", function() {
  Oge3.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeOge3.addEventListener("click", function() {
  Oge3.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//oge4
btnOgeOpen4.addEventListener("click", function() {
  Oge4.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeOge4.addEventListener("click", function() {
  Oge4.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//eg
const btnEgOpen1 = document.getElementById('btn_eg1');

const eg1 = document.getElementById('eg1');

const closeEg1 = document.getElementById('close_eg1');

//eg1
btnEgOpen1.addEventListener("click", function() {
  eg1.style.display = "block"; 
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
closeEg1.addEventListener("click", function() {
  eg1.style.display = "none";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});


const navLinks = document.querySelectorAll('.a');

//popUp menu
hamburgerMenu.addEventListener("click", function() {
  navPopUp.classList.toggle('hide')
});


logoHeader.addEventListener('click', function() {
  navPopUp.classList.add('hide');
});

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navPopUp.classList.add('hide');
  });
});

