import './clima.css';
import mainImage from '../../../../../assets/Home/seg-card-neve.png'; // Imagem da primeira div
import imageLeft from '../../../../../assets/Home/seg-card-volante.jpg'; // Imagem da segunda div - parte esquerda
import imageRight from '../../../../../assets/Home/seg-card-noite.png'; // Imagem da segunda div - parte direita
import imageBottom from '../../../../../assets/Home/seg-card-lama.png'; // Imagem da segunda div - parte inferior

export default function Climas() {
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


