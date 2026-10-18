/* =====================================================================
   YOUR CONTENT: edit these lists to change skills, projects, experience
   and the about-me terminal. main.js turns them into the page.
   ===================================================================== */
const SKILLS = [
  { dir:"languages\\",  items:[["Java","java/java-original"],["JavaScript","javascript/javascript-original"],["HTML","html5/html5-original"],["CSS","css3/css3-original"],["R","r/r-original"]] },
  { dir:"frameworks\\", items:[["React","react/react-original"],["Spring Boot","spring/spring-original"]] },
  { dir:"data\\",       items:[["MySQL","mysql/mysql-original"],["Firebase","firebase/firebase-plain"],["RStudio","rstudio/rstudio-original"],["Tableau",""],["Excel",""]] },
  { dir:"tools\\",      items:[["Git","git/git-original"],["GitHub","github/github-original"],["Figma","figma/figma-original"]] },
  { dir:"methods\\",    items:[["Back-end",""],["Data visualization",""],["Agile",""],["User research",""],["Workflow optimization",""]] },
  { dir:"training\\",   items:[["Claude Code in Action · Anthropic, Sep 2026",""]] },
];

const PROJECTS = [
  { title:"RoyalClash", type:"game", label:"game", art:"royal clash", bg:"#1F1530", img:"",
    desc:"A Clash Royale look-alike I wanted to make, built in Java with the libGDX game framework and running on desktop.",
    tags:["Java","libGDX","Gradle"], links:[["code","https://github.com/SAADMOHAMMEDNUR/RoyalClash"]] },
  /* when the web build is live, add ["play","https://your-itch-or-pages-link"] to the links above */
  { title:"Stagely", type:"web", label:"team of 4", art:"stagely", bg:"#2A1F0E", img:"",
    desc:"A real-time Super Bowl voting and bingo web app for live event engagement. Users cast and track votes across artists and commercials, kept in sync across everyone watching with Firebase Realtime Database. Jan – Mar 2025.",
    tags:["React","JavaScript","HTML/CSS","Firebase"], links:[["code","https://github.com/SAADMOHAMMEDNUR/Stagely"],["live","#"]] },
  { title:"Popcorn Vegan Website", type:"client", label:"client · AVELA", art:"popcorn vegan", bg:"#0E2A26", img:"",
    desc:"A multi-page website (home, products, about, contact) built for a local business during my AVELA internship. I worked directly with the owner to turn their goals into features, improved mobile accessibility, and fixed cross-browser issues on desktop and mobile. Mar – May 2023.",
    tags:["HTML","CSS","JavaScript","UX"], links:[["code","https://github.com/NOLAWATSON/PopcornVegan"]] },
];
/* To show a screenshot, put the image in this folder and set img:"screenshot.png" */

const EXPERIENCE = [
  { role:"B.S. Informatics", org:"University of Washington", when:"Expected June 2028 · Seattle, WA",
    points:["Dean's List.","Coursework: Data Structures & Algorithms, Research Methods, Client-Side Development, Design Methods.","Affiliations: NSBE, ColorStack UW, AVELA, Google Developer Club."],
    tags:["Education"] },
  /* PLACEHOLDER: replace the text in quotes. Add or remove bullet points in "points" and labels in "tags". */
  { role:"Your Role", org:"Organization Name", when:"Mon 20XX – Present · City, ST",
    points:["What you did, starting with an action word (built, led, designed, analyzed).","A result or number if you have one, e.g. grew X by 20% or worked with 15+ people.","One more thing you're proud of in this role."],
    tags:["Skill","Skill","Skill"] },
  { role:"Esports Coach", org:"Seattle Public Library Esports Program", when:"Sep 2024 – Present · Seattle, WA",
    points:["Analyze player performance metrics and game data to find winning patterns and refine team strategy.","Manage the team with structured practice workflows, communicating with 20+ players on Discord.","Run weekly retrospectives to find friction points in team coordination, mirroring the Agile sprint process."],
    tags:["Data analysis","Agile","Leadership"] },
  { role:"Cashier & Courtesy Clerk", org:"PCC Community Markets", when:"Aug 2024 – Jul 2025 · Seattle, WA",
    points:["Handled high-volume retail operations, processing 30+ transactions an hour with 100% cash-handling accuracy.","Resolved customer and POS technical issues during peak hours.","Partnered with stocking and management teams to improve floor layout and inventory replenishment."],
    tags:["Operations","Customer service"] },
  { role:"Website Development Intern", org:"AVELA", when:"Mar 2023 – May 2023 · Seattle, WA",
    points:["Engineered a website in HTML/CSS, improving mobile accessibility and widening potential customer reach.","Worked directly with the business owner to translate goals into website features.","Debugged cross-browser issues and improved navigation for a smooth experience on desktop and mobile."],
    tags:["HTML","CSS","UX"] },
  { role:"Volunteer", org:"Bureau of Fearless Ideas", when:"Oct 2023 – Mar 2024",
    points:["Led 10+ participants in creative projects and public speaking.","Supported program logistics, scheduling and activity planning."],
    tags:["Leadership"] },
  { role:"Volunteer", org:"English Service Learning", when:"Jan 2023 – Apr 2023",
    points:["Taught English to 5–7 non-native speakers each week, designing lessons and activities.","Coordinated with volunteers to improve lesson plans and engagement."],
    tags:["Teaching"] },
  { role:"Volunteer", org:"Seattle Parks and Recreation", when:"May 2022 – Mar 2024",
    points:["Took part in park cleanup and planting projects to keep public spaces safe and accessible."],
    tags:["Community"] },
];

const TERMINAL = [
  ["cmd","type about.txt"],
  ["out","# informatics @ uw · builder · esports coach"],
  ["cmd","dir interests"],
  ["out","web  data  ux  esports"],
  ["cmd","Get-Status"],
  ["key","class of 2028 · open to internships"],
];
