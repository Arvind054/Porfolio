import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import MindFlowPicture from '../assets/MindFlowPicture.png';
import LeetAssistPicture from '../assets/LeetAssistPicture.png';
import AiTravelImage from '../assets/AiTravelImage.png';

const Projects = () => {
  const projects = [
    {
      title: "MindFlow.AI",
      description: "A powerful tool for creating customizable mind maps using Google Gemini API with advanced features like React Flow integration, OAuth 2.0 authentication, and PDF export capabilities.",
      image: MindFlowPicture,
      technologies: ["React.js", "Google Gemini API", "React Flow", "OAuth 2.0", "PDF Export"],
      liveUrl: "https://mind-flowai.vercel.app/",
      githubUrl: "https://github.com/Arvind054/MindFlow",
      featured: true,
      date: "July 2025"
    },
    {
      title: "LeetAssist Chrome Extension",
      description: "An intelligent Chrome extension for LeetCode that provides AI-driven code hints, error detection, and follow-up question generation to improve coding efficiency and learning.",
      image: LeetAssistPicture,
      technologies: ["Chrome Extension APIs", "JavaScript", "AI Integration", "DOM Manipulation"],
      liveUrl: "https://github.com/Arvind054/LeetAssist",
      githubUrl: "https://github.com/Arvind054/LeetAssist",
      featured: true,
      date: "July 2025"
    },
    {
      title: "AI Traveling Agent",
      description: "Comprehensive AI travel planner built with MERN stack and Google Gemini API, featuring intelligent trip planning, real-time suggestions, and seamless user authentication.",
      image: AiTravelImage,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Gemini API", "OAuth 2.0"],
      liveUrl: "https://ai-travel-agent-ljkh.vercel.app/",
      githubUrl: "https://github.com/Arvind054/AI_Travel_Agent",
      featured: true,
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

        {/* Horizontal Scroll Row */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory justify-evenly flex-wrap">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="min-w-[350px] max-w-[350px] flex-shrink-0 snap-center shadow-md hover:shadow-xl transition-all duration-300 "
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-primary border-primary text-xs">
                      {project.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0 mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 flex rounded-md" onClick={() => window.open(project.liveUrl, '_blank')}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                    <Button variant="outline" size="sm" className="p-1 flex-1 flex rounded-md border border-white" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://github.com/Arvind054", '_blank')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
