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
                        <h1><strong class="cur">Empaques microperforados</strong><br/></h1>
                            <p>Empaques microperforados: Este tipo de empaque se utiliza principalmente con productos ornamentales como flores, helechos y demás plantas, entre otros.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default InfoSection2;