
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#FF3B3B] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold">RootAgent</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#comparison" className="text-muted-foreground hover:text-foreground transition-colors">Comparison</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90">
            Request Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
