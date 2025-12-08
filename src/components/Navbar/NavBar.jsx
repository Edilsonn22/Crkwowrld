

function NavBar() {

    return (
        <nav className="fixed top-o w-full bg-black/50 hover:bg-black text-white backdrop-blur-mid z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 gap-4 sm:gap-6 md:gap-8 sm:px-6 md:px-8">
                <div className="">
                    <img src="../public/img/Logo.jpg" alt="Logo" className="h-10 w-auto rounded-full " />
                </div>
                <div className=" flex items-center gap-10">
                    <a href="#" className="hover:text-gray-400 text-w
                ">Ínicio</a>
                    <a href="#" className="hover:text-gray-400 text-white">Sobre</a>
                    <a href="#" className="hover:text-gray-400 text-white">Contatos</a>
                    <button className="bg-white hover:bg-gray-400 text-black rounded-full px-4 py-1">Comprar</button>
                    {/* <search aria-placeholder="Search..."><input type="text" className="bg-white rounded-full text-black placeholder-black"/></search> */}
                </div>

            </div>
        </nav>
    );
}

export default NavBar;