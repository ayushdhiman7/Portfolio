import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Logotypes from "./components/Logotypes";
import HeadingSubheading from "./components/HeadingSubheading";
import Services from "./components/Services";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <div className="relative pt-[60px] max-sm:pt-[30px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        style={{ minHeight: '100vh' }}
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better content readability - reduced opacity to see video */}
      <div className="fixed top-0 left-0 w-full h-full  z-10 pointer-events-none" />
      {/* Content */}
      <div className="relative z-20">
      <NavigationBar />
      <Header className="mt-[70px] max-sm:mt-[40px]" />
      {/* <Logotypes className="mt-[70px] max-sm:mt-[40px]" /> */}
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Services"
        subheading="As a software engineer, I offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <Services className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <CTA className="mt-[100px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Case Studies"
        subheading="Explore Real-Life Examples of My Proven Software Engineering Success through My Case Studies"
      />
      <CaseStudies className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Skills"
        subheading="Learn about my skills and experience in software engineering and development"
        subheadingClassName="max-w-[473px]"
      />
      <Team className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Projects"
        subheading="Explore my portfolio of software development projects and applications"
        subheadingClassName="max-w-[473px]"
      />
      <Projects className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[100px] max-lg:mt-[80px] max-sm:mt-[60px]"
        heading="Testimonials"
        subheading="Hear from My Satisfied Clients: Read My Testimonials to  about My Software Engineering Services"
        subheadingClassName="max-w-[473px]"
      />
      <Testimonials className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px] max-md:flex-col"
        heading="My Working Process"
        subheading="Step-by-Step Guide to Achieving Your Development Goals"
        subheadingClassName="max-w-[292px]"
      />
      <Process className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />

      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Contact Me"
        subheading="Connect with Me: Let's Discuss Your Software Development Needs"
        subheadingClassName="max-w-[323px]"
      />
      <Contact className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <Footer className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]" />
      </div>
    </div>
  );
}
