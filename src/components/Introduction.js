import Santander from "../img/Santander_2.png"

function Introduction() {

    return (
        <section class="slider_Introduction">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="full text_align_center">
                            <img 
                            class="slide_img" 
                            max-height="100%" 
                            max-width="100%" 
                            src={Santander}alt="#" />
                        </div>
                    </div>
                    <div class="col-md-6  full" >
                        <div class="text_align_center Description">
                            <p>Contamos con una gama de productos dispuestos a satisfacer la dinamica y exigente demanda del mercado de empaques flexibles de polietileno con un enfoque de calidad. En ese sentido atendemos a diferentes industrias con sus respectivas necesidades posicionando su empaque y marca.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );

}

export default Introduction;