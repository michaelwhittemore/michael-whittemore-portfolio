
-------------------------------------
* **Notes for my content** 
    * github, linkedIn, leetCode, resume for links
    * Should mention the stack I used for this project
    * Maybe have little icons for selected projects? like my HT favicon?
    * mention something about generalist vs full stack vs front end and my experience with API design
    * add some personal touches, i.e. my cats and wife, the gym, board games
    * Maybe copy some stuff from my resume? I want to have a more casual tone? 


    * I'd like to only have a single background and not these three different styles. Maybe a line to delineate thing change

* Todos for getting it like the original
    * trying to get it to parity with file:///Users/michaelwhittemore/Desktop/repos/html5up-hyperspace/index.html
    4. ~~Do something about always starting part way down the page.~~
        - Note this affected by the anchor tag `/#one` (which I will need to rename)
        - See what happens if I disable my JS force scroll and use anchors?
    6. Clean up unused CSS
        - Scrolly
        - Forms
        - Is there a tool for this? - looks like `PurgeCSS`
    7. Add the nice shadow effect to my main name (the one I use in the favicon and in HT)
    8. Fix all the font console errors (I don't really need many fonts here)

    * TODOs for actually building it out
        * Maybe make the crosshatch background float? So it never moves - either that or add it for each?
            - https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
            - I guess I should try both?
        * Replace the projects with a link and an image (should probably get a screenshot). Mention techs used, goals, and something about playing with me

Should clean up some of my repos (I have several in my repos folder that I no longer need)

-------------------------------------------------------------------------

* # Vite Stuff #
* http://localhost:4173/ for build preview `npm run build` & `npm run preview`
* http://localhost:5173/ for dev
* looks like I need to change the style sheet import in import main.ts
* Note that the css doesn't load in when running dev preview, but it seems better once it's built and using the build preview

---------------------------------------------------------------------------------------------
* # Hosting Stuff#
    **HERE!**  
    * Now that I have cloudflare up and running I should try actually having my site be accessible via my main domain
        * Currently waiting on transfer of domain. I need the authorization code from IONOS and then I need to go in the cloudflare dashboard https://www.ionos.com/help/domains/domain-transfers/ and https://dash.cloudflare.com/de36e622146e5daea9f12b80ad7d9941/registrar/transfer and https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/
        * Then I will need to reconfigure the subdomain DNS




        1. Let's try getting my dist deployed to cloudflare pages first
            - Looks like maybe I need to specify the dist?? `npx wrangler deploy --assets=./dist`
        2. https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/
        4. maybe https://developers.cloudflare.com/workers/get-started/guide/
    * If this woks I will need to see about switching to cloudflare as the domain registar, and then still using GCP for HT
    * **I can deploy via wrangler cli** `wrangler deploy` works from inside my repo. 
        * trying to do the same with the build command does not?

    * **NOTE THAT UNDERSCORE IS WRONG FOR THE DATE** 
    trying `wrangler deploy --assets=./dist --compatibility_date=2025-07-26 --name=michael-whittemore-portfolio`
        `--assets=./dist --compatibility-date=2025-07-26 --name=michael-whittemore-portfolio`

    * I guess michaelwhittemore.com is my `domain apex`
    * maybe switch to https://pages.cloudflare.com/
    * https://medium.com/@pablo.delvalle.cr/cloudflare-and-google-cloud-for-hosting-a-static-site-fd2e1a97aa9b
    * https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/

