


const produtctsData = [
    {
        id: 1,
        img: "../public/img/Project crk.png",
        name: "Camiseta",
        color: "Branca",
        description: "Camiseta branca Crk World.",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "../public/img/Project crk.png",
        name: "Hoodie",
        color: "Preto",
        description: "Hoodie preto Crk World.",
        aosDelay: "100",
    },
    {
        id: 3,
        img: "../public/img/Project crk.png",
        name: "Boné",
        color: "Cinza",
        description: "Boné ajustável Crk World.",
        aosDelay: "200",
    },
    {
        id: 4,
        img: "../public/img/Project crk.png",
        name: "Camisola",
        color: "Azul",
        description: "Jaqueta leve Crk World.",
        aosDelay: "300",
    }
]

function Intro() {
    return (
        <div className="p-10 mt-5">
            
            <div className="max-w-4xl mx-auto text-center p-4">
                <p className="md:text-xl p-4 text-gray-500 font-semibold mb-10 max-w-4xl mx-auto font-merriweather">Mais do que roupas, somos atitude e autenticidade. Para mentes que pensam diferente e vivem sem limites. Cada peça conta uma história, cada design carrega uma mensagem.</p>
            </div>
            <div className=" flex items-center gap-8">
                <div className="border-t-4 border-black w-full"></div>
                <h3 className="text-xl font-bold text-center uppercase text-black">Destaques</h3>
                <div className="border-t-4 border-black w-full"></div>
            </div>

            <div className="p-4 ">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-2 rounded-xl">

                    <div className="col-span-1 md:col-span-2">
                        <img
                            src="/img/Project crk.png"
                            alt=""
                            className="w-full h-full object-cover rounded-xl hover:shadow-xl/35 transition-shadow duration-400"
                        />
                    </div>

                    <div className="grid grid-rows-2 gap-4">
                        <img
                            src="/img/Project crk.png"
                            alt=""
                            className="w-full h-full object-cover rounded-xl hover:shadow-xl/35 transition-shadow duration-400"
                        />

                        <img
                            src="/img/Project crk.png"
                            alt=""
                            className="w-full h-full object-cover rounded-xl hover:shadow-xl/35 transition-shadow duration-400"
                        />
                    </div>

                </div>
            </div>


        </div>


    );
}
export default Intro;