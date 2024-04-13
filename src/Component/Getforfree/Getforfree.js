import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Getforfree = () => {
  return (


    <div className="container " style={{ backgroundColor: "black",height:100 }}>

  
      <div style={{ position: 'relative' }}>
      <Button
        
        style={{
          position: 'absolute',
          top: '20px',
          right: '10px',
          backgroundColor:'white',
          color:'black'
        }}
      >
        Get for free
      </Button>
    </div>


       <div className="img-fluid" >
      <Image className="img-fluid" src="./Default.png"   style={{position:'relative',left:1,top:15}}/>
      <span style={{position:'relative',left:1,top:15,color:'white'}}>made by</span>


      
      <Image className="img-fluid" src="./Bux.png"   style={{position:'relative',left:10,top:15}}/>
      <span style={{position:'relative',left:20,top:15,color:'white'}}>Framer</span>
      
      </div>
   
     
   
   
   
   
   
    </div>
  );
};
export default Getforfree;
