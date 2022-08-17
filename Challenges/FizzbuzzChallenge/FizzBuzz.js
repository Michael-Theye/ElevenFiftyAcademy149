/*
FIZZBUZZ LOOP CHALLENGE (pair coding)
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
*/

let FB= 60


FB % 3 === 0 && FB % 5 === 0
    ? console.log("Fizz Buzz")
    : FB % 5 === 0
        ? console.log("Buzz")
        : FB % 3 === 0
            ? console.log("Fizz")
            : console.log(FB);

            let i = 9;

            for (let i = 0; i <= 100; i++) {
                console.log(i);
            }




            for( let i=1; i <= 100; i++){
                if(i%15===0){
                    console.log("Fizz Buzz")
                } else if (i % 3 === 0) {
                    console.log("Fizz")
                } else if (i % 5 === 0) {  
                    console.log("Buzz") 
                } else  {
                    console.log(i)
                }
            }


            