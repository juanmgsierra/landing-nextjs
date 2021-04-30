import Welcome from "../components/welcome";
import Content from "../components/content";


export default function IndexPage() {
  return (
    <>
      <Welcome />   
      <div className="h-1 bg-gray-800 rounded overflow-hidden"><div className="w-24 h-full bg-indigo-500"></div></div>
      <Content />         
    </>
  );
}
