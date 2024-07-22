/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gisore Brian",
  title: "Hi all, I'm Gisore",
  subTitle: emoji(
    "Highly skilled software engineer with a passion for creating innovative solutions. Experienced in various programming\n" +
      "languages and frameworks. Proven ability to work in fast-paced environments and deliver high-quality projects on time.\n" +
      "Seeking a challenging role where I can leverage my technical expertise to contribute to the success of a dynamic team."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FClBfQs8A-7EoNvbYLKEJaHT96if41CH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GisoreB",
  linkedin: "https://www.linkedin.com/in/gisore-brian-34216857/",
  gmail: "kazungudev@gmail.com",
  gitlab: "https://gitlab.com/KazunguDev",
  facebook: "https://www.facebook.com/kazungu.brian.5",
  medium: "https://medium.com/@briangisore",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Implement scalable APIs and databases to handle large volumes of data"
    ),
    emoji("⚡ implement automated testing and CI/CD pipelines"),
    emoji("⚡ Implement and maintained network security protocols")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Strathmore University",
      logo: require("./assets/images/strathmore.png"),
      subHeader: "Bachelor of  Business Information Technology",
      desc: "It offers a combination of computer science, business management and human development courses.",
      descBullets: [
        "System analyst and designer knowledge",
        "System developer knowledge",
        "Database developer and administrator knowledge",
        "Data analyst knowledge",
        "Project manager Skills"
      ]
    },
    {
      schoolName: "Strathmore University[Cisco Academy]",
      logo: require("./assets/images/strathmore.png"),
      subHeader: "Certification in routing and switching",
      descBullets: ["Network administrator knowledge"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Networking",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile App Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full-Stack Developer",
      company: "KazunguDev",
      companylogo: require("./assets/images/kazungudev.png"),
      date: "June 2015 – Present",
      desc: "I have worked on projects with clients from across the world, and have built a reputation for my attention to detail, ability to meet deadlines, and client-oriented approach.",
      descBullets: [
        "Spearheaded the development of a feature-rich analytics platform, integrating HTML5, CSS3, and React, boosting\n" +
          "customer insights by 45%.",
        "Orchestrated a seamless migration of key applications to AWS, resulting in a 25% reduction in hosting costs and a\n" +
          "15% improvement in application availability.",
        "Championed CI/CD processes using Jenkins and Docker, reducing deployment times by 50% and facilitating\n" +
          "consistent, daily production updates.",
        "Directed and supported a team of developers, as a lead developer, using modern frameworks, such as\n" +
          "Flutter,Nextjs, Angular and Node.js, promoting code quality and maintainability."
      ]
    },
    {
      role: "Senior Mobile Developer(Flutter)",
      company: "Swapspace Real Estate Firm",
      companylogo: require("./assets/images/swapspace.jpg"),
      date: "July 2023 – March 2024",
      desc: "I specialized in creating and improving mobile applications. I interacted with clients to understand their needs and develop applications accordingly, which involves coding, testing, and debugging.",
      descBullets: [
        "Developed and implemented scalable real estate mobile app using Java, Kotlin, Swift, MongoDB, REST APIs and Flutter to improve system efficiency and performance.",
        "Collaborated with cross-functional teams to design and deploy mobile applications, resulting in a 20% increase in user engagement.",
        "Led the integration of new technologies, such as cloud computing and machine learning, to enhance product offerings and drive innovation.",
        "Developed an e-commerce web application using React and TypeScript and mobile app using flutter that handled over 10,000 transactions monthly"
      ]
    },
    {
      role: "IOS Developer",
      company: "Sanlaam Investments EA",
      companylogo: require("./assets/images/sanlam.jpg"),
      date: "March 2023 – June 2023",
      desc: "I was responsible for developing applications for mobile devices powered by Apple's iOS operating system. Ideally, I became proficient with the following two programming languages for this platform: Objective-C or Swift.",
      descBullets: [
        "Developed and maintained IOS application, including implementing new features, fixing bugs, and optimizing\n" +
          "performance.",
        "Collaborated with cross-functional teams to design, develop, and deploy iOS app to the app store.",
        "Spearheaded the integration of third-party APIs and services into iOS app, enhancing their capabilities and\n" +
          "expanding their reach to a broader audience.",
        "Worked with Amazon AWS services, SQL and NoSQL databases, and CI/CD tools like Jenkins and Github Actions."
      ]
    },
    {
      role: "Network Engineer Intern",
      company: "Sure Cred limited",
      companylogo: require("./assets/images/surecred.jpeg"),
      date: "March 2023 – June 2023",
      desc: "I was primarily responsible for handle installing, configuring, and supporting firewalls to ensure network security. I was also responsible for procuring equipment like routers or switches, which provides the best possible efficiency in an office's IT infrastructure.",
      descBullets: [
        "Implemented and maintained network security protocols to ensure data protection and prevent unauthorized access.",
        "Managed and troubleshooted network infrastructure, including routers, switches, and firewalls, to optimize\n" +
          "performance and minimize downtime.",
        "Conducted regular network audits and assessment to identify vulnerabilities and recommend solutions for improvement.",
        "Upgraded 20+ Cisco ISR G2 VGW/CUBE/SRST routers"
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
      image: require("./assets/images/docapp.png"),
      projectName: "doctor_appointment_app",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/GisoreB/doctor_appointment_app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/store.png"),
      projectName: "borcelle_store_app",
      projectDesc: "borcelle store app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/GisoreB/borcelle_store_app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Engineering Foundations",
      subtitle:
        "Data science can be generally defined as the process of making data useful, and data engineering is a key part of how and why. If you think of data science like a race car, the data engineers are the pit crew. They’re not driving the car, but they make the car much easier to drive. Data engineers make sure the data flow is running smoothly, monitor systems, anticipate problems, and repair the data pipeline whenever problems arise. They extract and gather data from multiple sources and load it into a single, easy-to-query database. In short, data engineers make data scientists’ lives easier.\n" +
        "\n" +
        "In this course, Harshit Tyagi explains the fundamentals of data engineering. He covers key topics like data wrangling, database schema, and developing ETL pipelines. He also details several data engineering tools like Hive, Hadoop, Spark, and Airflow. By the end of this course, it should be abundantly clear why the data engineer is one of the most valuable people in a data-driven organization.",
      image:
        "https://media.licdn.com/dms/image/C4E0DAQGFiPES2_z90A/learning-public-crop_675_1200/0/1613158188348?e=1721826000&v=beta&t=BYuH0xCawqvQx3pKgsZoytBLkmg2KjHdb1yApBDW-YY",
      footerLink: [
        {name: "Certification", url: ""},
        {name: "Data Engineering Foundations", url: ""}
      ]
    },
    {
      title: "Azure: Understanding the Big Picture",
      subtitle:
        "Understanding the scope of the cloud is an overwhelming task, even for a seasoned developer. This course looks at the big picture of Microsoft Azure. This perspective can help you understand the many Azure offerings and assess which best fit your organization's cloud strategy. Those just entering the cloud will find the course to be a valuable resource they can return to again and again. Instructor Walt Ritscher kicks off the course by comparing the four cornerstones of the cloud: software as a service, infrastructure as a service, platform as a service, and service as a service. He then covers Azure subscription options and costs and dives deeper into specific Azure services, including web hosting, cloud storage, Azure security, infrastructure, DevOps tools, backup, hybrid cloud systems, and media encoding, as well as event and notification services. Review the services that interest you or zoom out for a more complete picture of this powerful cloud-computing platform.",
      image:
        "https://media.licdn.com/dms/image/C560DAQHl0olj_gGG5w/learning-public-crop_675_1200/0/1655317039464?e=1721826000&v=beta&t=gpUMxpLKDfeNUmLOma0HtL47VB03gmWnJ671dlN03ao",
      footerLink: [
        {name: "Certification", url: ""},
        {name: "Azure: Understanding the Big Picture", url: ""}
      ]
    },

    {
      title:
        "Cisco Certified Support Technician (CCST) Networking Cert Prep: 2 IP Addressing",
      subtitle:
        "The Cisco Certified Support Technician (CCST) Networking certification validates an individual’s skills and knowledge of entry-level networking concepts and topics. The certification demonstrates foundational knowledge and skills needed to show how networks operate, including the devices, media, and protocols that enable network communications. In this second course of a four-part certification prep series, instructor Kevin Wallace covers topics related to the IP Addressing questions of the exam. Kevin explains IP version 4 addressing, how to work with binary numbering, and how to subnet IP version 4 networks into VLANs or broadcast domains.",
      image:
        "https://media.licdn.com/dms/image/D560DAQF6h4EINyMqDw/learning-public-crop_675_1200/0/1691095096722?e=1721829600&v=beta&t=4w_uUmFGcVgDV-GhWdCLnoX5aXPsJ7Oz7wdM7zz6DEY",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Cisco Certified Support Technician (CCST) Networking Cert Prep: 2 IP Addressing",
          url: ""
        }
      ]
    }
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Pre Google IO Series : Android",
      subtitle: "GDG Nairobi",
      slides_url: "",
      event_url: "",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+254-716-965567",
  email_address: "kazungudev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Kazungu_Dev", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
