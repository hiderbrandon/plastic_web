import React from 'react'
import Button from "react-bootstrap/Button"

function Location() {
    return (
        <div className="LocationWrapper">
            <div  class="mapouter animate__animated animate__fadeInRight">
            <br class="gmap_canvas"></br>
                <iframe width="487" height="500" id="gmap_canvas" src= "https://maps.google.com/maps?q=3.4491659701959243,-76.52183395069501&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>

            <div class="Info">
            <Button variant="secondary" href="https://goo.gl/maps/EojFvBD1tPyk2JXSA" >Como llegar ?</Button>
            </div>
        </div>
    )
}

export default Location

