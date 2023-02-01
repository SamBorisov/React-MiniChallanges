import BTN from "./Button";
import Inp from "./Input";



function From2() {

    let isReg = false;

    return (
      <div>
        
        {isReg ? 
        <form className="form">
        <Inp type="text" placeholder="username"/>
        <Inp type="password" placeholder="password"/>
        <BTN name="Login"/>
        </form>
        :
        <form className="form">
        <Inp type="text" placeholder="username"/>
        <Inp type="password" placeholder="password"/>
        <Inp type="password" placeholder="comform password"/>
        <BTN name="Register"/>
        </form>
        }
      </div>
    );
  }
  
  export default From2;