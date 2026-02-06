import { Link } from "react-router-dom";


function NavBar() {

    const scrollToTop = () => {
        const hero = document.getElementById('inicio');
        hero.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-o w-full bg-black/50 hover:bg-black text-white backdrop-blur-mid z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 gap-4 sm:gap-6 md:gap-8 sm:px-6 md:px-8">
                <div>
                    <img src="/img/logo.jpg" alt="Logo" className="h-10 w-auto rounded-full " />
                </div>
                <div className=" flex items-center gap-10">
                    <Link onClick={scrollToTop} className="hover:text-gray-400 text-white cursor-pointer">Inicio</Link>
                    <Link to="/about" className="hover:text-gray-400 text-white">Sobre</Link>
                    <Link to="/contact" className="hover:text-gray-400 text-white">Contatos</Link>
                    <Link to="/catalog"><button className="bg-white hover:bg-gray-400 text-black rounded-full px-4 py-1">Comprar</button>
                    </Link>
    
                </div>

            </div>
        </nav>
    );
}

export default NavBar;