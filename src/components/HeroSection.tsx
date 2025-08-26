import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-6 pulse-glow border-primary/50 text-primary">
            🚀 Available for Opportunities
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="hero-text block mt-2">
              Twinkle Surti
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Web Developer & Problem Solver passionate about building{" "}
            <span className="text-primary font-semibold">interactive projects</span> and{" "}
            <span className="text-accent font-semibold">modern web apps</span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-muted-foreground">DSA Problems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">Mumbai</div>
              <div className="text-muted-foreground">India</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">B.Sc</div>
              <div className="text-muted-foreground">2nd Year</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="hero-glow bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Twinkle-14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-all duration-200 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/twinklesurti3014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://leetcode.com/u/Twinkle__30/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-all duration-200 hover:scale-110"
            >
              <div className="h-5 w-5 font-bold text-sm flex items-center justify-center">LC</div>
            </a>
            <a 
              href="mailto:twinklesurti3014@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-all duration-200 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Element */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;