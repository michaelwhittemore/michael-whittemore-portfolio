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
* mention something about generalist vs full stack vs front end


1. Create a basic skeleton and make sure it's being served 
2. Maybe even draw out a sketch on paper
    * Sidecar: (will want to reorder these I think)
        - about - This where I will do the most writing - should I rename welcome
        - contact info/links
        - resume
        - experience? maybe part of about
        - selected projects?

* Todos for getting it like the original
    * trying to get it to parity with file:///Users/michaelwhittemore/Desktop/repos/html5up-hyperspace/index.html

    1. ~~Let's add back in `is-preload` along with the timer that removes it~~
    2. Why is the sidecar selector highlighted? 
        - looks like I need to add the `scrolly` class* **HERE!** 
        - actually I'm pretty sure that's a result of using `active` (I tested this). Is it worth it to add the logic to know where we are and change active state appropriately? 
    3. ~~Is there an issue with it loading in? Maybe it's due to the css being tied to the import?~~
        - Doesn't look as bad with the preview once it's built (as opposed to using run DEV)
    4. ~~Do something about always starting part way down the page.~~
        - Note this affected by `/#one` (which I will need to rename)
        - See what happens if I disable my JS force scroll and use anchors?
    5. Maybe get rid of the Scrolly stuff?
        * looks like it may be added programmatically 
    5. ~~Re-add the background image (the crosshatching)~~
        - maybe we want to add it every section and rename it?
    6. Clean up unusused CSS
        - Scrolly
        - Forms
    7. Add the nice shadow effect to my main name (the one I use in the favicon and in HT)
    8. Fix all the font console errors (I don't really need many fonts here)


3. For the template:
    * I think I can get rid of the Sass stuff and all the no script. Also I will only need the index
    * Would like to test the dist if I run build
4. Try deploying on netlify - ideally set up basic CI/CD pipeline

* https://docs.netlify.com/manage/domains/configure-domains/bring-a-domain-to-netlify/

Maybe copy some stuff from my resume? I want to have a more casual tone? 

http://localhost:4173/ for build preview `npm run build` & `npm run preview`
http://localhost:5173/ for dev
looks like I need to change the style sheet import in import main.ts
---------------------------------------------------------------------------------------------
* # Hosting Stuff#
    * Was trying netlify - maybe I will switch to cloudflare pages
        1. Let's try getting my dist deployed to cloudflare pages first
            - Looks like maybe I need to specify the dist?? `npx wrangler deploy --assets=./dist`
        2. https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/
        3. Should I be using workers or pages? https://developers.cloudflare.com/workers/static-assets/
        migration-guides/migrate-from-pages/#compatibility-matrix
        4. https://developers.cloudflare.com/workers-ai/get-started/workers-wrangler/. - maybe this isn't right as it uses workers-ai? - maybe https://developers.cloudflare.com/workers/get-started/guide/
    * If this woks I will need to see about switching to cloudflare as the domain registar, and then still suing GCP for HT
    * I wonder if I should try using an alias for the site??
    * I guess michaelwhittemore.com is my `domain apex`
    * maybe switch to https://pages.cloudflare.com/
    * https://medium.com/@pablo.delvalle.cr/cloudflare-and-google-cloud-for-hosting-a-static-site-fd2e1a97aa9b
    * https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/

