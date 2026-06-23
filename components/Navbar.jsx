import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (

    <nav
      className="
      bg-emerald-700
      text-white

      px-3
      py-3

      flex
      flex-col

      md:flex-row

      items-center
      justify-between

      gap-3

      w-full
      "
    >

      <h1 className="
      text-xl
      md:text-2xl

      font-bold

      text-center
      ">

        Homestay Review Analyzer

      </h1>

      <div
        className="
        flex

        flex-wrap

        justify-center

        items-center

        gap-3

        text-sm
        "
      >

        <ThemeToggle />

        <a href="/">Home</a>

        <a href="/about">About</a>

        <a href="/dashboard">Dashboard</a>

        <a href="/signup">Signup</a>

        <a href="/login">Login</a>

      </div>

    </nav>

  );

}