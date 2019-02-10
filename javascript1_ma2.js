//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

	
<p id="java"></p>

<script>
	
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

var myMother = new Person("Wenche", "Synnøve", 41, "blue");
document.getElementById("java").innerHTML =
"My mother is " + myMother.name(); 
</script>



//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

console.log(numbers.slice(0,4));
console.log(numbers.slice(5,10));



//3. Delete the last number in the array that you created above.

console.log(numbers.slice(0,9));

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var p = 'Strawberries are a popular part of spring and summer diets throughout America.Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around.There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

 var regex = /strawberry/gi;
console.log(p.replace(regex, 'banana'));
var regex = /strawberries/gi;
console.log (p.replace(regex, 'bananas'));



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var friends = [
	{name: "Per", friend: "Nina"},
	{name: "Ole", friend: "Silje"},
	{name: "stian", friend: "Ingrid"}
];
var friendsWith = friends.filter(function(name){
	return(name.friend === "Silje");
})

console.log(friendsWith);

//7. Create a simple function that logs the date.

 var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
  document.write(day + "/" + month + "/" + year)