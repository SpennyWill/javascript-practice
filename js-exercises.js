const exerciseLibrary = [
    'SandBag Squats', 
   'SandBag lunges',
    'SandBag Overhead Press', 
    'SandBag Bentover rows'
]

function exerciseGenerator(arr) {
    if (arr.length < 3) {
        return "Need at least 3 movements"
    }

let newWorkout = {}; 
let movements = 0; 

const movementOrder = [1, 2, 3]; 

do {
    let randomMovement = Math.floor(Math.random()*exerciseLibrary.length); 

    let movementSelector = arr[randomMovement]; 


} while (movements < 4);
return newWorkouts;
}

console.log(exerciseGenerator(exerciseLibrary));
