import Hero from '../components/Hero';
import Category from '../components/Category';
import Featured from '../components/Featured';
import WhyChoose from '../components/WhyChoose';
import NewArrivals from '../components/NewArrivals';
import SaleBanner from '../components/SaleBanner';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Featured />
      <WhyChoose />
      <NewArrivals />
      <SaleBanner />
      <About />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;