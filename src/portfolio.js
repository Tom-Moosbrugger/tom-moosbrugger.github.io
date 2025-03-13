const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tom-moosbrugger.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tom Moosbrugger',
  role: 'Full-Stack Software Engineer',
  description:
    `I'm passionate about crafting elegant and efficient applications and websites. Whether I'm designing high-performance APIs with Flask or Express or developing intuitive React interfaces, I prioritize scalable code and exceptional user experiences.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/tom-moosbrugger/',
    github: 'https://github.com/Tom-Moosbrugger',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'NextHire',
    description:
      'NextHire is a full-stack application designed to streamline your job search. With an intuitive, user-friendly layout, NextHire helps you track your progress across multiple job applications, while also providing some tools to speed up the application process.',
    stack: ['JavaScript', 'React', 'Redux', 'Python', 'Flask', 'SQLAlchemy', 'AWS S3'],
    sourceCode: 'https://github.com/Tom-Moosbrugger/NextHire',
    livePreview: 'https://nexthire-m0no.onrender.com/',
  },
  {
    name: 'Museic',
    description:
      'Museic is a music service that allows users to upload their own songs, put their songs into albums, and create playlists. It was group project made in collaboration with three other developers.',
    stack: ['JavaScript', 'React', 'Redux', 'Python', 'Flask', 'SQLAlchemy'],
    sourceCode: 'https://github.com/miaohua897/Mod6_project',
    livePreview: 'https://mod6-project.onrender.com/',
  },
  {
    name: 'BnBConnect',
    description:
      'BnBConnect is a full-stack application that allows users to create and review fictional vacation homes. The site allows users to create accounts, and then post and review vacation listings.',
    stack: ['JavaScript', 'React', 'Redux', 'Express', 'Sequelize'],
    sourceCode: 'https://github.com/Tom-Moosbrugger/BnB-Connect',
    livePreview: 'https://bnb-connect.onrender.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Python',
  'HTML',
  'CSS',
  'React',
  'Redux',
  'React Router',
  'Flask',
  'Express',
  'SQLAlchemy',
  'Alembic',
  'Sequelize',
  'PostgreSQL',
  'SQLite',
  'AWS S3',
  'Docker',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tamoosbrugger@gmail.com',
}

export { header, about, projects, skills, contact }
