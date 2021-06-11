/*this script handles the comment section in the gallery.html page
a user enters a name and a comment. the comment along with the user's
name is stored and displayed.
*/



//function with focus event on comment's 'textarea'
$('textarea').focus(function(){
    $(this).attr('placeholder', ''); //when focused, the placeholder will change from 'Add your comment' to ''
    $('#comment').show(); // the comment button will show (it is initially not visible)

})

//function with blur event on comment's 'textarea'
$('textarea').blur(function(){
    $(this).attr('placeholder', 'Add Your Comment'); //when blur, the placeholder will change from '' to 'Add your comment'
    if ($('textarea').val()==''){ // if the value of textarea is left blank... 
        $('#comment').hide(); //hide the comment button
    }

})


//function with click event for cancel button
$('#cancel').click(function(){
    $('textarea').val(''); // clears textarea when cancel button is clicked
    $('#name').val(''); // clears the name input field when cancel button is clicked
})


// object constructor for name and comment
function Name_Comment(user, user_comment){
    this.user = user;
    this.user_comment = user_comment;
}

let usr_comment = []; // set an empty array to store user comments


// function launched when page loads (called via 'onload' in gallery.html)
function initLoad(){    
    let comment_list = document.querySelector('.usr_comments'); //get class which stores comments as a list

    if(localStorage.getItem("is_firstload") === null){ // if its first time loading the page...

        localStorage.setItem("comments", JSON.stringify(usr_comment)); //store the comment array as a JSON
        localStorage.setItem("is_firstload", true); //set 'is_firstload' to true
    }

    else{
        usr_comment = JSON.parse(localStorage.getItem("comments")); // get the comments from storage
        usr_comment.forEach(b => { // for each comment...
            
            let list_element = document.createElement('li');//create a list element for every comment
            list_element.style.borderBottom = '4px solid silver'; // style the list element's border
            list_element.style.paddingTop = '5px'; // style list element padding
            list_element.innerHTML = `<b>${b.user}</b> said: ${b.user_comment} <br/><br/><br/> `;//map the content of each list element to each name and comment
            comment_list.appendChild(list_element); // add the list elements to the unordered-list

            
        })
            }
}



//function to add comments (activated via 'onclick' of comment button in gallery.html)
function addComment(){

    usr_comment = JSON.parse(localStorage.getItem("comments")); // get comments object from storage
    let usr_name = $('#name').val(); // get name from 'name' input field's value
    let usr_input = $('textarea').val(); //get comment from textarea value
    let new_comment = new Name_Comment(usr_name, usr_input); // create a name&comment object from the user's name and user's comment

    usr_comment.push(new_comment); // add new comment object to comments array
    localStorage.setItem("comments", JSON.stringify(usr_comment)); //store the comment object to localstorage in JSON

};