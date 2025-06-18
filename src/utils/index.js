export const statusLevels = {
  low: {
    color: "#047857",
    background: "#d1fae5",
    description:
      "Caffeine levels are mild, resulting in a light boost in alertness with minimal side effects.",
    maxLevel: 100,
  },
  moderate: {
    color: "#b45309",
    background: "#fef3c7",
    description:
      "A moderate amount of caffeine leads to noticeable stimulation, increased focus, and potential restlessness.",
    maxLevel: 200,
  },
  high: {
    color: "#e11d48",
    background: "#ffe4e6",
    description:
      "Elevated caffeine levels can cause jitteriness, rapid heartbeat, and trouble concentrating, signaling an excessive intake.",
    maxLevel: 9999,
  },
};

export const coffeeConsumptionHistory = {
  1727579064032: { name: "Filter Coffee", cost: 45 },
  1727629263026: { name: "Red Bull (250ml)", cost: 120 },
  1727571485301: { name: "Kaapi", cost: 55 },
  1727585485245: { name: "Bru Instant (1 tsp)", cost: 10 },
  1727614392214: { name: "Bailey's Coffee", cost: 180 },
  1727642088808: { name: "Café Latte", cost: 80 },
  1727600684481: { name: "Nescafé Latte", cost: 40 },
  1727615806680: { name: "Chikmagalur Drip Coffee (120ml)", cost: 35 },
  1727609623836: { name: "Sting Energy Drink (250ml)", cost: 50 },
  1727647449961: { name: "Monster Java (440ml)", cost: 160 },
  1727595771504: { name: "Strong South Indian Coffee", cost: 40 },
  1727586709242: { name: "5-hour Energy Shot (60ml)", cost: 110 },
  1727592250322: { name: "Café Mocha", cost: 70 },
  1727630731059: { name: "Tzinga Energy Drink (250ml)", cost: 35 },
  1727584588314: { name: "South Indian Filter Coffee", cost: 55 },
  1727630390005: { name: "B-Fizz Energy (250ml)", cost: 30 },
  1727595715018: { name: "Matcha Green Tea Latte", cost: 75 },
  1727605577918: { name: "Glucose-D Energy Drink", cost: 25 },
  1727565390441: { name: "Chennai Filter Coffee", cost: 38 },
  1727641229973: { name: "CCD Latte", cost: 90 },
  1727610658037: { name: "Black Coffee (Small)", cost: 35 },
  1727620751667: { name: "Red Bull Sugarfree (250ml)", cost: 130 },
  1727597163157: { name: "Monster Energy (500ml)", cost: 190 },
  1727590586957: { name: "Iced Cold Coffee", cost: 60 },
  1727610760698: { name: "Cold Coffee with Ice Cream", cost: 110 },
  1727601688000: { name: "Nitro Cold Brew (Starbucks)", cost: 260 },
  1727602354621: { name: "Turkish Coffee", cost: 90 },
  1727599341790: { name: "Double Espresso (CCD)", cost: 120 },
  1727566519925: { name: "Cafe Latte (Homebrew)", cost: 50 },
  1727554338958: { name: "Espresso Shot", cost: 65 },
  1727623439992: { name: "Red Bull (250ml)", cost: 120 },
  1727569314281: { name: "Sting Energy (Can)", cost: 60 },
  1727577846796: { name: "Bru Gold Instant (Strong)", cost: 25 },
  1727651270793: { name: "Chikmagalur Drip Coffee", cost: 50 },
  1727571590403: { name: "Filter Coffee (Hotel Style)", cost: 45 },
  1727575199865: { name: "Monster Ultra Energy", cost: 175 },
  1727613114673: { name: "Cold Coffee (CCD)", cost: 90 },
  1727553981855: { name: "Cold Brew (Starbucks)", cost: 210 },
  1727628992138: { name: "B-Fizz (Bottle)", cost: 40 },
  1727626471677: { name: "Tzinga Energy (Lemon Mint)", cost: 30 },
  1727618530023: { name: "Red Bull Edition (Flavored)", cost: 140 },
  1727616747401: { name: "Turkish Coffee", cost: 100 },
  1727635847332: { name: "Black Coffee (Strong)", cost: 65 },
};

export const coffeeOptions = [
  { name: "Espresso Shot", caffeine: 63 },
  { name: "Double Espresso (CCD)", caffeine: 126 },
  { name: "Filter Coffee", caffeine: 90 },
  { name: "Kaapi", caffeine: 100 },
  { name: "Nescafé Latte", caffeine: 80 },
  { name: "Café Mocha", caffeine: 90 },
  { name: "Café Latte", caffeine: 85 },
  { name: "CCD Latte", caffeine: 90 },
  { name: "Strong South Indian Coffee", caffeine: 95 },
  { name: "Black Coffee (Small)", caffeine: 95 },
  { name: "Iced Cold Coffee", caffeine: 80 },
  { name: "Cold Brew (Starbucks)", caffeine: 155 },
  { name: "Nitro Cold Brew (Starbucks)", caffeine: 215 },
  { name: "Chikmagalur Drip Coffee (120ml)", caffeine: 120 },
  { name: "Frappuccino (CCD)", caffeine: 95 },
  { name: "Turkish Coffee", caffeine: 160 },
  { name: "Bailey's Coffee", caffeine: 70 },
  { name: "Chennai Filter Coffee", caffeine: 100 },
  { name: "Bru Gold Instant (Strong)", caffeine: 65 },
  { name: "Bru Instant (1 tsp)", caffeine: 30 },
  { name: "Decaf Coffee", caffeine: 2 },
  { name: "Chai Latte", caffeine: 40 },
  { name: "Matcha Green Tea Latte", caffeine: 70 },
  { name: "Monster Energy (500ml)", caffeine: 160 },
  { name: "Red Bull (250ml)", caffeine: 80 },
  { name: "Red Bull Sugarfree (250ml)", caffeine: 80 },
  { name: "Sting Energy Drink (250ml)", caffeine: 80 },
  { name: "B-Fizz Energy (250ml)", caffeine: 90 },
  { name: "5-hour Energy Shot (60ml)", caffeine: 200 },
  { name: "Tzinga Energy Drink (250ml)", caffeine: 80 },
  { name: "Monster Ultra Energy", caffeine: 160 },
  { name: "Cold Coffee with Ice Cream", caffeine: 95 },
  { name: "Glucose-D Energy Drink", caffeine: 25 },
  { name: "Red Bull Edition (Flavored)", caffeine: 90 },
];

const halfLifeHours = 5;

export function calculateCurrentCaffeineLevel(historyData) {
  const currentTime = Date.now();
  const halfLife = halfLifeHours * 60 * 60 * 1000; // 5 hours in milliseconds
  const maxAge = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

  let totalCaffeine = 0;

  for (const [timestamp, entry] of Object.entries(historyData)) {
    const timeElapsed = currentTime - parseInt(timestamp);

    // Ignore entries older than 48 hours
    if (timeElapsed <= maxAge) {
      const caffeineInitial = getCaffeineAmount(entry.name);
      // Calculate the remaining caffeine using the half-life formula
      const remainingCaffeine =
        caffeineInitial * Math.pow(0.5, timeElapsed / halfLife);
      totalCaffeine += remainingCaffeine;
    }
  }

  return totalCaffeine.toFixed(2);
}

// Helper function to get caffeine amount based on the coffee name
export function getCaffeineAmount(coffeeName) {
  const coffee = coffeeOptions.find((c) => c.name === coffeeName);
  return coffee ? coffee.caffeine : 0;
}

export function getTopThreeCoffees(historyData) {
  const coffeeCount = {};

  // Count occurrences of each coffee type
  for (const entry of Object.values(historyData)) {
    const coffeeName = entry.name;
    if (coffeeCount[coffeeName]) {
      coffeeCount[coffeeName]++;
    } else {
      coffeeCount[coffeeName] = 1;
    }
  }

  // Convert coffeeCount object to an array of [coffeeName, count] and sort by count
  const sortedCoffees = Object.entries(coffeeCount).sort((a, b) => b[1] - a[1]);

  // Calculate total coffees consumed
  const totalCoffees = Object.values(coffeeCount).reduce(
    (sum, count) => sum + count,
    0
  );

  // Get the top 3 most popular coffees
  const topThree = sortedCoffees.slice(0, 3).map(([coffeeName, count]) => {
    const percentage = ((count / totalCoffees) * 100).toFixed(2);
    return {
      coffeeName: coffeeName,
      count: count,
      percentage: percentage + "%",
    };
  });

  return topThree;
}

export function timeSinceConsumption(utcMilliseconds) {
  const now = Date.now();
  const diffInMilliseconds = now - utcMilliseconds;

  // Convert to seconds, minutes, hours, days, and months
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  // Get the remainder for each unit
  const remainingDays = days % 30;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Construct the string
  let result = "";
  if (months > 0) result += `${months}M `;
  if (remainingDays > 0) result += `${remainingDays}D `;
  if (remainingHours > 0) result += `${remainingHours}H `;
  if (remainingMinutes > 0) result += `${remainingMinutes}M `;
  if (remainingSeconds > 0 || result === "") result += `${remainingSeconds}S`; // Show seconds even if they're 0 if nothing else exists

  return result.trim(); // Remove any trailing space
}

// This function was added during recording
export function calculateCoffeeStats(coffeeConsumptionHistory) {
  const dailyStats = {};
  let totalCoffees = 0;
  let totalCost = 0;
  let totalCaffeine = 0;
  let totalDaysWithCoffee = 0;

  for (const [timestamp, coffee] of Object.entries(coffeeConsumptionHistory)) {
    const date = new Date(parseInt(timestamp)).toISOString().split("T")[0]; // Extract date in YYYY-MM-DD format
    const caffeine = getCaffeineAmount(coffee.name);
    const cost = parseFloat(coffee.cost);

    // Initialize or update the daily stats
    if (!dailyStats[date]) {
      dailyStats[date] = { caffeine: 0, cost: 0, count: 0 };
    }

    dailyStats[date].caffeine += caffeine;
    dailyStats[date].cost += cost;
    dailyStats[date].count += 1;

    // Update totals
    totalCoffees += 1;
    totalCost += cost;
  }

  const days = Object.keys(dailyStats).length;
  const dailyCaffeine = {};
  for (const [date, stats] of Object.entries(dailyStats)) {
    if (stats.caffeine > 0) {
      totalCaffeine += stats.caffeine;
      totalDaysWithCoffee += 1; // Count days when caffeine was consumed
    }
  }

  // Calculate average daily caffeine and average daily cost
  const averageDailyCaffeine =
    totalDaysWithCoffee > 0
      ? (totalCaffeine / totalDaysWithCoffee).toFixed(2)
      : 0;
  const averageDailyCost =
    totalDaysWithCoffee > 0 ? (totalCost / totalDaysWithCoffee).toFixed(2) : 0;
  console.log(totalCost, typeof totalCost);
  return {
    daily_caffeine: averageDailyCaffeine,
    daily_cost: averageDailyCost,
    average_coffees: (totalCoffees / days).toFixed(2),
    total_cost: totalCost.toFixed(2),
  };
}
