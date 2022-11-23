//Working on the keyboard Events in JAVASCRIPT...

// console.log("Hello Amarsplash")

const keyboard=document.querySelector('.keyeve')

//KEYDOWN is gives the details about the key which is pressed
// in the keyboard...
// keyboard.addEventListener('keydown',e=>{
//     console.log(e)
// })




//KEYUP is also used to display the values but only for the first
// time the letter is pressed...
//When we Holding the letter 'D', it will display value for "onetime-only"
// keyboard.addEventListener('keyup',e=>{
//     console.log(e)
// })




//KEYPRESS is used to not-displaying the key buttons like up,down... ect
// only to display the values of the letters which are present in the keyboard
//And also displays the values the keys which are long-pressed.
// keyboard.addEventListener('keypress',e=>{
//     console.log(e)
// })




// keyboard.addEventListener('keydown',e=>{
//     // alert('You pressed control key: ')
//     if(e.defaultPrevented)
//     {
//         return;
//     }
//     switch (e.key)
//     {
//         case "Down":
//         case "ArrowDown":
//             break;
        
//         case "Up":
//         case "ArrowUp":
//             break;

//         case "Left":
//         case "ArrowLeft":
//             break;

//         case "a":
//         case "A":
//             break;

//         default:
//             return;
//     }
//     e.preventDefault();
// }, true);