import { MdDeliveryDining } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";

const ServicesData = [
    {
        id: 1,
        icon: < MdDeliveryDining className="text-4xl md:5xl" />,
        title: "Entrega Rápida",
        description: "Receba seus produtos em tempo recorde com nosso serviço de entrega rápido e confiável.",
    },
    {
        id: 2,
        icon: <LiaCertificateSolid className="text-4xl md:5xl" />,
        title: "Qualidade Garantida",
        description: "Oferecemos apenas produtos de alta qualidade para garantir sua satisfação total.",
    },
    {
        id: 3,
        icon: <LuPhoneCall className="text-3xl md:5xl" />,
        title: "Atendimento 24/7",
        description: "Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana, para ajudar você com qualquer dúvida.",
    },

    {
        id: 4,
        icon: <IoWalletOutline className="text-4xl md:5xl" />,
        title: "Pagamentos seguros",
        description: "Compre com confiança usando nossas opções de pagamento seguras e protegidas.",
    },
];

function services() {
    return (
        <div>
            <div className="px-4 mb-10">
                {/* Título */}
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-center text-black">
                        Nossos Serviços
                    </h2>
                </div>

                {/* Grid de serviços */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ServicesData.map((service) => (
                        <div key={service.id} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            {/* Ícone */}
                            <div className="text-3xl sm:text-4xl text-primary">
                                {service.icon}
                            </div>

                            {/* Texto */}
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-lg sm:text-xl mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default services;