import React from "react";
import Analytics from "./Dashboard";
import Cards from "./SubscriptionCards";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Hero from "./Welcome";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
