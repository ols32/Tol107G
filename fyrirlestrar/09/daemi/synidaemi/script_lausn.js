/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const QUESTION_TO_ASK = 2;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  do{
    play();
  }while(confirm("viltu spila annann leik?"))
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  const timeStart = new Date();
  let rightAnswers = 0;
  for(let i = 0; i<QUESTION_TO_ASK; i++){
    let answer = ask();
    if(answer === null){
      return;
    } else if(answer === true){
      rightAnswers++;
    }
  }
  const timeEnd = new Date();
  const time = (timeEnd-timeStart)/1000;
  // TODO: birta niðurstöður
  alert(`
    Þú svaraðir ${rightAnswers} af ${QUESTION_TO_ASK} dæmum rétt á ${time.toFixed(2)} sekúndum
    Meðalrétt svör á sekúndu eru ${(rightAnswers/time).toFixed(2)}`);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const pickNumber = randomNumber(1,4);
  if(pickNumber === 1){
    return plusQuestion();
  } 
  else if (pickNumber === 2){
    return minusQuestion();
  }
  else if (pickNumber === 3){
    return productQuestion();
  }
  else if (pickNumber === 4){
    return divisionQuestion();
  }
}

function plusQuestion(){
  const variable1 = randomNumber(1, 100);
  const variable2 = randomNumber(1, 100);
  const correctAnswer = variable1 + variable2;

  const studentAnswer = prompt(`Hvað er ${variable1} + ${variable2}?`);
  if(studentAnswer === null){
    return null;
  } 
  else if(parseInt(studentAnswer) === correctAnswer){
    return true;
  }
  
  return false;
}

function minusQuestion(){
  const variable1 = randomNumber(1, 100);
  const variable2 = randomNumber(1, 100);
  const correctAnswer = variable1 - variable2;

  const studentAnswer = prompt(`Hvað er ${variable1} - ${variable2}?`);
  if(studentAnswer === null){
    return null;
  } 
  else if(parseInt(studentAnswer) === correctAnswer){
    return true;
  }
  
  return false;
}

function productQuestion(){
  const variable1 = randomNumber(1, 10);
  const variable2 = randomNumber(1, 10);
  const correctAnswer = variable1 * variable2;

  const studentAnswer = prompt(`Hvað er ${variable1} * ${variable2}?`);
  if(studentAnswer === null){
    return null;
  } 
  else if(parseInt(studentAnswer) === correctAnswer){
    return true;
  }
  
  return false;
}

function divisionQuestion(){
  const variable1 = randomNumber(2, 10);
  const correctAnswer = randomNumber(2, 10);
  const variable2 = variable1 * correctAnswer;

  const studentAnswer = prompt(`Hvað er ${variable2} / ${variable1}?`);
  if(studentAnswer === null){
    return null;
  } 
  else if(parseInt(studentAnswer) === correctAnswer){
    return true;
  }
  
  return false;
}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
