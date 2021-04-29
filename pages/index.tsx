import Welcome from "../components/welcome";
import Services from "../components/Services";

export default function IndexPage() {
  return (
    <>
      <Welcome />
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-50 h-full bg-indigo-500"></div>
      </div>
      <Services />
    </>
  );
}
