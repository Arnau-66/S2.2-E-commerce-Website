# SPRINT 2.2 E-COMMERCE WEBSITE

This project is part of the IT Academy Bootcamp and consists of developing a functional e-commerce website starting from a base HTML and CSS template.

## Description

Given an initial codebase, the goal is to complete the missing JavaScript logic and adapt the HTML structure to make the application fully functional. The resulting website allows users to:

- Select and view products.
- Add items to the shopping cart.
- Apply specific discounts based on quantity and product type.
- Remove individual items from the cart.
- Navigate to the checkout page and fill in personal details.
- Validate form inputs before submission.
- Finally, adjust the visual design and layout to create a more professional and polished appearance.

## Main Branch Highlights ✅

The `main` branch contains a polished and fully functional version of the application, with improvements including:

- 🔗 **Navbar functionality**: Links and scroll behavior adjusted to navigate between sections correctly.
- 🖼️ **Responsive logo**: Adapted to show a different version on desktop and mobile.
- 🛒 **Shopping cart system**:
  - `Add to cart` buttons with quantity management.
  - Modal window displaying cart contents.
  - **+ / -** buttons for dynamically increasing or decreasing product quantity.
- 🧩 **Modular JavaScript architecture**:
  - `products.js` to manage the product catalog independently.
  - `cartList.js` (or `printCart`) moved into a separate module to isolate DOM rendering logic from core functionality.
- ✅ **Form validation**:
  - Validation on **blur** for real-time feedback.
  - Validation on **submit** with all required fields checked.
  - Display of **success alert message** when the form is submitted correctly.

## Branch Structure

The repository is organized as follows:

- `main`: The primary branch.
- `Developer`: The working branch for overall development.
- `Exercici1` to `Exercici8`: Each branch represents the progress and solution of each specific exercise within the project.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5

## Author

Arnau Pérez — IT Academy Bootcamp
