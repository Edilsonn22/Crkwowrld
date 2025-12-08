const produtctsData = [
    {
        id: 1,
        img: "/img/Project crk.png",
        name: "Camiseta",
        color: "Branca",
        description: "Camiseta branca Crk World.",
        ratting: 4.5,
        aosDelay: "0",
    },
    {
        id: 2,
        img: "/img/Project crk.png",
        name: "Camisola",
        color: "Preto",
        description: "Camisola preta Crk World.",
        ratting: 4.8,
        aosDelay: "100",
    },
    {
        id: 3,
        img: "/img/Project crk.png",
        name: "Boné",
        color: "Cinza",
        description: "Boné ajustável Crk World.",
        ratting: 4.2,
        aosDelay: "200",
    },
    {
        id: 4,
        img: "/img/Project crk.png",
        name: "Blusão",
        color: "Azul",
        description: "Blusão azul Crk World.",
        ratting: 4.7,
        aosDelay: "300",
    },
    {
        id: 5,
        img: "/img/Project crk.png",
        name: "Calça",
        color: "Preto",
        description: "Calça preta Crk World.",
        ratting: 4.6,
        aosDelay: "400",
    },
    {
        id: 6,
        img: "/img/Project crk.png",
        name: "Jaqueta",
        color: "Verde",
        description: "Jaqueta verde Crk World.",
        ratting: 4.9,
        aosDelay: "500",
    },
    {
        id: 7,
        img: "/img/Project crk.png",
        name: "Tênis",     
        color: "Branco",
        description: "Tênis branco Crk World.",
        ratting: 4.4,
        aosDelay: "600", 
    },
    {
        id: 8,
        img: "/img/Project crk.png",
        name: "Mochila",
        color: "Preto",
        description: "Mochila preta Crk World.",
        ratting: 4.3,
        aosDelay: "700",
    }
]

function TopProducts() {
    return (
        <div className="p-10 -mt-6">
            <div className="flex items-center gap-8">
                <h2 className="text-xl font-bold tracking-widest whitespace-nowrap ml-5 uppercase">Top Produtos</h2>
                <div className="border-t-4 border-black w-full mr-5"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {produtctsData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl/35 transition-shadow duration-400 p-4 cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay={item.aosDelay}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="h-56 w-full object-cover rounded-lg"
                        />

                        <h3 className="mt-3 font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.color}</p>

                        <p className="text-gray-500 mt-2 text-sm">{item.description}</p>

                        <div className="mt-2 font-semibold">⭐ {item.ratting}</div>

                        <button className="bg-[#868f89] font-semibold rounded-lg px-6 py-2 text-black mt-4 w-full hover:bg-gray-800 transition-all">
                            Comprar agora
                        </button>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default TopProducts;