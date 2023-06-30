//Given an array of the names of your friends, add the words hello to each element of the array

let friendsArr = ["John", "Jane", "Bob", "Tom", "Harry", "Eve"];

friendsArr.forEach(element => {
    console.log("Hello " + element); //Print after adding word hello to each element of array
});

let greetFriendsArr = friendsArr.map(name => "Hello " + name);  //Create new array after adding word hello to each element
console.log(greetFriendsArr);  //['Hello John', 'Hello Jane', 'Hello Bob', 'Hello Tom', 'Hello Harry', 'Hello Eve']