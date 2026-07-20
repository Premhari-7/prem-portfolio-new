import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 p-8 rounded-3xl backdrop-blur-[40px] border flex flex-col items-center max-w-xl mx-auto"
        style={{
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
          boxShadow: "var(--glass-glow)",
        }}>
        
        <div className="relative w-full max-w-sm md:max-w-md aspect-[4/3] mb-8 rounded-2xl overflow-hidden flex items-center justify-center">
          <Image
            src="/images/404.png"
            alt="Astronaut 404 - Wrong Planet"
            fill
            style={{ objectFit: 'contain' }}
            priority
            unoptimized={true}
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-foreground font-inter">Page Not Found</h2>
        
        <p className="text-lg mb-8 font-inter text-foreground/70 max-w-md">
          Oops! Wrong planet? Looks like you've crash-landed into a crater in the dark luxury multiverse.
        </p>
        
        <Link href="/" className="px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-mono">
          Return Home
        </Link>
      </div>
    </div>
  );
}