import List from "@/components/List";
import portrait from "@/assets/jason-morris-portrait.jpg";

export default function Hero() {
  return (
    // <div className="mxx-auto bg-red-3000">
    <div className="grid gap-6 sm:grid-cols-2">
      <img src={portrait} className="rounded-lg" alt="Jason Morris Portrait" />
      <div className="col-md-6 mt-3 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Jason E. Morris</h1>
        <p className="font-bold">for</p>
        <p className="text-xl font-light">Kalamazoo Public School Board</p>
        <hr className="my-4 border-gray-300" />
        <List />
      </div>
    </div>
    // </div>
  );
}
