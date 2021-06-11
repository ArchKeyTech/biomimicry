/* This script mostly controls the 'add icons' which are used to save data on the page for later
into the saved.html page.

*/



let article = []; // creating empty array to store articles to be added to the 'saved for later' page
let stored = 0; // creating a counter for amount of stored data



//function with click event for 'add icon' to add texts from the index.html page
$('.add-icon-text').click(function(){
    let icn = $(this);
    let icn_sibling = icn.parent().next();
    let data = icn_sibling.children()[0].innerText; // getting the text from the desired class to add to 'save for later'
    let name = prompt("Save object as:"); // request name to save data from user

    if (localStorage.getItem(name)){// if name already exists...
        alert('This name already exists. Please enter a new one');// alert user that name already taken, choose another name
    }
    else if (name.length < 1){ // if name field is left empty...
        alert('No name entered. Please enter a name'); // alert user that a name must be entered
    }
    else {

        localStorage.setItem(name,data); // else add the name as key and data as value into the localstorage
        for (i in localStorage){ // loop through each stored item
            stored = JSON.parse(localStorage.getItem('stored')); //get the value of 'stored'
            if (i=='stored'){ // check if there is an item with key 'stored'...
                stored += 1; // add 1 to the value of stored to indicate a new item added
                localStorage.setItem('stored',stored); // store the new value of 'stored'
            }
        }
        alert(`Item(s) in your storage:\n${stored}`); // alert user of number of items currently stored
    }
});


//function with click event for 'add icon' to add quote image from the index.html page
$('.add-icon-author-img').click(function(){
    let data = $('.quote__text--img').attr('src'); // we extract the link to the image instead of displaying the image
    let name = prompt("Save object as:")
    if (localStorage.getItem(name)){
        alert('This name already exists. Please enter a new one');
    }
    else if (name.length < 1){
        alert('No name entered. Please enter a name');
    }
    else {

        localStorage.setItem(name,data);
        for (i in localStorage){
            stored = JSON.parse(localStorage.getItem('stored'));
            if (i=='stored'){
                stored += 1;
                localStorage.setItem('stored',stored);
            }
        }
        alert(`Item(s) in your storage:\n${stored}`);
    }
});



//function with click event for 'add icon' to add quote from the index.html page
$('.add-icon-quote').click(function(){
    let data = $('blockquote').text();
    let name = prompt("Save object as:")
    if (localStorage.getItem(name)){
        alert('This name already exists. Please enter a new one');
    }
    else if (name.length < 1){
        alert('No name entered. Please enter a name');
    }
    else {

        localStorage.setItem(name,data);
        for (i in localStorage){
            stored = JSON.parse(localStorage.getItem('stored'));
            if (i=='stored'){
                stored += 1;
                localStorage.setItem('stored',stored);
            }
        }
        alert(`Item(s) in your storage:\n${stored}`);
    }
});



//function with click event for 'add icon' to add contact details from the aboutme.html page
$('.add-icon-details').click(function(){
    let icn = $(this);
    let icn_parent = icn.parent();
    let data = icn_parent.next().children()[1].innerText;
    let name = prompt("Save object as:")
    if (localStorage.getItem(name)){
        alert('This name already exists. Please enter a new one');
    }
    else if (name.length < 1){
        alert('No name entered. Please enter a name');
    }
    else {

        localStorage.setItem(name,data);
        for (i in localStorage){
            stored = JSON.parse(localStorage.getItem('stored'));

            if (i=='stored'){
                stored += 1;
                localStorage.setItem('stored',stored);
            }
        }
        alert(`Item(s) in your storage:\n${stored}`);
    }
});


// function launched when page loads to initialize the 'stored' counter
$(function(){
    if (localStorage.getItem('hasloaded')===null){ // check if page has loaded before...
        localStorage.setItem('stored',stored); // stores value of 'stored'
        localStorage.setItem('hasloaded',true); // sets 'hasloaded' to true
    }
})

//function with click event for 'add icon' to add topics/articles from the gallery.html page
$('.add-icon-topics').click(function(){
    let icn = $(this);
    let icn_parent = icn.parent();
    let data1 = icn_parent.parent().children()[3].innerText; // obtains the text of the article
    let data2 = icn_parent.parent().children()[3].getAttribute('href'); // obtains the link to the article
    let name = prompt("Save object as:");

    if (localStorage.getItem(name)){
        alert('This name already exists. Please enter a new one');
    }
    else if (name.length < 1){
        alert('No name entered. Please enter a name');
    }
    else { // stores both the article and the link
        article = [];
        article.push(data1);
        localStorage.setItem(name,article);
        article.push(data2);
        localStorage.setItem(name,article);
        for (i in localStorage){
            stored = JSON.parse(localStorage.getItem('stored'));

            if (i=='stored'){
                stored += 1;
                localStorage.setItem('stored',stored);
            }
        }
        alert(`Item(s) in your storage:\n${stored}`);
    }

});


//function with click event for 'add icon' to add images of topics/articles from the gallery.html page
$('.add-icon-topic-img').click(function(){
    let icn = $(this);
    let icn_img = icn.parent().next().children()[0];
    let data = icn_img.getAttribute('src');// we extract the link to the image instead of displaying the image
    let name = prompt("Save object as:")
    if (localStorage.getItem(name)){
        alert('This name already exists. Please enter a new one');
    }
    else if (name.length < 1){
        alert('No name entered. Please enter a name');
    }
    else {
        localStorage.setItem(name,data);
        for (i in localStorage){
            stored = JSON.parse(localStorage.getItem('stored'));

            if (i=='stored'){
                stored += 1;
                localStorage.setItem('stored',stored);
            }
        }
        alert(`Item(s) in your storage:\n${stored}`);
    }


});


//this part loops through all localstorage items.
//it presents the item in a way specific to the data type (i.e if data is an image it shows the link, if data is an article it shows the a piece of the article with the link etc.)
for (let i = 0; i < localStorage.length; i++){
    if (localStorage.length > 0){ // if there are items in localstorage...

        let key = localStorage.key(i); //set key variable for key
        let value = localStorage.getItem(key); // set value variable for value


        if (value.slice(length-3) =='jpg'){ // if the extracted text from value ends in 'jpg' we know its an image
            document.getElementById('mystorage').innerHTML += `<span class="key_highlight">${key}</span>: <a href='${value}'>${value}</a><br/><br/>` ; // adds each image data, and adjust its html to add link to it
        }
        else if (value.slice(length-1) =='/'){ // if the extracted text from value ends with '/' we know its an article (each article has a link which ends in '/')
            let value1 = value.split(',')[0]; // value1 represents the article text
            let value2 = value.split(',')[1]; // value2 represents the article's link
            document.getElementById('mystorage').innerHTML += `<span class="key_highlight">${key}</span>: <a href='${value2}'>${value1}</a><br/><br/>` ; // adds each article data, and adjust its html to add link to it
        }
        else if (key!='is_firstload' && key!='comments' && key!='stored' && key!='hasloaded' && key!='like1' && key!='like2' && key!='like3'
        && key!='like4' && key!='like5' && key!='like6' && key!='like7' && key!='like8' && key!='loaded'){// this else, gets rid of all items stored in storage which are not part of items added using the 'save for later-icons' (i.e comments data, likes data, first time loading data)
            document.getElementById('mystorage').innerHTML += `<span class="key_highlight">${key}</span>: ${value}<br/><br/>` ;
        }

    };
};





