# Animated Quantity Selector

### ₊⊹ About

A quantity selector component with animation, built using **plain HTML, CSS, and JavaScript**, without any libraries or frameworks.

The project simulates a delivery product card (Margherita Pizza) where the user increases or decreases the quantity and sees the **total price updated in real time**, with a slight “pulse” effect with each change.

https://github.com/user-attachments/assets/f630d305-47b4-4c0e-b0f6-c59023a36e8b

---

### ★ Features

- **+** and **−** buttons to adjust the quantity
- Quantity range between **1 and 20** units
- Automatic calculation of the total (`quantity × £8.50`)
- *Bump* animation on the total amount with each change
- Responsive layout that adapts to small screens

---

### .ᐟ.ᐟ How It Works

**1. State:** A variable stores the current quantity.

```javascript
let quantity = 1;
```

**2. Events:** The two buttons call the same function, passing `+1` or `-1`.

```javascript
document.querySelector(“#plus”).onclick = () => update(1);
document.querySelector(“#minus”).onclick = () => update(-1);
```

**3. `update(change)` function:** On each click, it
- limits the quantity to between 1 and 20 using `Math.max(1, Math.min(20, quantity + change))`
- updates the counter (`#count`)
- recalculates the total using `(quantity * 8.5).toFixed(2)` (`#total`)
- restarts the animation

**4. Bump animation:** The CSS increases the total by 12% and changes the color midway through the animation. To make it run with every click, the JavaScript removes the class, forces a *reflow* by reading `offsetWidth`, and adds the class again.

```javascript
total.classList.remove(“bump”);
void total.offsetWidth;
total.classList.add(“bump”);
```

**Flow:**

```
Click + or − → update(±1) → limit (1 to 20) → update #count and #total → restart the bump
```

---

### ⚙️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**

---

### 🖿 Project structure

```
animated-quantity-selector/
├── index.html
├── Styles.css
├── script.js
└── README.md
```

---

### 📖 What i learned

- **DOM manipulation:** Select elements using `querySelector` and update their content using `textContent`.

- **Click events:** Bind multiple buttons to the same function, passing different values (`+1` and `-1`).

- **Limiting values:** Use `Math.min` and `Math.max` together to keep the value between 1 and 20.

- **Price formatting:** Use `toFixed(2)` to always display two decimal places.

- **Animations with `@keyframes`:** create a pulse effect (scale and color) based on a CSS class.

- **Reset animations via JavaScript:** remove the class, force a *reflow* with `offsetWidth`, and add the class again.

- **Layout with Flexbox and Grid:** align the card’s content and center the page.

- **Responsive design:** use `min()` so the card’s width adapts to small screens. 
