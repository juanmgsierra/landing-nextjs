const Services = () => (
  <section className="text-gray-400 body-font bg-gray-900">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Experiencia laboral</h1>
      <p className="leading-relaxed text-base">En más de 2 años de trabajo formal he desarrollado tanto en lenguajes de programación compilados, 
      como interpretados, podria decir que de los compilados me a encantado Java aunque C# es muy potente y robusto, ambos han sido mis mejores elecciones para desarrollos complejos.<br/>
      De los interpretados ultimamente me a encantado TypeScript, por ser más tipado que JavaScript y su deteccion de errores en tiempo real es de bastante ayuda.</p>
      
      
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">Lenguajes de programación que he aprendido</h2>
      <nav className="flex flex-wrap list-none -mb-1">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">Java</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">C#</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">JavaScript</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">PHP</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">TypeScript</a>
        </li>
      </nav>
    </div>
  </div>
</section>
);

export default Services;
