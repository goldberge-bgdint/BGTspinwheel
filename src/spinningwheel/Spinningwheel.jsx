import React, { Component } from 'react'
import "./styles.css"
import "./BGDspinner.scoped.css"
import "./nicepage.scoped.css"

export class Spinningwheel extends Component {

  
    state = {

        list : JSON.parse ( window.localStorage.getItem('participents')),
       
        radius: 75, // PIXELS
        rotate: 0, // DEGREES
        easeOut: 0, // SECONDS
        angle: 0, // RADIANS
        top: null, // INDEX
        offset: null, // RADIANS
        net: null, // RADIANS
        result: null, // INDEX
        spinning: false
        
      };
      
    
      componentDidMount() {
        this.renderWheel();
      }
    
      renderWheel() {
        // determine number/size of sectors that need to created
        let numOptions = this.state.list.length;
        let arcSize = (2 * Math.PI) / numOptions;
        this.setState({
          angle: arcSize
        });
    
        // get index of starting position of selector
        this.topPosition(numOptions, arcSize);
    
        // dynamically generate sectors from state list
        let angle = 0;
        for (let i = 0; i < numOptions; i++) {
          let text = this.state.list[i];
          this.renderSector(i + 1, text, angle, arcSize, this.getColor());
          angle += arcSize;
        }
      }
    
      topPosition = (num, angle) => {
        // set starting index and angle offset based on list length
        // works upto 9 options
        let topSpot = null;
        let degreesOff = null;
        if (num === 9) {
          topSpot = 7;
          degreesOff = Math.PI / 2 - angle * 2;
        } else if (num === 8) {
          topSpot = 6;
          degreesOff = 0;
        } else if (num <= 7 && num > 4) {
          topSpot = num - 1;
          degreesOff = Math.PI / 2 - angle;
        } else if (num === 4) {
          topSpot = num - 1;
          degreesOff = 0;
        } else if (num <= 3) {
          topSpot = num;
          degreesOff = Math.PI / 2;
        }
    
        this.setState({
          top: topSpot - 1,
          offset: degreesOff
        });
      };
    
      renderSector(index, text, start, arc, color) {
        // create canvas arc for each list element
        let canvas = document.getElementById("wheel");
        let ctx = canvas.getContext("2d");
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let radius = this.state.radius;
        let startAngle = start;
        let endAngle = start + arc;
        let angle = index * arc;
        let baseSize = radius * 3.33;
        let textRadius = baseSize - 130;
    
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, false);
        ctx.lineWidth = radius * 2;
        ctx.strokeStyle = color;
    
        ctx.font = "9px Arial";
        ctx.fillStyle = "black";
        ctx.stroke();
    
        ctx.save();
        ctx.translate(
          baseSize + Math.cos(angle - arc / 2) * textRadius,
          baseSize + Math.sin(angle - arc / 2) * textRadius
        );
        ctx.rotate(angle - arc / 2 + Math.PI / 2);
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }
    
      getColor() {
        // randomly generate rbg values for wheel sectors
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgba(${r},${g},${b},0.4)`;
      }
    
      spin = () => {
        // set random spin degree and ease out time
        // set state variables to initiate animation
        let randomSpin = Math.floor(Math.random() * 900) + 500;
        this.setState({
          rotate: randomSpin,
          easeOut: 2,
          spinning: true
        });
    
        // calcalute result after wheel stops spinning
        setTimeout(() => {
          this.getResult(randomSpin);
        }, 2000);
      };
    
      getResult = spin => {
        const { angle, top, offset, list } = this.state;
        let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
        let travel = netRotation + offset;
        let count = top + 1;
        while (travel > 0) {
          travel = travel - angle;
          count--;
        }
        let result;
        if (count >= 0) {
          result = count;
        } else {
          result = list.length + count;
        }
    
        // set state variable to display result
        this.setState({
          net: netRotation,
          result: result
        });
      };
    
      reset = () => {
        // reset wheel and result
        this.setState({
          rotate: 0,
          easeOut: 0,
          result: null,
          spinning: false
        });
      };

  render() {
    return (
        <div className="u-body u-xl-mode">
     

    <div>
  <section className="u-clearfix u-custom-color-4 u-section-1" id="sec-1b4d">
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-35 u-layout-cell-1">
            <div className="u-container-layout u-container-layout-1">

        
<span id="selector"> <img src="images/arrow.png" style={{ height: "70px" , transform: "rotate(77deg)" }} alt="" /> </span>
<canvas
  id="wheel"
  width="500"
  height="500"
  style={{
    WebkitTransform: `rotate(${this.state.rotate}deg)`,
    WebkitTransition: `-webkit-transform ${
      this.state.easeOut
    }s ease-out`
  }}
/>

<img src="images/pillar.png" style={{

height: "176px",
position: "absolute",
top: "419px",
right: "513px"

}}   alt="" />

{this.state.spinning ? (
  <button type="button" id="reset" onClick={this.reset}>
    reset
  </button>
) : (
  <button type="button" id="spin" onClick={this.spin}>
    spin
  </button>
)}

            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-25 u-layout-cell-2">
            <div className="u-container-layout u-valign-middle u-container-layout-2">
              <h4 className="u-text u-text-default u-text-1">
                <span style={{fontWeight: 700, fontSize: '2.25rem'}}>BGD Spinner</span>
                <br />
              </h4>
              <div className="u-container-style u-custom-color-1 u-expanded-width u-group u-radius-12 u-shape-round u-group-1 shadow ">
                <div className="u-container-layout u-container-layout-3">
                  <h5 className="u-text u-text-default u-text-white u-text-2">Winner</h5>
                  <p className='resulttext' >{ this.state.list[this.state.result] } </p>
                </div>
              </div>
              <a href="/" id='backicon' className="u-active-none u-btn u-button-style u-hover-none u-none u-text-hover-palette-2-base u-text-palette-1-base u-btn-2"><span className="u-file-icon u-icon u-text-custom-color-1"><img src="images/507257-7d3ee33e.png" alt /></span>&nbsp;Go Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>


        
      </div>  
    
      
    )
  }
}

export default Spinningwheel





