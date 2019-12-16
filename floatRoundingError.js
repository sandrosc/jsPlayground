console.log(
  Array(10000)
    .fill(0)
    .map((_, i) => {
      const s = (i * 5).toString();
      return parseFloat(
        s.substring(0, s.length - 2) + '.' + s.substring(s.length - 2)
      );
    })
    .filter(s => (s * 100) % 1)
    .map(s => s * 100)
);

console.log(Math.round(1.1 * 100));
console.log(Math.round(1.15 * 100));
