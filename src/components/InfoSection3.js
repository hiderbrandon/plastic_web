import { myImages } from "../images";

function InfoSection3() {
  return (
    <section className="slider_section3">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={myImages.empaques[0].image}
                  alt="Imagen 1"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-4">
                <img
                  src={myImages.empaques[1].image}
                  alt="Imagen 2"
                  style={{ maxWidth: "100%", zIndex:9}}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={myImages.empaques[2].image}
                  alt="Imagen 3"
                  style={{ maxWidth: "100%" , zIndex:9}}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="full">
                <h1><strong class="cur">Empaques o laminas impresas</strong><br /></h1>
                <p>para posicionar la marca de nuestros clientes ofrecemos una impresión flexográfica de hasta 6 colores ya sea en PEBD, PEAD o PP, logrando un vivo y persuasivo empaque. Ofrecemos también un asesoramiento técnico para la creación o mejoramiento del diseño del empaque de nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection3;
