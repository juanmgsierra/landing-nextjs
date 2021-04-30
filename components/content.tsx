import Footer from './footer';
const banner = require('../img/banner.jpg')
const Content = () => (
    <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={banner} />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:mt-0 text-center sm:text-left">
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
                        <br />
                        <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">Frameworks utilizados</h2>
                        <nav className="flex flex-wrap list-none -mb-1">
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="hover:text-white">ReactJS</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="hover:text-white">Yii2</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="hover:text-white">Nextjs</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="hover:text-white">Angular</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="hover:text-white">.NET</a>
                            </li>
                        </nav>
                        <br/>
                        <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">Bases de datos</h2>
                            <nav className="flex flex-wrap list-none -mb-1">
                                <li className="lg:w-1/3 mb-1 w-1/2">
                                    <a className="hover:text-white">SQL server</a>
                                </li>
                                <li className="lg:w-1/3 mb-1 w-1/2">
                                    <a className="hover:text-white">NoSQL</a>
                                </li>
                                <li className="lg:w-1/3 mb-1 w-1/2">
                                    <a className="hover:text-white">MySQL</a>
                                </li>                                
                            </nav>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">Experiencia laboral</h2>
                        <p className="mb-8 leading-relaxed">
                            En más de 2 años de trabajo formal he desarrollado tanto en lenguajes de programación compilados,
                            como interpretados, podria decir que de los compilados me a encantado Java aunque C# es muy potente y robusto,
                        ambos han sido mis mejores elecciones para desarrollos complejos.<br />
                        De los interpretados ultimamente me a encantado TypeScript, por ser más tipado que JavaScript y su deteccion de errores en tiempo real es de bastante ayuda.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>
)

export default Content;