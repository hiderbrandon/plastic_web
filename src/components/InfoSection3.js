import {myImages} from "../images";

function InfoSection3() {
    return ( 

        <section class="slider_section3">
        <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div className="fulltext"  class="row">
                            {myImages.empaques.map((image) => (
                                <div class="col-sm-3">
                                    <img
                                        className="slide_img scaled-image"
                                        src={image.image}
                                        alt="#"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                <div class="col-sm-4">
                    <div class="full">
                        <h1><strong class="cur">Empaques microperforados</strong><br/></h1>
                            <p>Empaques microperforados: Este tipo de empaque se utiliza principalmente con productos ornamentales como flores, helechos y demás plantas, entre otros.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default InfoSection3;