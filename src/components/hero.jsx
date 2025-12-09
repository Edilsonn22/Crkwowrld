

function Hero() {
    return (
        <section className=" relative h-screen overflow-hidden bg-black">
            <div className="relative inset-0 top bottom-0 z-0 w-full h-full">
                <img src="/img/Projectcrk.png" alt="Hero Image" className="absolute w-full h-full object-cover opacity-90 brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90">
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/35 text-center ">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white pt-40 py-6">Crk World Brand!</h1>
                    <h2 className="text-2xl font-bold md:text-4xl p-2 mb-4 text-gradient2 text-color[#020024]">Sua Mente, Seu Mundo. Não se encaixe, Destaque-se.</h2>

                    <button className="border border-white px-8 py-3 mt-15 text-white hover:bg-black/35 hover:text-black transition-colors duration-300 tracking-widest uppercase">Ver Catálogo</button>
                </div>

            </div>
            <div className="absolute bottom-4 left-1/2 z-10 animate-bounce transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>

            </div>
        </section>
    );
}
export default Hero;