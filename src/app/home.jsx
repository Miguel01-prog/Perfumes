import { useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación
import { FaWhatsapp } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import "./home.css";
import { Eye, Target, HeartHandshake  } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="home-container">
    <div className="hero-section">
      <img src="./letras-logo.png" alt="Tefi" className="hero-image" />
      <p className="hero-description">
        Tu esencia en tu fragancia
      </p>
    </div>

    <div className="perfume-types">
      <div className="perfume-type-card">
      <div className="perfume-type-image feminine">
            <div className="perfume-bottle"></div>
          </div>
          <h2 className="perfume-type-title">Perfumes para Dama</h2>
          <p className="perfume-type-description">
            Fragancias florales, frutales y dulces que evocan elegancia, frescura y feminidad con notas delicadas y
            sofisticadas.
          </p>
        <Link to="/perfume" className="perfume-type-button">
          Crear
        </Link>
      </div>

      <div className="perfume-type-card">
        <div className="perfume-type-image masculine">
          <div className="perfume-bottle"></div>
        </div>
        <h2 className="perfume-type-title">Perfumes para Caballero</h2>
        <p className="perfume-type-description">
          Fragancias amaderadas, especiadas y frescas que transmiten carácter, distinción y masculinidad con notas
          intensas y duraderas.
        </p>
        <Link to="/perfume" className="perfume-type-button">
          Crear
        </Link>
      </div>
    </div>

    <div className="features-section">
      <h2 className="features-title">Crea tu Perfume Personalizado</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon ingredients-icon"></div>
          <h3 className="feature-title">Ingredientes Premium</h3>
          <p className="feature-description">
            Selecciona entre más de 50 ingredientes de la más alta calidad para crear tu fragancia única.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon formula-icon"></div>
          <h3 className="feature-title">Fórmula Personalizada</h3>
          <p className="feature-description">
            Combina notas altas, medias y bajas para crear un perfume equilibrado y duradero.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon bottle-icon"></div>
          <h3 className="feature-title">Envase a Elección</h3>
          <p className="feature-description">
            Elige el diseño de botella que mejor represente tu estilo y personalidad.
          </p>
        </div>
      </div>
    </div>
   
    <div className="features-section">
      <h2 className="features-title">Nosotros</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
          <Target size={50} color="#4A90E2" /> {/* Icono de Lucide */}
          </div>
          <h3 className="feature-title">Misión</h3>
          <p className="feature-description">
          Nuestra misión es crear experiencias olfativas únicas y personalizadas que reflejan la individualidad y el estilo de cada cliente. Nos comprometemos a utilizar ingredientes de alta calidad, técnicas innovadoras y un servicio excepcional para ayudar a nuestros clientes a descubrir su fragancia perfecta y expresar su personalidad a través del perfume.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Eye size={50} color="#4A90E2" /> {/* Icono de Lucide */}
          </div>
          <h3 className="feature-title">Visión</h3>
          <p className="feature-description">
            Revolucionar la industria de los perfumes mediante la personalización y la innovación, ofreciendo fragancias únicas y memorables que conecten con las emociones y deseos de nuestros clientes.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <HeartHandshake size={50} color="#4A90E2" /> 
          </div>
          <h3 className="feature-title">Valores</h3>
          <p className="feature-description2">
            • <strong>Individualidad:</strong> Promover la autoexpresión a través de fragancias personalizadas. <br />
            • <strong>Creatividad:</strong> Fomentar la creatividad de los clientes al elegir sus propias preferencias. <br />
            • <strong>Innovación:</strong> Permitir que los clientes diseñen sus propias fragancias de forma única a través de nuestra plataforma digital o mediante experiencias sensoriales en la tienda. <br />
            • <strong>Experiencia personalizada:</strong> Ofrecer un trato exclusivo para cada cliente. <br />
            • <strong>Diversidad:</strong> Ofrecer una gama amplia de opciones para diferentes culturas, estilos y gustos. <br />
            • <strong>Calidad:</strong> Garantizar procesos, ingredientes y tratos de alta calidad.
          </p>
        </div>
      </div>
    </div>

  </main>
  );
}
