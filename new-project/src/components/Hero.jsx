function Hero({ nama, nim }) {
  return (
    <section
      id="home"
      className="bg-pink-50 py-12 text-center"
    >
      <h1 className="text-3xl font-bold text-pink-700">
        {nama}
      </h1>

      <p className="text-pink-500 mt-2">
        Mahasiswa Universitas Klabat
      </p>

      <p className="text-pink-500">
        NIM: {nim}
      </p>
    </section>
  );
}

export default Hero;