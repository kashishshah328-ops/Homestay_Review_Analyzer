import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen flex justify-center items-center">

        <div className="shadow-lg p-8 rounded-lg w-96">

          <h1 className="text-3xl font-bold mb-6">

            Login

          </h1>

          <input

            type="email"

            placeholder="Enter Email"

            className="border p-3 rounded w-full mb-4"

          />

          <input

            type="password"

            placeholder="Enter Password"

            className="border p-3 rounded w-full mb-4"

          />

          <button className="bg-green-700 text-white py-3 rounded w-full">

            Login

          </button>

        </div>

      </main>

      <Footer />

    </>

  );

}