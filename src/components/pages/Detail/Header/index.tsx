import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../../../assets/Detail/LogoPrincipal.png';
import img1 from '../../../../assets/Detail/LogoCentral.png';
import img2 from '../../../../assets/Detail/LogoCentral-1.png';
import img3 from '../../../../assets/Detail/LogoCentral-2.png';
import img4 from '../../../../assets/Detail/LogoCentral-3.png';

import "./header.css"

export default function Detalhes() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagesToLoad = [logo, img1, img2, img3, img4];
    let loadedCount = 0;

    // Pré-carrega as imagens
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
      <div className="loading">
        <p>Carregando imagens...</p>
      </div>
    );
  }

  return (
    <section className="detalhes">
      {/* Logo no topo com link para a página inicial */}
      <div className="detalhes-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Container principal das imagens */}
      <div className="detalhes-images">
        {/* Imagem principal (maior) */}
        <div className="detalhes-main-image">
          <img src={img1} alt="Imagem Principal" />
        </div>

        {/* Container para as três imagens menores */}
        <div className="detalhes-small-images">
          <img src={img2} alt="Imagem 2" className="small-image" />
          <img src={img3} alt="Imagem 3" className="small-image" />
          <img src={img4} alt="Imagem 4" className="small-image" />
        </div>
      </div>
    </section>
  );
}
