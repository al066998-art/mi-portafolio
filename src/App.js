
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import proyectos from "./proyectos";
import "./index.css";

function App() {
  return (
    <div className="container py-5">

      <h1 className="titulo-principal text-center mb-5 fw-bold">
        Mi Portafolio
      </h1>

      <div className="row">
        {proyectos.map((p, i) => (
          <div
            className="col-md-4 mb-4 fade-in"
            key={i}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="card card-modern shadow-lg">
              <div className="img-container">
                <img
                  src={p.imagen}
                  className="card-img-top img-zoom"
                  alt={p.titulo}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title fw-bold">{p.titulo}</h5>
                <p className="card-text">{p.descripcion}</p>

                <a
                  href={p.url}
                  target="_blank"
                  className="btn btn-gradient w-100"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
