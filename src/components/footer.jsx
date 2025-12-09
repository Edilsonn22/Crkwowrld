

function Footer() {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container">
                <div className="grid md:grid-cols-4">
                    <div className="p-4 md:text-left text-center">
                        <h3 className="text-lg font-bold mb-2 ">Mais Informações</h3>
                        <p className="text-sm">
                            Somos uma empresa dedicada a oferecer os melhores produtos e serviços para nossos clientes. Sua satisfação é nossa prioridade.
                        </p>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="text-lg font-bold mb-2">Contatos</h3>
                        <p className="text-sm">Email: edilsonn.nhanombe@gmail.com</p>
                        <p className="text-sm">Telefone: 846764161</p>
                        <p className="text-sm">Endereço:Maputo Cidade</p>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="text-lg font-bold mb-2">Links Úteis</h3>
                        <a className="text-sm">Sobre Nós</a>
                        <p className="text-sm">Serviços</p>
                        <p className="text-sm">Política de Privacidade</p>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="text-lg font-bold mb-2">Redes Sociais</h3>
                        <p className="text-sm">Instagram</p>
                        <p className="text-sm">Facebook</p>
                        <p className="text-sm">Twitter</p>
                    </div>


                </div>
                <footer>
                    <div className="text-center p-4 border-t border-gray-700 mt-4">
                        <p className="text-sm">&copy; 2025 Sua Crk World. Todos os direitos reservados.</p>
                    </div>
                </footer>
            </div>

        </div>
    );
}
export default Footer;