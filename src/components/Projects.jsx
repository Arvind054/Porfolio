import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MindFlow.AI",
      description: "A powerful tool for creating customizable mind maps using Google Gemini API with advanced features like React Flow integration, OAuth 2.0 authentication, and PDF export capabilities.",
      image: "photo-1460925895917-afdab827c52f",
      technologies: ["React.js", "Google Gemini API", "React Flow", "OAuth 2.0", "PDF Export"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      date: "July 2025"
    },
    {
      title: "LeetAssist Chrome Extension",
      description: "An intelligent Chrome extension for LeetCode that provides AI-driven code hints, error detection, and follow-up question generation to improve coding efficiency and learning.",
      image: "photo-1498050108023-c5249f4df085",
      technologies: ["Chrome Extension APIs", "JavaScript", "AI Integration", "DOM Manipulation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      date: "July 2025"
    },
    {
      title: "AI Traveling Agent",
      description: "Comprehensive AI travel planner built with MERN stack and Google Gemini API, featuring intelligent trip planning, real-time suggestions, and seamless user authentication.",
      image: "photo-1461749280684-dccba630e2f6",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Gemini API", "OAuth 2.0"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "June 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in various 
            technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
              project.featured ? 'lg:col-span-2' : ''
            }`}>
              <div className={`flex ${project.featured ? 'flex-col lg:flex-row' : 'flex-col'}`}>
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} overflow-hidden`}>
                  <img 
                    src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} p-6`}>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary text-xs">
                        {project.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;