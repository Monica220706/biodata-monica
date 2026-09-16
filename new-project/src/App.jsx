import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Greetings from "./components/props/Greetings";
import Featurelist from "./components/props/Featurelist";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Greetings name="Monica" />

        <Hero
          nama="Monica Maria Mudeng"
          nim="108022410085"
        />

        <Features>
          <Featurelist
            title="Nama"
            value="Monica Maria Mudeng"
          />

          <Featurelist
            title="NIM"
            value="105022410085"
          />

          <Featurelist
            title="Jurusan"
            value="Informatika"
          />

          <Featurelist
            title="Universitas"
            value="Universitas Klabat"
          />

          <Featurelist
            title="Hobi"
            value="Explore Keindahan Dunia"
          />

          <Featurelist
            title="Cita-cita"
            value="Menjadi seseorang yang berguna"
          />
        </Features>
        <section
          id="TTL"
          className="bg-pink-50 py-10 text-center"
>
          <h2 className="text-2xl font-bold text-pink-600 mb-5">
            Skills
          </h2>

          <div className="flex justify-center gap-4 flex-wrap">

          <span className="bg-pink-400 text-white px-5 py-2 rounded-full">
            Pendengar yang baik
          </span>

          <span className="bg-pink-400 text-white px-5 py-2 rounded-full">
            Tidak bisa marah
          </span>

          </div>
        </section>  
      </main>

      <Footer />
    </>
  );
}

export default App;