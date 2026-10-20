# Exercise 1: Debugging Errors Report (`errors.html`)

### 1. Snippet 1: Greeting
- **Error Type:** `ReferenceError`
- **What it means:** The variable `studentname` (lowercase 'n') was used without being declared, whereas the actual declared variable is `studentName` (camelCase). JavaScript is case-sensitive.
- **The Fix:** Correct the variable name casing: `console.log("Welcome, " + studentName)`

### 2. Snippet 2: Shouting
- **Error Type:** `TypeError`
- **What it means:** The string method `toUppercase()` does not exist because JavaScript method names are case-sensitive. 
- **The Fix:** Use the correct uppercase method name: `console.log(city.toUpperCase())`

### 3. Snippet 3: Page title
- **Error Type:** `TypeError`
- **What it means:** The CSS selector `#page-titel` has a spelling typo (`titel` instead of `title`). `document.querySelector` returns `null` when no element matches, and trying to set `.textContent` on `null` crashes the code.
- **The Fix:** Correct the ID spelling to match the HTML element: `document.querySelector("#page-title")`

### 4. Snippet 4: Score counter
- **Error Type:** `TypeError`
- **What it means:** Variables declared with `const` cannot be reassigned new values after their initial creation.
- **The Fix:** Declare the variable using `let` instead of `const`: `let score = 0`

### 5. Snippet 5: Shopping list
- **Error Type:** `SyntaxError`
- **What it means:** Array elements must be separated by commas. A comma was missing between `"avocado"` and `"banana"`.
- **The Fix:** Add a comma between elements: `const fruits = ["mango", "avocado", "banana"]`

### 6. Snippet 6: Countdown
- **Error Type:** `RangeError`
- **What it means:** The recursive function lacks a base case to stop execution, leading to infinite recursion until the call stack memory is exhausted.
- **The Fix:** Add a condition to stop the recursion: 
  ```javascript
  function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
  }