
import { useState } from 'react';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mgvadrnq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Check your inbox for notifications.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: "Error", description: "Message could not be sent." });
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong." });
    }
  
    setIsSubmitting(false);
  };
    
    // Simulate form submission
    

  return (
    <section id="contact" className="section-container bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <h2 className="section-heading justify-center">
            <span className="text-primary font-mono">04.</span> Contact
          </h2>
          <p className="text-foreground/70">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-foreground/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-md p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-foreground/70">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted border border-border rounded-md p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-foreground/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-muted border border-border rounded-md p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-secondary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-foreground/60 text-sm mb-4">
              Social Media Handles:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <a 
                href="https://linkedin.com/in/chandanashastri" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                linkedin.com/in/chandanashastri
              </a>
              
              <a 
                href="https://github.com/ChandanaS03" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Github size={18} />
                github.com/ChandanaS03
              </a>
              
              <a 
                href="https://twitter.com/ShastriChandana" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Twitter size={18} />
                twitter.com/ChandanaShastri
              </a>
              
              <a 
                href="mailto:chandanashastri12@gmail.com" 
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                chandanashastri12@gmail.com
              </a>
            </div>
            
            
            <p className="mt-6 text-center text-primary">
              Feel free to connect or drop a message! 📩
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
