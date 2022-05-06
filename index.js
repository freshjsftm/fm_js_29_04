let countTry = 0;
while(true){
  const userInput = prompt('enter password','***');
  countTry++;
  alert('try = ' + countTry);
  if(countTry >= MAX_TRY){
    alert('try end');
    break;
  }
  if(userInput === CORRECT_PASSWORD){
    alert('welcome');
    break;
  }
}
