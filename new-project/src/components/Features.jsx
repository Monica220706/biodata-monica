function Features({ children }) {
  return (
    <section
      id="biodata"
      className="bg-white max-w-5xl mx-auto px-6 py-10"
    >
      <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
        About Me💗!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {children}
      </div>
    </section>
  );
}

export default Features;