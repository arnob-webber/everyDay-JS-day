let animal = ["panda", "dog", "cat"];

animal.push("elephant"); /*dont forget to use qotes ----> '' <---- */
// using .push its mean we'r adding element. its add an element to the end

// to remove this last element --> (elephant)
animal.pop("elephant");

// if we wanna add an element in beginning we can use unshit
animal.unshift("tiger");

// to remove this first element --> (tiger)
animal.shift("tiger");

console.log(animal);
