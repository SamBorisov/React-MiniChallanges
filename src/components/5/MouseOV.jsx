import React from 'react';

export default function MouseOV(props) {

    const [greet, setGreet] = React.useState("Hello")
    const [mo, setMo] = React.useState(false)
    const [name1, setName1] = React.useState({
      fname: "",
      lname: "",
      email: ""
    });
    const [name2, setName2] = React.useState("")
  
    function changeGreet() {
      setGreet("Hey")
      setName2(name1.fname)
    }
   
   function chageColor() {
    setMo(true)
   }
   function changeBack(){
     setMo(false)
   }

   function handleChange(event) {
    const {name, value} = event.target;
    setName1(prev => {
      if (name === "fName"){
        return{
          fname: value,
          lname: prev.lname,
          email: prev.email
        }
      } else if (name === "lName") {
        return{
          fname: prev.fname,
          lname: value,
          email: prev.email
        }
      } else if (name === "email") {
        return{
          fname: prev.fname,
          lname: prev.lname,
          email: value
        }
      }
    })
  }
  
    return (
      <div className="container">
        <h1>{greet + " " + name2 + " " + name1.fname + " "+ name1.lname}!</h1>
        <p>{name1.email}</p>
        <input name="fName" type="text" placeholder="What's your first name?" onChange={handleChange} value={name1.fname} />
        <input name="lName" type="text" placeholder="What's your last name?" onChange={handleChange} value={name1.lname} />
        <input name="email" type="text" placeholder="What's your email?" onChange={handleChange} value={name1.email} />
        <button style={{backgroundColor: mo ? "black" : "white"}} 
        onMouseOver={chageColor}  
        onMouseLeave={changeBack}
        onClick={changeGreet}>Submit</button>
      </div>
    );
  }