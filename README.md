# Car Brands Memory Game

[Car Brands Memory Game Live Link](https://dimitar-4.github.io/ms2-memory-game/) 

 A simple concentration card game where the player have to match pairs of cards with the same symbols on them for a limited time.
As the name suggests the symbols/logos on the cards are from different car manufacturers.

![responsive-img](assets/responsive-image/responsive-game.PNG)

## User Experience (UX)

### User Stories:
* As a user, I want to be entertained by a simple and relaxing game.
* As a user, I expect easy to read game menu, options and features so that everything is understandable with just one look.
* As a user, I want to play a game that helps me concentrate.
* As a user, I want to play a game that can bring a positive effect on my memory skills.
* As a user, I want to play a game that covers object that I'm iterested in.

### Strategy:

 The goal for both the user and the owner is in this case the same. The goal is to give the user a pleasent experience while playing. 

### Scope: 

 The player will be provided with features such as complete "how to play" instructions, the game board itself, an option to 
 choose from three different images for the game background, 60 seconds countdown timer, and alerts that inform the user if the game is won or 
 the time is up.

### Structure:

  The layout of the project is clean and simple so the user can navigate and play quick and without any complications. 
 Starting from the home page with a game title on top, that is also a link to the game page.
 Instructions of how to play the game followed by a big "Play" button that leads to the game page. And finally at the bottom there is a positive message
 for the user. 

 Opening the game page the user is presented with a game title on top, that is also a link to the home page. Under the game title
 there is an instructions button for the user to be able to read the rules once again if something is not clear. After that 
 there is a countdown timer to show the user how much time is left to win the game. Next to the timer there is another button, 
 the restart game button. 
 Under the timer and the restart button is the game board that is a 4 by 4 cards grid with a square shape. And finally at the bottom of the page 
 there are the buttons that allow the user to change the background image of the game.

### Skeleton (Wireframes):

* On Mobile Device:
   - [Home Page](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/wireframes/Home%20Mobile.png)
   - [Game Page](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/wireframes/Game%20Mobile.png)
* On Desktop
   - [Home Page](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/wireframes/Home%20Desktop.png)
   - [Game Page](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/wireframes/Game%20Desktop.png)

### Surface:

 The desired visual direction for the project is to be a classic card game with good contrasts between the content and the background.  
The main color used in the project is light(electric) green for text, borders, icons etc. It's contrasting good with all available backgrounds 
images. "Play" and "Exo" Google fonts are used also for the titles and text content to further point the project in the desired visual direction. 

## Features

 * This memory game project is made to be responsive on different devices. 
 * The game includes a full instructions on the Home page that explains how to play the game.
 * The "Play" and "Restart" buttons on the Home page and above the game board help the user to navigate more easily.
 * The game board as the main feature to interact with.   
 * It also provides the user with three buttons to change the theme (backgraund image) on the game page so 
 that the looks variates for different preferences. 

## Technologies Used 

1. HTML5
2. CSS3
3. JavaScript 
4. Balsamiq
   - Used to create wireframes for the basic look of the memory game project.
5. TinyPNG
   - Used to compress the images for the backgrounds and the logos in the game.
6. Bootstrap
   - Bootstrap v4.5.3 to make the game responsive on different devices.
7. Google Fonts
   - Used "Exo" and "Play" fonts for the project.
8. Git
   - Used for version control by Gitpod's terminal commit to Git and push to GitHub.
9. GitHub
   - GitHub is where the project is stored after being pushed from Git.
10. jQuery
    - Used to simplify DOM manipulation.
11. Web Formatter
    - Used to format the code on all html, css and js files.
12. Font Awesome
    - Used to add icons to the buttons and links in the project. 

## Testing

### UX Testing
 
 By opening Car Brans Memory Game a simple easy to read entering or home page is displayed.
 The text is easy to read with good contrast to the background. 
 
 Home page content:

 1. A Title for the game that is also a link to the game page.  
 2. "How To Play" title followed by a simple instuctions list of how to play the game, and a TIP at the end explaining how to change the theme in the game page. 
 3. Play button that is big and easy to find directly when enter the page.
 4. At the bottom of the page there is a kind sentance thanking the player for playing.

Game page content:

 The game title is on top. Under the title an instructions button that links to the "how to play" list on home page.
 Under that there is a 60 seconds timer that starts when a card is clicked. Next to the timer is the restart game buttom. 
 Under that is the gameboard of 16 cards in a square shape. At the bottom are the change background buttons. 
 Tha layout of the page is simple and easy to use.

 When the game is won an alert is informing the user with the text: "CCONGATULATIONS, YOU WIN!". 
 It is the same when the time is up but the alert have the text of "Times Up, press restart to try again". 
 
 This kind of game is good to train concentration and memory. It is also very interesting when the player is someone who likes specific car brand 
 or the idea of playing a memomry game with car brands logos.  

 The game was tested also from family and friends. All of them share the UX testing above and there were opinions that the game is catchy.      

### Code Testing

All code tests are made by direct input method.

1. The HTML code is tested on [W3C Markup Validator](https://validator.w3.org/#validate_by_input) and no errors were shown.
2. The CSS code is tested on [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and no errors were shown.
3. The JavaScript code is tested on [JS Hint](https://jshint.com/) and warnings were shown but not errors in the code.

### Browsers testing

No problems were shown while testing the game. 

* Chrome
* Edge

### Device Testing

The game is tested on different devices to check if it is responsive and if it shows any problems.

Mobile devices tested:
* Samsung Galaxy S20 FE
* Huawei Mate 10 Pro

Other devices tested:
* Acer Aspire 5 A515-51G
* Acer B7 series-B277(Desktop Monitor)

Adding screenshots from mobile devices:

* [Samsung Galaxy S20 FE](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/test-images/samsung-s20fe.jpg)
* [Huawei Mate 10 Pro](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/test-images/huawei-mate10-pro.jpg)

Adding screenshots from developer tools responsive testings:

* [IPad](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/test-images/ipad-test.PNG)
* [Motorola G4](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/test-images/moto-g4.PNG)
* [IPhone](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/test-images/iphone-test.PNG)
* [Surface Duo](https://raw.githubusercontent.com/dimitar-4/ms2-memory-game/master/assets/test-images/surface-duo.PNG)

### Links Testing

All inner links and buttons are tested. No problems were shown. 


## Deployment

Deploying the Car Brands Memory Game website to GitHub Pages from its GitHub repository, was in the following order:

1. Log into GitHub.
2. From the list of repositories on the screen, select ms2-memory-game.
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. When Master Branch is selected press the Save button on the right and the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.
8. Run the link in the browser to open the website.

## Credits

### Content

* All the text in the content of the Car Brands Memory Game is written by the developer.
* These video tutorials [here](https://www.youtube.com/watch?v=bbb9dZotsOc&ab_channel=WebDevJunkie),
 and [here](https://www.youtube.com/watch?v=tjyDOHzKN0w&t=8s&ab_channel=CodewithAniaKub%C3%B3w%23JavaScriptGames) helped me a lot and had a big inpact on my project. 
* CSS code for the 3D shadow effect when hovering over the game cards is from [here](https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/). 
* The source for the countDown function in the script.js file is from [this](https://stackoverflow.com/questions/35299413/1-min-countdown-javascript) stack overflow page. 

### Media

* The background images are downloaded from [Wallpapercave](https://wallpapercave.com/) and [Freepik](https://www.freepik.com/).
* The car manufactuters logo images are downloaded from [Pinterest](https://www.pinterest.com/).
* The suzuki-logo image is downloaded from [Kindpng](https://www.kindpng.com/).
* The daihatsu-logo image is downloaded from [Breakerlink](https://www.breakerlink.com/).
* The card-back image is downloaded from [here](https://365psd.com/).
* The responsive image on different devices is made [here](http://ami.responsivedesign.is/).

### Acknowledgements

* The inspiration for this project came from my best friend's son who loves to guess car brands logos so I started this project with him in mind.
* Akshat Garg (my mentor) - THANK YOU for all advices, guidance and feedback getting me through the hole process.
* All platforms and libraries that helped me in fixing all kinds of small issues: 
   * Slack
   * Stack Overflow
   * Youtube
   * W3Schools 