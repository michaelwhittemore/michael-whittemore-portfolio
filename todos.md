* Should add link to this project and also github, linkedIn, leetCode, resume?, about me mention what tools were built
* Need to look vite.js
* Use netlify or firebase for hosting
* probably should grab a template of some kind
    * Gonna use the hyperspace one I think
* Should I mention I used a template? - shouldn't worry about this right now. Need to remind myself that no one is gonna be going through my code with a fine tooth comb
* https://html5up.net/ has a lot of nice ones
* let's give myself a favicon? Maybe my initials?
* Note that the HTML5 doesn't even have any js/ts
* https://answers.netlify.com/t/serving-static-files-without-framework/82602 - for serving my resume
* Maybe have little icons for selected projects? like my HT favicon?


1. Create a basic skeleton and make sure it's being served 
2. Maybe even draw out a sketch on paper
    * Sidecar: (will want to reorder these I think)
         - contact info/links
         - resume
         - about - This where I will do the most writing
         - selected projects?

* Todos for getting it like the original
    * trying to get it to parity with file:///Users/michaelwhittemore/Desktop/repos/html5up-hyperspace/index.html
    * ~~None of the animations work~~
    * put in my favicon at `<link rel="icon" type="image/svg+xml" href="/vite.svg" />` (I have a temporary one to replace the default vite one)
    1. ~~Let's add back in `is-preload` along with the timer that removes it~~
    2. Why is the sidecar selector highlighted? 
        - looks like I need to add the `scrolly` class* **HERE!** 
        - actually I'm pretty sure that's a result of using `active` (I tested this). Is it worth it to add the logic to know where we are and change active state appropriately? 
    3. Is there an issue with it loading in? Maybe it's due to the css being tied to the import?
        - Doesn't look as bad with the preview once it's built (as opposed to using run DEV)
    4. Do something about always starting part way down the page.
    5. Maybe get rid of the Scrollex stuff?
    5. Re-add the background image (the crosshatching)
    6. Clean up unsused CSS
        - Scrolly
        - Forms
    7. Add the nice shadow effect to my main name (the one I use in the favicon and in HT)


3. For the template:
    * I think I can get rid of the Sass stuff and all the no script. Also I will only need the index
    * Would like to test the dist if I run build
4. Try deploying on netlify - ideally set up basic CI/CD pipeline

* https://docs.netlify.com/manage/domains/configure-domains/bring-a-domain-to-netlify/

Maybe copy some stuff from my resume? I want to have a more casual tone? 

http://localhost:4173/ for build preview `npm run build` & `npm run preview`
http://localhost:5173/ for dev
looks like I need to change the style sheet import in import main.ts