const menuBtn = $('.menu-button'); // calling the menu button class

const hamburger = $('.menu-button__burger'); //calling the hamburger icon class

const nav = $('.nav1'); // calling the nav class which contains the menu items (home,about me,gallery etc)
const menunav = $('.menu-nav1'); // calling the menu-nav class

let showMenu = false; // set variable to hide drop-down menu initially


//function to execute when menu button is clicked
menuBtn.click(function(){

    if(!showMenu){ // if menu is hidden...
        hamburger.addClass('open'); //add the 'open' class to the hamburger icon
        $('.open').animate({ left: '-=40px' },'fast'); //add animation to the 'open' class for the button (the class already has some css properties)
        nav.addClass('open'); //add the 'open' class to the nav which contains the menu items
        menunav.addClass('open'); //add the 'open' class to the list of menu items

        showMenu = true; // set the showMenu to true to indicate that the drop-down menu is being shown
    }
    else { // else if menu is showing...
        $('.open').animate({ left: '+=40px' },'fast'); // add animation to move the button to its initial position
        hamburger.removeClass('open'); // remove the 'open' class from hamburger icon

        nav.removeClass('open'); //remove the 'open' class from nav 
        menunav.removeClass('open');//remove the 'open' class from menunav
        
        showMenu = false; // set showMenu back to false to hide drop-down menu
    }
})