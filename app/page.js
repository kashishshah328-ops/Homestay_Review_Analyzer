import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {

  const features = [

    {

      title:"Sentiment Analysis",

      desc:"Automatically classify reviews as Positive, Neutral or Negative."

    },

    {

      title:"Theme Detection",

      desc:"Detect Food, Host, Location, Cleanliness and Experience."

    },

    {

      title:"AI Response Generation",

      desc:"Generate personalized management responses."

    },

    {

      title:"Review Summarization",

      desc:"Summarize multiple reviews into key insights."

    }

  ];

  return (

    <>

      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8">

        {

          features.map((item,index)=>(

            <Card

              key={index}

              title={item.title}

              desc={item.desc}

            />

          ))

        }

      </div>

      <Footer />

    </>

  );

}