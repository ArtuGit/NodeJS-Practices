const hero = {
  name: "Batman",
  getName: function () {
    return this.name;
  },
  getName2: () => {
    return this.name;
  },
  getName3: function () {
    const self = this;
    const arrowFunc = () => {
      return self.name;
    };
    return arrowFunc();
  },
};

console.log(hero.getName()); // Output: Batman
console.log(hero.getName2()); // Output: undefined

const getHeroName = hero.getName;
console.log(getHeroName()); // Output: undefined
console.log(getHeroName.call(hero)); // Output: Batman
console.log(getHeroName.bind(hero)()); // Output: Batman
console.log(getHeroName.apply(hero)); // Output: Batman

const getHeroName2 = hero.getName2;

console.log(hero.getName2()); // Output: undefined
console.log(getHeroName2()); // Output: undefined
console.log(getHeroName2.call(hero)); // Output: undefined
console.log(getHeroName2.bind(hero)()); // Output: undefined
console.log(getHeroName2.apply(hero)); // Output: undefined

console.log(hero.getName3()); // Output: Batman
