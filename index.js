/* Decide My Day Script */

function turnArray() {
  //assign value of textarea to mytext
  var outfitText = document.getElementById("outfitoptions").value;

  //split mytext by nextline = "\n" 
  var outfitArray = outfitText.split("\n");

  /* add second */

  var mealsText = document.getElementById("mealoptions").value;

  var mealsArray = mealsText.split("\n");

  /* add third */

  var tasksText = document.getElementById("taskoptions").value;

  var tasksArray = tasksText.split("\n");

  /* start picking random */

  const randomOutfit = outfitArray[Math.floor(Math.random() * outfitArray.length)];

  const randomMeal = mealsArray[Math.floor(Math.random() * mealsArray.length)];

  const randomTask = tasksArray[Math.floor(Math.random() * tasksArray.length)];

  /* get result */

  document.getElementById("result").innerHTML = 'Today you will wear ' + randomOutfit + '. ' + 'Plan on eating ' + randomMeal + ' later.' + ' Your assigned task to accomplish is ' + randomTask + ' so make sure you plan accordingly!';
}