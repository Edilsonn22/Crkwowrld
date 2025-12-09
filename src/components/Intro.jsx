// No import needed for files in public/. Use an absolute path from the public root, e.g. "/img/Project%20crk.png"


const produtctsData = [
    {
        id: 1,
        img: "../public/img/Project crk.png",
        name: "Camiseta Crk World",
        color: "Branca",
        description: "Camiseta branca Crk World.",
        ratting: 4.5,
        aosDelay: "0",
    },
    {
        id: 2,
        img: "../public/img/Project crk.png",
        name: "Moletom Crk World",
        color: "Preto",
        description: "Moletom preto Crk World.",
        ratting: 4.8,
        aosDelay: "100",
    },
    {
        id: 3,
        img: "../public/img/Project crk.png",
        name: "Boné Crk World",
        color: "Cinza",
        description: "Boné ajustável Crk World.",
        ratting: 4.2,
        aosDelay: "200",
    },
    {
        id: 4,
        img: "../public/img/Project crk.png",
        name: "Jaqueta Crk World",
        color: "Azul",
        description: "Jaqueta leve Crk World.",
        ratting: 4.7,
        aosDelay: "300",
    }
]

function Intro(){ 
    return(
        <div className="py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-7">Crk World Brand!</h1>
                <h2 className="text-2xl font-bold md:text-4xl mb-4 text-gradient">Sua Mente, Seu Mundo. Não se encaixe, Destaque-se.</h2>
                <p className="text-lg md:text-xl text-gray-750 mb-10 max-w-4xl mx-auto">Mais do que roupas, somos atitude e autenticidade. Para mentes que pensam diferente e vivem sem limites. Cada peça conta uma história, cada design carrega uma mensagem.</p>
                <h3 className="text-xl font-bold text-center">Destaques</h3>
            </div>
            
             
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1 mt-10">
                   {/*Card session */}
                {produtctsData.map((data) => (
                    <div>
                        <img src={data.img} alt="" className="h-[220px] w-150px cover rounded-md"/>
                        
                    </div>
                    

                ))}
                
                
            </div>
        </div>
    );
}
export default Intro;
