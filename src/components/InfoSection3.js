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
              <h1>
                <strong className="cur">Empaques microperforados</strong>
                <br />
              </h1>
              <p>
                Empaques microperforados: Este tipo de empaque se utiliza
                principalmente con productos ornamentales como flores, helechos
                y demás plantas, entre otros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection3;
