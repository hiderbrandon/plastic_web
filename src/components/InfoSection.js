import {myImages} from "../images";

function InfoSection() {
    return (  

        <section class="slider_section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="full">
                        <h1><strong class="cur">Rollos de polietileno</strong><br/></h1>
                            <p>
                            fabricamos rollos tubulares, semitubulares y laminas en PEBD PEAD cumpliendo cuidadosamente las medidas y calibre que el cliente solicite.
                            </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="full text_align_center">
                        <img class="slide_img scaled-image" src={myImages.products[0].image} alt="#" /> 
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default InfoSection;