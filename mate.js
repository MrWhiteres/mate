function countMatchingSocks(colors) {
  const sockCounts = {};
  let pairs = 0;

  for (const color of colors) {
    // Якщо кольор уже зустрічався, збільшуємо лічильник та перевіряємо, чи можна створити нову пару
    if (sockCounts[color]) {
      pairs += 1;
      sockCounts[color] = 0;
    } else {
      // Якщо кольор ще не зустрічався, додаємо його до лічильника
      sockCounts[color] = 1;
    }
  }

  return pairs;
}