import { MapPin, Phone, Clock, Mail, Car } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const colors = {
  blue: '#1e3a8a',
  green: '#15803d',
  lightBlue: '#dbeafe',
  lightGreen: '#dcfce7',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Image
            src="/Final_PharmacieMozart_Logo1.jpg"
            alt="Pharmacie Mozart"
            width={200}
            height={80}
            className="h-20 w-auto"
          />
          <div className="flex items-center gap-6">
            <a href="tel:+33387802106" className="flex items-center gap-2 text-[#1e3a8a] hover:text-[#15803d] transition-colors">
              <Phone className="h-5 w-5" />
              <span className="inline">03 87 80 21 06</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/20240410_171513.jpg"
          alt="Pharmacie Mozart Exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1e3a8a]/80">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Bienvenue à la Pharmacie Mozart</h1>
              <p className="text-xl mb-6">Votre santé, notre priorité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Téléconsultation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/20230623_194158.jpg"
              alt="Borne de téléconsultation"
              width={500}
              height={600}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1e3a8a]">Téléconsultation Médicale</h2>
              <p className="text-lg text-gray-600 mb-6">
                Consultez un médecin généraliste ou spécialiste sans rendez-vous grâce à notre borne de téléconsultation TESSAN.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-600">
                  ✓ Sans rendez-vous
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  ✓ Médecins généralistes et spécialistes
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  ✓ Ordonnance immédiate si nécessaire
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stationnement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1e3a8a]">Stationnement Facile</h2>
              <p className="text-lg text-gray-600 mb-6">
                Profitez d'un stationnement facile et gratuit directement devant notre pharmacie. Nous nous assurons que votre visite soit aussi pratique que possible.
              </p>
              <div className="flex items-center gap-2 text-[#5ea637]">
                <Car className="h-6 w-6" />
                <span className="font-semibold">Parking gratuit disponible</span>
              </div>
            </div>
            <Image
              src="/20240410_171513.jpg"
              alt="Parking de la Pharmacie Mozart"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a8a]">Nous Contacter</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <MapPin className="h-8 w-8 text-[#1e3a8a] mb-4" />
              <h3 className="font-semibold mb-2 text-[#5ea637]">Adresse</h3>
              <p className="text-gray-600">5 Route de Metz<br />57280 Maizières-lès-Metz</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-8 w-8 text-[#1e3a8a] mb-4" />
              <h3 className="font-semibold mb-2 text-[#5ea637]">Horaires</h3>
              <p className="text-gray-600">Lun - Ven: 8h00 - 19h30<br />Sam: 8h - 17h</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="h-8 w-8 text-[#1e3a8a] mb-4" />
              <h3 className="font-semibold mb-2 text-[#5ea637]">Email</h3>
              <p className="text-gray-600">contact@pharmacie-mozart.fr</p>
            </div>
          </div>
          <div className="mt-12 w-full flex justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.814071745727!2d6.1578244768777335!3d49.20408657138112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795275e4ef438cf%3A0xff738832b9d62b2d!2sPharmacie%20Mozart!5e0!3m2!1sfr!2sfr!4v1733905663023!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-w-4xl rounded-lg shadow-sm border-4 border-[#1e3a8a]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Pharmacie Mozart. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="text-[#1e3a8a] hover:text-[#15803d] transition-colors">
            Mentions Légales
          </Link>
        </div>
      </footer>
    </div>
  )
}

