import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function Indexmain() {
  return (
    <div className="flex w-full flex-col gap-4 bg-slate-900">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}
