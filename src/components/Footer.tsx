import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/80 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:twinklesurti3014@gmail.com" className="hover:text-primary transition-colors">
                  twinklesurti3014@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2 text-muted-foreground">
              <a href="#about" className="block hover:text-primary transition-colors">About</a>
              <a href="#skills" className="block hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="block hover:text-primary transition-colors">Projects</a>
              <a href="#education" className="block hover:text-primary transition-colors">Education</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Twinkle-14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/twinklesurti3014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://leetcode.com/u/Twinkle__30/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110"
              >
                <div className="h-5 w-5 font-bold text-sm flex items-center justify-center">LC</div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Twinkle Surti. Built with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;