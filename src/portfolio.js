/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splash3"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kay Ren Fa",
  title: "Yo! I'm Ren Fa",
  subTitle: emoji(
    "Part code wrangler 🤠, part infrastructure magician 🧙‍♂️, I thrive on automating all the things 🤖! With 8 years of experience in the AWS cloud ☁️  and an ever-growing toolkit that includes Kubernetes, Docker, and CI/CD pipelines, I make sure apps run smooth and fast ⚡."
  ),
  resumeLink:
    "", //https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/doom160",
  linkedin: "https://www.linkedin.com/in/ren-fa-kay-90a61577/",
  gmail: "kay.renfa@gmail.com",
  medium: "https://medium.com/@kay.renfa",
  telegram: "https://t.me/RenFaKay",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVOPS / SRE / PLATFORM / SW ENGINNER, YOU NAME IT",
  skills: [
    emoji("⚡ Design streamline CI/CD Pipeline workflow"),
    emoji("⚡ Architect Cloud Native Application"),
    emoji("⚡ Administrate Large Scale Infrastructure")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "node-js",
      fontAwesomeClassname: "fab fa-node"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Goldsmith, University of London",
      logo: require("./assets/images/university_of_london_logo.jpeg"),
      subHeader: "BSc (Hons) Computing and Information System",
      duration: "Jan 2012 - Dec 2015",
      desc: "First Class Honours and Top Student Award (Bronze Receipient)",
      /*descBullets: [
        "First Class Honours",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      schoolName: "Ngee Ann Polytechnic",
      logo: require("./assets/images/ngee_ann_polytechnic_logo.jpeg"),
      subHeader: "Diploma in Business Information Technology",
      duration: "Jan 2007 - Dec 2010",
      desc: "GPA 3.39/4",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "CI/CD Pipeline",
      progressPercentage: "90%"
    },
    {
      Stack: "Docker / Kubernetes", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AWS / Terraform / Ansible",
      progressPercentage: "75%"
    },
    {
      Stack: "SRE / Linux / Networking",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend Programming (Golang, Java, JavaScript, Python)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SRE / DevOps / Platform Engineer",
      company: "Govtech",
      companylogo: require("./assets/images/govtechLogo.png"),
      date: "Feb 2024 – Present",
      desc: "CStack SRE and Resiliency Platform Engineer",
      descBullets: [
        "Engage different teams on embarking Observability and SRE practices",
        "Innersource IaC Elasticsearch Object as Terraform Modules"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Govtech",
      companylogo: require("./assets/images/govtechLogo.png"),
      date: "May 2021 – Feb 2024",
      desc: "DevOps Lead for a size of 3",
      descBullets: [ 
        "Revamp System architecture from On-Prem setup to Cloud Native design",
        "Migrate multiple legacy pipelines to Gitlab pipeline to match new Architecture",
        "Promote DevOps best practices across multiple development teams"
      ]
    },
    {
      role: "Senior DevOps Engineer",
      company: "DBS Bank",
      companylogo: require("./assets/images/dbsLogo.jpg"),
      date: "Jul 2018 – May 2021",
      descBullets: [ 
        "Collaborated with Devs to build SDLC2 Jenkin Declarative Pipeline for different platform",
        "Developed many type of pipeline for different platform (Openshift, Tanzu, Mobile IOS & Android, Application library), and languages (Python, Golang, Java, Swift)",
        "Standardize DBS Mobile Build process with standardize bootstrapping Mac Mini with Ansible playbook"
      ]
    },
    {
      role: "Senior Software Engineer (TA)",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.jpg"),
      date: "Jan 2016 – Jun 2018",
      desc: "Held multiple roles such as Software Engineer, SysAdmin, DevOps, DBA",
      descBullets: [
        "Work on Tech Refresh for Government System",
        "Support both onshore & offshore build, testing and operation team in code, database and architectural matters",
        "Setup PRD, STG, and Dev Environment and CI/CD Tools",
        "Define branching strategy, CI/CD pipeline, and release management",
        "Single handedly perform Production cutover migration"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [

    {
      title: "Certified Kubernetes Application Developer",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/kubernetes-ckad-color.png"),
   //   imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
        //  url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "AWS Solution Architect Associate",
      //subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/aws-saa.png"),
    //  imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
         // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Certified Jenkins Developer",
     // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/jenkins.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "doom160@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
