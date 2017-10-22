//define the list of fruits
var fruits = ['apple', 'banana', 'orange', 'pear', 'peach', 'watermelon', 'pineapple'];

//function inside gets called when document loads
$(document).ready(
  function(){
    //loop through fruits and add to list
    for(var i = 0; i < fruits.length; i++){
      //use jquery's append to append the HTML string
      $('#fruits').append(`<li id=${fruits[i]}>${fruits[i]}</li>`);
    }
  }
);

//function inside get called when a key is pressed inside the text input
$('#newfruit').keydown(
  function(e){
    //get the value inside the text input (should be a fruit name)
    field = $(this).val();
    //make sure the key pressed was ENTER (key#13)
    var pressed_enter = e.which == 13;
    //make sure the text in the input is a valid fruit name
    var valid_fruitname = fruits.indexOf(field) != -1;
    //make sure the basket doesnt already have the fruit in it
    var already_in_basket = $.contains($('#'+field), $('#basket'));

    if(pressed_enter && valid_fruitname && !already_in_basket){
      $(this).val('');//clear the field
      $('#basket').append($('#'+field));//append the fruit to basket list (jquery automatically removes it from fruit OL)
    }
  }
);
