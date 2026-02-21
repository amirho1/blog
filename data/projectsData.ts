interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'محیط اجرای جاوااسکریپت به صورت بصری',
    description: `یه پروژه سرگرم کننده که که برای یادگیری پشت صحنه جاوااسکریپت انجام دادم. 
    `,
    imgSrc: '/static/images/runtime-visualization-screen-shoot.webp',
    href: 'https://github.com/amirho1/JavaScript-Runtime-Environment.git',
  },
]

export default projectsData
