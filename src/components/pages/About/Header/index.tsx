
import { Link } from 'react-router-dom';
import logoImage from '../../../../assets/About/LogoPrincipal.png';  // Imagem do logo na parte superior esquerda
import centralImage from '../../../../assets/About/fotoHeader.png'; // Imagem central na seção
import imageCentral from '../../../../assets/About/textoSM.png'; // Imagem central na seção
import "./header.css"

export default function Seminovos() {
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
