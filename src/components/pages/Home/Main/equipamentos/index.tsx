import './equipamentos.css';
import imageVeloc from '../../../../../assets/Home/terc-card-velocidade.png'; // Imagem para Economia de combustível
import imageChave from '../../../../../assets/Home/terc-card-chave.png'; // Imagem para Segurança com alarme
import imageVolante from '../../../../../assets/Home/terc-card-volante.png'; // Imagem para Direção elétrica e Airbag

export default function Equipamentos() {
    return (
        <section className="equipments-section">
            <h1 className="section-title">EQUIPAMENTOS</h1>

            <div className="equipments-wrapper">
                {/* Primeira imagem e texto */}
                <div className="equipment-item">
                    <img src={imageVeloc} alt="Economia de combustível" className="equipment-image" />
                    <h3 className="equipment-text">Economia de <br /> combustível</h3>
                </div>

                {/* Segunda imagem e texto */}
                <div className="equipment-item">
                    <img src={imageChave} alt="Segurança com alarme" className="equipment-image" />
                    <h3 className="equipment-text">Segurança com <br /> alarme</h3>
                </div>

                {/* Terceira imagem e texto */}
                <div className="equipment-item">
                    <img src={imageVolante} alt="Direção elétrica e Airbag" className="equipment-image" />
                    <h3 className="equipment-text">Direção elétrica e <br /> Airbag</h3>
                </div>
            </div>
        </section>
    );
}
