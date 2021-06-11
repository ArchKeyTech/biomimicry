/* this script handles all the 'like/unlike' icons used in the website.
i wish i had found a more elegant way for this as many of the lines are repetitive.
I wasn't sure how to save the state of each individual like/unlike icon from the entire website, without
using so much repeating lines of code.
*/


// these are the variables for each of the like/unlike icons
let liked1 = 0;
let liked2 = 0;
let liked3 = 0;
let liked4 = 0;
let liked5 = 0;
let liked6 = 0;
let liked7 = 0;
let liked8 = 0;



//function which runs when website has first loaded
$(function(){
    if (localStorage.getItem('loaded')===null){ // check if page has already loaded before...

        //sets all like/unlike data to localstorage
        localStorage.setItem('like1',liked1);
        localStorage.setItem('like2',liked2);
        localStorage.setItem('like3',liked3);
        localStorage.setItem('like3',liked4);
        localStorage.setItem('like3',liked5);
        localStorage.setItem('like3',liked6);
        localStorage.setItem('like3',liked7);
        localStorage.setItem('like3',liked8);

        localStorage.setItem('loaded',true);// sets 'loaded' to true to indicate that the page has now loaded

    }
});

//Note: this is where most lines are greatly repeated


//checking the state of each like/dislike button when page is reloaded
//if the stored state is > 0 (meaning that it has been liked), we add a css filter to the heart icon and store the state
//else, if the stored state is not > 0 (meaning it has been unliked), we remove the css filter from the heart icon and store the state
liked1 = JSON.parse(localStorage.getItem('like1'));
if (liked1 > 0){
    $('.like-icon1').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like1',liked1);
}
else {
    $('.like-icon1').css('filter','none');
    localStorage.setItem('like1',liked1);
}

liked2 = JSON.parse(localStorage.getItem('like2'));
if (liked2 > 0){
    $('.like-icon2').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like2',liked2);
}
else {
    $('.like-icon2').css('filter','none');
    localStorage.setItem('like2',liked2);
}

liked3 = JSON.parse(localStorage.getItem('like3'));
if (liked3 > 0){
    $('.like-icon3').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like3',liked3);
}
else {
    $('.like-icon3').css('filter','none');
    localStorage.setItem('like3',liked3);
}

liked4 = JSON.parse(localStorage.getItem('like4'));
if (liked4 > 0){
    $('.like-icon4').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like4',liked4);
}
else {
    $('.like-icon4').css('filter','none');
    localStorage.setItem('like4',liked4);
}

liked5 = JSON.parse(localStorage.getItem('like5'));
if (liked5 > 0){
    $('.like-icon5').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like5',liked5);
}
else {
    $('.like-icon5').css('filter','none');
    localStorage.setItem('like5',liked5);
}


liked6 = JSON.parse(localStorage.getItem('like6'));
if (liked6 > 0){
    $('.like-icon6').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like6',liked6);
}
else {
    $('.like-icon6').css('filter','none');
    localStorage.setItem('like6',liked6);
}


liked7 = JSON.parse(localStorage.getItem('like7'));
if (liked7 > 0){
    $('.like-icon7').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like7',liked7);
}
else {
    $('.like-icon7').css('filter','none');
    localStorage.setItem('like7',liked7);
}


liked8 = JSON.parse(localStorage.getItem('like8'));
if (liked8 > 0){
    $('.like-icon8').css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
    localStorage.setItem('like8',liked8);
}
else {
    $('.like-icon8').css('filter','none');
    localStorage.setItem('like8',liked8);
}






//these are the functions with click events for each of the like/unlike icons in order to toggle from like to unlike anytime.
// the functions grab its respective state for its designated like/unlike icon to ensure the correct state is set when clicked

//if icon is clicked and the state is < 1 (meaning it is unliked), we add the filter to the heart icon and add +1 to the state, storing the state in localstorage
//else if the state is not <1 (meaning it is liked), we set it to 0 and store it in localstorage
$('.like-icon1').click(function(){
    liked1 = JSON.parse(localStorage.getItem('like1'));
    if (liked1 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked1 += 1;
        localStorage.setItem('like1',liked1);
    }
    else {
        $(this).css('filter','none');
        liked1 = 0;
        localStorage.setItem('like1',liked1);
    }
    
})


$('.like-icon2').click(function(){
    liked2 = JSON.parse(localStorage.getItem('like2'));
    if (liked2 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked2 += 1;
        localStorage.setItem('like2',liked2);
    }
    else {
        $(this).css('filter','none');
        liked2 = 0;
        localStorage.setItem('like2',liked2);
    }
    
})


$('.like-icon3').click(function(){
    liked3 = JSON.parse(localStorage.getItem('like3'));
    if (liked3 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked3 += 1;
        localStorage.setItem('like3',liked3);
    }
    else {
        $(this).css('filter','none');
        liked3 = 0;
        localStorage.setItem('like3',liked3);
    }
    
})


$('.like-icon4').click(function(){
    liked4 = JSON.parse(localStorage.getItem('like4'));
    if (liked4 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked4 += 1;
        localStorage.setItem('like4',liked4);
    }
    else {
        $(this).css('filter','none');
        liked4 = 0;
        localStorage.setItem('like4',liked4);
    }
    
})


$('.like-icon5').click(function(){
    liked5 = JSON.parse(localStorage.getItem('like5'));
    if (liked5 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked5 += 1;
        localStorage.setItem('like5',liked5);
    }
    else {
        $(this).css('filter','none');
        liked5 = 0;
        localStorage.setItem('like5',liked5);
    }
    
})


$('.like-icon6').click(function(){
    liked6 = JSON.parse(localStorage.getItem('like6'));
    if (liked6 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked6 += 1;
        localStorage.setItem('like6',liked6);
    }
    else {
        $(this).css('filter','none');
        liked6 = 0;
        localStorage.setItem('like6',liked6);
    }
    
})


$('.like-icon7').click(function(){
    liked7 = JSON.parse(localStorage.getItem('like7'));
    if (liked7 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked7 += 1;
        localStorage.setItem('like7',liked7);
    }
    else {
        $(this).css('filter','none');
        liked7 = 0;
        localStorage.setItem('like7',liked7);
    }
    
})


$('.like-icon8').click(function(){
    liked8 = JSON.parse(localStorage.getItem('like8'));
    if (liked8 < 1){
        $(this).css('filter','invert(25%) sepia(43%) saturate(6766%) hue-rotate(288deg) brightness(114%) contrast(115%)');
        liked8 += 1;
        localStorage.setItem('like8',liked8);
    }
    else {
        $(this).css('filter','none');
        liked8 = 0;
        localStorage.setItem('like8',liked8);
    }
    
})