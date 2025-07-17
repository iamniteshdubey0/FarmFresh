import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import AboutUs from "../components/section/AboutUs";
import Blog from "../components/section/Blog";
import Hero from "../components/section/Hero";
import NewsLetter from "../components/section/NewsLetter";
import Testimonial from "../components/section/Testimonial";
import Working from "../components/section/Working";

const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
      {/* Hero */}
      <Hero></Hero>
      {/* How it works */}
      <Working></Working>
      {/* About us */}
      <AboutUs></AboutUs>
      {/* Testimonials */}
      <Testimonial></Testimonial>
      {/* News & Blogs */}
      <Blog></Blog>
      {/* Newsletter */}
      <NewsLetter></NewsLetter>
      {/* Footer */}
      <Footer></Footer>
    </main>
  );
};

export default Home;
