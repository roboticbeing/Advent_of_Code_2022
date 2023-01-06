# ❄️ Day 1 Reflection ❄️

## Part 2
After coming up with my own solutions, I like to look at how other people solved the same problem. The bulk of solutions for Part 2 created a sorted array then used the slice function to retrieve the top 3 largest calory counts. I was surprised to find out that barely anyone used my method of variable swapping even though it has a faster runtime of O(n).

## What I've Learned
map() is a nifty little function that transforms an array. I used it to transform my array of strings into integers:
```javascript
const data = fs.readFileSync(`./input.txt`, 'utf-8').split('\n').map(Number);
```

some other examples of its functions: https://www.w3schools.com/jsref/jsref_map.asp

I also learned that it's not recommended to use for ... in; it responded with undefineds. 

see more: https://stackoverflow.com/questions/500504/why-is-using-for-in-for-array-iteration-a-bad-idea
