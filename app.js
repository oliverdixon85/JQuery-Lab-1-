$(document).ready(function () {

    $('<div></div>').appendTo('body');
    $("<ul></ul>").appendTo("div");

    $('#btnSubmit').click(function () {
        alert("Hello!")
    })

    $('#submitBox').attr("disabled", true);
    $("#inputBox").keyup(function () {
        $("#submitBox").attr("disabled", false);
    })

    $("#submitBox").click(function (e) {
        let value = $('#inputBox').val();
        $("ul").append("<li>" + value + "</li>");
        e.preventDefault();

    })



    $('ul').click(function (e){
        var colors = ["red", "orange", "teal", "grey", "greenyellow"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $(e.target).css("color", randomColor);
        })

    $('ul').dblclick(function (e){
        $(e.target).remove();

    })
    

    })

   
   

  
  
  

 
//   If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled. (hint)
// Create a div element and append it to the body.
// When the user types in the input field and clicks submit, append the text in an h2 element to the div
// When the user mouses over the h2 element, assign it a new background color and border radius. (hint)
// Great job! Now, comment out the code for creating the h2 and we are going to work on creating a list instead
// Use jQuery to create an unordered list and append it to the body
// When the user submits the form, append the text as list item to the unordered list
// When the user clicks on the li element, assign it a random color.
// When the user double clicks on the list, remove the item that was clicked on//.