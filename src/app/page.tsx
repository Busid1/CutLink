import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow container max-w-4xl mx-auto max-md:px-5">
          <MainContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}
