function Greetings({ name }) {
  return (
    <section className="text-center py-8">
      <h2 className="text-2xl font-bold">
        Halo, {name}! 👋
      </h2>

      <p className="text-gray-600 mt-2">
        SELAMAT DATANG DI BIODATA SAYA!
      </p>
    </section>
  );
}

export default Greetings;