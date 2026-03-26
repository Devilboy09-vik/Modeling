import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl tracking-wider">ABOUT ME</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a professional model based in New York City with over 5 years of
                experience in the fashion industry. I've worked with renowned brands and
                photographers across editorial, runway, and commercial projects.
              </p>
              <p>
                My passion for fashion and dedication to my craft have taken me around
                the world, from Milan to Paris, working on campaigns that celebrate
                diversity, elegance, and creativity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 mb-2">HEIGHT</h3>
                <p>5'10" / 178 cm</p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 mb-2">BUST</h3>
                <p>32" / 81 cm</p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 mb-2">WAIST</h3>
                <p>24" / 61 cm</p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 mb-2">HIPS</h3>
                <p>35" / 89 cm</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1616358278773-e5e4154a336f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBtb2RlbCUyMGNsb3NldXB8ZW58MXx8fHwxNzc0NDQ5ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Model portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
