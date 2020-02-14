

import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';

import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import axios from 'axios';
import config from '../config/config'
import $ from 'jquery';
import bootbox from 'bootbox';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Logoimg from '../images/logonew.png';

const bullet = "\u2022";
const bulletWithSpace = `${bullet} `;
const enter = 13;

const styledata = {
  backgroundColor:"gray",
  borderRadius: "5px 5px 0px 0px",
  boxShadow: "0px 2px grey",
  color: "black"
}


function opticaldata(){
  $('#casesheetdiv').hide();
  $('#opticaldiv').show();
  $('#opticaltable').show();
  $('#Prescriptiondiv').hide();
  $('#createid').hide();
  $('#Casesheetid').css("color", "white");
  $('#Opticalid').css("color", "black");
  $('#Prescriptionid').css("color", "white");

}



class Editcasesheetdata extends Component {

  constructor(props) {
    super(props) 

      var piddata = props.match.params.pid;
      var ciddata = props.match.params.cid;
      var aseg = props.match.params.aseg;
      console.log("aseg", aseg);
       aseg = aseg.split(",")
      var pseg = props.match.params.pseg;
      console.log("pseg", pseg);
      pseg = pseg.split(",")


     console.log("props", props.match.params);

    this.state = {
            page:props.match.params.page, 
            page1:props.match.params.page1, 
            dm: '',
            ht: '',
            ihd: '',
            allergy: '',
            other: '',
            optlist: [],
            prelist: [],
            va: '',
            re: 0,
            le : 0,
            redata: '',
            ledata: '',
            aseg: aseg,
            pseg : pseg,
            text: '',
            did : [],
            didvalue: '',
            didid: '',
            dididdata: '',
            username: '',
            phone: '',
            age: '',
            gender: '',
            address: '',
            pincode: '',
            patientid: piddata,
            cid: ciddata,
            oids: [],
            oiddata: [],
            pids: [],
            presdata: [],
            instruction: '',
            odsph: '',
            odcyl: '',
            odaxis: '',
            odva: '',
            ossph: '',
            oscyl: '',
            osaxis: '',
            osva: '',
            distre: '',
            distle: '',
            nearre: '',
            nearle: '',
            kryptok: null,
            unicvisd: 0,
            hiindex: 0,
            photochromic: 0,
            progreesive: 0,
            glass: 0,
            white: 0,
            arc: 0,
            executive: 0,
            plastic: 0,
            tint: 0,
            ophthalmologist: 0,
            opticalid: null,
            Tablet1: '',
            Tablet2: '',
            Tablet3: '',
            Tablet4: '',
            Tablet5: '',
            Tablet6: '',
            Tablet7: '',
            Tablet8: '',
            Tablet9: '',
            Tablet10: '',
            Re1: 0,
            Re2: 0,
            Re3: 0,
            Re4: 0,
            Re5: 0,
            Re6: 0,
            Re7: 0,
            Re8: 0,
            Re9: 0,
            Re10: 0,
            Le1: 0,
            Le2: 0,
            Le3: 0,
            Le4: 0,
            Le5: 0,
            Le6: 0,
            Le7: 0,
            Le8: 0,
            Le9: 0,
            Le10: 0,
            Time1: null,
            Time2: null,
            Time3: null,
            Time4: null,
            Time5: null,
            Time6: null,
            Time7: null,
            Time8: null,
            Time9: null,
            Time10: null,
            Day1: null,
            Day2: null,
            Day3: null,
            Day4: null,
            Day5: null,
            Day6: null,
            Day7: null,
            Day8: null,
            Day9: null,
            Day10: null,
            Review: '',
            prescriptionid: '',
            distext: '',
            reportStartDate: `${`${new Date().getDate()}`.padStart(2,0)}-${`${new Date().getMonth()+1}`.padStart(2,0)}-${new Date().getFullYear()}`,
          
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    
 }


 handleInput = (event) => {
  const { keyCode, target } = event;
  const { selectionStart, value } = target;
  
  if (keyCode === enter) {
    console.log('a');
    target.value = [...value]
      .map((c, i) => i === selectionStart - 1
        ? `\n${bulletWithSpace}`
        : c
      )
      .join('');
      console.log(target.value);
      
    target.selectionStart = selectionStart+bulletWithSpace.length;
    target.selectionEnd = selectionStart+bulletWithSpace.length;
  }
  
  if (value[0] !== bullet) {
    target.value = `${bulletWithSpace}${value}`;
  }
}




 closedtaperror(event){
  event.preventDefault();
  var modal = document.getElementById('diverroralert');
  $(modal).hide();
}

 prelistdata= event =>{

  if (event.target.name === 'distext') {
    $('#dischargealert').hide();
  }

console.log(event.target.name);
console.log("event", event.target.value);
  this.setState({
    [event.target.name]: event.target.value
  })

  }


  opticllistdata= event =>{

    console.log(event.target.name);
    console.log("event", event.target.value);
      this.setState({
        [event.target.name]: event.target.value
      })

      }


  checkboxdata = event => {
    var data =document.getElementById('re').checked;
   console.log("data", data);
   console.log("redata", this.state.redata);
   if(data){
    $('#redataid').val(this.state.redata);
    $('#redataid').show();
    this.setState({
        [event.target.name]: 1
    })
   } else {
    $('#redataid').hide();
    this.setState({
        [event.target.name]: 0
    })
   }
  
   
 };



 Ledata = event => {
  var data =document.getElementById('le').checked;

 console.log("data", data);
 if(data){
  $('#ledataid').val(this.state.ledata);
  $('#ledataid').show();
  this.setState({
      [event.target.name]: 1
  })
 } else {
  $('#ledataid').hide();
  this.setState({
      [event.target.name]: 0
  })
 }

 
};



typesdata = event => {

var id = event.target.name;

var data =document.getElementById(id).checked;


console.log("data", data);

if(data){
  this.setState({
      [event.target.name]: 1
  })
 } else {
  this.setState({
      [event.target.name]: 0
  })
 }



}



asegdata = event => {


  console.log(event.target.name);

  var id = event.target.name;

  var data = $('#'+id).val();

  console.log("data", data);

  this.setState({
    [event.target.name]: data
})



};
psegdata = event => {


  console.log(event.target.name);
  var data = $('#pseg').val();

  console.log("data", data);

  this.setState({
    [event.target.name]: data
})



};


handleSubmit(event) {

 var auth =  sessionStorage.getItem('auth');
 var sadmin =  sessionStorage.getItem('sadmin');

  event.preventDefault();

       var data = {
        cid : this.state.cid,
        dm: this.state.dm,
        ht: this.state.ht,
        ihd: this.state.ihd,
        allergy: this.state.allergy,
        other : this.state.other,
        optlist : this.state.optlist,
        preslist: this.state.prelist,
        va : this.state.va,
        re: this.state.redata,
        le: this.state.ledata,
        aseg: this.state.aseg,
        pseg: this.state.pseg,
        text : this.state.text,
        did : this.state.didid
       }
    
    
       var postdata = JSON.stringify(data);
    
       axios({
        method: 'post',
        url: config.url+'cs/ctk/editcasesheet',
        data: postdata,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      
    
         console.log(response);
    
      
         $("#divsucessalert").show();
         $("#spansucess").html('Case sheet Updated successfully');
    
         setTimeout( () => {
    
          $("#divsucessalert").hide();
           
          }, 1000 )
    
        })
        .catch( (error) => {
        //handle error
        console.log(error.response);
        $("#diverroralert").show();
        $("#spanerror").html(error.response.data.error);
    });
};





userdata(){


  var auth =  sessionStorage.getItem('auth');
 
  var data = {
   
    pid: this.state.patientid
    
  }

 

  axios({
    method: 'post',
    url: config.url+'patient/ctk/getpatient',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response.data.data);


     var patientdata = response.data.data;

     //this.setState({optlist: ["one","two","three","four"]})

     patientdata.map((patient) => {


      if(patient.gender == 0){
        this.setState({gender: "Male"})
      } else {
        this.setState({gender: "Female"})
      }

      this.setState({username: patient.name})
      this.setState({phone: patient.phone})
      this.setState({age: patient.age})
     
      this.setState({address: patient.address})
      this.setState({pincode: patient.pin})
      this.setState({patientid: patient._key})


     })



    })
     .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
}





casesheetdata(){


  var auth =  sessionStorage.getItem('auth');
  var sadmin =  sessionStorage.getItem('sadmin');
 
  var data = {
   
    pid: this.state.patientid
    
  }

 

  axios({
    method: 'post',
    url: config.url+'cs/ctk/getcasesheets',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response.data.data);


     var patientdata = response.data.data;



     console.log("patientdata", patientdata);

     //this.setState({optlist: ["one","two","three","four"]})

     patientdata.map((casesheet) => {
    console.log("optlist", casesheet.optlist);

       if(this.state.cid === casesheet._key){

          this.setState({dm: casesheet.dm})
          this.setState({ht: casesheet.ht})
          this.setState({ihd: casesheet.ihd})
          this.setState({allergy: casesheet.allergy})
          this.setState({other: casesheet.other})
          this.setState({optlist: casesheet.optlist})
          this.setState({prelist: casesheet.preslist})  
          this.setState({va: casesheet.va})
          this.setState({text: casesheet.text})
          //this.setState({didvalue: "none"})

          this.setState({didid: casesheet.did})

          this.setState({dididdata: casesheet.did})

          this.setState({aseg: casesheet.aseg})

          this.setState({pseg: casesheet.pseg})



          if(casesheet.re != ""){

            document.getElementById("re").checked = true;

            this.setState({redata: casesheet.re})

            $('#redataid').val(casesheet.re);

            $('#redataid').show();


          }

          if(casesheet.le != ""){

            document.getElementById("le").checked = true;

            this.setState({ledata: casesheet.le})

            $('#ledataid').val(casesheet.le);

            $('#ledataid').show();


          }

          console.log("did", casesheet.did);

         if(sadmin == "2"){
          if(casesheet.did != "" || casesheet.did != null){
            this.dischargesheet();
          }

         }

         

         
        
       }


     


     })

    

    })
     .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
}



dischargedata = () => {

  var auth =  sessionStorage.getItem('auth');
  
  axios({
    method: 'get',
    url: config.url+'discharge/ctk/listtemplates',
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response.data.data);

     this.setState({did: response.data.data})
   

    })
    .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });


}



dischargesheet = () => {


  var auth =  sessionStorage.getItem('auth');

  var data = {
    "did": this.state.didid
  }
  
  axios({
    method: 'post',
    url: config.url+'discharge/ctk/getdischargesheet',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response.data.data);

     this.setState({distext: response.data.data.content})

     $('#distext').show();
   

    })
    .catch( (response) => {
        //handle error
        console.log(response);
    });


}




componentDidMount(){
  var sadmin =  sessionStorage.getItem('sadmin');
  this.userdata();
  this.casesheetdata();

if(sadmin == "2"){
  this.dischargedata();
}

 
  
  

}



Casesheet = () => {
$('#casesheetdiv').show();
$('#opticaldiv').hide();
$('#Prescriptiondiv').hide();
$('#dischargediv').hide();
$('#createid').hide();
$('#Casesheetid').css("color", "black");
$('#Opticalid').css("color", "white");
$('#Prescriptionid').css("color", "white");
$('#Dischargeid').css("color", "white");

}
 Optical = () => {


      this.setState({instruction: ''})
      this.setState({ossph: ''})
      this.setState({oscyl: ''})
      this.setState({osaxis: ''})
      this.setState({osva: ''})
      this.setState({odsph: ''})
      this.setState({odcyl: ''})
      this.setState({odaxis: ''})
      this.setState({osva: ''})
      this.setState({distre: ''})
      this.setState({distle: ''})
      this.setState({nearre: ''})
      this.setState({nearle: ''})

       document.getElementById('kryptok').checked = false
      
       this.setState({kryptok: 0})
     
     
      document.getElementById('unicvisd').checked = false
     
      this.setState({unicvisd: 0})
   
    
      document.getElementById('hiindex').checked = false
    
      this.setState({hiindex: 0})
   
   
      document.getElementById('photochromic').checked = false
     
      this.setState({photochromic: 0})
 
      document.getElementById('progreesive').checked = false
     
      this.setState({progreesive: 0})
    
   
      document.getElementById('glass').checked = false
   
      this.setState({glass: 0})
 
   
      document.getElementById('white').checked = false
    
      this.setState({white: 0})
   
   
      document.getElementById('arc').checked = false
    
      this.setState({arc: 0})
    
      document.getElementById('executive').checked = false
     
      this.setState({executive: 0})
    
      document.getElementById('plastic').checked = false
     
      this.setState({plastic: 0})
    
      document.getElementById('tint').checked = false
     
      this.setState({tint: 0})
     
      document.getElementById('ophthalmologist').checked = false
     
      this.setState({ophthalmologist:0})




  var auth =  sessionStorage.getItem('auth');

  console.log("optlist", this.state.optlist);

  var data = {
    "oids": this.state.optlist
  }


 axios({
    method: 'post',
    url: config.url+'opticals/ctk/getopticals',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response.data.data);

     this.setState({oids: response.data.data})

     $('#casesheetdiv').hide();
     $('#opticaldiv').show();
     $('#Prescriptiondiv').hide();
     $('#dischargediv').hide();
     $('#createid').hide();
     $('#modifyid').hide();
     $('#Dischargeid').show();
     $('#createoptical').hide();
     $('#opticaltable').show();
     $('#Casesheetid').css("color", "white");
     $('#Opticalid').css("color", "black");
     $('#Prescriptionid').css("color", "white");
     $('#Dischargeid').css("color", "white");
     //const datalist = response.data.data;

     //this.setState({datalist: datalist})


    })
    .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });

    
   



}

Prescription = () => {


  this.setState({Tablet1:  ''})
    document.getElementById('Re1').checked = false
    document.getElementById('Le1').checked = false
    this.setState({Re1:  0})
    this.setState({Le1:  0})
    this.setState({Time1:  ''})
    this.setState({Day1:  ''})

    this.setState({Tablet2:  ''})
    document.getElementById('Re2').checked = false
    document.getElementById('Le2').checked = false
    this.setState({Re2:  0})
    this.setState({Le2:  0})
    this.setState({Time2:  ''})
    this.setState({Day2:  ''})

    this.setState({Tablet3:  ''})
    document.getElementById('Re3').checked = false
    document.getElementById('Le3').checked = false
    this.setState({Re3:  0})
    this.setState({Le3:  0})
    this.setState({Time3:  ''})
    this.setState({Day3:  ''})

    this.setState({Tablet4:  ''})
    document.getElementById('Re4').checked = false
    document.getElementById('Le4').checked = false
    this.setState({Re4:  0})
    this.setState({Le4:  0})
    this.setState({Time4:  ''})
    this.setState({Day4:  ''})

    this.setState({Tablet5:  ''})
    document.getElementById('Re5').checked = false
    document.getElementById('Le5').checked = false
    this.setState({Re5:  0})
    this.setState({Le5:  0})
    this.setState({Time5:  ''})
    this.setState({Day5:  ''})


   this.setState({Tablet6:  ''})
   document.getElementById('Re6').checked = false
   document.getElementById('Le6').checked = false
   this.setState({Re6:  0})
   this.setState({Le6:  0})
   this.setState({Time6: ''})
   this.setState({Day6:  ''})

   this.setState({Tablet7:  ''})
   document.getElementById('Re7').checked = false
   document.getElementById('Le7').checked = false
   this.setState({Re7:  0})
   this.setState({Le7:  0})
   this.setState({Time7:  ''})
   this.setState({Day7:  ''})

  this.setState({Tablet8:  ''})
  document.getElementById('Re8').checked = false
  document.getElementById('Le8').checked = false
  this.setState({Re8:  0})
  this.setState({Le8:  0})
  this.setState({Time8:  ''})
  this.setState({Day8:  ''})

  this.setState({Tablet9:  ''})
  document.getElementById('Re9').checked = false
  document.getElementById('Le9').checked = false
  this.setState({Re9:  0})
  this.setState({Le9:  0})
  this.setState({Time9:  ''})
  this.setState({Day9:  ''})

   this.setState({Tablet10:  ''})
   document.getElementById('Re10').checked = false
   document.getElementById('Le10').checked = false
   this.setState({Re10:  0})
   this.setState({Le10:  0})
   this.setState({Time10:  ''})
   this.setState({Day10:  ''})

var auth =  sessionStorage.getItem('auth');

  console.log("optlist", this.state.prelist);

  var data = {
    "pids": this.state.prelist
  }


 axios({
    method: 'post',
    url: config.url+'medicine/ctk/getprescriptions',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response.data.data);

     this.setState({pids: response.data.data})

   
     $('#casesheetdiv').hide();
     $('#opticaldiv').hide();
     $('#dischargediv').hide();
     $('#Prescriptiondiv').show();
     $('#Dischargeid').show();
     $('#createid').hide();
     $('#createpres').hide();
     $('#prestable').show();
     $('#Casesheetid').css("color", "white");
     $('#Opticalid').css("color", "white");
     $('#Prescriptionid').css("color", "black");
     $('#Dischargeid').css("color", "white");

     $('#Prescriptiondiv').css("height", "500px");
     //const datalist = response.data.data;

     //this.setState({datalist: datalist})


    })
     .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });

}



editoptical = (value) => {

  




var auth =  sessionStorage.getItem('auth');

  var oidarr = [];
  oidarr.push(value);

  var data = {
    "oids": oidarr
  }


 axios({
    method: 'post',
    url: config.url+'opticals/ctk/getopticals',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  
        this.setState({opticalid: value})

       

     console.log(response.data.data);

     

     response.data.data.map((optdata) => {
      this.setState({instruction: optdata.instruction})
      this.setState({ossph: optdata.visiondata.OS.SPH})
      this.setState({oscyl: optdata.visiondata.OS.CYL})
      this.setState({osaxis: optdata.visiondata.OS.AXIS})
      this.setState({osva: optdata.visiondata.OS.va})
      this.setState({odsph: optdata.visiondata.OD.SPH})
      this.setState({odcyl: optdata.visiondata.OD.CYL})
      this.setState({odaxis: optdata.visiondata.OD.AXIS})
      this.setState({odva: optdata.visiondata.OD.va})
      this.setState({distre: optdata.dist.RE})
      this.setState({distle: optdata.dist.LE})
      this.setState({nearre: optdata.near.RE})
      this.setState({nearle: optdata.near.LE})

     if(optdata.types[0] == 1){
       document.getElementById('kryptok').checked = true
       this.setState({kryptok: optdata.types[0]})
     }  
     if(optdata.types[1] == 1){
      document.getElementById('unicvisd').checked = true
      this.setState({unicvisd: optdata.types[1]})
    } 
    if(optdata.types[2] == 1){
      document.getElementById('hiindex').checked = true
      this.setState({hiindex: optdata.types[2]})
    } 
    if(optdata.types[3] == 1){
      document.getElementById('photochromic').checked = true
      this.setState({photochromic: optdata.types[3]})
    } 
    if(optdata.types[4] == 1){
      document.getElementById('progreesive').checked = true
      this.setState({progreesive: optdata.types[4]})
    } 
    if(optdata.types[5] == 1){
      document.getElementById('glass').checked = true
      this.setState({glass: optdata.types[5]})
    } 
    if(optdata.types[6] == 1){
      document.getElementById('white').checked = true
      this.setState({white: optdata.types[6]})
    } 
    if(optdata.types[7] == 1){
      document.getElementById('arc').checked = true
      this.setState({arc: optdata.types[7]})
    } 
    if(optdata.types[8] == 1){
      document.getElementById('executive').checked = true
      this.setState({executive: optdata.types[8]})
    } 
    if(optdata.types[9] == 1){
      document.getElementById('plastic').checked = true
      this.setState({plastic: optdata.types[9]})
    }
    if(optdata.types[10] == 1){
      document.getElementById('tint').checked = true
      this.setState({tint: optdata.types[10]})
    }  
    if(optdata.types[11] == 1){
      document.getElementById('ophthalmologist').checked = true
      this.setState({ophthalmologist: optdata.types[11]})
    }  

      


     })
      


     //this.setState({oids: response.data.data})

   

     //const datalist = response.data.data;

     //this.setState({datalist: datalist})


    })
    .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });



$('#opticaltable').hide();
$('#createoptical').show();
$('#opticalbutton').hide();

$('#createoptical').css('height', "auto");
$('#createid').hide();
$('#modifyid').show();
$('#printopticalbutton').show();

}


createoptical = () => {
$('#opticaltable').hide();
$('#createoptical').show();
$('#opticalbutton').hide();

$('#createoptical').css('height', "auto");
$('#createid').show();
$('#modifyid').hide();
$('#printopticalbutton').hide();

      this.setState({instruction: ''})
      this.setState({ossph: ''})
      this.setState({oscyl: ''})
      this.setState({osaxis: ''})
      this.setState({osva: ''})
      this.setState({odsph: ''})
      this.setState({odcyl: ''})
      this.setState({odaxis: ''})
      this.setState({osva: ''})
      this.setState({distre: ''})
      this.setState({distle: ''})
      this.setState({nearre: ''})
      this.setState({nearle: ''})


    
       document.getElementById('kryptok').checked = false
       this.setState({kryptok: 0})
     
     
      document.getElementById('unicvisd').checked = false
      this.setState({unicvisd: 0})
   
    
      document.getElementById('hiindex').checked = false
      this.setState({hiindex: 0})
   
   
      document.getElementById('photochromic').checked = false
      this.setState({photochromic: 0})
 
      document.getElementById('progreesive').checked = false
      this.setState({progreesive: 0})
    
   
      document.getElementById('glass').checked = false
      this.setState({glass: 0})
 
   
      document.getElementById('white').checked = false
      this.setState({white: 0})
   
   
      document.getElementById('arc').checked = false
      this.setState({arc: 0})
    
      document.getElementById('executive').checked = false
      this.setState({executive: 0})
    
      document.getElementById('plastic').checked = false
      this.setState({plastic: 0})
    
      document.getElementById('tint').checked = false
      this.setState({tint: 0})
     
      document.getElementById('ophthalmologist').checked = false
      this.setState({ophthalmologist:0})
  

}


 create = () => {


    var auth =  sessionStorage.getItem('auth');


    console.log("auth", auth);

    var typesarray = [];

    typesarray.push(this.state.kryptok);
    typesarray.push(this.state.unicvisd);
    typesarray.push(this.state.hiindex);
    typesarray.push(this.state.photochromic);
    typesarray.push(this.state.progreesive);
    typesarray.push(this.state.glass);
    typesarray.push(this.state.white);
    typesarray.push(this.state.arc);
    typesarray.push(this.state.executive);
    typesarray.push(this.state.plastic);
    typesarray.push(this.state.tint);
    typesarray.push(this.state.ophthalmologist);


    var osdata = {
      "SPH": this.state.ossph,
      "CYL": this.state.oscyl,
      "AXIS": this.state.osaxis,
      "va": this.state.osva
    }
    var oddata = {
      "SPH": this.state.odsph,
      "CYL": this.state.odcyl,
      "AXIS": this.state.odaxis,
      "va": this.state.odva
    }

    var distdata = {
      "RE": this.state.distre,
      "LE": this.state.distle
    }
    var neardata = {
      "RE": this.state.nearre,
      "LE": this.state.nearle
    }

    var vdata = {
      OS: osdata,
      OD: oddata
    }; 


     console.log("vdata", vdata);

    var data = {
      pid: this.state.patientid,
      instruction: this.state.instruction,
      vdata : vdata,
      dist: distdata,
      near: neardata,
      types: typesarray
    } 

    console.log("data", data);



    

    axios({
      method: 'post',
      url: config.url+'opticals/ctk/createoptical',
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'auth': auth
      }
      })
      .then( (response) => {
          //handle success
    

       console.log(response.data.data);


       //this.state.oids.push(response.data.data);

       this.state.optlist.push(response.data.data._key);


       //this.setState({oids: this.state.oids})

       this.setState({oiddata:  this.state.optlist})


       console.log("this.state.prelist", this.state.optlist);

    
      var editdata = {
        cid: this.state.cid,
        optlist: this.state.optlist
      }

        

        axios({
    method: 'post',
    url: config.url+'cs/ctk/editcasesheet',
    data: editdata,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response);
     $("#printopticalbutton").show();

     $("#divsucessalert").show();
     $("#spansucess").html('Optical Created successfully');

     setTimeout( () => {

      $("#divsucessalert").hide();
      this.Optical();
       
      }, 1000 )



     

  
    })
    .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
      })
       .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });



 }



 modifyopticaldata = () => {


  var auth =  sessionStorage.getItem('auth');


    console.log("auth", auth);

    var typesarray = [];

    typesarray.push(this.state.kryptok);
    typesarray.push(this.state.unicvisd);
    typesarray.push(this.state.hiindex);
    typesarray.push(this.state.photochromic);
    typesarray.push(this.state.progreesive);
    typesarray.push(this.state.glass);
    typesarray.push(this.state.white);
    typesarray.push(this.state.arc);
    typesarray.push(this.state.executive);
    typesarray.push(this.state.plastic);
    typesarray.push(this.state.tint);
    typesarray.push(this.state.ophthalmologist);


    var osdata = {
      "SPH": this.state.ossph,
      "CYL": this.state.oscyl,
      "AXIS": this.state.osaxis,
      "va": this.state.osva
    }
    var oddata = {
      "SPH": this.state.odsph,
      "CYL": this.state.odcyl,
      "AXIS": this.state.odaxis,
      "va": this.state.odva
    }

    var distdata = {
      "RE": this.state.distre,
      "LE": this.state.distle
    }
    var neardata = {
      "RE": this.state.nearre,
      "LE": this.state.nearle
    }

    var vdata = {
      OS: osdata,
      OD: oddata
    }; 


     console.log("vdata", vdata);

    var data = {
      oid : this.state.opticalid,
      instruction: this.state.instruction,
      vdata : vdata,
      dist: distdata,
      near: neardata,
      types: typesarray
    } 

    console.log("data", data);



    

    axios({
      method: 'post',
      url: config.url+'opticals/ctk/editoptical',
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'auth': auth
      }
      })
      .then( (response) => {
          //handle success
    

       console.log(response);


       //this.state.oids.push(response.data.data);

       //this.state.optlist.push(response.data.data._key);


       //this.setState({oids: this.state.oids})

      // this.setState({oiddata:  this.state.optlist})


       //console.log("this.state.prelist", this.state.optlist);

    
      var editdata = {
        cid: this.state.cid,
        optlist: this.state.optlist
      }

        

        axios({
    method: 'post',
    url: config.url+'cs/ctk/editcasesheet',
    data: editdata,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response);

     $("#divsucessalert").show();
     $("#spansucess").html('Optical Updated successfully');

     setTimeout( () => {

      $("#divsucessalert").hide();

      this.Optical();
       
      }, 1000 )


    

  
    })
   .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });

      })
      .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });

  

 }
 

 deleteoptical = (optid) => {

  var auth =  sessionStorage.getItem('auth');


    var data = {
      "oid": optid
    }

    
    var optdata = this
    
    var statedata = this.state;

    var setstate = this.setState;

    bootbox.confirm({

      message: "Do you want to Delete this Optical?",
      buttons: {
        
          confirm: {
           
                label: 'Confirm',
                className: 'btn-success'
          },
          cancel: {
            
               label: 'Cancel',
               className: 'btn-danger float-right'
          }
      },
      callback: function (result) {

        if (result === true) {


          axios({
            method: 'post',
            url: config.url+'opticals/ctk/deleteopticals',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'auth': auth
            }
            })
            .then( (response) => {
                //handle success
          
               
        
             console.log(response);
        
            


              var index = statedata.optlist.indexOf(optid);
        
             
              statedata.optlist.splice(index, 1);
        
        
              console.log("optlist", statedata.optlist);
        
              optdata.setState({optlist:  statedata.optlist})
              optdata.setState({oiddata:  statedata.optlist})


             
        
              var editdata = {
                cid: statedata.cid,
                optlist: statedata.optlist
              }
        
              axios({
                method: 'post',
                url: config.url+'cs/ctk/editcasesheet',
                data: editdata,
                headers: {
                    'Content-Type': 'application/json',
                    'auth': auth
                }
                })
                .then( (response) => {
                    //handle success
              
            
                 console.log(response);


                 $("#divsucessalert").show();
                 $("#spansucess").html('Deleted successfully');
         
                setTimeout(function () {
                 $("#divsucessalert").hide();

                 optdata.Optical();
            
               },1000)
            
                 
            
              
                })
                 .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
            })
             .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });


         }

      }

    });
    
 }

Goback = () =>{
   
     // window.history.back();

     if(this.state.page === "viewpatient"){
      
      window.location = "/Viewpatient" + "/" + this.state.patientid + "/" + this.state.page1;

     }
     else{
      window.location = "/Casesheets" + "/" + this.state.patientid
     }
  
  }

  createprescription = () => {

    this.setState({Review:  ''})
    this.setState({Tablet1:  ''})
    document.getElementById('Re1').checked = false
    document.getElementById('Le1').checked = false
    this.setState({Re1:  0})
    this.setState({Le1:  0})
    this.setState({Time1:  ''})
    this.setState({Day1:  ''})

    this.setState({Tablet2:  ''})
    document.getElementById('Re2').checked = false
    document.getElementById('Le2').checked = false
    this.setState({Re2:  0})
    this.setState({Le2:  0})
    this.setState({Time2:  ''})
    this.setState({Day2:  ''})

    this.setState({Tablet3:  ''})
    document.getElementById('Re3').checked = false
    document.getElementById('Le3').checked = false
    this.setState({Re3:  0})
    this.setState({Le3:  0})
    this.setState({Time3:  ''})
    this.setState({Day3:  ''})

    this.setState({Tablet4:  ''})
    document.getElementById('Re4').checked = false
    document.getElementById('Le4').checked = false
    this.setState({Re4:  0})
    this.setState({Le4:  0})
    this.setState({Time4:  ''})
    this.setState({Day4:  ''})

    this.setState({Tablet5:  ''})
    document.getElementById('Re5').checked = false
    document.getElementById('Le5').checked = false
    this.setState({Re5:  0})
    this.setState({Le5:  0})
    this.setState({Time5:  ''})
    this.setState({Day5:  ''})


   this.setState({Tablet6:  ''})
   document.getElementById('Re6').checked = false
   document.getElementById('Le6').checked = false
   this.setState({Re6:  0})
   this.setState({Le6:  0})
   this.setState({Time6: ''})
   this.setState({Day6:  ''})

   this.setState({Tablet7:  ''})
   document.getElementById('Re7').checked = false
   document.getElementById('Le7').checked = false
   this.setState({Re7:  0})
   this.setState({Le7:  0})
   this.setState({Time7:  ''})
   this.setState({Day7:  ''})

  this.setState({Tablet8:  ''})
  document.getElementById('Re8').checked = false
  document.getElementById('Le8').checked = false
  this.setState({Re8:  0})
  this.setState({Le8:  0})
  this.setState({Time8:  ''})
  this.setState({Day8:  ''})

  this.setState({Tablet9:  ''})
  document.getElementById('Re9').checked = false
  document.getElementById('Le9').checked = false
  this.setState({Re9:  0})
  this.setState({Le9:  0})
  this.setState({Time9:  ''})
  this.setState({Day9:  ''})

   this.setState({Tablet10:  ''})
   document.getElementById('Re10').checked = false
   document.getElementById('Le10').checked = false
   this.setState({Re10:  0})
   this.setState({Le10:  0})
   this.setState({Time10:  ''})
   this.setState({Day10:  ''})

   $('#printbutton-pres').hide();
    $('#casesheetdiv').hide();
    $('#opticaldiv').hide();
    $('#Prescriptiondiv').show(); 
    $('#Dischargediv').hide();
    $('#createid').hide();
    $('#prestable').hide();
    $('#createpres').show();
    $('#modifypresid').hide();
    $('#createpresid').show();
    $('#Casesheetid').css("color", "white");
    $('#Opticalid').css("color", "white");
    $('#Prescriptionid').css("color", "black");
    $('#Dischargeid').css("color", "white");

    $('#Prescriptiondiv').css("height", "auto");

  }


  createpres = () => {
    var auth =  sessionStorage.getItem('auth');


    var medicines = [];

     var med1 = {
       "med": this.state.Tablet1,
       "re": this.state.Re1,
       "le": this.state.Le1,
       "times": parseInt(this.state.Time1),
       "days": parseInt(this.state.Day1)
     }
     var med2 = {
      "med": this.state.Tablet2,
      "re": this.state.Re2,
      "le": this.state.Le2,
      "times": parseInt(this.state.Time2),
      "days": parseInt(this.state.Day2)
    }
    var med3 = {
      "med": this.state.Tablet3,
      "re": this.state.Re3,
      "le": this.state.Le3,
      "times": parseInt(this.state.Time3),
      "days": parseInt(this.state.Day3)
    }
    var med4 = {
      "med": this.state.Tablet4,
      "re": this.state.Re4,
      "le": this.state.Le4,
      "times": parseInt(this.state.Time4),
      "days": parseInt(this.state.Day4)
    }
    var med5 = {
      "med": this.state.Tablet5,
      "re": this.state.Re5,
      "le": this.state.Le5,
      "times": parseInt(this.state.Time5),
      "days": parseInt(this.state.Day5)
    }
    var med6 = {
      "med": this.state.Tablet6,
      "re": this.state.Re6,
      "le": this.state.Le6,
      "times": parseInt(this.state.Time6),
      "days": parseInt(this.state.Day6)
    }
    var med7 = {
      "med": this.state.Tablet7,
      "re": this.state.Re7,
      "le": this.state.Le7,
      "times": parseInt(this.state.Time7),
      "days": parseInt(this.state.Day7)
    }
    var med8 = {
      "med": this.state.Tablet8,
      "re": this.state.Re8,
      "le": this.state.Le8,
      "times": parseInt(this.state.Time8),
      "days": parseInt(this.state.Day8)
    }
    var med9 = {
      "med": this.state.Tablet9,
      "re": this.state.Re9,
      "le": this.state.Le9,
      "times": parseInt(this.state.Time9),
      "days": parseInt(this.state.Day9)
    }
    var med10 = {
      "med": this.state.Tablet10,
      "re": this.state.Re10,
      "le": this.state.Le10,
      "times": parseInt(this.state.Time10),
      "days": parseInt(this.state.Day10)
    }

   if(this.state.Tablet1 != ""){
     medicines.push(med1);
   }
   if(this.state.Tablet2 != ""){
    medicines.push(med2);
  }
  if(this.state.Tablet3 != ""){
    medicines.push(med3);
  }
  if(this.state.Tablet4 != ""){
    medicines.push(med4);
  }
  if(this.state.Tablet5 != ""){
    medicines.push(med5);
  }
  if(this.state.Tablet6 != ""){
    medicines.push(med6);
  }
  if(this.state.Tablet7 != ""){
    medicines.push(med7);
  }
  if(this.state.Tablet8 != ""){
    medicines.push(med8);
  }
  if(this.state.Tablet9 != ""){
    medicines.push(med9);
  }
  if(this.state.Tablet10 != ""){
    medicines.push(med10);
  }
   

  var predata = {
    pid: this.state.patientid,
    review: this.state.Review,
    medicines: medicines
  }
   

    console.log("predata", predata);

     
    axios({
      method: 'post',
      url: config.url+'medicine/ctk/createprescription',
      data: predata,
      headers: {
          'Content-Type': 'application/json',
          'auth': auth
      }
      })
      .then( (response) => {
          //handle success
    

       console.log(response);



       this.state.pids.push(response.data.data);

         this.state.prelist.push(response.data.data._key);


         this.setState({pids: this.state.pids})

         this.setState({prelist:  this.state.prelist})

      
          console.log("pids", this.state.pids);
          console.log("prelist", this.state.prelist);
          console.log("cid", this.state.cid);
       
        var editdata = {
          cid: this.state.cid,
          preslist: this.state.prelist
        }




       axios({
        method: 'post',
        url: config.url+'cs/ctk/editcasesheet',
        data: editdata,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      

         console.log(response);

         $("#printbutton-pres").show();

         $("#divsucessalert").show();
         $("#spansucess").html('Prescription Created successfully');

         setTimeout( () => {

        $("#divsucessalert").hide();
        this.Prescription();
         
        }, 1000 )


        



      
        })
        .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });


      })
       .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });

     

   }


   editpres = (presid) => {

    $('#casesheetdiv').hide();
    $('#opticaldiv').hide();
    $('#Prescriptiondiv').show();
    $('#dischargediv').hide();
    $('#createid').hide();
    $('#prestable').hide();
    $('#createpres').show();
    $('#modifypresid').show();
    $('#createpresid').hide();
    $('#Casesheetid').css("color", "white");
    $('#Opticalid').css("color", "white");
    $('#Prescriptionid').css("color", "black");
    $('#Dischargeid').css("color", "white");
    $('#Prescriptiondiv').css("height", "auto");
    $("#printbutton-pres").show();

    var auth =  sessionStorage.getItem('auth');
    var presarr = [];

    presarr.push(presid);

    var data = {
      "pids": presarr
    }


    axios({
      method: 'post',
      url: config.url+'medicine/ctk/getprescriptions',
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'auth': auth
      }
      })
      .then( (response) => {
          //handle success
      this.setState({prescriptionid:  presid})
       response.data.data.map((pres)=>{

        this.setState({Review:  pres.review})
        pres.medicines.map((medicine, index)=>{
          console.log("medicine", medicine.med);
          console.log("index", index);
         
          if(index === 0){
            this.setState({Tablet1:  medicine.med})

           if(medicine.re === 1){
             document.getElementById('Re1').checked = true
             this.setState({Re1:  medicine.re})
           }
           if(medicine.le === 1){
            document.getElementById('Le1').checked = true
            this.setState({Le1:  medicine.le})
          }

          this.setState({Time1:  medicine.times})
          this.setState({Day1:  medicine.days})
           
          }
          if(index === 1){
            this.setState({Tablet2:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re2').checked = true
              this.setState({Re2:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le2').checked = true
             this.setState({Le2:  medicine.le})
           }
 
           this.setState({Time2:  medicine.times})
           this.setState({Day2:  medicine.days})
          }
          if(index === 2){
            this.setState({Tablet3:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re3').checked = true
              this.setState({Re3:  medicine.re})
            }

           

            if(medicine.le === 1){
             document.getElementById('Le3').checked = true
             this.setState({Le3:  medicine.le})
           }
           

           this.setState({Time3:  medicine.times})
           this.setState({Day3:  medicine.days})

          }
          if(index === 3){
            this.setState({Tablet4:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re4').checked = true
              this.setState({Re4:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le4').checked = true
             this.setState({Le4:  medicine.re})
           }
 
           this.setState({Time4:  medicine.times})
           this.setState({Day4:  medicine.days})
          }
          if(index === 4){
            this.setState({Tablet5:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re5').checked = true
              this.setState({Re5:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le5').checked = true
             this.setState({Le5:  medicine.le})
           }
 
           this.setState({Time5:  medicine.times})
           this.setState({Day5:  medicine.days})
          }
          if(index === 5){
            this.setState({Tablet6:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re6').checked = true
              this.setState({Re6:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le6').checked = true
             this.setState({Le6:  medicine.le})
           }
 
           this.setState({Time6:  medicine.times})
           this.setState({Day6:  medicine.days})
          }
          if(index === 6){
            this.setState({Tablet7:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re7').checked = true
              this.setState({Re7:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le7').checked = true
             this.setState({Le7:  medicine.le})
           }
 
           this.setState({Time7:  medicine.times})
           this.setState({Day7:  medicine.days})
          }
          if(index === 7){
            this.setState({Tablet8:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re8').checked = true
              this.setState({Re8:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le8').checked = true
             this.setState({Le8:  medicine.le})
           }
 
           this.setState({Time8:  medicine.times})
           this.setState({Day8:  medicine.days})
          }
          if(index === 8){
            this.setState({Tablet9:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re9').checked = true
              this.setState({Re9:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le9').checked = true
             this.setState({Le9:  medicine.le})
           }
 
           this.setState({Time9:  medicine.times})
           this.setState({Day9:  medicine.days})
          }
          if(index === 9){
            this.setState({Tablet10:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re10').checked = true
              this.setState({Re10:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le10').checked = true
             this.setState({Le10:  medicine.le})
           }
 
           this.setState({Time10:  medicine.times})
           this.setState({Day10:  medicine.days})
          }

          

        })


       })
      

    
      })
      .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });








   }


  editpresdata = () => {

    var auth =  sessionStorage.getItem('auth');

    var medicines = [];

     var med1 = {
       "med": this.state.Tablet1,
       "re": this.state.Re1,
       "le": this.state.Le1,
       "times": parseInt(this.state.Time1),
       "days": parseInt(this.state.Day1)
     }
     var med2 = {
      "med": this.state.Tablet2,
      "re": this.state.Re2,
      "le": this.state.Le2,
      "times": parseInt(this.state.Time2),
      "days": parseInt(this.state.Day2)
    }
    var med3 = {
      "med": this.state.Tablet3,
      "re": this.state.Re3,
      "le": this.state.Le3,
      "times": parseInt(this.state.Time3),
      "days": parseInt(this.state.Day3)
    }
    var med4 = {
      "med": this.state.Tablet4,
      "re": this.state.Re4,
      "le": this.state.Le4,
      "times": parseInt(this.state.Time4),
      "days": parseInt(this.state.Day4)
    }
    var med5 = {
      "med": this.state.Tablet5,
      "re": this.state.Re5,
      "le": this.state.Le5,
      "times": parseInt(this.state.Time5),
      "days": parseInt(this.state.Day5)
    }
    var med6 = {
      "med": this.state.Tablet6,
      "re": this.state.Re6,
      "le": this.state.Le6,
      "times": parseInt(this.state.Time6),
      "days": parseInt(this.state.Day6)
    }
    var med7 = {
      "med": this.state.Tablet7,
      "re": this.state.Re7,
      "le": this.state.Le7,
      "times": parseInt(this.state.Time7),
      "days": parseInt(this.state.Day7)
    }
    var med8 = {
      "med": this.state.Tablet8,
      "re": this.state.Re8,
      "le": this.state.Le8,
      "times": parseInt(this.state.Time8),
      "days": parseInt(this.state.Day8)
    }
    var med9 = {
      "med": this.state.Tablet9,
      "re": this.state.Re9,
      "le": this.state.Le9,
      "times": parseInt(this.state.Time9),
      "days": parseInt(this.state.Day9)
    }
    var med10 = {
      "med": this.state.Tablet10,
      "re": this.state.Re10,
      "le": this.state.Le10,
      "times": parseInt(this.state.Time10),
      "days": parseInt(this.state.Day10)
    }

   if(this.state.Tablet1 != ""){
     medicines.push(med1);
   }
   if(this.state.Tablet2 != ""){
    medicines.push(med2);
  }
  if(this.state.Tablet3 != ""){
    medicines.push(med3);
  }
  if(this.state.Tablet4 != ""){
    medicines.push(med4);
  }
  if(this.state.Tablet5 != ""){
    medicines.push(med5);
  }
  if(this.state.Tablet6 != ""){
    medicines.push(med6);
  }
  if(this.state.Tablet7 != ""){
    medicines.push(med7);
  }
  if(this.state.Tablet8 != ""){
    medicines.push(med8);
  }
  if(this.state.Tablet9 != ""){
    medicines.push(med9);
  }
  if(this.state.Tablet10 != ""){
    medicines.push(med10);
  }
   

  var predata = {
    pid: this.state.prescriptionid,
    review: this.state.Review,
    medicines: medicines
  }


  console.log("predata", predata);

  axios({
    method: 'post',
    url: config.url+'medicine/ctk/editprescription',
    data: predata,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log(response);

        console.log("pids", this.state.pids);
        console.log("prelist", this.state.prelist);
        console.log("cid", this.state.cid);
     
      var editdata = {
        cid: this.state.cid,
        preslist: this.state.prelist
      }




     axios({
      method: 'post',
      url: config.url+'cs/ctk/editcasesheet',
      data: editdata,
      headers: {
          'Content-Type': 'application/json',
          'auth': auth
      }
      })
      .then( (response) => {
          //handle success
    

       console.log(response);


       $("#divsucessalert").show();
       $("#spansucess").html('Prescription Updated successfully');

           setTimeout( () => {

          $("#divsucessalert").hide();
          this.Prescription();
          }, 1000 )

       

    
      })
       .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });


    })
    .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });







  }



  Prestypesdata = event => {

    var id = event.target.name;

    console.log("id", id);

    var data =document.getElementById(id).checked;


    console.log("data", data);

    if(data){
      this.setState({
          [event.target.name]: 1
      })
     } else {
      this.setState({
          [event.target.name]: 0
      })
     }



   }

   deletepres = (presid) => {


    var auth =  sessionStorage.getItem('auth');


    var data = {
      "pid": presid
    }
    

    var presdata = this

    bootbox.confirm({

      message: "Do you want to Delete this Prescription?",
      buttons: {
        
          confirm: {
           
                label: 'Confirm',
                className: 'btn-success'
          },
          cancel: {
            
               label: 'Cancel',
               className: 'btn-danger float-right'
          }
      },
      callback: function (result) {

        if (result === true) {


          axios({
            method: 'post',
            url: config.url+'medicine/ctk/deleteprescription',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'auth': auth
            }
            })
            .then( (response) => {
                //handle success
          
        
             console.log(response);
        
              var index = presdata.state.prelist.indexOf(presid);
        
             
              presdata.state.prelist.splice(index, 1);
        
        
              console.log("prelist", presdata.state.prelist);
        
              presdata.setState({prelist:  presdata.state.prelist})
        
              var editdata = {
                cid: presdata.state.cid,
                preslist: presdata.state.prelist
              }
        
              axios({
                method: 'post',
                url: config.url+'cs/ctk/editcasesheet',
                data: editdata,
                headers: {
                    'Content-Type': 'application/json',
                    'auth': auth
                }
                })
                .then( (response) => {
                    //handle success
              
            
                 console.log(response);


                 $("#divsucessalert").show();
                 $("#spansucess").html('Deleted successfully');
         
                setTimeout(function () {
                 $("#divsucessalert").hide();
                 presdata.Prescription();
               },1000)
            
                
            
              
                })
                .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
            })
             .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });



         }

      }

    });




   
  




   }



   patientdetailuparrow = () => {
    $('#downarrow').hide();
    $('#uparrow').show();
    $('#patientdetail').hide();
  }

 patientdetaildownarrow = () => {
  $('#downarrow').show();
  $('#uparrow').hide();
  $('#patientdetail').show();
 }
 
 downarrowoptical = () => {

  $('#downarrow-optical').hide();
  $('#uparrow-optical').show();
  $('#patient-optical').hide();

 }

 uparrowoptical = () => {
  $('#downarrow-optical').show();
  $('#uparrow-optical').hide();
  $('#patient-optical').show();
 }

 downarrowpres = () => {

  $('#downarrow-pres').hide();
  $('#uparrow-pres').show();
  $('#patient-pres').hide();

 }

 uparrowpres = () => {
  $('#downarrow-pres').show();
  $('#uparrow-pres').hide();
  $('#patient-pres').show();
 }


 downarrowdis = () => {
  $("#dischargediv").css("height","500px")
  $('#downarrow-dis').hide();
  $('#uparrow-dis').show();
  $('#patient-dis').hide();

 }

 uparrowdis = () => {
  $("#dischargediv").css("height","auto")
  $('#downarrow-dis').show();
  $('#uparrow-dis').hide();
  $('#patient-dis').show();
 }




 didlistdata= event =>{

      
  console.log(event.target.name);
  console.log("event", event.target.value);
  console.log("event", event.target.option);
  
    this.setState({
      [event.target.name]: event.target.value
     
    })

    // this.setState({
    //   didid : event.target.value
     
    // })

    var auth =  sessionStorage.getItem('auth');


    var did = event.target.value;

    console.log("did", did);
    console.log("did type", typeof did);

     if(did != "none"){


      axios({
        method: 'get',
        url: config.url+'discharge/ctk/listtemplates',
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      

         console.log(response.data.data);

         response.data.data.map((discharge) => {

          if(discharge._key === did){
            console.log("name", discharge.name);

            this.setState({
              distext : discharge.content
             
            })
            $('#dischargealert').hide();

            $('#dischtext').show();

          }

         })


         //window.location = '/Casesheets/'+this.state.patientid;

      
        })
         .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });



     } else {
      this.setState({
        distext : '',
        dididdata: ''
       
      })

       $('#dischtext').show();
     }

    



    }


    dischargeoption = () => {
      var auth =  sessionStorage.getItem('auth');

      var sadmin =  sessionStorage.getItem('sadmin');

      if(sadmin == "2"){

     axios({
    method: 'get',
    url: config.url+'discharge/ctk/listtemplates',
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {
        //handle success
  

     console.log("discharge",response.data.data);

     document.getElementById('discontent').disabled  = false;
     $('#disbutton').show();
     $('#casesheetdiv').hide();
     $('#opticaldiv').hide();
     $('#Prescriptiondiv').hide();
     $('#dischargediv').show();
     $('#createid').hide();
     $('#createpres').hide();
     $('#prestable').show();
     $('#Casesheetid').css("color", "white");
     $('#Opticalid').css("color", "white");
     $('#Prescriptionid').css("color", "white");
     $('#Dischargeid').css("color", "black");






     this.setState({did: response.data.data})
   

    })
    .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
} else {

  var data = {
    "did": this.state.didid
  }


  axios({
    method: 'post',
    url: config.url+'discharge/ctk/getdischargesheet',
    data: data,
    headers: {
        'Content-Type': 'application/json',
        'auth': auth
    }
    })
    .then( (response) => {


      console.log("dis", response);

        //handle success
  
        

        if(response.data.data){
          console.log("dis resp", response.data.data);
          this.setState({
            distext : response.data.data.content
           
          })
        }

        

        
    document.getElementById('discontent').disabled  = true;
     $('#disbutton').hide();
     $('#casesheetdiv').hide();
     $('#opticaldiv').hide();
     $('#Prescriptiondiv').hide();
     $('#dischargediv').show();
     $('#createid').hide();
     $('#createpres').hide();
     $('#prestable').show();
     $('#Casesheetid').css("color", "white");
     $('#Opticalid').css("color", "white");
     $('#Prescriptionid').css("color", "white");
     $('#Dischargeid').css("color", "black");




    })
    .catch( (error) => {
      //handle error
      //console.log(error);
     // $("#diverroralert").show();
      //$("#spanerror").html(error.response.data.error);
  });

}
}


    createdischarge = () => {

      var auth =  sessionStorage.getItem('auth');
  

      if(this.state.distext == ""){
        $("#dischargealert").show();
        return false;
      }


      var data = {
        "content": this.state.distext
      }

      axios({
        method: 'post',
        url: config.url+'discharge/ctk/createdischargesheet',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      
    
         console.log("responce",response.data.data);
    
         this.setState({didid: response.data.data._key})

         
    
       
         var data = {
          cid: this.state.cid,
          did : response.data.data._key
         }
      
      
         var postdata = JSON.stringify(data);
      
         axios({
          method: 'post',
          url: config.url+'cs/ctk/editcasesheet',
          data: postdata,
          headers: {
              'Content-Type': 'application/json',
              'auth': auth
          }
          })
          .then( (response) => {
              //handle success
        
      
           console.log(response);
      
        
           $("#divsucessalert").show();
           $("#spansucess").html('Discharge sheet created');
      
           setTimeout( () => {
      
            $("#divsucessalert").hide();
             
            }, 2000 )
      
          })
          .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });
       
    
        })
        .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });
      




    }


    updatedischarge = () => {

      var auth =  sessionStorage.getItem('auth');
  

      var data = {
        "did": this.state.didid,
        "content": this.state.distext
      }

      axios({
        method: 'post',
        url: config.url+'discharge/ctk/modifydischargesheet',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {

          $("#divsucessalert").show();
          $("#spansucess").html('Discharge sheet updated');
     
          setTimeout( () => {
     
           $("#divsucessalert").hide();
            
           }, 2000 )

        })
        .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });
            //handle success


    }


    printcasesheet = () => {
          
      window.onafterprint = function(e){
      
        console.log('Print Dialog Closed..');
       
        $('#printdisc').hide();
        $('#casesheetdata').show();
        $('#footerdatacheck').show();
        $('#breadcrumb').show();
    };

    $('#printdisc').show();
    $('#casesheetdata').hide();
    $('#footerdatacheck').hide();
    $('#breadcrumb').hide();
      window.print();

     
      
    }


    printpresdata = (presid) => {

      var auth =  sessionStorage.getItem('auth');

      this.setState({Review:  ''})
    this.setState({Tablet1:  ''})
    document.getElementById('Re1').checked = false
    document.getElementById('Le1').checked = false
    this.setState({Re1:  0})
    this.setState({Le1:  0})
    this.setState({Time1:  ''})
    this.setState({Day1:  ''})

    this.setState({Tablet2:  ''})
    document.getElementById('Re2').checked = false
    document.getElementById('Le2').checked = false
    this.setState({Re2:  0})
    this.setState({Le2:  0})
    this.setState({Time2:  ''})
    this.setState({Day2:  ''})

    this.setState({Tablet3:  ''})
    document.getElementById('Re3').checked = false
    document.getElementById('Le3').checked = false
    this.setState({Re3:  0})
    this.setState({Le3:  0})
    this.setState({Time3:  ''})
    this.setState({Day3:  ''})

    this.setState({Tablet4:  ''})
    document.getElementById('Re4').checked = false
    document.getElementById('Le4').checked = false
    this.setState({Re4:  0})
    this.setState({Le4:  0})
    this.setState({Time4:  ''})
    this.setState({Day4:  ''})

    this.setState({Tablet5:  ''})
    document.getElementById('Re5').checked = false
    document.getElementById('Le5').checked = false
    this.setState({Re5:  0})
    this.setState({Le5:  0})
    this.setState({Time5:  ''})
    this.setState({Day5:  ''})


   this.setState({Tablet6:  ''})
   document.getElementById('Re6').checked = false
   document.getElementById('Le6').checked = false
   this.setState({Re6:  0})
   this.setState({Le6:  0})
   this.setState({Time6: ''})
   this.setState({Day6:  ''})

   this.setState({Tablet7:  ''})
   document.getElementById('Re7').checked = false
   document.getElementById('Le7').checked = false
   this.setState({Re7:  0})
   this.setState({Le7:  0})
   this.setState({Time7:  ''})
   this.setState({Day7:  ''})

  this.setState({Tablet8:  ''})
  document.getElementById('Re8').checked = false
  document.getElementById('Le8').checked = false
  this.setState({Re8:  0})
  this.setState({Le8:  0})
  this.setState({Time8:  ''})
  this.setState({Day8:  ''})

  this.setState({Tablet9:  ''})
  document.getElementById('Re9').checked = false
  document.getElementById('Le9').checked = false
  this.setState({Re9:  0})
  this.setState({Le9:  0})
  this.setState({Time9:  ''})
  this.setState({Day9:  ''})

   this.setState({Tablet10:  ''})
   document.getElementById('Re10').checked = false
   document.getElementById('Le10').checked = false
   this.setState({Re10:  0})
   this.setState({Le10:  0})
   this.setState({Time10:  ''})
   this.setState({Day10:  ''})

     

     var presarr = [];

     presarr.push(presid);
     var data = {
       "pids": presarr
     }
      

     axios({
      method: 'post',
      url: config.url+'medicine/ctk/getprescriptions',
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'auth': auth
      }
      })
      .then( (response) => {
          //handle success
      this.setState({prescriptionid:  presid})
       response.data.data.map((pres)=>{

        this.setState({Review:  pres.review})
        pres.medicines.map((medicine, index)=>{
          console.log("medicine", medicine.med);
          console.log("index", index);
         
          if(index === 0){
            this.setState({Tablet1:  medicine.med})

           if(medicine.re === 1){
             document.getElementById('Re1').checked = true
             this.setState({Re1:  medicine.re})
           }
           if(medicine.le === 1){
            document.getElementById('Le1').checked = true
            this.setState({Le1:  medicine.le})
          }

          this.setState({Time1:  medicine.times})
          this.setState({Day1:  medicine.days})
           
          }
          if(index === 1){
            this.setState({Tablet2:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re2').checked = true
              this.setState({Re2:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le2').checked = true
             this.setState({Le2:  medicine.le})
           }
 
           this.setState({Time2:  medicine.times})
           this.setState({Day2:  medicine.days})
          }
          if(index === 2){
            this.setState({Tablet3:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re3').checked = true
              this.setState({Re3:  medicine.re})
            }

           

            if(medicine.le === 1){
             document.getElementById('Le3').checked = true
             this.setState({Le3:  medicine.le})
           }
           

           this.setState({Time3:  medicine.times})
           this.setState({Day3:  medicine.days})

          }
          if(index === 3){
            this.setState({Tablet4:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re4').checked = true
              this.setState({Re4:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le4').checked = true
             this.setState({Le4:  medicine.re})
           }
 
           this.setState({Time4:  medicine.times})
           this.setState({Day4:  medicine.days})
          }
          if(index === 4){
            this.setState({Tablet5:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re5').checked = true
              this.setState({Re5:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le5').checked = true
             this.setState({Le5:  medicine.le})
           }
 
           this.setState({Time5:  medicine.times})
           this.setState({Day5:  medicine.days})
          }
          if(index === 5){
            this.setState({Tablet6:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re6').checked = true
              this.setState({Re6:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le6').checked = true
             this.setState({Le6:  medicine.le})
           }
 
           this.setState({Time6:  medicine.times})
           this.setState({Day6:  medicine.days})
          }
          if(index === 6){
            this.setState({Tablet7:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re7').checked = true
              this.setState({Re7:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le7').checked = true
             this.setState({Le7:  medicine.le})
           }
 
           this.setState({Time7:  medicine.times})
           this.setState({Day7:  medicine.days})
          }
          if(index === 7){
            this.setState({Tablet8:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re8').checked = true
              this.setState({Re8:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le8').checked = true
             this.setState({Le8:  medicine.le})
           }
 
           this.setState({Time8:  medicine.times})
           this.setState({Day8:  medicine.days})
          }
          if(index === 8){
            this.setState({Tablet9:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re9').checked = true
              this.setState({Re9:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le9').checked = true
             this.setState({Le9:  medicine.le})
           }
 
           this.setState({Time9:  medicine.times})
           this.setState({Day9:  medicine.days})
          }
          if(index === 9){
            this.setState({Tablet10:  medicine.med})
            if(medicine.re === 1){
              document.getElementById('Re10').checked = true
              this.setState({Re10:  medicine.re})
            }
            if(medicine.le === 1){
             document.getElementById('Le10').checked = true
             this.setState({Le10:  medicine.le})
           }
 
           this.setState({Time10:  medicine.times})
           this.setState({Day10:  medicine.days})
          }

          

        })


       })
      
       window.onafterprint = function(e){
       
        console.log('Print Dialog Closed..');
        $('#printpres').hide();
        $('#casesheetdata').show();
        $('#footerdatacheck').show();
        $('#breadcrumb').show();
        
    };

    $('#printpres').show();
    $('#casesheetdata').hide();
    $('#footerdatacheck').hide();
    $('#breadcrumb').hide();

      window.print();
    
      })
      .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });












    
     

     
      
    }

    printoptical = (optid) => {
    
      var auth =  sessionStorage.getItem('auth');


      this.setState({instruction: ''})
      this.setState({ossph: ''})
      this.setState({oscyl: ''})
      this.setState({osaxis: ''})
      this.setState({osva: ''})
      this.setState({odsph: ''})
      this.setState({odcyl: ''})
      this.setState({odaxis: ''})
      this.setState({osva: ''})
      this.setState({distre: ''})
      this.setState({distle: ''})
      this.setState({nearre: ''})
      this.setState({nearle: ''})


    
       document.getElementById('kryptok').checked = false
       this.setState({kryptok: 0})
     
     
      document.getElementById('unicvisd').checked = false
      this.setState({unicvisd: 0})
   
    
      document.getElementById('hiindex').checked = false
      this.setState({hiindex: 0})
   
   
      document.getElementById('photochromic').checked = false
      this.setState({photochromic: 0})
 
      document.getElementById('progreesive').checked = false
      this.setState({progreesive: 0})
    
   
      document.getElementById('glass').checked = false
      this.setState({glass: 0})
 
   
      document.getElementById('white').checked = false
      this.setState({white: 0})
   
   
      document.getElementById('arc').checked = false
      this.setState({arc: 0})
    
      document.getElementById('executive').checked = false
      this.setState({executive: 0})
    
      document.getElementById('plastic').checked = false
      this.setState({plastic: 0})
    
      document.getElementById('tint').checked = false
      this.setState({tint: 0})
     
      document.getElementById('ophthalmologist').checked = false
      this.setState({ophthalmologist:0})






      var optarray = [];

      optarray.push(optid);

      var data = {
        "oids": optarray
      }
    
    
     axios({
        method: 'post',
        url: config.url+'opticals/ctk/getopticals',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      
           
    
           
    
         console.log(response.data.data);
    
         
    
         response.data.data.map((optdata) => {
          this.setState({instruction: optdata.instruction})
          this.setState({ossph: optdata.visiondata.OS.SPH})
          this.setState({oscyl: optdata.visiondata.OS.CYL})
          this.setState({osaxis: optdata.visiondata.OS.AXIS})
          this.setState({osva: optdata.visiondata.OS.va})
          this.setState({odsph: optdata.visiondata.OD.SPH})
          this.setState({odcyl: optdata.visiondata.OD.CYL})
          this.setState({odaxis: optdata.visiondata.OD.AXIS})
          this.setState({odva: optdata.visiondata.OD.va})
          this.setState({distre: optdata.dist.RE})
          this.setState({distle: optdata.dist.LE})
          this.setState({nearre: optdata.near.RE})
          this.setState({nearle: optdata.near.LE})
    
         if(optdata.types[0] == 1){
           document.getElementById('kryptok').checked = true
           this.setState({kryptok: optdata.types[0]})
         }  
         if(optdata.types[1] == 1){
          document.getElementById('unicvisd').checked = true
          this.setState({unicvisd: optdata.types[1]})
        } 
        if(optdata.types[2] == 1){
          document.getElementById('hiindex').checked = true
          this.setState({hiindex: optdata.types[2]})
        } 
        if(optdata.types[3] == 1){
          document.getElementById('photochromic').checked = true
          this.setState({photochromic: optdata.types[3]})
        } 
        if(optdata.types[4] == 1){
          document.getElementById('progreesive').checked = true
          this.setState({progreesive: optdata.types[4]})
        } 
        if(optdata.types[5] == 1){
          document.getElementById('glass').checked = true
          this.setState({glass: optdata.types[5]})
        } 
        if(optdata.types[6] == 1){
          document.getElementById('white').checked = true
          this.setState({white: optdata.types[6]})
        } 
        if(optdata.types[7] == 1){
          document.getElementById('arc').checked = true
          this.setState({arc: optdata.types[7]})
        } 
        if(optdata.types[8] == 1){
          document.getElementById('executive').checked = true
          this.setState({executive: optdata.types[8]})
        } 
        if(optdata.types[9] == 1){
          document.getElementById('plastic').checked = true
          this.setState({plastic: optdata.types[9]})
        }
        if(optdata.types[10] == 1){
          document.getElementById('tint').checked = true
          this.setState({tint: optdata.types[10]})
        }  
        if(optdata.types[11] == 1){
          document.getElementById('ophthalmologist').checked = true
          this.setState({ophthalmologist: optdata.types[11]})
        }  
    
          
    
    
         })
          
    
    

         window.onafterprint = function(e){
       
          console.log('Print Dialog Closed..');
          
     
           $('#printoptical').hide();
           $('#casesheetdata').show();
           $('#footerdatacheck').show();
           $('#breadcrumb').show();
        };
        
        $('#printoptical').show();
        $('#casesheetdata').hide();
        $('#footerdatacheck').hide();
        $('#breadcrumb').hide();
     
        window.print();



         //this.setState({oids: response.data.data})
    
       
    
         //const datalist = response.data.data;
    
         //this.setState({datalist: datalist})
    
    
        })
        .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });
    

    }



    viewpatientdata(pid){
      window.location = "/Viewpatient/"+pid+"/4";
    }




 renderTableData() {
  return this.state.oids.map((optical, index) => {
     //const { sno, patientname, phone,age, gender } = student //destructuring
     var sadmin =  sessionStorage.getItem('sadmin');
     return (
        <Tr key={optical._key}>
           <Td>{index+1}</Td>
           <Td>{optical.instruction}</Td>
           {(() => {
                     if(optical.edate){
                        return (
                 <Td>{new Date(optical.edate).toLocaleString()}</Td>
                        );
                     } else {
                        return (
                           <Td>{new Date(optical.cdate).toLocaleString()}</Td>
                     );
                     }
                  })()}
           
                    <Td><button title="print optical" onClick={this.printoptical.bind(this, optical._key)} className="btn btn-info btn-sm"><i class="fa fa-print" aria-hidden="true"></i></button></Td>
                
                  {(() => {
             if(sadmin == "2"){
              return (
                <Td><button title="edit optical" className="btn btn-success btn-sm" name="opticalid" value={optical._key} onClick={this.editoptical.bind(this, optical._key)}><i class="fa fa-edit"></i></button></Td>
              );
           } else {
            return(
              <Td></Td>
            );
          }
           
          })()}



             {(() => {
             if(sadmin == "2"){
              return (
                <Td><button title="delete optical" className="btn btn-danger btn-sm" onClick={this.deleteoptical.bind(this, optical._key)}><i className="fa fa-trash-alt" aria-hidden="true"></i></button></Td>
              );
           } else {
            return(
              <Td></Td>
            );
          }
           
          })()}
        </Tr>
     )
  })
}


renderPresData() {
  return this.state.pids.map((pres, index) => {
     //const { sno, patientname, phone,age, gender } = student //destructuring
     var sadmin =  sessionStorage.getItem('sadmin');

     return (
        <Tr key={pres._key}>
            <Td>{index+1}</Td>
           <Td>{pres.review}</Td>
           {(() => {
                     if(pres.edate){
                        return (
                 <Td>{new Date(pres.edate).toLocaleString()}</Td>
                        );
                     } else {
                        return (
                           <Td>{new Date(pres.cdate).toLocaleString()}</Td>
                     );
                     }
                  })()}
           
             <Td><button title="print prescription" onClick={this.printpresdata.bind(this, pres._key)} className="btn btn-info  btn-sm"><i class="fa fa-print" aria-hidden="true"></i></button></Td>
          
                {(() => {
             if(sadmin == "2"){
              return (
                <Td><button title="edit prescription" className="btn btn-success btn-sm" name="opticalid" value={pres._key} onClick={this.editpres.bind(this, pres._key,'aaaaa')}><i class="fa fa-edit"></i></button></Td>
              );
           } else {
             return(
               <Td></Td>
             );
           }
          })()}



           {(() => {
             if(sadmin == "2"){
              return (
                <Td><button title="delete prescription" className="btn btn-danger btn-sm" onClick={this.deletepres.bind(this, pres._key)}><i className="fa fa-trash-alt" aria-hidden="true"></i></button></Td>
              );
           } else {
             return(
               <Td></Td>
             );
           }
          })()}
         
           
        </Tr>
     )
  })
}



render(){

    const optlist = this.state.optlist;
    


    const aseg = this.state.aseg;
   

    const pseg = this.state.pseg;
  

    const prelist = this.state.prelist;
    const diddata = this.state.did;

    var sadmin =  sessionStorage.getItem('sadmin');

     if(sadmin == "2"){
      if(diddata.length > 0){

        var Discharge = <select className="form-control mt-1" name="didvalue" value={this.state.didvalue} onChange={this.didlistdata}>
           <option defaultValue>Select Discharge list</option>
        {diddata.map((value, index) => {
          return <option key={index} value={value._key}>{value.name}</option>
        })}
        <option>none</option>
      </select>

        } else {
          var Discharge = <select className="form-control">
             <option defaultValue>Select Discharge list</option>
             <option>none</option>
        </select>
        }

      }


    return (
        <div>
        <Headerdata/>
        <Container fluid={true} style={{marginBottom:"150px"}}>

        {(() => {

if(this.state.page1 == "1"){
  return(
  <div id="breadcrumb" className="margindata">
  <ol className="breadcrumb bg-white">
     <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Patientlist"}>Patient List</a></li>
     <li className="ml-1"><a className="breadcrumb-item text-decoration-none text-muted" href={"/Viewpatient/"+this.state.patientid+"/1"}>View Patient</a></li>
     <li className="breadcrumb-item active ml-1"><strong>Edit Case sheet</strong></li>
  </ol>
</div>
);
} else if(this.state.page1 == "2") {
  return(
    <div id="breadcrumb" className="margindata">
    <ol className="breadcrumb bg-white">
       <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Appoinmentlist"}>Appointment List</a></li>
       <li className="ml-1"><a className="breadcrumb-item text-decoration-none text-muted" href={"/Viewpatient/"+this.state.patientid+"/2"}>View Patient</a></li>
       <li className="breadcrumb-item active ml-1"><strong>Edit Case sheet</strong></li>
    </ol>
  </div>
  );
} else {
  return(
    <div id="breadcrumb" className="margindata">
    <ol className="breadcrumb bg-white">
       <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Patientlist"}>Patient List</a></li>
       <li className="ml-1"><a className="breadcrumb-item text-decoration-none text-muted" href={"/Casesheets/"+this.state.patientid}>Case sheet list</a></li>
       <li className="breadcrumb-item active ml-1"><strong>Edit Case sheet</strong></li>
    </ol>
  </div>
  );
}

})()}

        <div id="casesheetdata" className="cardstyle" style={{border:"1px solid grey",height:"auto"}}>
       <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
      
       
              <div className="row" style={styledata}>
              <div className="col-md-3">
                <center><h5 id="Casesheetid" style={{cursor:"pointer"}} onClick={this.Casesheet}>Case sheet</h5></center>
              </div>
              <div className="col-md-3">
              <center><h5 id="Opticalid" style={{color:"white",cursor:"pointer"}} onClick={this.Optical}>Optical</h5></center>
              </div>
              <div className="col-md-3">
              <center><h5 id="Prescriptionid" style={{color:"white",cursor:"pointer"}} onClick={this.Prescription}>Prescription</h5></center>
              </div>
              <div className="col-md-3">
              <center><h5 id="Dischargeid" style={{color:"white",cursor:"pointer"}} onClick={this.dischargeoption}>Discharge</h5></center>
              </div>
            
         </div>
             


            

        <div id="diverroralert" className="modalalert">
                  <div className="modal-contentalert alert alert-danger" role="alert">
                  <div className="panel-group" style={{textAlign:"center"}}>
                  <div className="close" onClick={this.closedtaperror}>&times;</div>
                  <span id="spanerror"> </span>

               </div>
             </div>
            </div>
          <div id="divsucessalert" className="modalalert">
           <div className="modal-contentalert alert alert-success" role="alert">
        <div className="panel-group" style={{textAlign:"center"}}>
            <div className="close" >&times;</div>
            <span id="spansucess"> </span>

          </div>
          </div>
               </div>





        <Container fluid={true}>
        <div id="casesheetdiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
   <Row className="mt-3">
   <div className="col-md-1 col-lg-1 col-xs-12">
   <a id="downarrow" data-toggle="collapse" onClick={this.patientdetailuparrow}><i class="fa fa-angle-double-down"></i></a>
        <a id="uparrow" style={{display:"none"}} onClick={this.patientdetaildownarrow}><i class="fa fa-angle-double-up"></i></a>
   </div>
   <div className="col-md-4 col-lg-4 col-xs-12">
   <div title="view patient" onClick={this.viewpatientdata.bind(this, this.state.patientid)} id="patientdetail" className="cardstyle">
   <div className="card-header">
         <h6>Patient details</h6>
         </div>
           <div className="col-md-12">
        
          <div className="row">
            <div className="col-md-4">
                <p><strong>Name</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.username}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Phone</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.phone}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Age</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.age}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Gender</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.gender}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Address</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.address}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Pincode</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.pincode}</p>
            </div>

          </div>
          </div>
    </div>
    </div>
  <div className="col-md-6 col-lg-6 col-xs-12">
    <form onSubmit={this.handleSubmit}>
   
      <h6 className="mt-2">Case sheet details</h6>  
    <textarea
  name="dm"
  className="form-control mt-1"
  value={this.state.dm}
  onChange={this.prelistdata}
  placeholder="dm"
></textarea>
<textarea
  name="ht"
  className="form-control mt-1"
  value={this.state.ht}
  onChange={this.prelistdata}
  placeholder="ht"
></textarea>
<textarea
  name="ihd"
  className="form-control mt-1"
  value={this.state.ihd}
  onChange={this.prelistdata}
  placeholder="ihd"
  ></textarea>
<textarea
  name="allergy"
  className="form-control mt-1"
  value={this.state.allergy}
  onChange={this.prelistdata}
  placeholder="allergy"
  ></textarea>
<textarea
  name="other"
  className="form-control mt-1"
  value={this.state.other}
  onChange={this.prelistdata}
  placeholder="other"
  ></textarea>


<select id="va" name="va" value={this.state.va} onChange={this.prelistdata} className="form-control mt-1">
<option defaultValue>Select V/A </option>
    <option>6/60</option>
    <option>6/36</option>
    <option>6/24</option>
    <option>6/18</option>
    <option>6/12</option>
    <option>6/9</option>
    <option>6/6</option>
  
</select>

<div className="mt-2">

<input
       type="checkbox"
       name="re"
       id="re"  
       value={this.state.re}
       defaultChecked={this.state.checked}
       onChange={this.checkboxdata}
     /> <span>Re</span>
     <div>
     <textarea
  name="redata"
  className="form-control mt-1"
  style={{display:"none"}}
  id="redataid"
  value={this.state.redata}
  onChange={this.prelistdata}
  placeholder="Re data"
  ></textarea>
     </div>
 
</div>
<div className="mt-2">
<input
       type="checkbox"
       name="le"
       id="le"  
       value={this.state.le}
       defaultChecked={this.state.checked}
       onChange={this.Ledata}
     /> <span>Le</span>
     <div>
     <textarea
  name="ledata"
  className="form-control mt-1"
  style={{display:"none"}}
  id="ledataid"
  value={this.state.ledata}
  onChange={this.prelistdata}
  placeholder="Le data"
  ></textarea>
     </div>

</div>


 


 


<div className="form-group mt-1">


<select className="form-control selectpicker" id="aseg" name="aseg" value={this.state.aseg}  onChange={this.asegdata} multiple>

    <option>conjuctiva</option>
    <option>cornea</option>
    <option>anterior</option>
    <option>chamber</option>
    <option>pupil</option>
    <option>lens</option>
</select>

</div>



<div className="form-group  mt-1">

<select className="form-control selectpicker" id="pseg" name="pseg" value={this.state.pseg}  onChange={this.psegdata} multiple>
    <option>Vitrius</option>
    <option>Retina</option>
</select>
</div>




<textarea
  name="text"
  className="form-control mt-1"
  value={this.state.text}
  onChange={this.prelistdata}
  placeholder="Description"
></textarea>

<div className="float-right">
<a className="btn btn-danger mr-1 mt-2 mb-2"  href="#" onClick={this.Goback}>Cancel</a>
{(() => {
 if(sadmin == "2"){
    return(
    <button className="btn btn-success mt-2 mb-2">Update</button>
    );
 }
})()}

</div>

</form>
</div>
<div className="col-md-1 col-lg-1 col-xs-12 mt-2">
</div>
</Row>


    </div>
    </Container> 
    <div id="opticaldiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none",height:"500px"}}>
           <div className="mt-4">

                   
     <div id="opticaltable">

               {(() => {

                 if(this.state.oids.length > 0){
                     return (
                       <div>
                      <div className="row">
                      <div className="col-md-1">
                      <a id="downarrow-optical" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowoptical} ><i class="fa fa-angle-double-down"></i></a>
                      <a id="uparrow-optical"  onClick={this.uparrowoptical}><i class="fa fa-angle-double-up"></i></a>
                      </div>
                      <div className="col-md-5">
                      <div title="view patient" onClick={this.viewpatientdata.bind(this, this.state.patientid)} id="patient-optical" className="cardstyle" style={{display:"none"}}>
                      <div className="card-header">
         <h6>Patient details</h6>
         </div>
           <div className="col-md-12">
        
          <div className="row">
            <div className="col-md-4">
                <p><strong>Name</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.username}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Phone</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.phone}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Age</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.age}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Gender</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.gender}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Address</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.address}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Pincode</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.pincode}</p>
            </div>

          </div>
          </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                      <div className="float-right mt-3">
           
                        <button className="btn mr-2 btn-primary rounded-circle" title="create optical" onClick={this.createoptical}><i class="fa fa-plus" aria-hidden="true"></i></button>
                      </div> 
                      </div>
           
                       </div> 
                      <div  className="row">
                   <div className="col-md-12">
                  <div  className="mt-4" style={{width:"100%"}}>
                  <div className="table-responsive">
                 <Table className="table tabledata">
                 
                    <Thead className="table-dark">
                     <Tr>
                        <Th>Sno</Th>
                        <Th>instruction</Th>
                        <Th>Date and Time</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                     </Tr>
                   </Thead>
                    
                    <Tbody>
                       {this.renderTableData()}
                   </Tbody>
                 </Table>
                 </div>
                  </div>
                  </div>
                    </div>
                    <div className="float-right mt-2">
                    <a className="btn btn-danger mr-1" onClick={this.Goback} href="#">Back</a>
                    </div>
                    </div>
                     );
                 } else {
                   return (
                  <div>
                      
                  <div className="row">
                   
                   
                   <div class="col-md-1">
                   <a id="downarrow-optical" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowoptical} ><i class="fa fa-angle-double-down"></i></a>
                      <a id="uparrow-optical"  onClick={this.uparrowoptical}><i class="fa fa-angle-double-up"></i></a>
                     </div>
                    <div class="col-md-5">
                    <div title="view patient" onClick={this.viewpatientdata.bind(this, this.state.patientid)} id="patient-optical" className="cardstyle" style={{display:"none"}}>
                    <div className="card-header">
                <h6>Patient details</h6>
         </div>
           <div className="col-md-12">
        
          <div className="row">
            <div className="col-md-4">
                <p><strong>Name</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.username}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Phone</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.phone}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Age</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.age}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Gender</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.gender}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Address</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.address}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Pincode</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.pincode}</p>
            </div>

          </div>
          </div>
           
                   </div>
                     </div>
                    <div class="col-md-6">
                    <div className="float-right mt-3">
                    <button className="btn mr-2 btn-primary rounded-circle" title="create optical" onClick={this.createoptical}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                    </div>
                  
                    </div>
                    <h2 style={{textAlign:"center"}} className="mt-5">Click Create Optical icon to Create Opticals</h2>
                    <div className="float-right mt-2">
                    <a className="btn btn-danger mr-1" onClick={this.Goback} href="#">Back</a>
                    </div>
                    </div>
                   );
                 }

                })()}

                
       </div> 
             

            
              


          


            <div id="createoptical" style={{display:"none"}}>
            <div className="row">
            
                  <div className="col-md-12 col-xs-12">
                  <div id="opticaltable" className="mt-4" style={{width:"100%",overflow:"auto"}}>
                        
                  <table className="table" border="1">
              <thead>
             <tr>
         <th width="40"></th>
        <th colspan="4" className="text-center">OS</th>
        <th colspan="4" className="text-center">OD</th>
    
    </tr>
</thead>
<tbody>
    <tr>
        <td></td>
        <td className="text-center">SPH</td>
        <td className="text-center">CYL</td>
        <td className="text-center">AXIS</td>
        <td className="text-center">V/A</td>

        <td className="text-center">SPH</td>
        <td className="text-center">CYL</td>
        <td className="text-center">AXIS</td>
        <td className="text-center">V/A</td>
    </tr>

    <tr>
       <td>DV</td>
       <td><input
            type="text"
            name="ossph"
            style={{minWidth:"80px"}}
            className="form-control mt-1"
            placeholder="sph"
           value = {this.state.ossph}
           onChange={this.opticllistdata}
          /></td>
        <td> <input
              type="text"
              name="oscyl"
              style={{minWidth:"80px"}}
              className="form-control mt-1"
              placeholder="CYL"
              value = {this.state.oscyl}
           onChange={this.opticllistdata}
       /></td>
        <td><input
              type="text"
              name="osaxis"
              style={{minWidth:"80px"}}
              className="form-control mt-1"
              placeholder="AXIS"
              value = {this.state.osaxis}
              onChange={this.opticllistdata}
            /></td>
        <td><select id="va" name="osva" style={{minWidth:"80px"}} value = {this.state.osva} onChange={this.opticllistdata} className="form-control mt-1">
              <option defaultValue>Select va </option>
              <option>6/60</option>
              <option>6/36</option>
              <option>6/24</option>
              <option>6/18</option>
              <option>6/12</option>
              <option>6/9</option>
              <option>6/6</option>
  
              </select></td>

            <td><input
            type="text"
            name="odsph"
            style={{minWidth:"80px"}}
            className="form-control mt-1"
            placeholder="sph"
            value = {this.state.odsph}
            onChange={this.opticllistdata}
          /></td>
           <td> <input
              type="text"
              name="odcyl"
              style={{minWidth:"80px"}}
              className="form-control mt-1"
              placeholder="CYL"
              value = {this.state.odcyl}
            onChange={this.opticllistdata}
           /></td>
                     <td><input
                         type="text"
                         name="odaxis"
                         style={{minWidth:"80px"}}
                         className="form-control mt-1"
                          placeholder="AXIS"
                          value={this.state.odaxis}
                          onChange={this.opticllistdata}
                          /></td>
        <td><select id="va" name="odva" style={{minWidth:"80px"}}  value={this.state.odva} onChange={this.opticllistdata} className="form-control mt-1">
                             <option defaultValue>Select va </option>
                                 <option>6/60</option>
                                 <option>6/36</option>
                                 <option>6/24</option>
                                 <option>6/18</option>
                                 <option>6/12</option>
                                 <option>6/9</option>
                                 <option>6/6</option>
  
                                </select></td>
                               </tr>
                               <tr>
                                 <td>NV</td>
                                 <td><input
                                  type="text"
                                  name="osaxis"
                                  style={{minWidth:"80px"}}
                                  className="form-control mt-1"
                                  placeholder="AXIS"
                                   /></td>
                                 <td colspan="2"><input
                               type="text"
                               style={{minWidth:"80px"}}
                               name="osaxis"
                               className="form-control mt-1"
                               placeholder="AXIS"
             
                                /></td>
                                 <td><select id="va" name="odva" style={{minWidth:"80px"}}  className="form-control mt-1">
                             <option defaultValue>Select va </option>
                                 <option>6/60</option>
                                 <option>6/36</option>
                                 <option>6/24</option>
                                 <option>6/18</option>
                                 <option>6/12</option>
                                 <option>6/9</option>
                                 <option>6/6</option>
  
                                </select></td>
                                 <td><input
                                type="text"
                                name="osaxis"
                                style={{minWidth:"80px"}}
                                className="form-control mt-1"
                                placeholder="AXIS"
                                /></td>
                                 <td colspan="2"><input
                                  type="text"
                                 name="osaxis"
                                 style={{minWidth:"80px"}}
                                 className="form-control mt-1"
                                 placeholder="AXIS"
                                  /></td>
                                 <td><select id="va" name="odva" style={{minWidth:"80px"}}  className="form-control mt-1">
                             <option defaultValue>Select va </option>
                                 <option>6/60</option>
                                 <option>6/36</option>
                                 <option>6/24</option>
                                 <option>6/18</option>
                                 <option>6/12</option>
                                 <option>6/9</option>
                                 <option>6/6</option>
  
                                </select></td>

                               </tr>
                       </tbody>
                  </table>


                  </div>
                  </div>
      <Container fluid={true}>

      <label  className="mt-2">Dist</label>        
<div className="row">

<div className="col-md-6">
<input
type="text"
 name="distre"
 className="form-control mt-1"
placeholder="RE"
value = {this.state.distre}
onChange={this.opticllistdata}
/>
</div>
<div className="col-md-6">
<input
type="text"
 name="distle"
 className="form-control mt-1"
placeholder="LE"
value = {this.state.distle}
onChange={this.opticllistdata}
/>
</div>
</div>
<label className="mt-2">Near</label> 
<div className="row">

<div className="col-md-6">
<input
type="text"
 name="nearre"
 className="form-control mt-1"
placeholder="RE"
value = {this.state.nearre}
onChange={this.opticllistdata}
/>
</div>
<div className="col-md-6">
<input
type="text"
 name="nearle"
 className="form-control mt-1"
placeholder="LE"
value = {this.state.nearle}
onChange={this.opticllistdata}
/>
</div>
</div>

 

<div className="row mt-3">

<div className="col-md-3">
  <div className="row">
   <div className="col-md-6 col-xs-8">
   <span>Kryptok</span>
   </div>
   <div className="col-md-1 col-xs-4">
   <input

type="checkbox"
name="kryptok"
id="kryptok"
defaultChecked={this.state.checked}
value={this.state.kryptok}
onChange={this.typesdata}
/>
   </div>
  </div>


</div>
<div className="col-md-3 col-xs-12">
  <div className="row">
    <div className="col-md-6">
    <span>Unicvis D</span>
    </div>
  <div className="col-md-1">
  <input

type="checkbox"
name="unicvisd"
id="unicvisd"
defaultChecked={this.state.checked}
value={this.state.unicvisd}
onChange={this.typesdata}
/>
</div>
  </div>


</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
    <div className="col-md-6">
    <span>Hi index</span>
    </div>
<div className="col-md-1">
<input
type="checkbox"
name="hiindex"
id="hiindex"
defaultChecked={this.state.checked}
value={this.state.hiindex}
onChange={this.typesdata}
/>
</div>
  </div>
</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
<div className="col-md-6">
<span>Photochromic</span>
</div>
<div className="col-md-1">
<input
type="checkbox"
name="photochromic"
id="photochromic"
defaultChecked={this.state.checked}
value={this.state.photochromic}
onChange={this.typesdata}
/>
</div>
  </div>


</div>

<div className="col-md-3 col-xs-3">

<div className="row">
  <div className="col-md-6">
  <span>Progreesive</span>
  </div>
<div className="col-md-1">
<input
type="checkbox"
name="progreesive"
id="progreesive"
defaultChecked={this.state.checked}
value={this.state.progreesive}
onChange={this.typesdata}
/>
</div>
</div>
</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
    <div className="col-md-6">
    <span>Glass</span>
    </div>
    <div className="col-md-1">
    <input
type="checkbox"
name="glass"
id="glass"
defaultChecked={this.state.checked}
value={this.state.glass}
onChange={this.typesdata}
 />
    </div>

  </div>


</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
 <div className="col-md-6">
 <span>White</span>
 </div>
 <div className="col-md-1">
 <input
type="checkbox"
name="white"
id="white"
defaultChecked={this.state.checked}
value={this.state.white}
onChange={this.typesdata}
/>
 </div>
  </div>


</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
    <div className="col-md-6">
    <span>Arc</span>
    </div>
<div className="col-md-1">
<input
type="checkbox"
name="arc"
id="arc"
defaultChecked={this.state.checked}
value={this.state.arc}
onChange={this.typesdata}
/>
</div>
  </div>


</div>

<div className="col-md-3 col-xs-3">
  <div className="row">
    <div className="col-md-6">
    <span>Executive</span>
    </div>
    <div className="col-md-1">
    <input

 type="checkbox"
name="executive"
id="executive"
defaultChecked={this.state.checked}
value={this.state.executive}
onChange={this.typesdata}
/>
    </div>
  </div>


</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
    <div className="col-md-6">
    <span>Plastic</span>
    </div>
    <div className="col-md-1">
    <input
type="checkbox"
name="plastic"
id="plastic"
defaultChecked={this.state.checked}
value={this.state.plastic}
onChange={this.typesdata}
/>
    </div>

  </div>



</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
  <div className="col-md-6">
  <span>Tint</span>
  </div>
  <div className="col-md-1">
  <input
type="checkbox"
name="tint"
id="tint"
defaultChecked={this.state.checked}
value={this.state.tint}
onChange={this.typesdata}
/>
  </div>
  </div>


</div>
<div className="col-md-3 col-xs-3">
  <div className="row">
  <div className="col-md-6">
  <span>Ophthalmologist</span>
  </div>
<div className="col-md-1">
<input
type="checkbox"
name="ophthalmologist"
id="ophthalmologist"
defaultChecked={this.state.checked}
value={this.state.ophthalmologist}
onChange={this.typesdata}
/>
</div>
</div>
</div>
</div>
<textarea
              name="instruction"
             className="form-control mt-1"
            placeholder="instruction"
            value={this.state.instruction}
            onChange={this.opticllistdata}
          ></textarea>
</Container>

                  
               </div>

               
               
           </div>

           <div id="createid" className="float-right" style={{display:"none"}}>
          <a className="btn btn-danger mr-1" href="#" onClick={this.Optical}>Cancel</a>
          <button className="btn btn-success mt-2 mb-2" onClick={this.create}>Create</button>
         </div>
         <div id="modifyid" className="float-right" style={{display:"none"}}>
         <a className="btn btn-danger  mt-2 mb-2 mr-1" href="#" onClick={this.Optical}>Cancel</a>


         {(() => {
       if(sadmin == "2"){
       return(
      <button className="btn btn-success mt-2 mb-2" onClick={this.modifyopticaldata}>Update</button>
       );
       }
     })()}
         </div>
           

           </div>
    </div>
    <div id="Prescriptiondiv"  className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none",height:"500px"}}>
         
    <div id="prestable" className="mt-4">
          {(() => {

        if(this.state.pids.length > 0){
        return ( 
          <div>
          <div className="row">
          <div className="col-md-1">
          <a id="downarrow-pres" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowpres} ><i class="fa fa-angle-double-down"></i></a>
            <a id="uparrow-pres"  onClick={this.uparrowpres}><i class="fa fa-angle-double-up"></i></a>
           </div>
                      <div className="col-md-5">
                      <div title="view patient" onClick={this.viewpatientdata.bind(this, this.state.patientid)} id="patient-pres" className="cardstyle" style={{display:"none"}}>
                      <div className="card-header">
           <h6>Patient details</h6>
         </div>
           <div className="col-md-12">
        
          <div className="row">
            <div className="col-md-4">
                <p><strong>Name</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.username}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Phone</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.phone}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Age</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.age}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Gender</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.gender}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Address</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.address}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Pincode</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.pincode}</p>
            </div>

          </div>
          </div>



                     </div>

                      </div>
                      <div className="col-md-6">
                      <div className="float-right mt-3">
           
                        <button className="btn btn-primary mr-2 rounded-circle" title="create prescription" onClick={this.createprescription}><i class="fa fa-plus" aria-hidden="true"></i></button>
                      </div> 
                      </div>
           
                       </div> 
                        <div  className="row">
                        <div className="col-md-12 col-xs-12">
                       <div  className="mt-4" style={{width:"100%"}}>
                             
                      <Table className="table tabledata">
                     
                    <Thead className="table-dark">
                     <Tr>
                        <Th>Sno</Th>
                        <Th>instruction</Th>
                        <Th>Date and Time</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                     </Tr>
                   </Thead>
                    <Tbody>
                            {this.renderPresData()}
                        </Tbody>
                      </Table>
     
                       </div>
                       </div>
                    </div>
                    <div className="float-right mt-2">
                   <a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Back</a>
                    </div>
                </div>

        );
        } else {
          return (
            <div>
                      
          
          <div className="row">
           
           <div class="col-md-1">
           <a id="downarrow-pres" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowpres} ><i class="fa fa-angle-double-down"></i></a>
            <a id="uparrow-pres"  onClick={this.uparrowpres}><i class="fa fa-angle-double-up"></i></a>
             </div>
            <div class="col-md-5">
            <div title="view patient" onClick={this.viewpatientdata.bind(this, this.state.patientid)} id="patient-pres" className="cardstyle" style={{display:"none"}}>
            <div className="card-header">
         <h6>Patient details</h6>
         </div>
           <div className="col-md-12">
        
          <div className="row">
            <div className="col-md-4">
                <p><strong>Name</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.username}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Phone</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.phone}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Age</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.age}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Gender</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.gender}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Address</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.address}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Pincode</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.pincode}</p>
            </div>

          </div>
          </div>
          </div>

             </div>
            <div class="col-md-6">
            <div className="float-right mt-3">
            <button className="btn btn-primary mr-2 rounded-circle" title="create prescription" onClick={this.createprescription}><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            </div>
          
            </div>
            <h2 style={{textAlign:"center"}} className="mt-5">Click Create Prescription icon to Create Prescriptions</h2>
            <div className="float-right mt-2">
                <a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Back</a>
              </div>
            </div>
          );
        }

           })()}

</div>

       <div id="createpres" style={{display:"none"}}>
       <div  style={{width:"100%",overflow:"auto"}} className="mt-4">
            <table className="table mt-2" border="1"> 
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Eye Drop/Ointment/Tablets</th>
                  <th width="40">RE</th>
                  <th width="43">LE</th>
                  <th>Times</th>
                  <th>Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input
                type="text"
                name="Tablet1"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet1}
                onChange={this.prelistdata}
              /></td>
              <td className="text-center">
                <input
                type="checkbox"
                name="Re1"
                id="Re1"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re1}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le1"
                id="Le1"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le1}
                onChange={this.Prestypesdata}
              /></td>
              <td className="text-center">
                <input
                type="number"
                name="Time1"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time1}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day1"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day1}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <input
                type="text"
                name="Tablet2"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet2}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re2"
                id="Re2"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re2}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le2"
                id="Le2"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le2}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time2"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time2}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day2"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day2}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <input
                type="text"
                name="Tablet3"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet3}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re3"
                id="Re3"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re3}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le3"
                id="Le3"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le3}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time3"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time3}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day3"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day3}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <input
                type="text"
                name="Tablet4"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet4}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re4"
                id="Re4"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re4}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le4"
                id="Le4"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le4}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time4"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time4}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day4"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day4}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <input
                type="text"
                name="Tablet5"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet5}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re5"
                id="Re5"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re5}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le5"
                id="Le5"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le5}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time5"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time5}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day5"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day5}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <input
                type="text"
                name="Tablet6"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet6}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re6"
                id="Re6"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re6}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le6"
                id="Le6"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le6}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time6"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time6}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day6"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day6}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <input
                type="text"
                name="Tablet7"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet7}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re7"
                id="Re7"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re7}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le7"
                id="Le7"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le7}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time7"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time7}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day7"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day7}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <input
                type="text"
                name="Tablet8"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet8}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re8"
                id="Re8"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re8}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le8"
                id="Le8"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le8}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time8"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time8}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day8"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day8}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <input
                type="text"
                name="Tablet9"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet9}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re9"
                id="Re9"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re9}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le9"
                id="Le9"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le9}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="number"
                name="Time9"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time9}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day9"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day9}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    <input
                type="text"
                name="Tablet10"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet10}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Re10"
                id="Re10"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re10}
                onChange={this.Prestypesdata}
              /></td>
              <td>
                <input
                type="checkbox"
                name="Le10"
                id="Le10"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le10}
                onChange={this.Prestypesdata}
               
              /></td>
              <td>
                <input
                type="number"
                name="Time10"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time10}
                onChange={this.prelistdata}
              /></td>
              <td>
                <input
                type="number"
                name="Day10"
                style={{minWidth:"80px"}}
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day10}
                onChange={this.prelistdata}
              /></td>
                </tr>
              </tbody>
            </table>
             </div>
             <label>Review</label>
            <textarea
                  name="Review"
                 className="form-control mt-1"
                placeholder="Review"
                value={this.state.Review}
                onChange={this.prelistdata}
              ></textarea>
       
              <div id="createpresid" className="float-right" style={{display:"none"}}>
            <a className="btn btn-danger mr-1" href="#" onClick={this.Prescription}>Cancel</a>   
        <button className="btn btn-success mt-2 mb-2" onClick={this.createpres}>Create</button>
             </div>
             <div id="modifypresid" className="float-right" style={{display:"none"}}>
              <a className="btn btn-danger mt-2 mb-2 mr-1" href="#" onClick={this.Prescription}>Cancel</a>
              {(() => {
    if(sadmin == "2"){
    return(     
    <button className="btn btn-success mt-2 mb-2" onClick={this.editpresdata}>Update</button>
      );
      }
  })()}
             </div>

             </div>

    </div>
    <div id="dischargediv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none",height:"520px"}}>
          <Container>
               <div className="row">
          <div className="col-md-1 mt-3">
          <a id="downarrow-dis" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowdis} ><i class="fa fa-angle-double-down"></i></a>
            <a id="uparrow-dis"  onClick={this.uparrowdis}><i class="fa fa-angle-double-up"></i></a>
           </div>
                      <div className="col-md-5 mt-2">
                      <div title="view patient" onClick={this.viewpatientdata.bind(this, this.state.patientid)} id="patient-dis" className="cardstyle" style={{display:"none"}}>
                      <div className="card-header">
              <h6>Patient details</h6>
            </div>
           <div className="col-md-12 col-sm-12 col-xs-12">
        
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-6">
                <p><strong>Name</strong></p>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-6">
               <p>: {this.state.username}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Phone</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.phone}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Age</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.age}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Gender</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.gender}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Address</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.address}</p>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <p><strong>Pincode</strong></p>
            </div>
            <div className="col-md-8">
               <p>: {this.state.pincode}</p>
            </div>

          </div>
          </div>

                   </div>

                      </div>
                      <div className="col-md-6 mt-3">
                      {(() => {
                        if(this.state.didid != ""){
                          return(
                        <div className="float-right">
                        <button title="print discharge" onClick={this.printcasesheet} className="btn btn-info"><i class="fa fa-print" aria-hidden="true"></i></button>
                       </div>
                          );
                        }
                      
               })()}
                      </div>
           
                       </div>
                       {(() => {
                        
                        if(this.state.didid != ""){
                            return(
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6 mt-5">
                          {Discharge}
                          <div id="dischtext" className="mt-2">
                        <textarea
                     name="distext"
                     className="form-control mt-1"
                     id="discontent"
                     rows="10"
                     value={this.state.distext}
                     onChange={this.prelistdata}
                     placeholder="Discharge content"
                     onKeyUp={this.handleInput}
                    ></textarea>
                    <br></br>
                    <div  className="float-right">
                    <button className="btn btn-danger mr-1 mb-1" onClick={this.Goback}>Cancel</button>
                    <button id="disbutton" className="btn btn-success mb-1" onClick={this.updatedischarge}>Update</button>
                    </div>
                   
                   </div>
                    </div>
                        <div className="col-md-3">

                        </div>
                       </div>
                            );
                        } else {
                          return(
                            <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6 mt-5">
                          {Discharge}
                          <div id="dischtext" className="mt-2">
                        <textarea
                     name="distext"
                     className="form-control mt-1"
                     rows="10"
                     id="discontent"
                     value={this.state.distext}
                     onChange={this.prelistdata}
                     placeholder="Discharge content"
                     onKeyUp={this.handleInput}
                    ></textarea>
                     <div id="dischargealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
                     Enter Discharge content
                   </div>
                    <br></br>
                    <div  className="float-right">
                    <button className="btn btn-danger mr-1 mb-1" onClick={this.Goback}>Cancel</button>
                    <button id="disbutton" className="btn btn-success mb-1" onClick={this.createdischarge}>Create</button>
                    </div>
                   
                   </div>
                    </div>
                        <div className="col-md-3">

                        </div>
                       </div>
                          );
                        }

                        })()}
                       
                       
               </Container>
        </div>

       </div>
       </div>
       <div id="printpres" style={{display:"none"}}>
         <Container>
       <div  className="card" style={{border:"1px solid grey",height:"auto"}}>
       <div className="row">
        <div className="mt-1 ml-3 col-md-2">
        <img style={{maxWidth:"400px",height:"55px"}} src={Logoimg}></img>
        </div>
        <div className="col-md-6 mt-1">
          <h5>AVY EYE CARE & OPTICALS</h5>
        <p> Jansons MRI Opposite,</p>
        <p>Perunduari Road,</p>
        <p> Erode - 638 011</p>
        <p> Ph : 9600392556</p>
        </div>
       <div style={{borderRight:"2px solid black"}}  ></div>
       <div className="col-md-3 mt-1">
         <p>Dr.R.S. Naveen Balaji</p>
         <p>M.B.B.S., M.S., FICO</p>
         <p>Phaco & Refractive Surgeon</p>
         <p>Reg. No: 91192</p>
       </div>
         </div>

         <div className="col-md-12 bg-dark">
         <h5 className="text-center text-white">PRESCRIPTION FORM</h5>
         </div>
        
       <div className="col-md-12">
         <div className="float-right">
         <span>Date:</span>
          <span>  {this.state.reportStartDate}</span>
         </div>
       </div>
       <div className="col-md-12">
       <div className="row">
        <div className="col-md-6">
        <span>Patient Name:</span>
          <span> {this.state.username}</span>
        </div>
        <div className="col-md-3">
        <span>Age:</span>
        <span>  {this.state.age}</span>
        </div>
        <div className="col-md-3">
        <span>Sex:</span>
        <span>  {this.state.gender}</span>
        </div>
       </div>
       </div>
       <Table className="table mt-2" border="1">
         <Thead>
           <Tr>
            <Th>S.no</Th>
            <Th>Eye Drop/Ointment/Tablets</Th>
            <Th>RE</Th>
            <Th>LE</Th>
            <Th>Times</Th>
            <Th>Days</Th>
           </Tr>
         </Thead>
         <Tbody>
           <Tr>
           <Td>1</Td>
          <Td>{this.state.Tablet1}</Td>
          {(() => {
           if(this.state.Re1 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
          
           if(this.state.Le1 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time1}</Td>
           <Td>{this.state.Day1}</Td>
           </Tr>
           <Tr>
           <Td>2</Td>
          <Td>{this.state.Tablet2}</Td>
          {(() => {
           if(this.state.Re2 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
              console.log("Le2", this.state.Le2);
           if(this.state.Le2 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time2}</Td>
           <Td>{this.state.Day2}</Td>
           </Tr>
           <Tr>
           <Td>3</Td>
          <Td>{this.state.Tablet3}</Td>
          {(() => {
           if(this.state.Re3 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le3 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time3}</Td>
           <Td>{this.state.Day3}</Td>
           </Tr>
           <Tr>
           <Td>4</Td>
          <Td>{this.state.Tablet4}</Td>
          {(() => {
           if(this.state.Re4 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le4 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time4}</Td>
           <Td>{this.state.Day4}</Td>
           </Tr>
           <Tr>
           <Td>5</Td>
          <Td>{this.state.Tablet5}</Td>
          {(() => {
           if(this.state.Re5 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le5 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time5}</Td>
           <Td>{this.state.Day5}</Td>
           </Tr>
         </Tbody>
       </Table>
       <div className="col-md-12">
       <span>Review Date:</span>
        <span>  {this.state.Review}</span>
       </div>
      
       <div className="col-md-12" style={{marginTop:"150px"}}>
         <div className="float-right">
         <span className="mr-3">Doctor signature</span>
         </div>
       </div>
      </div>
      </Container>
      </div>

      <div id="printoptical" style={{display:"none"}}>
      <Container>
        <div className="card" style={{border:"1px solid grey",height:"auto"}}>
       
            <div className="row">
              <div className="col-md-2 mt-1 ml-4">
              <img style={{maxWidth:"400px",height:"55px"}} src={Logoimg}></img>
              </div>
              <div className="col-md-8 mt-1 text-center">
              <h3>AVY EYE CARE & OPTICALS</h3>
              <p> Jansons MRI Opposite, Perunduari Road, Erode - 638 011</p>
              <p> Ph: 86820 00055</p>
              <p>Consulting Time 10.00 am to 2.00 pm, 4.00 pm to 8.00 pm</p>
              </div>
            </div>

              <h5 className="text-center"><u>PRESCRIPTION</u></h5>
          
             <Container fluid={true}>
             <div className="row">
             <div className="col-md-6">
              <span>M.R. No:</span>
             </div>
             <div className="col-md-6">
               <div className="float-right">
               <span>Date:</span>
           <span> {this.state.reportStartDate}</span>
               </div>
            
             </div>
             </div>
             <div className="row">
               <div className="col-md-6">
               <span>Name:</span>
                <span>  {this.state.username}</span>
               </div>
               <div className="col-md-3">
               <span>Age:</span>
               <span>  {this.state.age}</span>
               </div>
               <div className="col-md-3">
               <span>Sex:</span>
               <span>  {this.state.gender}</span>
               </div>
             </div>
             <Table  border="1" className="mt-1">
               <Thead>
                 <Tr>
                 <Th width="40"></Th>
                 <Th colspan="4" className="text-center">OS</Th>
                 <Th colspan="4" className="text-center">OD</Th>
                 </Tr>
               </Thead>
               <Tbody>
                 <Tr>
                 <Td></Td>
                <Td className="text-center">SPH</Td>
                <Td className="text-center">CYL</Td>
                <Td className="text-center">AXIS</Td>
                <td className="text-center">V/A</td>

                <Td className="text-center">SPH</Td>
                <Td className="text-center">CYL</Td>
                <Td className="text-center">AXIS</Td>
                <Td className="text-center">V/A</Td>
                 </Tr>
                <Tr>
                  <Td>DV</Td>
                  <Td>{this.state.ossph}</Td>
                  <Td>{this.state.oscyl}</Td>
                  <Td>{this.state.osaxis}</Td>
                  <Td>{this.state.osva}</Td>

                  <Td>{this.state.odsph}</Td>
                  <Td>{this.state.odcyl}</Td>
                  <Td>{this.state.odaxis}</Td>
                  <Td>{this.state.odva}</Td>
                </Tr>
                <Tr>
                  <Td>NV</Td>
                  <Td></Td>
                  <Td colspan="2"></Td>
                  <Td></Td>

                  <Td></Td>
                  <Td colspan="2"></Td>
                  <Td></Td>
                </Tr>
               </Tbody>
             </Table>
               <div className="row mt-1">
                 <div className="col-md-3">
                  <span>Dist | PD.RE:</span>
                  <span> {this.state.distre}</span>
                 </div>
                 <div className="col-md-3">
                 <span>LE:</span>
                 <span> {this.state.distle}</span>
                 </div>
                 <div className="col-md-3">
                  <span>Near | PD.RE:</span>
                  <span> {this.state.nearre}</span>
                 </div>
                 <div className="col-md-3">
                 <span>LE:</span>
                 <span> {this.state.nearle}</span>
                 </div>
             </div>
             <div className="row mt-2">
  
  
  {(() => {
    console.log("kryptok", this.state.kryptok);
  if(this.state.kryptok == 1){
    return(
      <div className="col-md-3">
      <span>Kryptok</span>
      <i style={{marginLeft:"38px"}} class="fa fa-check" aria-hidden="true"></i>
 </div>
    );
  
  } else  {
    return(
      <div className="col-md-3">
      <span>Kryptok</span>
    <input
     style={{marginLeft:"38px"}}
    type="checkbox"
    checked={false}

 />
 </div>
    );
  }

})()}

{(() => {
 if(this.state.unicvisd == 1){
  return(
    <div className="col-md-3">
   <span>Unicvis D</span>
   <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
    );
  } else {
    return(
      <div className="col-md-3">
     <span>Unicvis D</span>
  <input
  style={{marginLeft:"10px"}}
  type="checkbox"
  checked={false}
  value={this.state.unicvisd}
  />
  </div>
      );
  }

})()}

{(() => {

if(this.state.hiindex == 1){
 return(
 <div className="col-md-3">
 <span>Hi index</span>
 <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
</div>

 );
} else {
  return(
    <div className="col-md-3">
 <span>Hi index</span>
 <input
 style={{marginLeft:"10px"}}
 type="checkbox"
 name="unicvisd"
 id="unicvisddata"
 checked={false}
 value={this.state.unicvisd}
/>
</div>
  );
}

})()}

{(() => {
if(this.state.photochromic == 1){
  return(
  <div className="col-md-3">
  <span>Photochromic</span>
  <i style={{marginLeft:"31px"}} class="fa fa-check" aria-hidden="true"></i>
  </div>
  );
} else {
  return(
    <div className="col-md-3">
    <span>Photochromic</span>
    <input
    style={{marginLeft:"31px"}}
    type="checkbox"
    checked={false}
    value={this.state.photochromic}
    
    />
    </div>
    );
}


})()}

{(() => {

  if(this.state.progreesive == 1){
    return(

      <div className="col-md-3">
     <span>Progreesive</span>
     <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
   </div>

    );

  } else {
    return(

      <div className="col-md-3">
     <span>Progreesive</span>
     <input
    style={{marginLeft:"10px"}}
    type="checkbox"
    checked={false}
    value={this.state.progreesive}
/>
</div>

    );
  }

})()}

{(() => {

if(this.state.glass == 1){
  return(
    <div className="col-md-3">
   <span>Glass</span>
   <i style={{marginLeft:"39px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
  );
} else {
  return(
    <div className="col-md-3">
   <span>Glass</span>
 <input
style={{marginLeft:"39px"}}
type="checkbox"
checked={false}
value={this.state.glass}

/>
</div>
  );
}

})()}


{(() => {

  if(this.state.white == 1){
    return(
      <div className="col-md-3">
      <span>White</span>
      <i style={{marginLeft:"26px"}} class="fa fa-check" aria-hidden="true"></i>
   </div>
    );
  } else {
    return(
      <div className="col-md-3">
      <span>White</span>
    <input
    style={{marginLeft:"26px"}}
   type="checkbox"
   checked={false}
  value={this.state.white}

/>
</div>
    );
  }

})()}


{(() => {

if(this.state.arc == 1){
  return(
<div className="col-md-3">
<span>Arc</span>
<i style={{marginLeft:"106px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
);
} else {
  return(
    <div className="col-md-3">
    <span>Arc</span>
    <input
    style={{marginLeft:"106px"}}
    type="checkbox"
    checked={false}
    value={this.state.arc}
    />
    </div>
    );
}

})()}

{(() => {

if(this.state.executive == 1){
 return(
  <div className="col-md-3">
  <span>Executive</span>
  <i style={{marginLeft:"26px"}} class="fa fa-check" aria-hidden="true"></i>
  </div>
 );
} else {
  return(
    <div className="col-md-3">
    <span>Executive</span>
    <input
    style={{marginLeft:"26px"}}
    type="checkbox"
    checked={false}
    value={this.state.executive}
    />
    </div>
   );
}

})()}

{(() => {
if(this.state.plastic == 1){
 return(
<div className="col-md-3">
<span>Plastic</span>
<i style={{marginLeft:"30px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
 );
} else {
  return(
    <div className="col-md-3">
    <span>Plastic</span>
    <input
    style={{marginLeft:"30px"}}
    type="checkbox"
    checked={false}
    value={this.state.plastic}
    />
    </div>
     );
}

})()}

{(() => {

if(this.state.tint == 1){
return(
  <div className="col-md-3">
<span>Tint</span>
<i style={{marginLeft:"40px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
);
} else {
  return(
    <div className="col-md-3">
  <span>Tint</span>
  <input
  style={{marginLeft:"40px"}}
  type="checkbox"
  checked={false}
  value={this.state.tint}
  />
  </div>
  );
}

})()}

{(() => {

if(this.state.ophthalmologist == 1){
 return(
 <div className="col-md-3">
<span>Ophthalmologist</span>
<i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
 );
} else {
  return(
  <div className="col-md-3">
<span>Ophthalmologist</span>
<input
type="checkbox"
style={{marginLeft:"10px"}}
name="ophthalmologist"
id="ophthalmologistdata"
checked={false}
value={this.state.ophthalmologist}
/>
</div>
);
}

})()}


</div>
<div className="mt-2">
 <span>Special instructions:</span>
 <span>  {this.state.instruction}</span>
 <hr></hr>
 <div className="col-md-12">
 <h6 className="text-center">Your Glasses are dispensed in the most scientific manner at our opticals</h6>
 </div>
 
</div>
  </Container>
            
        </div>
        </Container>
      </div>
     
      <div id="printdisc" style={{display:"none"}}>
        <Container>
       <div  className="card">
       <div className="row">
       <div className="col-md-1 mt-1">
       </div>
              <div className="col-md-5 mt-2">
              <img style={{maxWidth:"400px",height:"80px"}} src={Logoimg}></img>
              </div>
              <div className="col-md-5 mt-2">
                <div className="float-right">
                <p> Jansons MRI Opposite, Perunduari Road,</p>
                <p> Erode - 638011</p>
              <p> Ph: 86820 00055</p>
              <p>Consulting Time: 10.00 am to 2.00 pm, </p>
              <p> 4.00 pm to 8.00 pm</p>
                </div>
              
              </div>
            </div>
            <div className="col-md-1 mt-1">
            </div>
            <hr></hr>
            <div className="col-md-12">
            <div className="row">
             <div className="col-md-1">

             </div>
             <div className="col-md-10">
             <p>{this.state.reportStartDate}</p>
            <p>{this.state.username}</p>
            <p>{this.state.address}</p>
            <h5>Dear {this.state.username}</h5>
            <br></br>
            <p style={{whiteSpace:"pre-line"}}>{this.state.distext}</p>
            <div className="float-right mt-5">
            <span className="mr-3">Doctor signature</span>
            </div>
            </div>
           <div className="col-md-1">

             </div>
            </div>
            </div>
            
       </div>
       </Container>
       </div>
     
    </Container>
    <div id="footerdatacheck">
        <Footerdata />
        </div>
      
        </div>
        
        
  );
  
}

}



export default Editcasesheetdata;
