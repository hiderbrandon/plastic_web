import {myImages} from "../images";

function InfoSection2() {
    return ( 

        <section class="slider_section2">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="full text_align_center">
                        <img class="slide_img scaled-image" src={myImages.products[1].image}  alt="#" /> 
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="full">
                        <h1><strong class="cur">Empaques o laminas impresas</strong><br/></h1>
                            <p>para posicionar la marca de nuestros clientes ofrecemos una impresión flexográfica de hasta 6 colores ya sea en PEBD, PEAD o PP, logrando un vivo y persuasivo empaque. Ofrecemos también un asesoramiento técnico para la creación o mejoramiento del diseño del empaque de nuestros clientes.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default InfoSection2;