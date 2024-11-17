import { useState, useEffect } from 'react';
import './clima.css';
import mainImage from '../../../../../assets/Home/seg-card-neve.png'; // Imagem da primeira div
import imageLeft from '../../../../../assets/Home/seg-card-volante.jpg'; // Imagem da segunda div - parte esquerda
import imageRight from '../../../../../assets/Home/seg-card-noite.png'; // Imagem da segunda div - parte direita
import imageBottom from '../../../../../assets/Home/seg-card-lama.png'; // Imagem da segunda div - parte inferior

export default function Climas() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = async () => {
            const imagePaths = [mainImage, imageLeft, imageRight, imageBottom];
            const promises = imagePaths.map((src) => {
                return new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve();
                    img.onerror = () => reject();
                });
            });
            try {
                await Promise.all(promises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Erro ao carregar imagens', error);
            }
        };

        preloadImages();
    }, []);

    if (!imagesLoaded) {
        return <div className="loading-message">Carregando imagens...</div>;
    }

    return (
        <section className="climate-section">
            <h1 className="section-title">ADEQUA-SE A QUALQUER CLIMA</h1>

            <div className="content-wrapper">
                {/* Primeira Div - Imagem que ocupa a div toda */}
                <div className="full-image-div">
                    <img src={mainImage} alt="Main" className="full-image" />
                </div>

                {/* Segunda Div - Dividida em três partes */}
                <div className="split-div">
                    <div className="top-section">
                        <img src={imageLeft} alt="Left" className="half-image left-image" />
                        <img src={imageRight} alt="Right" className="half-image right-image" />
                    </div>
                    <div className="bottom-section">
                        <img src={imageBottom} alt="Bottom" className="bottom-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}
