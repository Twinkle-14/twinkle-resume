import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science - 2nd Year",
      school: "Jnan Vikas Mandal Mehta College",
      gpa: "Current GPA: 7.55 | Previous: 8.73",
      status: "In Progress",
      period: "2022 - 2025",
      highlight: true
    },
    {
      degree: "Higher Secondary Education (12th)",
      school: "KET's V G Vaze College",
      gpa: "57.50%",
      status: "Completed",
      period: "2021 - 2022",
      highlight: false
    },
    {
      degree: "Secondary Education (10th)",
      school: "Vidya Prabodhini English School",
      gpa: "90.20%",
      status: "Completed",
      period: "2020 - 2021",
      highlight: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education <span className="hero-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className={`portfolio-card border-border/50 ${edu.highlight ? 'ring-2 ring-primary/20' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${edu.highlight ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <p className="text-lg text-muted-foreground font-medium">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={edu.highlight ? "default" : "secondary"}
                        className={edu.highlight ? "bg-primary/20 text-primary" : ""}
                      >
                        {edu.status}
                      </Badge>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-semibold text-primary">
                      {edu.gpa}
                    </div>
                    {edu.highlight && (
                      <Badge variant="outline" className="border-accent/50 text-accent">
                        Current Student
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;