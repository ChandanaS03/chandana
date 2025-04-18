
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AutoVision",
    description: "AI-powered system that can detect car damage and estimate repair costs.",
    image: "https://raw.githubusercontent.com/ChandanaS03/personal/refs/heads/main/autovision.png",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/ChandanaS03/AutoVision",
    liveUrl: "https://huggingface.co/spaces/ChandanaShastri/AutoVision",
    featured: true
  },
  {
    id: 2,
    title: "Gizzz101",
    description: "An AI Summarizer built on Replit.",
    image: "https://raw.githubusercontent.com/ChandanaS03/personal/refs/heads/main/bg.jpg",
    technologies: ["JavaScript", "React", "AI API", "Replit"],
    githubUrl: "https://github.com/ChandanaS03/Gizzz101.git",
    liveUrl: "https://www.linkedin.com/posts/activity-7122321184368594945-2rVt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADK9cGQBBQ2ytaQ6riFqnJbrcOA1OnfGoc0",
    featured: true
  },
  {
    id: 3,
    title: "AWS Cloud Webapp",
    description: "A mini cloud project deployed on AWS S3.",
    image: "https://raw.githubusercontent.com/ChandanaS03/personal/refs/heads/main/aws.png",
    technologies: ["AWS", "S3", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/ChandanaS03/aws-webapp",
    liveUrl: "https://www.linkedin.com/posts/chandanashastri_miniabrproject-s3-iam-activity-7192055727035748352-mi7b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADK9cGQBBQ2ytaQ6riFqnJbrcOA1OnfGoc0",
    featured: true
  },
  {
    id: 4,
    title: "DeepFake Text Detection",
    description: "Detects Fake News using DL",
    image: "https://private-user-images.githubusercontent.com/101421793/428718459-c8d045d7-c723-4356-9e0f-da5c00cf9ad4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM0NDIxNTUsIm5iZiI6MTc0MzQ0MTg1NSwicGF0aCI6Ii8xMDE0MjE3OTMvNDI4NzE4NDU5LWM4ZDA0NWQ3LWM3MjMtNDM1Ni05ZTBmLWRhNWMwMGNmOWFkNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMzMVQxNzI0MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hN2Y0NzY4NTIzZTQzYjVmYjdlZmE1OTI2NTU0NDVhMzRhNmU0Njc3ZmM0YmY1NmY0NDY2YWM3N2VmYjg1MDc2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XSsvAnC-Hg2Mx2oxE0PLta25eICgeGP0h_SUC0WDILo",
    technologies: ["Python", "Deep Learning", "NLP", "TensorFlow"],
    githubUrl: "https://github.com/ChandanaS03/ML-e2e.git",
    featured: false
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">
        <span className="text-primary font-mono">03.</span> Projects
      </h2>

      <div className="space-y-32 mb-20">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}
          >
            <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="relative group overflow-hidden rounded-md">
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>

                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className={`${index % 2 === 0 ? 'text-left' : 'lg:text-right'}`}>
                <p className="text-primary font-mono text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                
                <div className="bg-card p-6 rounded-md shadow-md mb-4">
                  <p className="text-foreground/80">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-foreground/60 font-mono text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;
