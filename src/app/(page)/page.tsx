import CustomerTestimonials from "@/components/customer-testimonials";
import Footer from "@/components/footer";
import ProfileIntro from "@/components/profile-intro";
import ProfilePage from "@/components/profile-page";
import ServiceProcess from "@/components/service-process-grid";
import ServicesGrid from "@/components/services-grid";

export default function Home() {
  return (
    <>
      <ProfilePage />
      <ServicesGrid />
      <ServiceProcess />
      <CustomerTestimonials />
      <Footer />
    </>
  )
}