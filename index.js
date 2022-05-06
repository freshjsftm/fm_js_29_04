let countTry = 0;
while(countTry < MAX_TRY){
  const userInput = prompt('enter password','***');
  countTry++;
  alert('try = ' + countTry);
  if(userInput === CORRECT_PASSWORD){
    alert('welcome');
    break;
  }
}
