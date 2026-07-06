// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Card from "../components/Card";
// import Footer from "../components/Footer";

// export default function Home() {

//   const features = [

//     {
//       title: "Sentiment Analysis",
//       desc: "Automatically classify reviews as Positive, Neutral or Negative."
//     },

//     {
//       title: "Theme Detection",
//       desc: "Detect Food, Host, Location, Cleanliness and Experience."
//     },

//     {
//       title: "AI Response Generation",
//       desc: "Generate personalized management responses."
//     },

//     {
//       title: "Review Summarization",
//       desc: "Summarize multiple reviews into key insights."
//     }

//   ];

//   return (

//     <>

//       <Navbar />

//       <main
//         className="
//         min-h-screen

//         bg-gray-50
//         dark:bg-gray-900

//         text-black
//         dark:text-white
//         "
//       >

//         <Hero />

//         <div
//           className="
//           max-w-6xl
//           mx-auto

//           grid
//           grid-cols-1
//           md:grid-cols-2

//           gap-6

//           p-8
//           "
//         >

//           {

//             features.map((item, index) => (

//               <Card

//                 key={index}

//                 title={item.title}

//                 desc={item.desc}

//               />

//             ))

//           }

//         </div>

//       </main>

//       <Footer />

//     </>

//   );

// }
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const features = [
    {
      title: "Sentiment Analysis",
      desc: "Automatically classify guest reviews into Positive, Neutral and Negative using AI."
    },
    {
      title: "Theme Detection",
      desc: "Identify common themes such as Food, Staff, Cleanliness, Location and Experience."
    },
    {
      title: "AI Response Generation",
      desc: "Generate professional management responses for every customer review instantly."
    },
    {
      title: "Review Summarization",
      desc: "Convert hundreds of reviews into concise summaries with actionable insights."
    },
    {
      title: "Keyword Extraction",
      desc: "Discover frequently mentioned keywords and trends from customer feedback."
    },
    {
      title: "Analytics Dashboard",
      desc: "Monitor customer satisfaction with interactive analytics and visual reports."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">

        <Hero />

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-16">

            <span className="text-emerald-600 font-semibold uppercase tracking-widest">
              Features
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Everything You Need to Analyze Reviews
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform helps businesses understand customer
              feedback faster, make better decisions and improve guest
              satisfaction.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
              />
            ))}

          </div>

        </section>

        {/* How It Works */}
        <section className="bg-white dark:bg-gray-950 py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <span className="text-emerald-600 font-semibold uppercase">
                Workflow
              </span>

              <h2 className="text-4xl font-bold mt-4">
                How It Works
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-16">

              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center">

                <div className="text-5xl mb-5">
                  📤
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Upload Reviews
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Upload guest reviews from your platform or database.
                </p>

              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center">

                <div className="text-5xl mb-5">
                  🤖
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  AI Analysis
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  AI detects sentiments, themes and generates useful insights.
                </p>

              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center">

                <div className="text-5xl mb-5">
                  📊
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Get Insights
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  View analytics, summaries and AI-generated responses.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Why Choose Us */}
        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <span className="text-emerald-600 font-semibold uppercase">
                Why Choose Us
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Built for Better Customer Experience
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">

                <div className="text-5xl">
                  ⚡
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Fast Processing
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Analyze thousands of reviews in seconds.
                </p>

              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">

                <div className="text-5xl">
                  🎯
                </div>

                <h3 className="text-xl font-bold mt-6">
                  High Accuracy
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Advanced AI delivers reliable sentiment analysis.
                </p>

              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">

                <div className="text-5xl">
                  🔒
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Secure Data
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Your business data remains protected and private.
                </p>

              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">

                <div className="text-5xl">
                  📈
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Better Decisions
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Make smarter decisions using actionable insights.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="bg-emerald-600 text-white py-20">

          <div className="max-w-5xl mx-auto text-center px-6">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Customer Feedback?
            </h2>

            <p className="mt-6 text-xl text-emerald-100">
              Start analyzing guest reviews with AI and uncover valuable
              business insights in just a few clicks.
            </p>

            <button className="mt-10 bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
              Get Started Now
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}