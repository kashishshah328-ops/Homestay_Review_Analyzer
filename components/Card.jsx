export default function Card({ title, desc }) {

  return (

    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

      <h2 className="text-3xl font-bold text-emerald-700">

        {title}

      </h2>

      <p className="mt-5 text-gray-700 text-lg">

        {desc}

      </p>

    </div>

  );

}