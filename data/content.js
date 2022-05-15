// Content for Projects component
export const projects = [
  {
    title: "Website - Web App",
    subtitle: "Marsian Online Group AB",
    gif: "/mog.gif",
    screen: "/mog-screen.png",
    projectTech: ["Nextjs", "Tailwindcss", "Mongodb", "JWT", "Adobe XD"],
    text: [
      "This is a project I have done as a consultant for Marsian Online Group AB. I was responsible for creating the design system, to chose the tech stack according to business needs, and develop the final product.",
      "On top of building the website, I developed a business dashboard for tracking the company's revenue by pulling data from 6 different REST APIs, such as affiliate networks and ad providers.",
    ],
    liveLink: "https://marsianog.com",
    repoLink: "https://github.com/rfn900/mog",
  },
  {
    title: "Landing Page",
    subtitle: "Design and Development",
    gif: "/fitnessfia.gif",
    screen: "/fitnessfia-screen.png",
    projectTech: [
      "Wordpress",
      "PHP",
      "Javascript",
      "Tailwindcss",
      "Responsive Design",
    ],
    text: [
      "In this project I designed and developed a landing page for the blog fitnessfia.com. This a full production project that serves about 60k users every month.",
      "I designed a landing page and developed a custom child-theme for Wordpress. The styling was done with Tailwindcss and I use javascript to dinamically fetch data from the Wordpress API.",
    ],
    liveLink: "https://fitnessfia.com/",
    repoLink: "https://github.com/rfn900/fitnessfia_homepage",
  },
  {
    title: "Live Chat web App",
    subtitle: "Slack Clone",
    gif: "/chat.gif",
    screen: "/chat-screen.png",
    projectTech: [
      "Nodejs",
      "Express",
      "Ejs",
      "SASS",
      "Mongodb",
      "Web Sockets",
      "Amazon AWS S3",
    ],
    text: [
      "This is a Nodejs/Express live chat app inspired on slack. The message exchange is done using web sockets.",
      "The app has full slack style emoji support and image upload functionality. The images are stored in an S3 Bucket on AWS. The app is deployed on Heroku.",
    ],
    liveLink: "https://rod-slack-clone.herokuapp.com/",
    repoLink: "https://github.com/rfn900/slack-clone",
  },
  {
    title: "Productivity web app",
    subtitle: "Google keep clone",
    gif: "/todos.gif",
    screen: "/todos-screen.png",
    projectTech: [
      "React",
      "Tailwindcss",
      "Nodejs",
      "Express",
      "Mongodb",
      "Google OAuth2",
    ],
    text: [
      "This is a fullstack CRUD application inspired in the Google Keep web app. In it you can write note cards using markdown language and even create fully functional todo lists which are all displayed in a masonry layout.",
      "The app supports Google OAuth2 authentication and it is deployed with Heroku (Backend) and Vercel (Frontend)",
    ],
    liveLink: "https://todos.rods.dev",
    repoLink: "https://github.com/rfn900/todos",
  },
];

// Content for Skills component
export const skills = [
  ["Javascript/ES6+", "Typescript", "PHP", "Python"],
  ["HTML5", "CSS3", "SASS", "Tailwindcss"],
  ["React", "Nextjs", "React Native"],
  ["REST", "GraphQL", "MongoDB", "MySQL"],
  ["Nodejs", "Flask", "Django"],
  ["Git", "Docker", "Amazon AWS"],
];

// Content for theming and micro interactions
export const oneDarkColors = [
  "bg-[#61afef]",
  "bg-[#c678dd]",
  "bg-[#98c379]",
  "bg-[#e5c07b]",
];

export const gruvBoxColors = [
  "bg-[#fe8019]",
  "bg-[#b8bb26]",
  "bg-[#fb4934]",
  "bg-[#fabd2f]",
];
