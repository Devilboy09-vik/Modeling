import { Mail, Instagram, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600">
            Available for bookings and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Mail className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-sm tracking-wider text-gray-500">EMAIL</h3>
            <a
              href="mailto:contact@alexandra.com"
              className="block text-gray-900 hover:text-gray-600 transition-colors"
            >
              contact@alexandra.com
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Instagram className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-sm tracking-wider text-gray-500">INSTAGRAM</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-900 hover:text-gray-600 transition-colors"
            >
              @alexandra_model
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <MapPin className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-sm tracking-wider text-gray-500">LOCATION</h3>
            <p className="text-gray-900">New York, NY</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Represented by Elite Model Management
          </p>
        </div>
      </div>
    </section>
  );
}
