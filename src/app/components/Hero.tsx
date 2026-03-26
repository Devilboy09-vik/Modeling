import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618908623278-dfcf55e6f687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzODMzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fashion model portrait"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wider">
            ALEXANDRA
          </h1>
          <p className="text-lg md:text-xl tracking-widest">MODEL · NEW YORK</p>
        </div>
      </div>
    </section>
  );
}
