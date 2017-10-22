  //define the list of fruits
var fruits = ['apple', 'banana', 'orange', 'pear', 'peach', 'watermelon', 'pineapple'];

// function performed on page load to add the fruits to the page
function insert_fruits_into_list(){
  //get a reference to the list parent object
  var document_list = document.getElementById('fruits');

  //loop through lit items and insert them into the list
  for(var i = 0; i < fruits.length; i++){
    //create a new element to hold the fruit
    var new_li = document.createElement('li');
    //insert the text of the fruit name (and make the id that too!)
    new_li.innerHTML = fruits[i];
    new_li.id = fruits[i];
    //append the new li to the ol
    document_list.appendChild(new_li);
  }
}

// function performed when fruits are inputted
function move_fruit_to_basket(fruit_name){
  //get reference to the fruit list ol
  var fruit_list_parent = document.getElementById('fruits');
  // get reference to the fruit selected (this works because we made the fruit have an ID the same as its name)
  var fruit_node = document.getElementById(fruit_name);
  //get a reference to the basket ol
  var basket_list_parent = document.getElementById('basket');

  // remove the fruit from the list
  fruit_list_parent.removeChild(fruit_node);
  //add the fruit to the basket
  basket_list_parent.appendChild(fruit_node);
}

//when the window loads, run the function
addEventListener('load', insert_fruits_into_list);

//get a reference to the text box
var text_box = document.getElementById('newfruit');

//add an event listener to the text box for a key being pressed
text_box.addEventListener('keydown', function(e){
  //get the value of the key pressed. Make sure it is key#13 (the ENTER key)
  if(e.which == 13){
    //see if the text in the field is actually a valid fruit name and the fruit isnt already in the basket
    already_in_basket = document.getElementById('basket').contains(document.getElementById(this.value));
    
    for(var i = 0; i < fruits.length; i++){
      //'this' is a reference to the text_box object. 'this.value' is whatever text the user inputted
      if(fruits[i] == this.value && !already_in_basket){
        this.value = '';//clear the text box
        move_fruit_to_basket(fruits[i]);//call the function with the fruit name
      }
    }
  }
});
