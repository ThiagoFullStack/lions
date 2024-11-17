import { useState, useEffect } from 'react';
import leftImage1 from '../../../../assets/Home/quarto-card-yt .png'; // Imagem do YouTube
import leftImage2 from '../../../../assets/Home/quarto-card-in .png'; // Imagem do WhatsApp
import leftImage3 from '../../../../assets/Home/quarto-card-zp.png'; // Imagem do LinkedIn
import rightImage from '../../../../assets/Home/footerLogo.png';

import './footer.css';

export default function Footer() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagesToLoad = [leftImage1, leftImage2, leftImage3, rightImage];
        let loadedCount = 0;

        // Pré-carrega cada imagem
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

    if (!imagesLoaded) {
        return (
            <div className="footer-loading">
                <p>Carregando imagens...</p>
            </div>
        );
    }

    return (
        <div className="pageContainer">
            <div className="contentFooter">
                {/* Conteúdo principal da página */}
            </div>
            <footer className="footer">
                {/* Imagem à direita */}
                <div>
                    <img src={rightImage} alt="Footer Logo" className="rightImage" />
                </div>

                {/* Grupo de imagens à esquerda com links para redes sociais */}
                <div className="leftImages">
                    {/* Link para YouTube */}
                    <a
                        href="https://www.youtube.com/channel/UC9G0xW9cJo16TutQlalzStw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={leftImage1} alt="YouTube" className="footerImage" />
                    </a>

                    {/* Link para WhatsApp */}
                    <a
                        href="https://api.whatsapp.com/send?phone=558004540505&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={leftImage3} alt="WhatsApp" className="footerImage" />
                    </a>

                    {/* Link para LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/lions-seminovos/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={leftImage2} alt="LinkedIn" className="footerImage" />
                    </a>
                </div>
            </footer>
        </div>
    );
}
