import './footer.css';
import leftImage1 from '../../../../assets/Home/quarto-card-yt .png'; // Imagem do YouTube
import leftImage2 from '../../../../assets/Home/quarto-card-in .png'; // Imagem do WhatsApp
import leftImage3 from '../../../../assets/Home/quarto-card-zp.png'; // Imagem do LinkedIn
import rightImage from '../../../../assets/Home/footerLogo.png';

export default function Footer() {
    return (
        <div className="pageContainer">
            <div className="contentFooter">
                {/* Conteúdo principal da página */}
            </div>
            <footer className="footer">                     
                {/* Imagem à direita */}
                <div>
                    <img src={rightImage} alt="Imagem Right" className="rightImage" />
                </div>
                
                {/* Grupo de imagens à esquerda com links para redes sociais */}
                <div className="leftImages">

                    {/* Link para YouTube */}
                    <a href="https://www.youtube.com/channel/UC9G0xW9cJo16TutQlalzStw" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: "80%", height: "auto", borderRadius: "5px" }}  src={leftImage1} alt="YouTube" className="footerImage" />
                    </a>

                    {/* Link para WhatsApp */}
                    <a href="https://api.whatsapp.com/send?phone=558004540505&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noopener noreferrer"> {/* Substitua o número pelo seu número do WhatsApp */}
                        <img style={{ width: "80%", height: "auto", borderRadius: "5px" }} src={leftImage3} alt="WhatsApp" className="footerImage" />
                    </a>

                    {/* Link para LinkedIn */}
                    <a href="https://www.linkedin.com/company/lions-seminovos/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: "80%", height: "auto", borderRadius: "5px" }} src={leftImage2} alt="LinkedIn" className="footerImage" />
                    </a>

                </div>
            </footer>
        </div>
    );
}

