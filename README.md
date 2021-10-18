# Balanced Meal Generator

## Introduction

![Image of Device responsiveness](assets/images/responsiveness-image.png)

Balanced meal generator is a website for anyone who is interested in nutrition and looking for some inspiration on what food to prepare.

Users of this website will be able to select their dietary preferences and then generate a range of meal ideas, choosing from a randomised selection of food, while sticking to a nutritionally balanced plate break-down of 50% vegetables, 25% protein and 25% carbohydrate.

## User Experience (UX)

### Project Goals

* To create a minimalist, well-designed website that allows users to generate meal ideas, and complete a nutrition quiz to test the depth of their nutritional knowledge.

### User Goals

* To get ideas for what to cook and eat.
* To learn more about nutrition and healthy portion sizes.

### Site Owner's Goals

* To create a useful and easy-to-use meal generator tool.
* To get new webiste visitors.

### Target Audience

* Anyone looking to improve their nutritional knowledge.
* Anyone lacking inspiration on what to cook.

### Structure:

The site has 2 pages: 

Home page - The 'Home' page contains an eye-catching plate image, which is divided into 3 sections - 50% of vegetable content, 25% of protein content and 25% of carbohydrate content. 
There user is first invited to select their dietary preference by clicking on the desired radio button. 
There is then a clear 'Inspire me!' call to action button which generates a new meal idea everytime the user clicks it, sticking to the recommended food group percentages.

Underneath this is a brief explanation of the balanced meal generator and its purpose. 

Nutrition quiz -  The 'Nutrition quiz' page gives the user a chance to put their nutritional knowledge to the test, providing some light entertainment which relates to the main feature of the site - the generator.

For consistency of user experience, the site logo, navigation links and footer remain consitent throughout the site.

### Wireframes:

Mock-ups were made using Balsamiq to help plan and visualise the site design. They were created for 3 main screen sizes: mobile, tablet and desktop.

- [Wireframes](docs/MS2-home-desktop.pdf): 'Home' page desktop.
- [Wireframes](docs/MS2-quiz-desktop.pdf): 'Nutrition Quiz' page desktop.
- [Wireframes](docs/MS2-home-mobile.pdf): 'Home' page mobile.
- [Wireframes](docs/MS2-quiz-mobile.pdf): 'Nutrition Quiz' mobile.

### Design:

* Colour Scheme:

  The colour palette includes calm and complimenting colours. The palette was chosen using the [Coolors](https://coolors.co/) colour generator website.

  ![Image of Color Palette](assets/images/ms2-color-palette.png)

  The colours mainly used were:

  Charcoal: #424B54

  English Lavender: #B38D97

  Pastel Pink: #D5ACA9

  Peach Puff: #EBCFB2

  Pale Silver: #C5BAAF

  Some slightly different shades of similar colors were also used in different parts of the site to achieve the best possible contrast for user experience.

* Typography:

  'Quattrocento', taken from Google Fonts, is the main font used throughout the website with 'Sans Serif' as the fallback font. It is clear and neat.

* Imagery:

  All images were sourced from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/).

  The main feature of the home page is the meal generator plate which comprises of three sepoarate images for the different food groups. This is set to images which represent each food group when the user first arrives on the page, and these are then replaced with new images according to the plate section each time the user clicks to generate new meal inspiration. 

  ## Features

### Existing Features:

* Heading and Navigation

  * Horizontally aligned navigation bar with 2 navigation links exists on both pages.

  * Navigation bar is consistently displayed at the top of the page so users know what to expect and can navigate easily.

  * On mobile, the navigation menu links are displayed underneath the page heading, instead of in-line.

  * The heading is featured clearly at the top of the page.

Desktop:

  ![Image of desktop menu](assets/images/desktop-nav.png)

Mobile:

  ![Image of mobile menu](assets/images/mobile-nav.png)

* Dietary Requirements section

  * On the home page, the user is initially directed to the first step of generating their meal - selecting their dietary requirements. The diet options are provided as a list of radio buttons. Depending on what diet the user selects, the meal generator plate will only return results that are appropriate for that diet. 


  Desktop:

  ![Image of desktop dietary requirements section](assets/images/diet-desktop.png)

  Mobile: 

  ![Image of mobile dietary requirements section](assets/images/diet-mobile.png)

* Meal generator

  * Once the user has selected their diet of choice, they are invited to click the 'inspire me!' button which will generate a meal idea in line with their diet, and displayed as 50% of the plate for the vegetable portion, and 25% each for the protein and carbohydrate portions. Each time the user clicks the button, a new meal idea will be returned by randomly selecting a dish from the website's selection for each category.

  Desktop - 'Inspire me!' button:

  ![Image of 'Inspire me!' button](assets/images/inspire-button.png)

  Desktop - Home page meal plate image:

  ![Image of home page meal plate](assets/images/home-plate-image.png)

  Desktop - Home page generated meal plate image:

  ![Image of generated meal plate](assets/images/generated-plate-image.png)

  Mobile - Home page generated meal plate image:

  ![Image of mobile generated meal plate](assets/images/mobile-generated-plate.png)

* Nutrition Quiz

  * The second page of the site has a nutrition quiz which is offered as some light entertainment for the user, and to share some interesting nutrition facts which the user may not have been aware of. This is a multiple choice quiz in which the user is given four answer options per question. At the end of the quiz they click the submit button which calculates and returns their quiz score.
  * Depending on the user's quiz score, a percentage result and accompanying message is generated. For the lower-end scores (0 - 29%), the message suggests that the user may benefit from using the balance meal generator; for 30 - 59%, the user is given kudos for their respectable level of nutritional knowldege but may still benefit from the meal generator. For scores between 60 - 89%, the user receives a congratulations; and for scores from 90% and above, users are compared to a qualified nutritionist.
  * Beside the 'submit' button is a refresh button which clears all of the checked radio buttons on the page as well as the result and message, if there is one displayed at that time.

  Desktop - Nutrition quiz:

  ![Desktop - Image of nutrition quiz](assets/images/desktop-nutrition-quiz.png)

  Desktop - nutrition quiz and result message, example 1:

  ![Desktop - Image of nutrition quiz result and result message](assets/images/desktop-result-message.png)

  Desktop - nutrition quiz and result message, example 2:

  ![Desktop - Image of nutrition quiz result and result message 2](assets/images/desktop-result-message-eg2.png)

  Desktop - refresh button:

  ![Desktop - Image of refresh button](assets/images/desktop-refresh-button.png)

  Mobile - Image of nutrition quiz

  ![Mobile - Image of nutrition quiz](assets/images/mobile-nutrition-quiz.png)

  Mobile - nutrition quiz and result message, example 2:

  ![Desktop - Image of nutrition quiz result and result message](assets/images/mobile-result-and-message.png)
  

### Features To be Implemented in Future:

* Add calorie addition to the function
* Create feauter for users to add their own dishes/food types.
* Add more diet types, e.g. coeliac.
* Add more options for all food types for better user experience.

## Technologies Used

### Languages:

*  [HTML 5](https://en.wikipedia.org/wiki/HTML5)
*  [CSS 3](https://en.wikipedia.org/wiki/CSS)
*  [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, libraries and programs used:

* [Balsamiq](https://balsamiq.com/) - to create wireframes for the site as part of the project preparation.
* [Google Fonts](https://fonts.google.com/) - to import the 'Quattrocento' and 'Sans Serif' fonts into the HTML file, which were then used throughout the site.
* [Font Awesome](https://fontawesome.com/) - for icons which were added to the footer social media links.
* [Coolors](https://coolors.co/) - for an appropriate and attractive colour palette.
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - to inspect and debug the code through all stages of the development.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) - to check the site for performance, accessibility and best practices.
* [Am I Responsive](http://ami.responsivedesign.is/) - to produce a preview of the site on different devices.
* [W3C HTML Validator](https://validator.w3.org/#validate_by_input) - to validate HTML code.
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - to validate CSS code.
* [GitHub](https://github.com/) - for hosting the project code and version control.
* [Gitpod](https://gitpod.io/account) - to write the code and push it to GitHub.
* [Github Pages](https://pages.github.com/) - to deploy the site.
* [Unsplash](https://unsplash.com/) - for images.
* [Pexels](https://www.pexels.com/) - for images.

## Deploying to GitHub Pages

The site was developed in GitPod and deployed to GitHub pages. The steps to deploy are as follows:

* Navigate to the Github repository. For this project, this is rocrill/meal-generator 
* Navigate to the Settings tab, then to Pages.
* From the Source secton drop-down menu, select the Master Branch ( or Branch: Master and Root folder). Save.
* Once the master branch has been selected, you will see the message: 'Your site is published' and a link to the deployed site will be provided.

The live link can be found here - https://rocrill.github.io/meal-generator/

## Forking to GitHub Repository

You can create a fork (copy) of the repository. This allows you to experiment with the code without affecting the original project.

To fork the repository:

1. Log in to your GitHub account.
2. On GitHub, navigate to the repository you want to fork.
3. In the top right corner of the page, underneath your profile avatar, click Fork.
4. You should now have a copy of the original repository in your GitHub account.

## Making a local clone:

You can clone your repository to create a local copy on your computer. Any changes made to the local copy will not affect the original project. To clone the Meal Generator project, follow the steps below:

1. Log in to your GitHub account and locate the Meal Generator repository.
2. In the repository, click on Code button located above all the project files.
3. Under HTTPS, copy the link generated - https://github.com/rocrill/meal-generator.git.
4. Open the terminal you are using, e.g. Gitpod.
5. Change the current working directory to the location where you want the cloned directory created.
6. Type git clone and then paste the URL you copied earlier: `git clone https://github.com/rocrill/meal-generator.git`.
8. Press Enter to create your local clone.

# Testing

I tested the site regularly during the development process, by previewing it in the live server window and inspecting with Google Chrome DevTools at various stages.

When I was editing for responsiveness I tested the site on all devices available to me:
-Huawei Y6 2019
-Iphone 6S
-Macbook Pro

I also tested the site on the following browsers:
-Firefox
-Google Chrome
-Microsoft Edge

At the final stages of the project the W3C Markup Validator and W3C CSS Validator and JShint Services were used to validate every page of the project to ensure there were no syntax errors.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Frocrill.github.io%2Fmeal-generator%2F
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frocrill.github.io%2Fmeal-generator%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
 - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    -In quiz.js:
      -There are 2 functions in this file.
      -Function with the largest signature take 0 arguments, while the median is 0.
      -Largest function has 23 statements in it, while the median is 14.
      -The most complex function has a cyclomatic complexity value of 11 while the median is 6.5.  
    -In script.js:
      -There are 2 functions in this file.
      -Function with the largest signature take 2 arguments, while the median is 1.
      -Largest function has 23 statements in it, while the median is 13.
      -The most complex function has a cyclomatic complexity value of 11 while the median is 6.  

### Unfixed Bugs

Mobile nav alignment?

# Credits

## Code

The Code Institute LMS content, including the Love Running project, as well as some posts on Stackoverflow were used to create this site. All code taken from these resources has been adapted to suit the needs of this site, except for the specific cases referenced below.

*The following articles were used to achieve the quarter and semi-circle plate sections shape and positioning for the meal generator.

[Code Grepper](https://www.codegrepper.com/code-examples/css/make+a+quarter+of+circle+css)
[W3Schools](https://www.w3schools.com/css/css3_borders.asp) 
[Singhak](https://singhak.in/draw-half-and-quarter-circle-with-css/)
[Free Code Camp](https://www.freecodecamp.org/news/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26/#:~:text=In%20position%3A%20relative%20%2C%20the%20element,corner)%20of%20its%20parent%20element.)

*This [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) article was used to get the math.random function used in the meal generator.

*This [W3Schools](https://www.w3schools.com/jsref/jsref_dowhile.asp) article was used for the 'do while' loop used as part of the generate meal function.

*This [Stack Overflow](https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript) article was used when creating the 'refresh' button function which clears all radio buttons and any existing result text.

*This [Free Code Camp](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) article was used when addressing a persistent footer positioning issue.

*This [Stack Overflow](https://stackoverflow.com/questions/9866220/why-are-two-vertical-scrollbars-showing) article resolved a double vertical scroll bar issue on mobile.

*Icons taken from [Font Awesome](https://fontawesome.com/).

## Images

Images were sourced from Unsplash and Pexels.

Hero image by Mike Erskine on [Unsplash](https://unsplash.com/photos/NqeB4q6KOFg)

Double room image by Max Vakhtbovych on [Pexels](https://www.pexels.com/photo/classy-bedroom-with-soft-bed-and-white-furniture-7166560/)

King room image by NeONBRAND on [Unsplash](https://unsplash.com/photos/ZqqwJA71Ke4)

Sunflower field image by Bonnie Kittle on [Unsplash](https://unsplash.com/photos/vxTpVxYCZjA)

Mountain image by K. Mitch Hodge on [Unsplash](https://unsplash.com/photos/pyKlWqt6PY0)

Portstewart Strand image by Catherin Auld on [Unsplash](https://unsplash.com/photos/7H7COlMWZwI)

Contact page image by Timothy Eberly on [Unsplash](https://unsplash.com/photos/oIFAIo6f2qA)

# Acknowledgements

Thank you to:

* My mentor, Gerard McBride, for his help and guidance.
* The tutors at the Code Institute for their help and support.
