let deferredPrompt;

window.addEventListener('beforeinstallprompt' (e) => {
    // Prevents Chrome 67 and earlier from showing prompt

e.preventDefault();

    // Stash event so it is triggered later.

deferred Prompt = e;

 // update UI to notify

btnAdd.style.display = 'block';

btnAdd.addEventListener('click', (e) => {
    // hide user interface showing A2HS button

btnAdd.style.display = 'none';

    //show prompt

deferredPrompt.prompt();

//wait for user to respond

deferredPrompt.userChoice

.then((choiceResult) => 

if (choiceResult.outcome === 'accepted' {
    console.log('User accepted the A2HS prompt');

} else {
    console.log('User dismissed the A2HS prompt');

}

deferredPrompt = null;

}))

})

});

}