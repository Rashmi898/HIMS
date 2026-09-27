import NoticeBar from "./components/NoticeBar";
import AccessibilityBar from "./components/AccessibilityBar";
import MainHeader from "./components/MainHeader";
import HeroSection from "./components/HeroSection";
import QuickServices from "./components/QuickServices";
import AboutUs from "./components/AboutUs";
import GovernmentLinks from "./components/GovernmentLinks";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <NoticeBar />

      <AccessibilityBar />

      <MainHeader />

      <HeroSection />

      <QuickServices />
      <AboutUs/>
      <GovernmentLinks/>
      <StatsSection />
      <Footer/>
    </main>
  );
};

export default App;