import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Register(){
    let [errorDisplay, setErrorDisplay] = useState("")
    const navigate = useNavigate();
    let spaces = " "
    function SignIn(){
        const emailInput = document.getElementById("myEmail")
        const passInput = document.getElementById("myPass")

        let myemailValue = emailInput.value
        let myPassValue = passInput.value
        if(!myemailValue.includes("@")){
            setErrorDisplay("Invalid Credentials")
           
        }
         else if(myemailValue.includes(" ") || myPassValue.includes(" ")){
             setErrorDisplay("Invalid Credentials")
            
        }
        else if(!myemailValue.includes(".")){
             setErrorDisplay("Invalid Credentials")
           
        }
       else if(emailInput.value.indexOf(".") <= 5){
             setErrorDisplay("Invalid Credentials")
            
        }
        let name = myemailValue.slice(0, emailInput.value.indexOf("@"))
        if(myemailValue.includes("@") && 
        !myemailValue.includes(" ") &&
        !myPassValue.includes(" ") &&
        myemailValue.length > 5 &&
        myemailValue.includes(".") &&
        myPassValue.length > 5 &&
        emailInput.value.indexOf(".") > 5){
             setErrorDisplay("")
            localStorage.setItem("E", myemailValue)
            localStorage.setItem("P", myPassValue)
            localStorage.setItem("MYNAME", name)
            navigate("/todo")
        }

         if(passInput.value.length <= 5){
            setErrorDisplay("Increase password length")
            
        }



         

    }
    return(
        <>
        <div style={{fontSize: "1.5rem", color: "red", position: "fixed", textAlign: "center", bottom: "35%", left: "44%"}}>{errorDisplay}</div>
        <div className="wrapper">
        <div className="signUpContainer">
        <div className="mainConta1ner">
        <div className="signUpDisplayDiv">
            <div className="loginContainer">
            <h1 className="myLogin">Sign Up</h1>
            </div>
        <input className="Email" id="myEmail"
         autoFocus placeholder="📧Type your email" type="text" />
      <input className="Password" id="myPass" type="password" placeholder="🔓Type your password"></input>
      <button className="signUpBtn" id="signBtn" onClick={SignIn}>Sign up</button>    
        </div>
        </div>
        <div className="toDoHome2">
        <img
          className="logo2"
          src="src/assets/logo2.png"
          alt="Logo"
        />
        <p className="paraList2">todoli</p>
      </div>
      <h1 className="myWelcome"></h1>
      <div className="passAndEmailContainer"> 
    </div>

    </div>
    </div>
        </>
        
    )
}
export default Register