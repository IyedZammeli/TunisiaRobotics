const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

/* formulaire contrainte */
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

/* evenement click */

openBtn.addEventListener('click',() => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display= 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
} )


/* validation formulaire */

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');



/* message d'erreur */
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage =formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// valid attribut //
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

/* attribut required */
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
       if(input.value.trim() === '') {
           showError(input, `${getFieldName(input)} is required`);
       } else {
           showValid(input);
       }
    });
      }


// fonction longueur
function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
      return false;
    } else if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
      return false;
    } else {
      showSuccess(input, 'Looks Good!');
      return true;
    }
  }


// confirmation de mot de pass
function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match');
      return false;
    }
    return true;
  }

// fonction contrainte
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
       }
/* evennements */ 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email , password , passwordConfirm]);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm)


}  )





// interaction image 
/*
let galleryImages = document.querySelectorAll('.services-cell');
let getLatestOpenedImg;
let windowWidth = window.innerWidth ;

galleryImages.forEach(function(image, index){
  image.onlick = function() {
    getLatestOpenedImg = index + 1 ;

    let container = document.body;
    let newImgWindow = document.createElement('div');
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute('class', 'img-window');
    newImgWindow.setAttribute('onclick', 'closeImg()');

    
  }
})


*/

let galleryImages = document.querySelectorAll(' .services-cell ');
let getLatesOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index){
  image.onclick = function() {
    getLatesOpenedImg = index + 1;


    let container = document.body;
    let newImgWindow = document.createElement('div');
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute('class', 'img-window' );
    newImgWindow.setAttribute('onclick', 'closeImg()');

    let newImg = image.firstElementChild.cloneNode();
    newImgWindow.appendChild(newImg)
    newImg.classList.remove('services-cell_img');
    newImg.classList.add('popup-img');
    newImg.setAttribute('id', 'current-img');


    newImg.onload = function() {

      let newNextBtn = document.createElement('a');
      newNextBtn.innerHTML = '<i class="fas fa-chevron-right next"></i>';
      container.appendChild(newNextBtn);
      newNextBtn.setAttribute('class', 'img-btn-next' );
      newNextBtn.setAttribute('onclick', 'changeImg(1)' );

      let newPrevBtn = document.createElement('a');
      newPrevBtn.innerHTML = '<i class="fas fa-chevron-left next"></i>';
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute('class', 'img-btn-prev' );
      newPrevBtn.setAttribute('onclick', 'changeImg(0)' );

      

    }

  }
})

function closeImg() {
  document.querySelector('.img-window ').remove();
  document.querySelector('.img-btn-next ').remove();
  document.querySelector('.img-btn-prev ').remove();
}


function changeImg(change) {

  document.querySelector('#current-img').remove();

  let getImgWindow = document.querySelector('.img-window');
  let newImg = document.createElement('img');
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (change === 1) {
    calcNewImg = getLatesOpenedImg + 1;
    if(calcNewImg > galleryImages.length ) {
      calcNewImg = 1;
    }
  }

  else if(change ===0) {
    calcNewImg = getLatesOpenedImg - 1;
    if(calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute('src', 'gallery/img-' + calcNewImg + '.jpg' );
  newImg.setAttribute('class', 'popup-img' );
  newImg.setAttribute('id', 'current-img' );

  getLatesOpenedImg = calcNewImg;

}









































