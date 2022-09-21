import React, { useState } from 'react'
import "./BGDspinner.scoped.css"
import "./nicepage.scoped.css"
import * as xlsx from "xlsx";

function Spinningmain() {

  let [sheetstatus,setsheetstatus] = useState ("invalid")
  // let [attendencesheet,setattendencesheet] =  useState ([])

  const readUploadFile = (e) => {
    e.preventDefault();
    try {

      if (e.target.files) {
        // converting to json
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            let dummysheet = []  

            // filtering names
            json.forEach(e=>{
             let arr = Object.values(e)
             arr.forEach(c=>{
              if(c=="On Time")
              {
                if(arr[2]!="Hafiz Nabeel Zia" && arr[2]!="Ibtesam Moatisim Khan" && arr[2]!="Muhammad Aziz" )
                {
                  dummysheet.push(arr[2])
                }
                else
                return 0
              }
             })
            })

            // parsing list
            window.localStorage.setItem('participents',JSON.stringify(dummysheet));
            setsheetstatus("valid")

        };
        reader.readAsArrayBuffer(e.target.files[0]);
      }
      
    } catch (error) {
      alert("Unknown error! Please try again")
      setsheetstatus("invalid")
    }

    }

  let validatesheet = ( )=>{

    if(sheetstatus!="invalid")
    {
        document.getElementById("upload").value = '';  
        window.location.href = "/BGTspinwheel/bgdspinner"

    }
    else
    {
      alert("Please submit valid attendence sheet")
    }

  }

  return (
    <div className='u-body u-xl-mode' >

  <section className="u-clearfix u-section-1" id="sec-bd6f">
  <div className="u-container-style u-expanded-width u-group u-image u-image-1" data-image-width={1193} data-image-height={676}>
    <div className="u-container-layout u-container-layout-1">
      <img className="u-image u-image-contain u-image-default u-image-2" src="images/Group.png" alt data-image-width={670} data-image-height={590} />
      <h4 className="u-text u-text-custom-color-1 u-text-default u-text-1">BGD Spin Wheel</h4>
      <p className="u-text u-text-custom-color-1 u-text-default u-text-2">1st come win more</p>
      <a onClick={validatesheet} className="u-btn u-btn-round u-button-style u-hover-palette-1-light-2 u-palette-1-base u-radius-2 u-btn-1">Submit&nbsp;<span className="u-icon u-text-white"><svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" style={{width: '1em', height: '1em'}}><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-.006,0.011-.013,0.018-.019C513.968,262.339,513.943,249.635,506.134,241.843z" /></svg><img /></span>
      </a>
      <div className="u-container-style u-group u-group-2">
    
      <div class="mb-3">
        <label for="" class="form-label">Choose attendence file</label>

        <input
        type="file" 
        class="form-control"
        name="upload"
        id="upload"
        onChange={readUploadFile}
        aria-describedby="fileHelpId"/>

        <div id="fileHelpId" class="form-text">Biomatric generated attendence sheet*</div>
      </div>

      </div>
    </div>
  </div>
  </section>

    </div>
  )
}

export default Spinningmain