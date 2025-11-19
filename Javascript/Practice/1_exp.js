console.log("WELCOME TO THE TODO PLANNER")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

let Myname = ''

rl.question('Enter your name ',(name)=>{
Myname = name;
if(Myname){ console.log('Data stored.');
    console.log(Myname);
}
else  console.log('Failed to store data!');

if(Myname){
rl.question('DO YOU WANT TO PRINT YOUR NAME',(input)=>{
    if(input == 'yes' || input == 'YES' || input == 'Yes'  || input == 'y' || input == 'Y' ){
        console.log(Myname);
        rl.close()
    }
    else if(input == 'no' || input == 'NO' || input == 'No' || input == 'n' || input == 'N'){
    rl.close()
    }
    else {
        console.log('invalid input');
        rl.close()
    }


})
}



})

