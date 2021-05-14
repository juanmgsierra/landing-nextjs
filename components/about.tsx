const img = require("../img/banner.jpg")
const About = () => (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sobre mí</h1>

    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src={img}/>
        <div className="text-center lg:w-2/3 w-full">
         
            <p className="leading-relaxed mb-8">Mi primer trabajo fue en el Banco Hondureño del cafe, obtuve el empleo porque realice mi practica profesional 
            y demostre tener las habilidades necesarias para obtener el puesto como desarrollador web.
            Con el paso del tiempo fui potenciando más mi logica de programacion y comence a realizar pequeños proyectos para aprender nuevas tecnologias.
            </p>            
        </div>
    </div>
</section>
);

export default About;