//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

let movies = ["Star Wars", "Harry Potter", "Inception", "Avengers", "Warcraft"];

for (let name of movies){  //Using of method to iterate
    console.log(name);
}

console.log("\nWith forEach: \n");
movies.forEach(name => {  //Using forEach to iterate
    console.log(name);
});