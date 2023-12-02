
import './App.css';





import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function fillup() {
  return (
    <div className='form'>
    <Form className='form-control' >

     
       
         <h6>Create Text & Media</h6>
       
     
     
        <div className="row">
        
          <div className="col-sm-6">
          <div className='row'>
          <label for="fname" class="form-label"><b>Heading 01</b></label>
          <input type="text" id="fname"  placeholder="Add heading that would make users interested"/>

          </div>
          <div className='row'>
        

        <label for="h2" class="form-label"><b>Heading 02</b></label>
          <input type="text" id="h2" name="heading2" placeholder="Add heading that would make users interested"/>
             
        
        </div>

          
          </div>


        
          <div className='col-sm-6 custom-height-column'>

          <label for="des" class="form-label"><b>Description</b></label>
          <input type="text" id="des" name="description" placeholder="Add primary text to help users understand more about your product, service & offers"/>
          </div> 

        </div>

       
     
      

      
        <div className="row">
        
          <div className="col-md-4">

          <label for="fname" class="form-label"><b>Landscape Marketing Image (1.9:1)</b></label>
          <input type="text" id="fname" name="firstname" placeholder="Add the url of Image that you want to use for ads"/>

          </div>
           <div className="col-md-4">

           <label for="fname" class="form-label"><b>Potrait Marketing Image (4:3)</b></label>
          <input type="text" id="fname" name="firstname" placeholder="Add the url of Image that you want to use for ads"/>

          </div>
           <div className="col-md-4">

           <label for="fname" class="form-label"><b>Square Marketing Image (1:1)</b></label>
          <input type="text" id="fname" name="firstname" placeholder="Add the url of Image that you want to use for ads"/>

          </div>
        </div>
      


      
        <div className='row'>
          <div className="col-sm-12">

            <label for="fname" class="form-label"><b>Video URL</b></label>
            <input type="text" id="fname" name="firstname" placeholder="Add the url of Video that you want to use for ads"/>
          </div>
        </div>
     


      
        <div className='row'>
          <div className="col-sm-6">

          <label for="fname" class="form-label"><b>Business Name</b></label>
          <input type="text" id="fname" name="firstname" placeholder="Add Your Business Name"/>
          </div>

          <div className="col-sm-6">

            <label for="country" class="form-label"><b>Button Label</b></label>
            <select id="country" name="country" placeholder='select button that best suits for your ads'>
              <option value="australia"></option>
              <option value="canada"></option>
              <option value="usa"></option>
            </select>

          </div>



        </div>

      


      
        <div className="row">
        
          <div className="col-sm-12">

          <label for="fname" class="form-label"><b>Website URL</b></label>
          <input type="text" id="fname" name="firstname" placeholder="Add the URL of landing page you want to redirect users to"/>
          </div>
        </div>


      

      

      


     
      <div className="col-md-3">
      <button type="submit" value="submit" class="btn btn-light"><p>Back</p></button>
        <button type="submit" value="submit" class="btn btn-primary">submit</button>
      </div>
     

    








      

    </Form>
    </div>
 



  );
}

export default fillup;
