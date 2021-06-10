'use strict';

var cardsArray = [
    {
      'name': 'pickle rick',
      'img': 'img/pickle.rick.png',
    },
    {
      'name': 'morty',
      'img': 'img/morty.PNG',
    },
    {
      'name': 'jerry',
      'img': 'img/jerry.smith.PNG',
    },
    {
      'name': 'rick',
      'img': 'img/rick.sanchez.png',
    },
    {
      'name': 'scary terry',
      'img': 'img/scary.terry.PNG',
    },
    {
      'name': 'giant head',
      'img': 'img/giant.head.PNG',
    },
    {
      'name': 'crazy rick',
      'img': 'img/crazy.rick.PNG',
    },
    {
      'name': 'Mr.m',
      'img': 'img/mr.meeseeks.png',
    },
    {
      'name': 'Mr.pb',
      'img': 'img/Mr.pottybutthole.PNG',
    },
    {
      'name': 'bird person',
      'img': 'img/bird.person2.PNG',
    },
    {
      'name': 'summer',
      'img': 'img/summer.PNG',
    },
    {
      'name': 'beth',
      'img': 'img/beth1.png',
    },
  ]
 
  var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });
  
  var firstGuess = '';
  var secondGuess = '';
  var count = 0;
  var previousTarget = null;
  var delay = 1200;
  let moves = 0;
  let counter = document.querySelector(".moves");
 
  var game = document.getElementById('game');
  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
  gameGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;
  
  
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  
    var front = document.createElement('div');
    front.classList.add('front');
  
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };

  var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };
  
  grid.addEventListener('click', function (event) {
  
    var clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      
      
      return;



      
    }

    if (count < 2) {
      count++;
      //moveCounter();
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
        moveCounter();

        
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
       

      
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  });

  var second = 0;
var minute = 0; 
var hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

function startGame (){
    cards = shuffle(cards);
    // remove all existing classes from each card
   for (var i = 0; i < cards.length; i++){
       deck.innerHTML = "";
       [].forEach.call(cards, function(item) {
           deck.appendChild(item);
       });
       cards[i].classList.remove("show", "open", "match", "disabled");
      }
          

  

