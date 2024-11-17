import { useState, useEffect } from 'react';
import detailImage1 from "../../../../assets/Detail/1.png";
import detailImage2 from "../../../../assets/Detail/2.png";
import detailImage3 from "../../../../assets/Detail/3.png";
import detailImage4 from "../../../../assets/Detail/4.png";
import detailImage5 from "../../../../assets/Detail/5.png";
import detailImage6 from "../../../../assets/Detail/6.png";

import './main.css';

export default function DetalhesCarro() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagesToLoad = [
            detailImage1, detailImage2, detailImage3, 
            detailImage4, detailImage5, detailImage6
        ];
        let loadedCount = 0;

        // Função para carregar as imagens
        imagesToLoad.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imagesToLoad.length) {
                    setImagesLoaded(true); // Marca como carregadas quando todas as imagens forem carregadas
                }
            };
        });
    }, []);

    // Exibe um carregamento enquanto as imagens não estão carregadas
    if (!imagesLoaded) {
        return (
            <div className="loading">
                <p>Carregando conteúdo...</p>
            </div>
        );
    }

    return (
        <section className="detalhes-carro">
            <div className="container-detalhes">
                {/* Lado esquerdo */}
                <div className="left">
                    <div className="info">
                        <img src={detailImage1} alt="Detalhe 1" className="dlImage" />
                        <p>MultiFlex (Alc, Gas, GNV), Final da placa 3</p>
                    </div>
                    <div className="info">
                        <img src={detailImage2} alt="Detalhe 2" className="dlImage" />
                        <p>airbag motorista, alarme, <br /> freios ABS, airbag passageiro</p>
                    </div>
                    <div className="info">
                        <img src={detailImage3} alt="Detalhe 3" className="dlImage" />
                        <p>ar-condicionado, volante com regulagem <br /> de altura, travas elétrica</p>
                    </div>
                    <div className="info">
                        <img src={detailImage4} alt="Detalhe 4" className="dlImage" />
                        <p>Kit Multimídia, entrada USB</p>
                    </div>
                    <div className="info">
                        <img src={detailImage5} alt="Detalhe 5" className="dlImage" />
                        <p>vidros elétricos dianteiros, <br /> desemb. traseiro</p>
                    </div>
                    <div className="info">
                        <img src={detailImage6} alt="Detalhe 6" className="dlImage" />
                        <p>Anúncio atualizado em: 24/08/2024</p>
                    </div>
                </div>

                {/* Lado direito */}
                <div className="right">
                    <h1 className="textCentralM">VOUCHER 3 MIL REAIS</h1>
                    <form className="formulario">
                        <p>Nome:</p>
                        <input type="text" placeholder="Digite seu nome" />
                        <p>Email:</p>
                        <input type="email" placeholder="Digite seu email" />
                        <p>Tel:</p>
                        <input type="tel" placeholder="Digite seu telefone" />
                        <p>CPF:</p>
                        <input type="text" placeholder="Digite seu CPF" />
                        <p>Observações:</p>
                        <textarea placeholder="Digite suas observações"></textarea>

                        <div className="politica">
                            <input type="checkbox" id="politica" />
                            <label id="politTexto" htmlFor="politica">Política de Privacidade</label>
                        </div>

                        <div className="botoes">
                            <button className="simular">Simular</button>
                            <button className="mensagem">Mensagem</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
