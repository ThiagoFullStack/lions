import { useState, useEffect } from 'react';
import './detalhes.css';
import renegadeImage from '../../../../../assets/Home/carroDNA.png'; // Substitua pelo caminho da sua imagem

export default function Jeep() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const preloadImage = async () => {
            const img = new Image();
            img.src = renegadeImage;
            img.onload = () => setImageLoaded(true);
            img.onerror = () => console.error('Erro ao carregar a imagem do Jeep Renegade.');
        };

        preloadImage();
    }, []);

    if (!imageLoaded) {
        return <div className="loading-message">Carregando conteúdo...</div>;
    }

    return (
        <section className="jeep-section">
            <h1 className="section-titleJeep">JEEP RENEGATE</h1>
            
            <div className="content-wrapperJeep">
                {/* Primeira Div com Retângulo e Texto */}
                <div className="text-container">
                    <div className="text-box">
                        <h1 className="box-title">O DNA Jeep</h1>
                        <h2 className="box-subtitle">em cada detalhe!</h2>
                    </div>
                    <p className="description">
                        O Jeep Renegade 2021 Longitude 1.8 se destaca <br />
                        pelo design robusto e estilo icônico, <br />
                        com interior confortável e bem equipado, <br />
                        incluindo central multimídia moderna e conectividade.<br />
                        Conta com diversos recursos de segurança, <br />
                        como controle de estabilidade e tração, <br />
                        além de suspensão independente que garante boa <br />
                        dirigibilidade em diferentes terrenos. <br />
                        A cabine é espaçosa, com bons acabamentos e tecnologias avançadas. <br />
                        Apesar do motor 1.8 flex ser eficiente, seu consumo de combustível e <br />
                        desempenho não são os mais econômicos, <br />
                        mas o veículo compensa com versatilidade e confiabilidade da marca Jeep.
                    </p>
                </div>

                {/* Segunda Div com Imagem */}
                <div className="image-container">
                    <img src={renegadeImage} alt="Jeep Renegade" className="renegade-image" />
                </div>
            </div>
        </section>
    );
}
