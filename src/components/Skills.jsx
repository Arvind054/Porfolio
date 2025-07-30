import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["JavaScript", "Python", "C/C++", "Data Structures & Algorithms"],
      icon: "💻"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "JWT", "RESTful APIs", "Socket.IO"],
      icon: "⚙️"
    },
    {
      title: "AI/ML & Tools",
      skills: ["Google Gemini API", "LangChain", "Prompt Engineering", "OAuth 2.0", "Git", "Chrome Extensions"],
      icon: "🤖"
    }
  ];

  const experience = [
    { label: "LeetCode Problems", value: "800+" },
    { label: "LeetCode Rating", value: "1935" },
    { label: "Global Rank", value: "Top 3%" },
    { label: "Hackathons", value: "10+" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies 
            to bring your ideas to life.
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {experience.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/10">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;