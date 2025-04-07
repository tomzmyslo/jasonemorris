import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Photos from "@/components/Photos";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="p-4 sm:px-14 xl:mx-auto xl:w-2/3">
        <Hero />
        <hr className="my-4 border-gray-300" />
        <Photos />
      </div>
      <Footer />
    </main>
  );
}
