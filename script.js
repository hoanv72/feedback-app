var feedbackBtn = document.querySelector(".feedback-btn");
var feedbackComp = document.querySelector(".feedback-comp");
var closeBtn1 = document.querySelector(".close-icon-feedback-btn-1");
var feedbackForm = document.querySelector(".feedback-form");
var emailForm = document.querySelector(".email-form");
var feedbackIcon = document.querySelectorAll('.feedback-icon');
var closeBtn2 = document.querySelector(".close-icon-feedback-btn-2");
var closeBtn3 = document.querySelector(".close-icon-feedback-btn-3");
var submitBtn = document.querySelector('.submit-btn');
var inputFeedback = document.querySelector('.input-feedback');
var inputEmail = document.querySelector('.input-email');
var selectElement = document.querySelector('.feedback-app');
var skipBtn = document.querySelector('.skip-btn');
var submitEmailFrom = document.querySelector('.submit-email-btn');
var voteIcon1 = document.querySelector('.emoji-voted-1');
var voteIcon2 = document.querySelector('.emoji-voted-2');
var voteIcon3 = document.querySelector('.emoji-voted-3');
var voteIcon4 = document.querySelector('.emoji-voted-4');
var voteIcon5 = document.querySelector('.emoji-voted-5');
var iconVoted = null;

function show(elem) {
    elem.style.display = 'block'
}

function hide(elem) {
    elem.style.display = 'none'
}

var iconVoted2 = document.getElementsByClassName("feedback-icon-voted");

feedbackIcon.forEach(icon => {
    icon.classList.remove('icon-voted')
    icon.addEventListener("click",(event)=>{
        hide(feedbackComp);    
        show(feedbackForm);
        if(event.target.src !== ''){
            iconVoted = event.target.parentNode.dataset.voted;

           if(iconVoted === '1'){
               document.querySelector('.emoji-voted-1').classList.add("remove-greyScale");
           }
           if(iconVoted === '2'){
            document.querySelector('.emoji-voted-2').classList.add("remove-greyScale");
           }
           if(iconVoted === '3'){
            document.querySelector('.emoji-voted-3').classList.add("remove-greyScale");
           }
           if(iconVoted === '4'){
            document.querySelector('.emoji-voted-4').classList.add("remove-greyScale");
           }
           if(iconVoted === '5'){
            document.querySelector('.emoji-voted-5').classList.add("remove-greyScale");
           }         
        }
    })
})

for(var i = 0; i < iconVoted2.length; i++){
    iconVoted2[i].onclick = function() {
        //remove class from sibling
        var iv = iconVoted2[0];
        while(iv){
            if(iv.tagName === "BUTTON"){
                iv.classList.remove("remove-greyScale")
            }
            //pass to new siblings
            iv = iv.nextSibling;
        }
        this.classList.add("remove-greyScale");
        iconVoted = this.dataset.voted;
    }
}
// get message
var message = '';
inputFeedback.addEventListener('keypress', (event) => {
    if (event.target.value) {
        document.querySelector('.submit-btn').style.background = '#02B875';
        document.querySelector('.submit-btn').style.color = '#fff';
    }
    else {
        document.querySelector('.submit-btn').style.background = 'grey';
    }
    message = event.target.value;
});

//get email
var getEmail = '';
inputEmail.addEventListener('keypress', (e) => {
    getEmail = e.target.value;
    return getEmail
})

closeBtn1.addEventListener('click', () => {
    hide(feedbackComp);
    show(feedbackBtn);
});

closeBtn2.addEventListener('click', () => {
    hide(feedbackForm);
    show(feedbackBtn);
    // remove icon choosed

    for(var x = 0; x < iconVoted2.length; x++){
        iconVoted2[x].classList.remove("remove-greyScale")
    }
});

closeBtn3.addEventListener('click', (event) => {
    hide(emailForm);
    show(feedbackBtn);
    for(var x = 0; x < iconVoted2.length; x++){
        iconVoted2[x].classList.remove("remove-greyScale")
    }
});

feedbackBtn.addEventListener("click", () => {
    show(feedbackComp);
    hide(feedbackBtn);
});

submitBtn.addEventListener('click', () => {
    show(emailForm);
    hide(feedbackForm);
});

var lastGreetingContent = document.querySelector('.thanks-title');
skipBtn.addEventListener('click', () => {
    hide(emailForm);
    show(feedbackBtn);
    for(var x = 0; x < iconVoted2.length; x++){
        iconVoted2[x].classList.remove("remove-greyScale")
    }
    show(lastGreetingContent);
    setTimeout(() => {
        hide(lastGreetingContent)
    }, 2000);
    getEmail = null;
    console.log('icon-vote: '+iconVoted, 'message: '+ message, 'email_: '+getEmail)
});

submitEmailFrom.addEventListener('click', () => {
    hide(emailForm);
    show(feedbackBtn);
    show(lastGreetingContent);
    setTimeout(() => {
        hide(lastGreetingContent)
    }, 2000);
    console.log('icon-vote: '+iconVoted, 'message: '+ message, 'email_: '+getEmail);
});

