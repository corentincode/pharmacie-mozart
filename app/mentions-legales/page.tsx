import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Pharmacie Mozart',
  description: 'Informations légales de la Pharmacie Mozart',
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#1e3a8a]">Mentions Légales</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#5ea637]">Coordonnées de la pharmacie</h2>
          <div className='text-gray-600'>
          <p><strong>SELAS PHARMACIE MOZART</strong></p>
          <p>Adresse : 5 Route de Metz, 57280 Maizières-lès-Metz</p>
          <p>SIRET : 90423594200011</p>
          <p>Forme juridique : Société d&apos;exercice libéral par actions simplifiée (SELAS)</p>
          <p>RPPS : 1001192870</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#5ea637]">Directeur de la publication</h2>
          <div className='text-gray-600'>
          <p>Jean-Yves STABLO</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#5ea637]">Hébergeur</h2>
          <div className='text-gray-600'>
            <p>Vercel Inc.</p>
            <p>340 S Lemon Ave #4133</p>
            <p>Walnut, CA 91789</p>
            <p>États-Unis</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#5ea637]">Protection des données personnelles</h2>
          <div className='text-gray-600'>
          <p>Vous êtes informé de la collecte de données à caractère personnel par pharmacie-mozart.fr.</p>
          <p>La finalité de ces traitements est la communication et l&apos;information externe de pharmacie-mozart.fr.</p>
          <p>Ces données sont fondées sur l&apos;intérêt légitime du responsable de traitement, conformément à l&apos;article 6-1-f du règlement européen du 26 Avril 2016.</p>
          <p>Des cookies sont susceptibles d&apos;être implantés sur votre poste client, ayant pour finalités de faciliter la connexion au site internet, la mesure d&apos;audience, et des cookies de réseaux sociaux sans recoupement avec d&apos;autres traitements tels que le fichier client. La durée de conservation de ces données est au maximum de 13 mois.</p>
          <p>Vous bénéficiez d&apos;un droit d&apos;accès, de rectification ou d&apos;effacement ou d&apos;opposition que vous pouvez exercer auprès de pharmacie-mozart.fr aux coordonnées ci-avant indiquées ou par mail à contact@pharmaciemozart.com, outre un droit de réclamation auprès de la CNIL située 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07.</p>
          </div>
        </section>

        <Link href="/" className="text-[#1e3a8a] hover:text-[#15803d] transition-colors">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}

