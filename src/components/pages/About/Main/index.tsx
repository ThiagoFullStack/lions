import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../../../assets/About/car-1.png';
import image2 from '../../../../assets/About/car-2.png';
import image3 from '../../../../assets/About/car-3.png';
import image4 from '../../../../assets/About/car-4.png';
import image5 from '../../../../assets/About/car-5.png';
import image6 from '../../../../assets/About/car-6.png';
import "./main.css";

export default function CardCars() {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    // Conjunto de imagens para simular a navegação por páginas
    const images = [
        image1, image2, image3,
        image4, image5, image6,
        image1, image2, image3,
        image4, image5, image6,
        image1, image2, image3,
        image4, image5, image6,
        image1, image2, image3,
        image4, image5, image6,
        image1, image2, image3,
        image4, image5, image6,
        image1, image2, image3,
        image4, image5, image6,
    ];

    const imagesPerPage = 9;
    const totalPages = 4;
    const currentImages = images.slice((page - 1) * imagesPerPage, page * imagesPerPage);

    // Lógica para navegar para outra página ao clicar na imagem
    const handleImageClick = () => {
        navigate('/detail'); // Navega para a página de detalhe
    };

    // Função para ir para a próxima página ao clicar na seta
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <section className="card-cars">
            <div className="image-grid">
                {currentImages.map((image, index) => (
                    <div key={index} className="image-card" onClick={handleImageClick}>
                        <img src={image} alt={`Car ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Navegação de Páginas */}
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index + 1)}
                        className={page === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Adiciona a seta para indicar que há mais páginas */}
                {page < totalPages && (
                    <button className="arrow" onClick={handleNextPage}>
                        &gt; {/* Seta para a direita */}
                    </button>
                )}
            </div>
        </section>
    );
}
