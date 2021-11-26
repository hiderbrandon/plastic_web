import React from 'react'
import Button from "react-bootstrap/Button"

function Location() {
    return (
        <div className="LocationWrapper">
            <div class="Info">
            <h3>Visita nuestras instalaciones!</h3>
            <Button variant="secondary" href='https://www.google.com/maps/dir//Panader%C3%ADa+Surtipanes,+Carrera+23d,+Cali,+Valle+del+Cauca/@3.4341245,-76.5693118,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e30a68e2d3c615d:0x6c4db0602c7dfed6!2m2!1d-76.5342528!2d3.4342511?hl=es'>Como llegar ?</Button>
            </div>
            <div  class="mapouter animate__animated animate__fadeInRight">
            <br class="gmap_canvas"></br>
                <iframe width="487" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=cali%20,%20surtipanes%20alameda&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
    )
}

export default Location

