
/* task 1 */

  var buttonTask1 = document.querySelector('#buttonTask1');
  function colorParagraf () {
  	var newP = document.createElement('p');
  newP.innerHTML = 'Привет, мир!';
  newP.className = 'task1'
  // newLi.style.backgroundColor = 'red';
  divTask1.appendChild(newP);
}
buttonTask1.addEventListener('click', colorParagraf)

/* task 2 */

function shadowImg (){

var shadowImg  = document.querySelectorAll("#imgTask2");

for (var i = 0; i < shadowImg .length; i++) {
    shadowImg [i].classList.add('task2');
  }
}
shadowImg ();

/* task 3 */

function numberParagraf (){

  var paragraf = document.querySelectorAll(".task3");	

for (var i = 0; i < paragraf .length; i++) {
     paragraf[i].innerHTML= i + 1 + ". " + paragraf[i].innerHTML;
  }

}

numberParagraf ();

/* task 4 */

// var count = 0;
// var addCounter = document.querySelector('.task4');
// var result = document.querySelector('#viewResult');

// function addCount() {
//     count++;
//     result.innerHTML = count + " click button";
// }
// addCounter.forEach(function (elem) {
//     elem.addEventListener('click', addCount);
// });

/*Task 5*/

document.querySelector('#buttonPow').addEventListener('click',pow);
function pow () {
var a = document.querySelector('#firstNmber').value;
var b = document.querySelector('#secondNumber').value;
viewFunctionPow.innerHTML = Math.pow (a,b);

}

/*Task 6*/


function addTextUnderline() {
    var oneTag = document.getElementById('tagTask6').value,
        tagName = document.querySelectorAll(oneTag);

        tagName.forEach(function(element){
        element.classList.add('task6');

        })
      }
document.querySelector('#buttonTask6').addEventListener('click', addTextUnderline);


/*Task7*/

var enterVerify = document.getElementById("enterVerify");

var viewAge = document.querySelector('.viewAge');

function checkVerifyAge (){

var age = +document.querySelector('#inputAge').value;

if (age >= 16) {

   viewAge.innerHTML = "Добро пожаловать";
}
else if (age < 16)
{
   viewAge.innerHTML = "Вы ещё молоды"
}
}
enterVerify.addEventListener("click", checkVerifyAge);



/*Task8*/

var enterVerifyTask8 = document.getElementById("enterVerifyTask8");
var viewAgeTask8 = document.querySelector('.viewAgeTask8');

function checkVerifyAgeTask8 (){

var ageTask8 = document.querySelector('#inputAgeTask8').value;
var small = "Вы ещё молоды";  
var big = "Добро пожаловать";
var notValue = "Введите возраст";

	if (ageTask8 === "" || isNaN(ageTask8)){
  	  return notValue;
	} else if (ageTask8 >= 16) {
       return big;
	} else (ageTask8 < 16) 
  	   return small;
	
}

enterVerifyTask8.onclick = function () {
  viewAgeTask8.innerHTML = checkVerifyAgeTask8();
}

/* Task 9*/

var arr = [1, 2, 3, 4, 5];
var considerArr = document.querySelector('#considerArr');
var viewResultTask9 = document.querySelector('#viewResultTask9');

function outputArrLenght (arr) {

var arrLenghtError = 'Ошибка';

 if (arr === undefined) {
    return arrLenghtError;
  }
   else {
    return (arr.length);
  }
}
considerArr.onclick = function () {
  viewResultTask9.innerHTML = outputArrLenght(arr);
}

/*Task10*/

function viewCountTask10 (){

var count = parseInt(document.querySelector('#task10').value);
  if (count < 7) 
   {
    return ('Число меньше!');
   }
    else if (count > 10)
   {
    return (count *= count);
   }
    else
   {
    return (--count);
   }
}

var viewResultTask10 = document.querySelector('#viewResultTask10');
var submit = document.querySelector('#ButtonTask10');

submit.onclick = function (){
 viewResultTask10.innerHTML= viewCountTask10();

}

/*Task11*/

          var prNum = Math.floor((Math.random()*10) + 1);
          var countTask10 = 2;  
      function guessesNumber() { 
        if (countTask10 > 0)
        {
            var num = parseInt(document.querySelector("#mynum").value);
            var out = document.querySelector("#out");
            var guesses = document.querySelector("#guesses");
             guesses.innerHTML = 'Число которое вы уже вводили: ';
             guesses.innerHTML += num + ' ';
              if (num == prNum ) {
              out.innerHTML = "Вы угадали";
              }
              else if ( num > prNum ) {
              out.innerHTML = "Вы ввели число больше чем нужно";
              }
              else if (num < prNum){
              out.innerHTML = "Вы ввели число число меньше чем нужно";
              }
             countTask10 = countTask10 - 1;
             document.getElementById('countTask10').innerHTML = 'Осталось попыток: ' + countTask10;
        }        
        else 
        {
            alert ('Вы проиграли! Страница будет перезагружена');
            location.reload();
        }
      }   
          buttonTask11.addEventListener('click', guessesNumber);