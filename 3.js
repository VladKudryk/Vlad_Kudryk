const products = [
  { name: "Ноутбук", category: "Техніка" },
  { name: "мем", category: "м'ясо" },
  { name: "Хліб", category: "Їжа" }
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product.name);
  return acc;
}, {});

console.log("Групи:", grouped);