import React, { Component } from 'react';
import { Container,Row, Col, Media} from 'react-bootstrap';
import '../App-page/App.css';
import Footerdata from '../Templates/footer';
import Headerdata from '../Templates/Header';
import glaucomaimg from '../images/glaucoma.jpg';
import lasikimg from '../images/ophthalmology.jpg';
import neuroimg from '../images/Stroke-Prevention.jpg';
import retinaimg from '../images/retina.jpg';
import laserimg from '../images/lasik.jpg';
import Diabeticimg from '../images/diabetic.jpg';
import Cataractsimg from '../images/cataimg.jpg';
import  '../Departmentpage/department.css'; 
//C:\Users\W4T\Desktop\Myreactapp\my-app\public\logo512.png



class App extends Component {
    
  
  render(){
        
        return (
          
            <div>
            <Headerdata/>
            <Bodydata/>
            <Details/>
           <Footerdata/>
            </div>
            
      );
    }
}


class Bodydata extends Component {

  render(){
      
      return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <div className="styledepart">
            <div style={{paddingTop:"80px"}}>
              <div className="col-md-8 col-xs-12 col-lg-6">
              <h5 className="imgtext1">DEPARTMENTS</h5>
               <h1 className="imgtext1">Ophthalmology</h1>
                <p className="imgtext1">Our ophthalmology services are geared to constantly challenge the status quo and explore new means to protect and restore sight. Eye care specialists at Avy Eye Care have the skills and technology to offer the best possible preventive care and corrective procedures for your vision. As it deserves nothing less.</p>
              </div>
            
          </div>
              </div>  
            </div>
        </div>
          </div>
     
     
      
          );
      }
  }
  class Details extends Component {

    render(){
        
        return (
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="col-md-12">
              <div style={{margin:"30px"}}>
            
              <h4 className="aligntext1">Why Choose Ophthalmology at Avy Eye Care?</h4>
              </div>
              <div className="row">

              
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                   <div className="newcard cardimg" >
                    <img src={glaucomaimg} className="imgstyle"></img>

                      <h4 className="aligntext1"> Glaucoma</h4>
                      <p className="aligntext">At Avy Eye Care, we believe prevention is better than cure and this is perfectly true for glaucoma. Early detection and treatment will avoid the severe damage glaucoma could cause. Our ophthalmologists will take all efforts to ensure it is treated at the right time. The following procedures and treatments will be suggested based on the need of each individual.
                       Vision assessment | Slit-lamp examination | Applanation tonometry</p>
              </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                   <div className="newcard cardimg" >
                    <img src={neuroimg} className="imgstyle" ></img>

                      <h4 className="aligntext1"> Neuro-Ophthalmology</h4>
                      <p className="aligntext">A specialty that merges neurology and ophthalmology, this field of study focusses on diseases in the nervous system that affect the vision, control of eye movements or pupillary reflexes. Our neuro-ophthalmologists are thought leaders in this field and come with years of experience treating the most complex conditions.
                       Vision assessment | Colour vision assessment | Optic disc evaluation</p>
              </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                   <div className="newcard cardimg">
                    <img src={retinaimg} className="imgstyle" ></img>

                      <h4 className="aligntext1">Retina Care</h4>
                      <p className="aligntext">Annual comprehensive dilated eye exams are generally recommended at the age of 60. However, we advise starting at the age of 40 due to higher risk of glaucoma among Indians and diabetics. This package is designed keeping in mind the importance of retina and the need to protect it. Constant monitoring is required as there will be minimal or no symptoms when it comes to the different conditions.
                   Vision assessment | Slit-lamp evaluation | Optical coherence tomography | Dilated retinal evaluation</p>
              </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-4"  >
                   <div className="newcard cardimg"  >
                    <img src={lasikimg} className="imgstyle" ></img>

                      <h4 className="aligntext1"> LASIK</h4>
                      <p className="aligntext">LASIK is a pain-free, quick and safe laser surgery to correct far-sight,
                        near-sight and astigmatism. This procedure reshapes the cornea and directs light to be focused on the retina. It is an effective solution for better vision without prescription glasses and contact lenses.
                       Vision assessment | Refraction</p>
              </div>
              </div>
              
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                   <div className="newcard cardimg">
                    <img src={Diabeticimg} className="imgstyle" ></img>

                      <h4 className="aligntext1">Diabetic Retinopathy</h4>
                      <p className="aligntext">Exclusively designed for diabetics and diabetes prone individuals, this package ensures timely monitoring of the retina.
                         Vision assessment | Slit lamp evaluation | Dilated fundus evaluation | Fundus photography | Fundus fluorescein angiography | Optical coherence tomography</p>
              </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                   <div className="newcard cardimg" >
                    <img src={laserimg} className="imgstyle" ></img>

                      <h4 className="aligntext1">Lasers</h4>
                      <p className="aligntext">At Avy Eye Care Ophthalmology, a variety of laser procedures is used both in therapy and diagnosis to provide comprehensive, quick and safe treatment for various eye conditions.
                      Yag laser | Green laser</p>
              </div>
              </div>
              </div>
          
              <div className="row">
          
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-6" style={{marginTop:"30px"}}>
              <h4 className="headstyle">Cataract</h4>
               
               <p  style={{marginLeft:"22px"}}>At Avy Eye Care, with our comprehensive ophthalmological evaluation we aim at treating cataract at an early stage before it becomes a threat to vision.</p>

                   <ul className="liststyles">
                     <li >Vision Assessment</li>
                      <p className="parastyle">A simple test using the Snellen chart, it measures the visual acuity which is the quantitative measure of the eye’s ability to see an in-focus image at a certain distance.</p>  
                      <li>Refraction</li>
                      <p className="parastyle">Using retinoscopy, the optometrist measures the refractive error of the eye. The results of retinoscopy are used to prescribe corrective lenses or as a basis for further refinement of the error.</p>
                      <li>Colour Vision Assessment</li>
                      <p className="parastyle">A series of tests done to examine the eye's ability to recognize or discriminate colours.</p>
                      <li>Slit Lamp Examination</li>
                      <p className="parastyle">This examination looks for any diseases or abnormalities in the anterior portion of the eye, which includes the eyelids, lashes, lens, conjunctiva, cornea, and iris.</p>
                      <li>Tear Film Evaluation</li>
                      <p className="parastyle">This evaluation is done primarily to analyse presence of Dry Eye Disease (DED) and also to check the health of the 'tear film' whose role is to establish a high-quality refractive surface for the cornea and its well-being.</p>
                       <li>Applanation tonometry</li>  
                       <p className="parastyle">A diagnostic test that measures the pressure in the eye. This test is the gold standard for the assessment of intraocular pressure, which may be increased in conditions like glaucoma.</p>
                       <li>The cataract package consists of the following procedures</li>  
                      <p className="parastyle">Vision assessment, Refraction | Slit lamp evaluation, Applanation tonometry, Contrast sensitivity assessment, Lacrimal sac evaluation, Dilated retinal examination, Keratometry, Digital biometry (A-scan) , B-scan* (in case of media opacities)</p>
                       <li>Other specialty procedures</li>  
                       <p className="parastyle">Orthoptic evaluation, Squint evaluation, Contact lens evaluation and fitting, Low vision services, Contrast sensitivity assessment</p>  
                   </ul>
              
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 col-lg-6" style={{marginTop:"30px"}}>
               
                <img src={Cataractsimg} style={{height:"100%",width:"100%"}} />

              </div>
              </div>

               
                </div>  
              </div>
             
              
          </div>
         
    
         

            </div>
       
       
        
            );
        }
    }
   
        
   
export default App;
