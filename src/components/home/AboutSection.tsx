//import { getImageUrl } from "../../../utils";

const skills = [
  // "Python", "TensorFlow", "Flask", "Machine Learning", 
  // "JavaScript", "React", "Tailwind CSS", "AWS",
  // "Git & GitHub", "MySQL", "PHP", "R",
  // "Deep Learning", "Computer Vision", "NLP", "Problem Solving"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-primary font-mono">02.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="prose prose-invert max-w-none">
             
              <p className="text-foreground/80 mb-4">
                A keen interest in Machine Learning, Deep Learning, Computer Vision, and Python development.
                I'm building a robust skill set. Beyond coding, I love singing, yoga, and occasionally engage in
                photography and painting.
              </p>
              
              <p className="text-foreground/80 mb-4">
                I'm driven by the intersection of technology and creativity, always seeking to create
                meaningful solutions that make a positive impact. My approach combines technical knowledge
                with mindful thinking to develop innovative applications.
              </p>
              
              <p className="text-foreground/80">
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6'>
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/70">
                  <span className="text-primary mt-1">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-md bg-primary/10 p-1">
            <img 
  src="https://raw.githubusercontent.com/ChandanaS03/personal/refs/heads/main/chandana_1.png"
  alt="Chandana Shastri" 
  //className="rounded-md grayscale hover:grayscale-0 transition-all duration-300 w-full max-w-xs mx-auto"
/>

              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300 rounded-md"></div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
        
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-semibold mb-4">Backend</h4>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Flask</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Django</span>
              </div>
              <div className="flex items-center gap-2">
                <span>TensorFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Sci-kit learn</span>
              </div>
              <div className="flex items-center gap-2">
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span>R</span>
              </div>
              <div className="flex items-center gap-2">
                <span>PHP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Frontend</h4>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-2">
                <span>CSS</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Tools</h4>
            <div className="flex flex-wrap gap-6">
              <span>VS Code</span>
              <span>GitHub</span>
              <span>NPM</span>
              <span>Figma</span>
              <span>Firebase</span>
              <span>AWS</span>
              <span>Docker</span>
              <span>Jupyter</span>
              <span>Git</span>
              <span>Postman</span>
              <span>Google App Script</span>
              <span>Google Cloud</span>
              <span>Netlify</span>
              <span>Replit</span>
              <span>Colab</span>
              <span>Hugging Face</span>
              <span>Kaggle</span>
              <span>Adobe Lightroom</span>
              <span>Power BI</span>
              <span>Linux</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h3 className="text-2xl font-bold mb-6">Hobbies</h3>
        <p className="mb-6 text-foreground/80">Beyond tech, I love exploring my creative and mindful side.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <span>🎤 Singing & Music</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🧘‍♀️ Yoga & Mindfulness</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📚 Reading tech & self-help blogs/books</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎨 Occasionally Photography, painting & clay art</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌿 Connecting with nature and Trekking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
