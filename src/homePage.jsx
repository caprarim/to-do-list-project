  import { useEffect, useState } from "react"
  import { Navigate, useNavigate } from "react-router-dom";


  function ToDoList(){
    const navigate = useNavigate()

    useEffect(() => {
      document.title = `To Do List | Organize Your Tasks`
    })
    function SendToHome(){
      navigate("/sign")
    }
    function Sign(){
      navigate("/sign")
    }
    


  return (
    <>
    
      <div className="toDoHome">
        <img
          className="logo"
          src="src/assets/logo2.png"
          alt="Logo"
        />
        <p className="paraList">todoli</p>
      </div>

      

      <h1 id="myh1">To Do List</h1>
      <div className="signUppContainer">
      <h1 id="signUp" onClick={Sign}>Sign Up</h1>
      </div>
      <div className="startBtnContainer">
      <button className="startBtn2" onClick={SendToHome}>Start for free</button>
    </div>
    <div className="startBtn2Container">
    <button className="startBtn" onClick={SendToHome}>Start for free</button>
    </div>
      <div className="mainContainer">
        <div className="detailsContainer">
          <h2 className="myh12">Want to keep track of your Tasks?</h2>
          <p className="perfectpara">This is the perfect place to do so!</p>
          <p className="offerpara">Our To Do List offers everything you need!</p>
        </div>
     </div>
     <div className="picContainer">
          <img
            src="src/assets/todoListpicc.PNG"
            id="mypic"
            alt="To Do Preview"
          />
        </div>
     
        
    
        
     

    </>
  );

      
  }

  export default ToDoList