// app/services/page.tsx
import Link from "next/link";

const Services: FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2740] mb-4">
          Nos Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Découvrez nos services religieux, événements, et voyages organisés.
        </p>

        {/* Sub Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/tourisme-religieux">
                Tourisme Religieux
              </Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Hajj, Umrah, Ziarra – Nous organisons vos voyages spirituels avec
              confort et sérénité.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/colonie-de-vacances">
                Colonie de Vacances
              </Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Séjours éducatifs et récréatifs pour enfants et jeunes.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/voyages-organises">Voyages Organisés</Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Voyages en groupe, circuits organisés pour découvrir de nouveaux
              horizons.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/assurance">Assurance</Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Nous proposons des assurances adaptées à vos besoins pour plus de
              sécurité.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/protocole">Protocole</Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Services pour la gestion de protocoles lors des événements et
              cérémonies.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/evenementiel">Événementiel</Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Nous organisons des événements religieux et corporatifs, assurant
              une parfaite coordination.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A2740] mb-2">
              <Link href="/services/team-building">Team Building</Link>
            </h3>
            <p className="text-lg text-muted-foreground">
              Des activités de team building adaptées pour renforcer les
              équipes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
