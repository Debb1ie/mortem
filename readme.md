# Mortem & Grain

A single-file React component for a specialty coffee and artisan bakery ordering experience. Dark/light mode, interactive cart, tasting journal, loyalty programme, brew guide, and origin map.

---

## Requirements!!

- React 18+
- No external dependencies beyond React itself
- Google Fonts loaded via `@import` inside the component's `<style>` block (DM Serif Display, DM Sans)

---

## Usage

Drop `mortem-grain.jsx` into your project and render it as the root component:

```jsx
import App from "./mortem-grain";

export default function Root() {
  return <App />;
}
```

No props are required. All state is managed internally.

---

## Sections

**Menu** — Coffee, pastries, and seasonal items. Grid and list views. Search, sort, and filter by roast or type. Wishlist. Item detail modal. Add to cart.

**Origins** — Interactive dot map with hover cards for each source country. Altitude, harvest window, processing method, and tasting notes per origin.

**Brew** — Five-step brew guide with expandable detail and a built-in countdown timer per step. Ratio calculator with sliders for dose, brew ratio, and water temperature.

**Journal** — Tasting log. Select an item, rate it, add tasting notes and freeform thoughts. Entries persist for the session.

**Loyalty** — Stamp card, points balance, tier progress (Seed / Bloom / Connoisseur / Maestro), and redeemable rewards.

**About** — Brand copy, key stats, and opening hours.

---

## Cart

Accessible via the nav icon. Supports quantity adjustment and item removal. Displays a loyalty points preview on the subtotal. Placing an order clears the cart and shows a brief confirmation toast.

---

## Bugs fixed (this version)

The original source contained mixed string delimiters throughout the JSX style props: strings were opened with a double-quote `"` and closed with a backtick `` ` ``. This caused parse errors across multiple sections. All instances were corrected to use consistent double-quote delimiters.

Affected locations:

- Journal section: `padding:"28px 32px"` and `marginBottom:"28px"`
- Brew ratio calculator: `padding:"32px 36px"`
- Loyalty card: `padding:"36px 40px"`
- Item modal inner panel: `padding:"28px 24px"`
- Item modal meta grid: `padding:"14px 16px"`
- Item modal lower panel: `padding:"20px 24px"`
- Footer: `padding:"26px 2rem"`
- Brew step detail: `paddingLeft:"10px"`
- About section: `paddingTop:"40px"`

---

## Theming

Colors are derived from two variables set at the top of the `App` function body:

```js
const acc = dark ? "#c9a96e" : "#8b5e3c";   // accent (gold / brown)
const bg  = dark ? "#0f0e0c" : "#faf8f4";   // page background
```

All other colors cascade from `dark` mode state. To change the accent, update the two `acc` values.

---

## Notes

- All currency is displayed in GBP.
- Calorie counts and prices are illustrative.
- The origins map is a decorative SVG grid, not a real geographic projection.
- Session state only: nothing is persisted to localStorage or a backend.
