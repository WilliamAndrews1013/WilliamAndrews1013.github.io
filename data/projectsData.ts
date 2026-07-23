interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '2D Chess Deck Builder',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/cardsImage.png',
    href: '/blog/devlog01',
  },
  {
    title: "Eternal Night",
    description: `In Eternal Night, you fight for survival against an invisible and unbeatable enemy that approaches you. You try to survive 
    as long as you can by managing your stats and avoiding being engulfed by the Darkness.`,
    imgSrc: "/static/images/eternalNight.png",
    href: "https://fcozzuto.itch.io/eternal-night"
    },
  {
    title: "Portfolio Website",
    description: `This website is my personal one where I will be putting out some devlogs for the game I am working on. 
    I will also be showcasing some of the work I've done in the past as well. This website is very much a work in-progress and I will be updating it 
    over time. I am using a template that I got from "timlrx/tailwind-nextjs-starter-blog" on github. I plan to build off of this template. 
    The template uses Next.js and Tailwind CSS`,
    imgSrc: "/static/images/website.png"
    },
]

export default projectsData
