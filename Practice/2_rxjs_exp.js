import readline from 'readline/promises';
import {stdin as input , stdout as output} from 'process';
const rl = readline.createInterface(input , output);
async function main(){
console.log('Program is running!');
const promise = await rl.question('Enter something ')
console.log(`-${promise}-`);
console.log(typeof promise);
rl.close()
}

main();
