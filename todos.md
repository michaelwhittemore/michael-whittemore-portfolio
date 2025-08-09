
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

    * # CSS #
        * What does `fade-up` actually do?
        * Use purgeCSS, but only once I'm happy with how it looks
        * maybe I should remove or rename `style1`
        * looks like the greater than symbol (`>`) is the child combinator selector https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator
        * looks like `.features section ` is what give 50% width?
        * Maybe just switch to the pother style for projects? - get rid of the boxes entirely, or add them myself
        * I really should add the section line breaks
        * Need to figure out why `Test` doesn't take take the whole screen? 
            - looks like the `fullscreen` class is what makes it full screen?
            - now we want to see where fullscreen gets added in hyperspace
            - Do we not want to add it for mobile?
            - Let's add it and see how it looks (also test with mobile)
        * Maybe a line to delineate thing change **HERE!** 
            - I don't like the default line styling, let's change that
            - Maybe instead of using an `<hr>` tag, I should just add a bottom border??
                - all other borders are none except for bottom
            - I like the 0.2em; height maybe?
            - Can I get it to inherit the background color?
            - This should be tied to `style1`, not `about`
        * ~~Move background image to the wrapper?~~

    * TODOs for actually building it out
        * Replace the projects with a link and an image (should probably get a screenshot). Mention techs used, goals, and something about playing with me
        * Content sections:
            1. About - 
                - Who I am? (Oakland based developer)
                - Hobbies (Board games, the gym, metal music)
                - Personal details (wife and pets)
            2. Projects
                - Just HT for the moment
            3. Experience
                - Mainly mention Vonage, maybe something about UC Berkeley EECS
                - Skills section, favorite languages (JS/TS), frameworks
                - maybe mention something about Nigel
                - Background in API and telecommunications
            4. Contact
                - Add all the links - github, linkedIn, leetCode, (maybe wellfound?)
                - Look into email address 
                - Maybe my phone number
            5. Resume
                - Just a download button 
                - Will need to update the asset (maybe mention the up-to-dateness of it?)

Should clean up some of my repos (I have several in my repos folder that I no longer need) - I mostly mean locally, but perhaps on GH as well

-------------------------------------------------------------------------

* # Vite Stuff #
* http://localhost:4173/ for build preview `npm run build` & `npm run preview`
* http://localhost:5173/ for dev
* looks like I need to change the style sheet import in import main.ts
* Note that the css doesn't load in when running dev preview, but it seems better once it's built and using the build preview

---------------------------------------------------------------------------------------------
* # Hosting Stuff#
    * Now that I have cloudflare up and running I should try actually having my site be accessible via my main domain
        * Currently waiting on transfer of domain. I need the authorization code from IONOS and then I need to go in the cloudflare dashboard https://www.ionos.com/help/domains/domain-transfers/ and https://dash.cloudflare.com/de36e622146e5daea9f12b80ad7d9941/registrar/transfer and https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/
        * Then I will need to reconfigure the subdomain DNS
        * Before I do the subdomain I should get my site up and running on the apex domain via cloudflare * https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
            - looks like I'll need to clear all my DNS settings
            - both www.michaelwhittemore.com and hansa.michaelwhittemore.com are failing to resolve? Maybe they just need some time for DNS propagation?? 


        1. Let's try getting my dist deployed to cloudflare pages first
            - Looks like maybe I need to specify the dist?? `npx wrangler deploy --assets=./dist`
        2. https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/
        4. maybe https://developers.cloudflare.com/workers/get-started/guide/
    * If this woks I will need to see about switching to cloudflare as the domain registrar, and then still using GCP for HT
    * **I can deploy via wrangler cli** `wrangler deploy` works from inside my repo. 
        * trying to do the same with the build command does not?

    * **NOTE THAT UNDERSCORE IS WRONG FOR THE DATE** 
    trying `wrangler deploy --assets=./dist --compatibility_date=2025-07-26 --name=michael-whittemore-portfolio`
        `--assets=./dist --compatibility-date=2025-07-26 --name=michael-whittemore-portfolio`

    * I guess michaelwhittemore.com is my `domain apex`
    * maybe switch to https://pages.cloudflare.com/
    * https://medium.com/@pablo.delvalle.cr/cloudflare-and-google-cloud-for-hosting-a-static-site-fd2e1a97aa9b
    * https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/

Once all of the hosting stuff is down I should deactivate IONOS and netlify