console.log("defer.js executed");
for (let i = 0; i < 1e10; i++) {} // heavy blocking loop

console.log("defer",document.querySelector("h1"));
