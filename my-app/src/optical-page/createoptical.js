import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';

import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import axios from 'axios';
import config from '../config/config'
import $ from 'jquery';






class Createoptical extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
           
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 margindata">

               <div className="row">
                 <div className="col-md-4">

                 </div>
                 <div className="col-md-6">
                 <label>Instruction</label>
                 <textarea
                  name="dm"
                 className="form-control mt-1"
                placeholder="dm"
              ></textarea>
 
              <label>OD</label>

             <input
             type="text"
              name="sph"
              className="form-control mt-1"
             placeholder="sph"
            />
             <input
             type="text"
              name="CYL"
              className="form-control mt-1"
             placeholder="CYL"
            />
             <input
             type="text"
              name="AXIS"
              className="form-control mt-1"
             placeholder="AXIS"
            />

      <select id="va" name="va"  className="form-control mt-1">
       <option defaultValue>Select va </option>
        <option>6/60</option>
        <option>6/36</option>
        <option>6/24</option>
        <option>6/18</option>
        <option>6/12</option>
        <option>6/9</option>
        <option>6/6</option>
      
    </select>

            <label>OS</label>


            <input
             type="text"
              name="sph"
              className="form-control mt-1"
             placeholder="sph"
            />
             <input
             type="text"
              name="CYL"
              className="form-control mt-1"
             placeholder="CYL"
            />
             <input
             type="text"
              name="AXIS"
              className="form-control mt-1"
             placeholder="AXIS"
            />

      <select id="va" name="va"  className="form-control mt-1">
       <option defaultValue>Select va </option>
        <option>6/60</option>
        <option>6/36</option>
        <option>6/24</option>
        <option>6/18</option>
        <option>6/12</option>
        <option>6/9</option>
        <option>6/6</option>
      
    </select>

    <label>Dist</label>


         <input
             type="text"
              name="RE"
              className="form-control mt-1"
             placeholder="RE"
            />
            <input
             type="text"
              name="LE"
              className="form-control mt-1"
             placeholder="LE"
            />

     <label>Near</label>


        <input
        type="text"
       name="RE"
       className="form-control mt-1"
       placeholder="RE"
       />
     <input
    type="text"
     name="LE"
     className="form-control mt-1"
    placeholder="LE"
   />
    <label className="mt-2">Types</label>
   <div className="row mt-1">
  
    <div className="col-md-3">
    <span>Kryptok</span>
    <input
     style={{marginLeft:"38px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Unicvis D</span>
    <input
     style={{marginLeft:"10px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Hi index</span>
    <input
     style={{marginLeft:"10px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Photochromic</span>
    <input
    style={{marginLeft:"10px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>

    <div className="col-md-3">
    <span>Progreesive</span>
    <input
     style={{marginLeft:"10px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Glass</span>
    <input
     style={{marginLeft:"39px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>White</span>
    <input
     style={{marginLeft:"26px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Arc</span>
    <input
    style={{marginLeft:"85px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>

    <div className="col-md-3">
    <span>Executive</span>
    <input
     style={{marginLeft:"26px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Plastic</span>
    <input
     style={{marginLeft:"30px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span>Tint</span>
    <input
     style={{marginLeft:"40px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>
    <div className="col-md-3">
    <span></span>
    <input
    style={{marginLeft:"108px"}}
    type="checkbox"
    name="sadmin"
    id="sadmin"
  />
    </div>




   </div>

                 </div>
                 <div className="col-md-2">

                 </div>
               </div>
         

                </div>
           

                <div className="row" style={{marginTop:"100px"}}>
        </div> 
           
            <Footerdata/>
          
            </div>
            
      );
    }
}




export default Createoptical;