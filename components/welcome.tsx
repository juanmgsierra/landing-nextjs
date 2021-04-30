import Content from "./content"
const logo = require("../img/me.jpg")
const Welcome = () => (
  <section className="text-gray-400 bg-gray-900 body-font">

    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">         
        <p className="mb-8 leading-relaxed">
          "Bienvenido a mi pequeño espacio de presentacion, estudie en la Universidad Nacional Autonoma de Honduras
          la carrera de Informatica Administrativa, empece a trabajar como analista programador en febrero del 2019 en el Banco Hondureño del Cafe,
          Siempre he sostenido mi aficion por la tecnologia por lo que siempre he estado en constante investigación, 
          resolver problemas y encontrar soluciones que ayuden en los procesos hace que mi dia a dia sea mas ameno"                   
        </p>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Juan Miguel García Sierra
        </h1>
        <div className="text-gray-500">
          Web Developer
        </div>
        <div className="text-gray-500">
          juan.gmsierra@gmail.com
        </div>        
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="flex-none w-100 h-100 rounded-lg bg-gray-100"
          alt="hero"
          src={logo}
        />
      </div>
    </div>
  </section>
);

export default Welcome;
