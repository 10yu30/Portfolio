// app/components/project.tsx
import Image from "next/image"

const projects = [
  {
    title: "プロジェクト1",
    description: "プロジェクト1の簡単な説明",
    image: "/image01.jpg?height=200&width=300",
    link: "#",
  },
  {
    title: "プロジェクト2",
    description: "プロジェクト2の簡単な説明",
    image: "/image02.jpg?height=200&width=300",
    link: "#",
  },
  {
    title: "プロジェクト3",
    description: "プロジェクト3の簡単な説明",
    image: "/image03.jpg?height=200&width=300",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="playwrite-vn-guides-regular bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#BB86FC]">プロジェクト</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-[#1E1E1E] shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-[#E0E0E0]">{project.description}</p>
                <a href={project.link} className="text-[#BB86FC] transition-colors hover:text-[#3700B3]">
                  プロジェクトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

