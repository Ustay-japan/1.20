import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>U-Stay Japan | Private Car & Charter Service</title>
        <meta
          name="description"
          content="U-Stay provides premium private car and charter services across Japan for international travelers, families, and business clients."
        />
      </Head>

      <main className="bg-white text-gray-800">

        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">U-Stay Japan</h1>
            <p className="text-lg md:text-xl mb-6">
              Premium Japan Private Car & Charter Service for Global Travelers
            </p>
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-xl inline-block"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/images/tokyo.jpg"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  Tokyo Private Charter
                </h3>
                <p>
                  Flexible private car service for sightseeing, shopping,
                  and business travel in Tokyo.
                </p>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/images/hokkaido.jpg"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  Hokkaido Transfers
                </h3>
                <p>
                  Safe and reliable transportation for ski trips, families,
                  and winter travel in Hokkaido.
                </p>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/images/narita_airport.jpg"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  Airport Transfers
                </h3>
                <p>
                  Door-to-door private airport transfers from Narita,
                  Haneda, Kansai, and CTS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why U-Stay */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Why Choose U-Stay
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <ul className="space-y-4">
                <li>✔ Licensed vehicles & professional drivers</li>
                <li>✔ English-speaking support</li>
                <li>✔ Fixed pricing, no hidden fees</li>
              </ul>
              <ul className="space-y-4">
                <li>✔ Ideal for families & groups</li>
                <li>✔ Popular with business travelers</li>
                <li>✔ Trusted by international guests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Plan Your Japan Trip with U-Stay
          </h2>
          <p className="mb-6">
            Contact us today for a customized private car service.
          </p>
          <a
            href="https://wa.me/"
            className="bg-black text-white px-8 py-4 rounded-xl"
          >
            Contact via WhatsApp
          </a>
        </section>

      </main>
    </>
  );
}
