[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=21907442)
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >    
    
# PROG 5012 - Assignment 3   
  

## Poker Website built with Vue & Advanced CSS Tools  
  

**Due as posted in Brightspace**  
    

### Instructions:   
  

- Clone this repository from GitHub as shown in class.  
- Add the Live Server extension to VS Code as shown in class.  
- You must ensure that your solution has been pushed to GitHub in order to get credit for the assignment.   
- This is to be an individual assignment (i.e. not group work).  
- The **rubric/checklist** on Brightspace **should act as your guide of what to demonstrate in the video**. The video file (or link) should be submitted to **Brightspace** before the deadline.  

### Important Note:   
  
You must **ensure that your solution has been committed & pushed to GitHub at least three times** while working on the assignment (i.e. at different stages of completion) in order to get credit for the assignment.   
  
## Overview

Using the publicly available [Deck of Cards API](https://deckofcardsapi.com/), you will create a simple **Vue application** that uses the API to provide data so that you can do the following:

 - Retrieve a Deck of shuffled cards from the API.
 - Initially pull 5 cards from the deck and display them in a web page using Vue templating.
 - Write/research a function that takes the cards and shows the highest poker hand that can be calculated based on the 5 cards.  
  
The site design will demonstrate your skills in web design and development, employing either *SASS/SCSS*, the *Bootstrap CSS Framework*, or *Tailwind CSS*, or some combination of these to style the page in a way to reflect and enhance the poker theme. 

**NOTE: Please refer to the video linked on BrightSpace called *"Pre-recorded Video: Assignment 3 Solution Overview"* for an overview on how the basic site (as well as the enhanced site with bonus requirements) should work. Not on how it should look, though, as no advanced styling was added.**
  
## General Requirements  
  
**REQ-001 Retrieve and persist a Deck of Cards from the API**  
  
Using the  [Deck of Cards API](https://deckofcardsapi.com/), use **Fetch** asynchronously to retrieve a deck of cards that can be used by the application. Be sure to store the returned data in an appropriate way in the Vue data so the deck id can be used in subsequent API calls. 
  
**REQ-002 Request Five Cards from the Deck**

Using the deck that was retrieved in REQ-001, ask the API for a hand of five cards from the deck. Store the given cards in an appropriate manner in the Vue data so it can be displayed in your template. 
  
**REQ-003 Display the Hand in a Web Page** 

Display the card images in the browser using Vue templating (i.e. Manipulate `img` tags defined on the page).
 
 **REQ-004 Write a Function that will determine the highest Poker Hand for the displayed cards**

Write a function that will determine and output the highest poker hand based on the given five cards:

 - Hand rankings can be found here: [Rules of Poker: Hand Rankings](https://www.cardplayer.com/rules-of-poker/hand-rankings) or here: [Poker Hand Rankings Cheat Sheet](https://www.unibet.com/poker/guides/poker-hand-rankings-with-cheat-sheet-1.784253).

## Architecture Requirements  
  
**REQ-005 Advanced CSS Techniques**  
  
You must choose and apply one or more of the following techniques: SASS/SCSS, the Bootstrap CSS Framework, or Tailwind CSS, to structure and style the website.  
  
## BONUS Requirements  
  
**REQ-006**  **Texas Hold-em with Routing**  
  
Allow users to navigate to a `/basic` and `/texas` route using `vue-router`. If on the `/basic` route, the game will play exactly as in the core requirements. The `/basic` route should be loaded by default and the link should be highlighted to show it is active.

If, the user clicks the link for **Texas Hold'em** then they are directed to the `/texas` route and the **Texas Hold'em** link should be highlighted to show it is active. 

The Texas Hold’em part of the app simulates a simplified poker game where each player is dealt two private cards (also called “hole cards”). As the game progresses, five community cards are revealed in stages: the **flop** (first 3 community cards), the **turn** (4th card), and the **river** (5th and final card). After each of these phases, the app uses all the available cards (2 private + community cards revealed so far) to calculate and display the **best possible 5-card poker hand**, such as a flush, straight, or full house, using a hand evaluation utility. The game resets after the river, allowing the player to start a new hand.
  
**REMINDER: Please refer to the video linked on BrightSpace called *"Pre-recorded Video: Assignment 3 Solution Overview"* for an overview on how the basic site (as well as the enhanced site with bonus requirements) should work. Not on how it should look, though, as no advanced styling was added.**

## Instructions  
  
**Late submissions will be subject to the late penalties laid out in the course outline.**  
  
## Submission Instructions  
  
### Explanation of Assignment Submission Levels  
  
#### Level 1 (70% maximum value on assignment)  
The required video is submitted with basic program requirements and following the video checklist mentioned below.  
  
#### Level 2 (85% maximum value on assignment)  
Level 1 completed (i.e. already submitted video). Basic program requirements completed. A request for a **live ~10 minute code review** is sent to the instructor via email to be scheduled for a later date, either in-person or via MS Teams. You should indicate in the email request that you are seeking a **Level 2** code review.   
  
#### Level 3 (100% maximum value on assignment)  
Level 1 completed (i.e. already submitted video). Basic program requirements completed **as well as the bonus requirement(s)**. A request for a **live ~20 minute code review** is sent to the instructor via email to be scheduled for a later date, either in-person or via MS Teams. You should indicate in the email request that you are seeking a **Level 3** code review, which implies you have also completed the bonus requirements.   
  
### Video Recording Submission:  
You will demonstrate the completion of this project via a **video screen-capture recording** of you navigating your completed Website in the **browser** (e.g. Chrome) and viewing your **code** in the text editor (e.g. VS Code) to show completion of the rubric/checklist. You will post **either your video file or a link to it** (e,g, a Microsoft Stream recording, make sure to give the instructor permissions to watch it), to the Brightspace Assignment 3 Dropbox prior to the deadline. If you are not sure of how best to capture such a video, seek advice from the instructor prior to the deadline.  
  
> Written with [StackEdit](https://stackedit.io/).  
