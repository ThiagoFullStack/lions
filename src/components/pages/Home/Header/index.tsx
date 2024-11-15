import { useNavigate } from 'react-router-dom';
import bgImage from '../../../../assets/Home/background.png';  // Substitua pelo caminho correto da imagem
import LogoImage from '../../../../assets/Home/footerLogo.png'; 
import floatImage from '../../../../assets/Home/carro.png'; // Imagem flutuante do lado esquerdo
import featureImage1 from '../../../../assets/Home/carro-1.png'; // Imagem para Volante
import featureImage2 from '../../../../assets/Home/carro-2.png'; // Imagem para Retrovisores
import featureImage3 from '../../../../assets/Home/carro-3.png'; // Imagem para Piloto Automático
import { FaPlus } from 'react-icons/fa';

import './header.css';

function Header() {

  const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/about'); // Redireciona para a página "About"
    };

  return (
    <header className="header">
      <div className="container">
      {/* Imagem de fundo */}
      <img src={bgImage} alt="Background" className="background-image" />

      <div className="header-content">
        {/* Texto superior */}
        <img src={LogoImage} alt="Background" className="logoImage" />

        {/* Retângulo com borda */}
        <div className="info-rectangle">
          {/* Imagem flutuante do lado esquerdo */}
          <img src={floatImage} alt="Floating Car" className="floating-image" />

          <div className="right-info">
            <div className="right-info-text">
                <h1 className="car-title">JEEP <br /><span>RENEGADE 2021</span></h1>
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
            <img src={featureImage1} alt="Volante" className="feature-image" />
            <div className="feature-text">
              <p>Volante com Regulagem <br /> de Altura</p>
            </div>
          </div>
          <div className="feature-box">
            <img src={featureImage2} alt="Retrovisores" className="feature-image" />
            <div className="feature-text">
              <p>Retrovisores elétricos e <br /> freios ABS</p>
            </div>
          </div>
          <div className="feature-box">
            <img src={featureImage3} alt="Piloto Automático" className="feature-image" />
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
