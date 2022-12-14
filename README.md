# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./Screenshots/Screenshot_1png.png)

### Links

- Solution URL: [https://github.com/](https://github.com/johnny064/interactive-card-details-form-main)
- Live Site URL: [https://vercel.com/johnny064](https://interactive-card-details-form-main-swart.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanila javascript


### What I learned

```js
let thanksMsg = document.querySelector(".thanks-container");
let continueBtn = document.querySelector(".continue");
thanksMsg.classList.toggle("active");
continueBtn.addEventListener("click",function(){
     thanksMsg.classList.remove("active");
     outputCardName.textContent = "JANE APPLESEED";
     outputCardNo.textContent = "0000 0000 0000 0000";
     outputExpiery.textContent= "00" + "/ " + "00";
     outputCardCvc.textContent = "000";
     
     
})
```

## Author

- Frontend Mentor - [@johnny064](https://www.frontendmentor.io/profile/johnny064)
- LinkedIn - [@kazi-monirul-islam9251](https://www.linkedin.com/in/kazi-monirul-islam9251)

