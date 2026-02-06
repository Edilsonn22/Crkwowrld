

function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-3xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Sobre Nós</h2>
                <p className="text-lg mb-4">
                    Bem-vindo à nossa loja online! Somos dedicados a oferecer os melhores produtos para nossos clientes, com foco em qualidade, inovação e atendimento excepcional.
                </p>
                <p className="text-lg mb-4">
                    Nossa missão é proporcionar uma experiência de compra única, onde você possa encontrar tudo o que precisa com facilidade e segurança. Trabalhamos com uma ampla variedade de categorias, desde eletrônicos até moda e acessórios.
                </p>
                <p className="text-lg">
                    Agradecemos por escolher nossa loja. Estamos aqui para ajudar você a encontrar exatamente o que procura. Se tiver alguma dúvida ou precisar de assistência, não hesite em nos contatar!
                </p>
            </div>
        </div>
    );
}
export default About;