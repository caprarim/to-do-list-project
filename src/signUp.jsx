import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Register(){
    let [errorDisplay, setErrorDisplay] = useState("")

    let [signOrLog, setSignOrLog] = useState(localStorage.getItem("E") !== null ? "Log in" : "Sign up")

    let [display3, setDisplay3] = useState(false)

    let [display4, setDisplay4] = useState(signOrLog == "Sign up" ? false : true)

    let [display5, setDisplay5] = useState(false)

    let [displaysignOrLog, setDisplaySignOrLog] = useState(localStorage.getItem("E") !== null ? "Log in" : "Sign up")
    const navigate = useNavigate();

    let spaces = " "

    function SignIn(){
        const emailInput = document.getElementById("myEmail")
        const passInput = document.getElementById("myPass")

        let myemailValue = emailInput.value
        let myPassValue = passInput.value
        const name = myemailValue.slice(0, myemailValue.indexOf("@"))
        console.log(name)


        if(signOrLog == "Sign up" && 
            myemailValue.includes("@") &&
            myemailValue.includes(".") &&
            myemailValue.length >= 6 &&
            !myemailValue.includes(" ") &&
            !myPassValue.includes(" ") &&
            myPassValue.length >= 5){
            localStorage.setItem("P", myPassValue)
            localStorage.setItem("E", myemailValue)
            localStorage.setItem("MYNAME", name)

            setErrorDisplay("") 
            navigate("/todo")
        }
        else{
            setErrorDisplay("Invalid credentials")
        }

        if(signOrLog == "Log in" && myemailValue !== localStorage.getItem("E") && myPassValue !== localStorage.getItem("P")){
            setErrorDisplay("Wrong credientals!")
        }
        if(signOrLog == "Log in" && myemailValue == localStorage.getItem("E") && myPassValue == localStorage.getItem("P")){
             setErrorDisplay("")
             navigate("/todo")

        }

        else if(signOrLog == "Log in" && myPassValue == localStorage.getItem("newPassword") && myemailValue == localStorage.getItem("E")){

             setErrorDisplay("")
             navigate("/todo")
        }

         
        
         
    }

    
    
    
    function displayForgotPassDiv(){
        setDisplay3(true)
        setDisplay4(false)
        setDisplay5(true)
        localStorage.removeItem("P")
        
        }

        function cancel3(){
        setDisplay3(false)
        
         setDisplay4(true)

        setDisplay5(false)
        }

    function passUpdated(){
        setDisplay3(false)
        
        setDisplay4(true)

        setDisplay5(false)

        const myPass = document.getElementById("myNewPass")

        const myPassVal = myPass.value;

        if(myPassVal.length >= 5){
            localStorage.setItem("newPassword", myPassVal)
        }
        else{
            null;
        }

        

}



    return(
        <>
        <div style={{fontSize: "1.5rem", color: "red", position: "fixed", textAlign: "center", bottom: "30%", left: "45.5%"}}>{errorDisplay}</div>
        <div className="wrapper">
        <div className="signUpContainer">
        <div className="mainConta1ner">
        <div className="signUpDisplayDiv">
            <div className="loginContainer">
            <h1 className="myLogin">{displaysignOrLog}</h1>
            </div>
        <input className="Email" id="myEmail"
         autoFocus placeholder="📧Type your email" type="text" />
      <input className="Password" id="myPass" type="password" placeholder="🔓Type your password"></input>
      <button className="signUpBtn" id="signBtn" onClick={SignIn}>{signOrLog}</button>    
        </div>
        </div>


        <div className="forgotPassDiv" style={display5 ? {display: "block"} : {display: "none"}}>
        </div>

        <button className="forgotPass" id="myForgotPass"
         onClick={displayForgotPassDiv}
          style={display4 ? {display: "block"} : {display: "none"}}>Forgot Password?</button>

        <input className="newPass"
         id="myNewPass"
          placeholder="Enter new password"
           style={display3 ? {display: "block"} : {display: "none"}}></input>

        <button className="submitNewPass"
          onClick={passUpdated}
           style={display5 ? {display: "block"} : {display: "none"}}>Reset Password</button>

        <button className="cancel3"
         onClick={cancel3}
          style={display5 ? {display: "block"} : {display: "none"}}>Cancel</button>

        
        <div className="toDoHome2">
        <img
          className="logo2"
          src="/to-do-list-project/logo2.png"
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