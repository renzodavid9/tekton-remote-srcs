function sum(a, b) {
  return a + b;
}

(function main() {
  const a = 5;
  const b = 10;

  if (sum(a, b) > 10) {
    console.log("Bigger than 10");
  }
  console.log("ending...");
});
