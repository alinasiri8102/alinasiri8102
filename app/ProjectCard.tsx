import { IconArrowUpRight } from "@tabler/icons-react"


const ProjectCard = (props:any) => {
  const {url, img} = props
  return (
    <div className='card flex-v'>
        <div className="overlay"></div>
        <img src={img} alt="project picture" />
        <div className="link flex-h">
            <a className="flex-h" href={`//${url}`} target="_blank"><p>{url}</p><IconArrowUpRight size={16}/></a>
        </div>
    </div>
  )
}

export default ProjectCard