# Frontend Mentor - Age calculator app solution

This is my solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). This challenge allowed me to practice form validation, user interaction, and responsive design.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View their age in years, months, and days after submitting a valid date through the form.
- Receive validation errors if:
  - Any field is empty when the form is submitted.
  - The day number is not between 1–31.
  - The month number is not between 1–12.
  - The year is in the future.
  - The date is invalid (e.g., 31/04/1991 as April has only 30 days).
- View an optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Links

- Solution URL: [Solution on Frontend Mentor](https://www.frontendmentor.io/profile/yourusername/solutions)
- Live Site URL: [Live Demo](https://emma-roizot.fr)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS for utility-first styling
- JavaScript for form validation and DOM manipulation
- Mobile-first workflow
- Responsive design principles

### What I learned

This project helped me strengthen my knowledge of JavaScript, especially working with date manipulation and form validation. Below are some key learnings:

1. **Dynamic Form Validation**  
   I implemented client-side validation to ensure users enter a valid date and receive error messages when they don't.  

   ```js
   const validateDate = (day, month, year) => {
     const today = new Date();
     const inputDate = new Date(year, month - 1, day);
     if (inputDate > today || isNaN(inputDate)) {
       return false;
     }
     return true;
   };
   ```

2. **Responsive Design**  
   Using Tailwind CSS made it easier to design a mobile-friendly and visually appealing layout.

   ```html
   <div class="container lg:w-2/6 w-2/3 bg-white p-6 rounded-xl">
     <!-- Content -->
   </div>
   ```

3. **Error Messaging**  
   Showing or hiding error messages dynamically improves the user experience.

   ```js
   const showError = (id, message) => {
     const errorElement = document.getElementById(id);
     errorElement.textContent = message;
     errorElement.classList.remove('hidden');
   };
   ```

### Continued development

In future projects, I want to focus on:

- Improving animation for the result display (e.g., animating the numbers when they update).
- Exploring accessibility improvements, such as ARIA attributes for better screen reader support.
- Adding tests to validate form inputs automatically.

### Useful resources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - Helped me better understand how to work with JavaScript dates.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Essential for building the responsive layout.

## Author

- Website - [Emma Roizot](https://emma-roizot.fr)
- Frontend Mentor - [@ashandcompany](https://www.frontendmentor.io/profile/ashandcompany)
