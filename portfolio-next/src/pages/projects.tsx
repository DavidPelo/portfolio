import ContentSection from '../components/helper/contentSection'
import ProjectCard from '../components/helper/projectCard'

// interface IProject {
//   name: string
//   imageUrl: string
//   liveUrl: string
//   codeUrl: string
// }

export default function Projects() {
  // const projects: IProject[] = [
  //   {
  //     name: 'project 1',
  //     imageUrl: '',
  //     liveUrl: '',
  //     codeUrl: ''
  //   },
  //   {
  //     name: 'project 2',
  //     imageUrl: '',
  //     liveUrl: '',
  //     codeUrl: ''
  //   }
  // ]

  return (
    <ContentSection title="Projects">
      <div className="grid grid-cols-2 gap-8">
        <ProjectCard
        // key={1}
        // name={projects[0]?.name}
        // imageUrl={projects[0].imageUrl}
        // imageAlt={projects[0].imageUrl}
        // liveUrl={projects[0].liveUrl}
        // codeUrl={projects[0].codeUrl}
        />
        <ProjectCard
        // key={2}
        // name={projects[1].name}
        // imageUrl={projects[1].imageUrl}
        // imageAlt={projects[1].imageUrl}
        // liveUrl={projects[1].liveUrl}
        // codeUrl={projects[1].codeUrl}
        />
      </div>
      {/* {projects.map((project): React.ReactNode[] => {
        return (
          <ProjectCard
            key={Math.random()}
            name={project.name}
            imageUrl={project.imageUrl}
            imageAlt={project.imageUrl}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        )
      })} */}
    </ContentSection>
  )
}
