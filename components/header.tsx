
const header = () => (

    <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">                
                <span className="ml-3 text-xl">Juan Garcia Blog</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href="./" className="mr-5 hover:text-white">Inicio</a>
                <a href="https://github.com/juanmgsierra" target="_blank" className="mr-5 hover:text-white">Github</a>
                <a href="https://www.linkedin.com/in/juanmgsierra/" target="_blank" className="mr-5 hover:text-white">Linkedin</a>
            </nav>  
        </div>
    </header>
);

export default header;