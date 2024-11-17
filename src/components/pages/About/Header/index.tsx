import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../../assets/About/LogoPrincipal.png'; // Imagem do logo na parte superior esquerda
import centralImage from '../../../../assets/About/fotoHeader.png'; // Imagem central na seção
import imageCentral from '../../../../assets/About/textoSM.png'; // Imagem do texto
import "./header.css";

export default function Seminovos() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = async () => {
            const images = [logoImage, centralImage, imageCentral];
            const promises = images.map(
                (src) =>
                    new Promise<void>((resolve, reject) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve();
                        img.onerror = () => reject(`Erro ao carregar a imagem: ${src}`);
                    })
            );
            try {
                await Promise.all(promises);
                setImagesLoaded(true);
            } catch (error) {
                console.error(error);
            }
        };

        preloadImages();
    }, []);

    if (!imagesLoaded) {
        return <div className="loading-message">Carregando...</div>;
    }

    return (
        <section className="seminovos">
            {/* Logo na parte superior esquerda */}
            <div className="logo-containerSM">
                <Link to="/">
                    <img src={logoImage} alt="Logo" className="logoImageSM" />
                </Link>
            </div>

            {/* Imagem centralizada no meio da seção */}
            <div className="central-image-containerSM">
                <img src={centralImage} alt="Central" className="centralImageSM" />
            </div>

            {/* Texto centralizado na parte inferior */}
            <img src={imageCentral} alt="Logo" className="textoLogoSM" />
        </section>
    );
}
