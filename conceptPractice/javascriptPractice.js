const animal = {
  eats: true,
  walk: function () {
    console.log("THIS NIGGA WALKs");
  },
};

const rabbit = Object.create(animal, {
  bark: { value: false },
  drinks: { value: true },
});


console.log(rabbit);
console.log(rabbit.bark);