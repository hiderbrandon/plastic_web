import {myImages} from "../images";

function InfoSection2() {
    return ( 

        <section class="slider_section3">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="full text_align_center">
                        <img class="slide_img scaled-image" src={myImages.products[2].image}  alt="#" /> 
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="full">
                        <h1><strong class="cur">Bolsas o laminas</strong><br/></h1>
                            <p>poseemos diversos tipos de sellado siguiendo las exigencias de nuestros clientes. Por lo tanto ofrecemos al mercado</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default InfoSection2;