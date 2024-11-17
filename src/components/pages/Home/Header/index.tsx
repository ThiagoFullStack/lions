import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import './header.css';

// Define o tipo para o estado `images`
type Images = {
  bgImage?: { default: string };
  logoImage?: { default: string };
  floatImage?: { default: string };
  featureImage1?: { default: string };
  featureImage2?: { default: string };
  featureImage3?: { default: string };
};

function Header() {
  const [images, setImages] = useState<Images>({});
  const navigate = useNavigate();

  // Função para carregar imagens de forma assíncrona
  const loadImages = async () => {
    const imageSources: Images = {
      bgImage: await import('../../../../assets/Home/background.png'),
      logoImage: await import('../../../../assets/Home/footerLogo.png'),
      floatImage: await import('../../../../assets/Home/carro.png'),
      featureImage1: await import('../../../../assets/Home/carro-1.png'),
      featureImage2: await import('../../../../assets/Home/carro-2.png'),
      featureImage3: await import('../../../../assets/Home/carro-3.png'),
    };

    setImages(imageSources);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleButtonClick = () => {
    navigate('/about'); // Redireciona para a página "About"
  };

  // Renderiza um fallback enquanto as imagens carregam
  if (!images.bgImage) {
    return <div>Carregando...</div>;
  }

  return (
    <header className="header">
      <div className="container">
        {/* Imagem de fundo */}
        <img src={images.bgImage.default} alt="Background" className="background-image" />

        <div className="header-content">
          {/* Texto superior */}
          <img src={images.logoImage?.default} alt="Logo" className="logoImage" />

          {/* Retângulo com borda */}
          <div className="info-rectangle">
            {/* Imagem flutuante do lado esquerdo */}
            <img src={images.floatImage?.default} alt="Floating Car" className="floating-image" />

            <div className="right-info">
              <div className="right-info-text">
                <h1 className="car-title">
                  JEEP <br />
                  <span>RENEGADE 2021</span>
                </h1>
                <h2 className="car-subtitle">Longitude 1.8</h2>
                <p className="car-price">Preço: R$ 86.900</p>
                <p className="view-more">Veja mais modelos de carros</p>

                {/* Botão com ícone */}
                <button onClick={handleButtonClick} className="options-button">
                  <FaPlus /> Opções
                </button>
              </div>
            </div>
          </div>

          {/* Retângulos adicionais abaixo com imagens */}
          <div className="feature-boxes">
            <div className="feature-box">
              <img src={images.featureImage1?.default} alt="Volante" className="feature-image" />
              <div className="feature-text">
                <p>Volante com Regulagem <br /> de Altura</p>
              </div>
            </div>
            <div className="feature-box">
              <img src={images.featureImage2?.default} alt="Retrovisores" className="feature-image" />
              <div className="feature-text">
                <p>Retrovisores elétricos e <br /> freios ABS</p>
              </div>
            </div>
            <div className="feature-box">
              <img src={images.featureImage3?.default} alt="Piloto Automático" className="feature-image" />
              <div className="feature-text">
                <p>Piloto Automático</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
