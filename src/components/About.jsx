import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Approaching complex challenges with analytical thinking and innovative solutions."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer with a strong foundation in modern web technologies 
            and a keen eye for user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With several years of experience in software development, I've worked on 
                diverse projects ranging from small business websites to large-scale enterprise 
                applications. My journey began with a curiosity about how things work, 
                which led me to pursue computer science and develop a passion for creating 
                digital solutions.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                technologies and best practices. Whether it's mastering a new framework 
                or improving development processes, I'm always looking for ways to grow 
                and deliver better results.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                reading tech blogs, or exploring new technologies that could enhance my 
                development toolkit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-0">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;