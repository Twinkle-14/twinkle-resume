import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Code2, Users } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Deloitte Virtual Internship",
      description: "Successfully completed virtual internship program focusing on technology consulting and digital transformation",
      icon: <Award className="h-6 w-6" />,
      category: "Professional Experience",
      status: "Certified",
      highlight: true
    },
    {
      title: "300+ DSA Problems Solved",
      description: "Consistently solving Data Structures and Algorithms problems on LeetCode, demonstrating strong problem-solving skills",
      icon: <Code2 className="h-6 w-6" />,
      category: "Technical Achievement",
      status: "Ongoing",
      highlight: true
    },
    {
      title: "Active GitHub Contributor",
      description: "Regularly contributing to open source projects and maintaining personal repositories with clean, documented code",
      icon: <Users className="h-6 w-6" />,
      category: "Open Source",
      status: "Active",
      highlight: false
    }
  ];

  const stats = [
    { label: "LeetCode Problems", value: "300+", icon: "🧩" },
    { label: "GitHub Repos", value: "Multiple", icon: "📁" },
    { label: "Certifications", value: "1+", icon: "🏆" },
    { label: "Years Learning", value: "2+", icon: "📚" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Achievements & <span className="hero-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that reflect my dedication to continuous learning and professional growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="portfolio-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`portfolio-card border-border/50 ${achievement.highlight ? 'ring-2 ring-primary/20' : ''}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-full ${achievement.highlight ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>
                    {achievement.icon}
                  </div>
                  <Badge 
                    variant={achievement.status === 'Certified' ? 'default' : 'secondary'}
                    className={achievement.status === 'Certified' ? 'bg-primary/20 text-primary' : ''}
                  >
                    {achievement.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs border-muted-foreground/30">
                  {achievement.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-card-gradient border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="hero-text">Collaborate?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and contribute to innovative solutions. 
              Let's connect and build something amazing together!
            </p>
            <div className="flex justify-center">
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/30">
                <Trophy className="mr-2 h-4 w-4" />
                Open to Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;