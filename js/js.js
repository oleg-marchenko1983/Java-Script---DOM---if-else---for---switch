
/* task 1 */
    function colorParagraf (){

    var paragraf = document.querySelectorAll(".task1");

     for (var i = 0; i < paragraf.length; i++) {
     paragraf[i].style.backgroundColor="red";}
}

colorParagraf ();

/* task 2 */

function shadowImg (){

var shadowImg  = document.querySelectorAll(".task2");

for (var i = 0; i < shadowImg .length; i++) {
    shadowImg [i].style.display="inline";
    shadowImg [i].style.margin="40px";
    shadowImg [i].style["boxShadow"] = "0 0 60px #999999";
    shadowImg [i].style["width"] = "100px";
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

var count = 0,
    result = document.querySelector('#viewResult'),
    counter = document.querySelectorAll('.task4');

counter.forEach(function(element) {
    element.addEventListener('click', counters);
});

function counters() {
    count++;
    result.innerHTML = count + " click button";
}


/*Task 5*/

document.querySelector('#buttonPow').addEventListener('click',pow);
function pow () {
var a = document.querySelector('#firstNmber').value,
    b = document.querySelector('#secondNumber').value;
viewFunctionPow.innerHTML = Math.pow (a,b);

}

/*Task 6*/


function textUnderline() {
    var oneTag = document.getElementById('tagTask6').value,
        tagName = document.querySelectorAll(oneTag);

        tagName.forEach(function(element){
        element.style.textDecoration = "underline";

        })
      }
document.querySelector('#buttonTask6').addEventListener('click', textUnderline);


/*Task7*/

enterVerify = document.getElementById("enterVerify"),

viewAge = document.querySelector('.viewAge');

function verifyAge (){

var age = +document.querySelector('#inputAge').value;

if (age >= 16) {

   viewAge.innerHTML = "Добро пожаловать";
}
else if (age < 16)
{
   viewAge.innerHTML = "Вы ещё молоды"
}
}
enterVerify.addEventListener("click", verifyAge);



/*Task8*/

enterVerifyTask8 = document.getElementById("enterVerifyTask8"),
viewAgeTask8 = document.querySelector('.viewAgeTask8');

function verifyAgeTask8 (){

var ageTask8 = document.querySelector('#inputAgeTask8').value,
small = "Вы ещё молоды",  
big = "Добро пожаловать",
notValue = "Введите возраст";

if (ageTask8 === "" || isNaN(ageTask8)){

  return notValue;
}

else if (ageTask8 >= 16) {

   return big;
}
else (ageTask8 < 16)

  return small;
}
enterVerifyTask8.onclick = function () {
  viewAgeTask8.innerHTML = verifyAgeTask8();
}

/* Task 9*/

var arr = [1, 2, 3, 4, 5],

considerArr = document.querySelector('#considerArr'),

viewResultTask9 = document.querySelector('#viewResultTask9');

function arrLenght (arr) {

var arrLenghtError = 'Ошибка';

if (arr === undefined) {

return arrLenghtError;

}

else {

return (arr.length);
}

}

considerArr.onclick = function () {
  viewResultTask9.innerHTML = arrLenght(arr);
}

/*Task10*/


function countTask10 (){

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

  viewResultTask10.innerHTML= countTask10();

}

/*Task11*/

var prNum = Math.floor((Math.random()*10) + 1);
          var tempOut = document.querySelector("#temp-out");
              console.log(prNum);

        function guessesNumber() {
          var 
          num, 
          guesses,
          guessCount = 1, 
          out; 
        
          num = document.querySelector("#mynum").value;
          out = document.querySelector("#out");
          guesses = document.querySelector("#guesses");

          if (guessCount === 1)
           {
           guesses.textContent = 'Число которое вы уже вводили: ';
           }
           guesses.textContent += num + ' ';
           
          if (num == prNum) {
            out.innerHTML = "Вы угадали";
          }

          else if ( num > prNum ) {

            out.innerHTML = "Вы ввели число больше чем нужно";
          }

          else 
          {
            out.innerHTML = "Вы ввели число число меньше чем нужно";
          }


        }
          
          buttonTask11.addEventListener('click', guessesNumber);