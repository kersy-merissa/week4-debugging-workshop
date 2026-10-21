const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
]

// BUG 1 FIXED: Changed the loop condition from `i <= items.length` to `i < items.length`. 
// Using `<=` caused the loop to run one extra time when `i` equaled `items.length`, trying to access `items[3]` 
// which was undefined and threw a TypeError when reading `.price`.
// How found: Paused execution using a breakpoint on the loop and tracked index `i` and length in the Scope panel.
function getSubtotal(items) {
  let subtotal = 0
  for (let i = 0; i < items.length; i++) {
    subtotal += Number(items[i].price) * items[i].qty
  }
  return subtotal
}

// BUG 2 FIXED: Reordered the discount threshold conditions. The original code checked `subtotal > 10000` first, 
// which meant any amount over 20000 incorrectly triggered the 10% bracket instead of 20%. 
// How found: Stepped through `getDiscount` using F11 in DevTools and watched return values diverge for high subtotals.
function getDiscount(subtotal) {
  if (subtotal > 20000) return 0.2
  else if (subtotal > 10000) return 0.1
  return 0
}

// BUG 3 FIXED: Fixed the calculation by subtracting the actual monetary discount amount (`subtotal * discount`) 
// instead of directly subtracting the raw decimal rate percentage from the subtotal.
// How found: Inspected the Watch panel where `total` resulted in an incorrect fractional value instead of a proper price.
function getTotal(items) {
  const subtotal = getSubtotal(items)
  const discount = getDiscount(subtotal)
  const total = subtotal - (subtotal * discount)
  return total
}

console.log(getTotal(cart))

// RISKY DATA VALUE EXPLANATION (Required):
// Why `price: "1500"` (a string) still works here:
// JavaScript performs implicit type coercion when the multiplication operator (*) is used, 
// automatically converting the string "1500" into the number 1500 during math operations.
// How it could break:
// If the addition operator (+) were used instead of multiplication (e.g., trying to sum item prices or accumulating values), 
// JavaScript would concatenate the strings instead of adding them mathematically (e.g., producing "15001500" instead of 3000). 
// Wrapping it with Number() ensures absolute safety.