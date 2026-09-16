function Featurelist({ title, value }) {
  return (
    <div className="bg-white border border-pink-200 p-5 rounded-lg shadow">

      <h3 className="text-lg font-bold text-pink-600">
        {title}
      </h3>

      <p className="text-pink-500 mt-2">
        {value}
      </p>

    </div>
  );
}

export default Featurelist;