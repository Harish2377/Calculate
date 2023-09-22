
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';



function App() {
   const [interest,setInterest]=useState(0)
   const [principle,setPrinciple]=useState(0)
   const [rate,setRate]=useState(0)
   const [year,setYear]=useState(0)
   const [isPrincipleValid,setIsPrincipleValid] = useState(true)
   const [israteValid,setIsrateValid] = useState(true)
   const [isYearValid,setIsYearValid] = useState(true)


  const validateInput=(e)=>{
    //{key}=object
    const {name,value}=e.target
    //logic to check number valisation - regular expression: /^[0-9]+$/
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {

      if (name==="principle") {

          setPrinciple(value)
          setIsPrincipleValid(true)
        
      }else if(name=="rate"){

        setRate(value)
        setIsrateValid(true)
        

      }else if(name==="year"){

        setYear(value)
        setIsYearValid(true)
        

      }


      
    }else{

          if (name==="principle") {

          setPrinciple(value)
          setIsPrincipleValid(false)
        
      }else if(name==="rate"){

        setRate(value)
        setIsrateValid(false)
        

      }else if(name==="year"){

        setYear(value)
        setIsYearValid(false)
        

      }

    }

  }

const handleEcalculate = (e)=>{
  e.preventDefault()
  if(!principle || !rate || !year)
  {
    alert('Please fill the form Completely!!')
  }else{
    setInterest(principle*rate*year/100)
  }
}

const reset = ()=>{

  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrincipleValid(true)
  setIsrateValid(true)
  setIsYearValid(true)


}


  return (
    <div style={{height:'auto'}} className='d-flex justify-content-center align-items-center w-100 bg-black'>
     
     <div style={{width:'600px'}} className='bg-light p-4 rounded m-4'>
        <h3 className='text-center'>Simple Interest App</h3>
        <p className='text-center'>Calculate Your Simple Interest Easily</p>
        
        <div style={{height:'150px'}} className="interest-card w-100 text-black bg-warning mt-5 d-flex justify-content-center align-items-center flex-column rounded shadow">
          
          <h1>₹{' '} {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>

        </div>

        <form className='mt-5' onSubmit={handleEcalculate}>

          <div className='mb-3'>
            <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e)} className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" />
          </div>
          
            {!isPrincipleValid &&
            <div className='mb-3 text-danger' >

              *Invalid User Input

            </div>}
            
         


          <div className='mb-3'>
            <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e)} className='w-100' id="outlined-basic2" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>

          {!israteValid &&
            <div className='mb-3 text-danger' >

              *Invalid User Input

            </div>}

          <div className='mb-3'>
            <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e)}  className='w-100' id="outlined-basic3" label="Time Period ( Yr )" variant="outlined" />
          </div>

          {!isYearValid &&
            <div className='mb-3 text-danger' >

              *Invalid User Input

            </div>}

          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{height:'70px',width:'50%'}}  variant="contained" color="success" disabled={isPrincipleValid && israteValid && isYearValid?false:true} >CALCULATE</Button>
            <Button style={{height:'70px',width:'50%'}} variant="outlined" color="error" onClick={reset}>RESET</Button>
          </Stack>



        </form>

      </div>

    </div>
  );
}

export default App;
