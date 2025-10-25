import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://imgur.com/eb225027-07da-4c98-b476-ac987d1ff894)'
        }}
      >
        <BookingForm />
        <Testimonials />
        {/* Footer com popup apenas na página inicial */}
        <Footer showPopup={true} />
      </div>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;
