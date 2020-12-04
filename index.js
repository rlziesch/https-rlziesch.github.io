/* responsive navigation */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  /* add scroll button */

  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



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

/* end decide my day script */








/* prompting user to download web app for homescreen */


let deferredPrompt;

window.addEventListener('beforeinstallprompt' (e) => {
    // Prevents Chrome 67 and earlier from showing prompt

e.preventDefault();

    // Stash event so it is triggered later.

deferred Prompt = e;

 // update UI to notify

btnAdd.style.display = 'block';

}

btnAdd.addEventListener('click', (e) => {
    // hide user interface showing A2HS button

btnAdd.style.display = 'none';

    //show prompt

deferredPrompt.prompt();

//wait for user to respond


}

deferredPrompt.userChoice

.then((choiceResult) => 

if (choiceResult.outcome === 'accepted' {
    console.log('User accepted the A2HS prompt');

} else {
    console.log('User dismissed the A2HS prompt');

}

deferredPrompt = null;

})
