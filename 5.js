const names = ["VLAD", "KIRINAAAAAAAAAAAAAA", "NAZARIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIY"];

const result = names.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log(result);