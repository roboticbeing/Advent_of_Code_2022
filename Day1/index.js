// PART 1
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

const fs = require('fs');

// map converts my string array into a number array
const data = fs.readFileSync(`./input.txt`, 'utf-8').split('\n').map(Number);

curr_sum = 0; 
best_sum = 0;

for(i = 0; i < data.length; i++) {
    curr_sum += data[i];
    if(data[i] == 0) {
        if (curr_sum > best_sum) {
            best_sum = curr_sum;     
        }
        curr_sum = 0;
    }
}

console.log(best_sum)

// PART 2
// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
elf1 = 0; 
elf2 = 0;
elf3 = 0;

for(i = 0; i < data.length; i++) {
    curr_sum += data[i];
    if(data[i] == 0) {
        if (curr_sum > elf3) {
            elf2 = elf3;
            elf3 = curr_sum;     
        }
        else if (curr_sum > elf2) {
            elf1 = elf2;
            elf2 = curr_sum;     
        }
        curr_sum = 0;
    }
}

console.log(elf1+elf2+elf3)