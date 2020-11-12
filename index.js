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

  function tellStory(){

    /* turn into array */

    var outfitoptions = document.getElementById("outfitoptions").value;
    var sentenceArray1 = outfitoptions.split('\n');

    var mealoptions = document.getElementById("mealoptions").value;
    var sentenceArray2 = mealoptions.split('\n');

    var taskoptions = document.getElementById("taskoptions").value;
    var sentenceArray3 = taskoptions.split('\n');

/* need variables for input */

    let outfit = sentenceArray1[Math.floor(Math.random() * myArray.length)];
    let meal = sentenceArray2[Math.floor(Math.random() * myArray.length)];
    let task = sentenceArray3[Math.floor(Math.random() * myArray.length)];

    /* input */

    var story = " Today you will wear your " + outfit + " and head into the kitchen to plan your tasty meal for the day. ";
    story += " Surprise! You're having " + meal ;
    story += " You may have a lot on your to-do list. Today let's focus on getting one thing done: " + task + ". <br / > <br />";

/* output */

    output.innerHTML = story;


}

