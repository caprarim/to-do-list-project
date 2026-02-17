import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


function ToDoLi(){
    let [tasks, setTasks] = useState("")

    let [isDisabled, setisDisabled] = useState(true)

    let [display2, setDisplay2] = useState(false)

    let [isDisplay3, setIsDisplay3] = useState(false)

    let [isDisplay2, setIsDisplay2] = useState(false)

    let [display5, setDisplay5] = useState(false)

    let [isChecked, setisChecked] = useState(false)

    let [isDisabled2, setisDisabled2] = useState(true)

    let [isDisplay, setIsDisplay] = useState(false)

    let [displayTrue, setDisplayTrue] = useState(false)

    let [truE, setTruE] = useState(true)
    let [showListDisplay, setDisplay] = useState(true)
    let [myText, setmyText] = useState("")

    let [mainTasks, setMainTasks] = useState(
        JSON.parse(localStorage.getItem("myTasks")) || [])

    useEffect(() => {
            localStorage.setItem("myTasks", JSON.stringify(mainTasks))
           }, [mainTasks])

        let [searchTasks, setSearchTasks] = useState("")

    let [displaysearchTasks, displaysetSearchTasks] = useState([])

    const myTasks = document.getElementById("myTasks")
    





function handleTaskInput(e){
        setTasks(e.target.value)
        const myTask = document.getElementById("myTask")
        const addTask2 = document.getElementById("addTask2")

        if(e.target.value.length == 0){
            setisDisabled(true)
            addTask2.style.backgroundColor = "hsl(0, 100%, 70%)"
        }
        else{
            setisDisabled(false)
             addTask2.style.backgroundColor = "red"
        }
        
        

    }


    const navigate = useNavigate()
    function displayinput(e){
        const myTask = document.getElementById("myTask")
        const addTask = document.getElementById("addTask")
        
        const Cancel = document.getElementById("cancelTask")
        const addTask3 = document.getElementById("addTask3")
        Cancel.style.display = "flex"
        myTask.style.display = "flex";  
        addTask.style.display = "none"
        addTask3.style.display = "none"
        const addTask2 = document.getElementById("addTask2")
        addTask2.style.display = "block"
       setTasks("")
       setisDisabled(true)
       addTask2.style.backgroundColor = "hsl(0, 100%, 70%)"
    }

    
        
        

    function addTask(e){
        const myTask = document.getElementById("myTask")
        const addTask = document.getElementById("addTask")
        let myTaskVal = myTask.value;
        const addTask2 = document.getElementById("addTask2")
        const cancelBtn = document.getElementById("cancelTask")
        const addTask3 = document.getElementById("addTask3")
        addTask2.style.display = "none"
        myTask.style.display = "none"
        cancelBtn.style.display = "none"
        addTask3.style.display = "block"
        setMainTasks(v => [...v, myTaskVal])
}
        


    function Cancel(){
        const inputTxt = document.getElementById("myTask")
        const addTask2 = document.getElementById("addTask2")
        const cancelBtn = document.getElementById("cancelTask")
        const addTask = document.getElementById("addTask")
        inputTxt.style.display = "none"
        addTask2.style.display = "none";
        cancelBtn.style.display = "none"
        addTask.style.display = "flex"
    }

        function deleteTask(index){
            setDisplay5(false)
            

            const myOptionsDisplay = document.getElementById("myOptionsDisplay")

            const deleteBtn2 = document.getElementById("deleteBtn2")

            const cancelBtn2 = document.getElementById("cancelBtn2")

            const myDeleteMsg = document.getElementById("myDeleteMsg")
            myDeleteMsg.style.display = "block"
            myOptionsDisplay.style.display = "none"
    
            deleteBtn2.style.display = "flex";
        cancelBtn2.style.display = "flex"
            useEffect(() => {
                deleteBtn2.addEventListener("click", () => {
                const filteredTasks = mainTasks.filter((_, i) => index !== i)
                setMainTasks(filteredTasks)
                localStorage.setItem("currentIndexTasks", filteredTasks)
            })
            
            })
           
            
            
            
        }

        function moveUp(index){
            let currentTasks = [...mainTasks];
            if(index < currentTasks.length - 1){
                [currentTasks[index], currentTasks[index - 1]]  =   
                [currentTasks[index - 1], currentTasks[index]] 
            }
            setMainTasks(currentTasks)
        }

        function moveDown(index){

            let currentTasks = [...mainTasks];
            if(index < currentTasks.length - 1){
                [currentTasks[index], currentTasks[index + 1]]  =   
                [currentTasks[index + 1], currentTasks[index]] 
            }
            setMainTasks(currentTasks)
        }

        function showEmailAndPass(){
            const emailDisplay = document.getElementById("3Mail")
            const passDisplay = document.getElementById("pass")
            const signOutBtn = document.getElementById("signOutBtn")
            emailDisplay.style.display = "block"
            passDisplay.style.display = "block"
            signOutBtn.style.display = "block"
            setIsDisplay(true)

        }

        function hideEmailAndPass(){
            const signOutBtn = document.getElementById("signOutBtn")
            const emailDisplay = document.getElementById("3Mail")
            const passDisplay = document.getElementById("pass")
            emailDisplay.style.display = "none"
             passDisplay.style.display = "none"
             signOutBtn.style.display = "none"
             setIsDisplay(false)
        }
        
        function logOut(){  
            navigate("/sign")
            

        }
        const h5 = document.getElementById("h5")

        function taskFinished(index){
            setisChecked(true)
            const checkedTasks = document.getElementById("checkedTasks")
            if(checkedTasks){
                const myaudio = document.getElementById("myaudio")
             let taasks = [...mainTasks]
             const filterTasks = taasks.filter((_, i) => i !== index)
             h5.textContent = "1 task completed"
           h5.style.display = "block"
            setTimeout(() => h5.style.display = "none", 1500)
           setMainTasks(filterTasks)
            myaudio.play()
            }
            ;
            console.log("Yes")
        }

        function handleSearchTasks(e){
            setSearchTasks(e.target.value)
            let myval = e.target.value
            let filteredTsks = mainTasks.filter((task) => 
            task.toLowerCase().includes(myval))
            
            displaysetSearchTasks(filteredTsks)
    }
    let [para, setParaTxt] = useState("")
        function displayPopUp(){
            const popUpDiv = document.getElementById("popUpDiv")
            const myDisplayInput = document.getElementById("myDisplayInput")
            const addTask3 = document.getElementById("addTask3")
            popUpDiv.style.display = "flex"
            myDisplayInput.style.display = "flex"
            myDisplayInput.value = ""
            myDisplayInput.focus()
            const addTask = document.getElementById("addTask")
            addTask.style.display = "none"
            const addTask2 = document.getElementById("addTask2")
            addTask2.style.display = "none"
            addTask3.style.display = "none"
            let tasks = [...mainTasks]

            if(tasks.length == "0"){
               setParaTxt("No tasks found")
            }
            else{
                setParaTxt("")
            }
            setIsDisplay3(true)
            

        }
        function removeDisplayOfPopUp(){
            const popUpDiv = document.getElementById("popUpDiv")
            const addTask = document.getElementById("addTask")
            addTask.style.display = "flex"
            const myDisplayInput = document.getElementById("myDisplayInput")
            popUpDiv.style.display = "none"
            myDisplayInput.style.display = "none"
            setIsDisplay3(false)

        }
        function showTasks(){
            const myList = document.getElementById("myList")
            myList.style.display = "flex"
        }
        function reDirect(){
            const popUpDiv = document.getElementById("popUpDiv")
            
            const myDisplayInput = document.getElementById("myDisplayInput")
            popUpDiv.style.display = "none"
            myDisplayInput.style.display = "none"
            
        }
        
        function showOptions(){
            setDisplay5(true)
            setIsDisplay2(true)
        }
        
        function removeOptionsDisplay(){
        

        }
        function cancelClicked(){
            const myOptionsDisplay = document.getElementById("myOptionsDisplay")
            const myDeleteMsg = document.getElementById("myDeleteMsg")
            const deleteBtn2 = document.getElementById("deleteBtn2")
            const cancelBtn2 = document.getElementById("cancelBtn2")
            myOptionsDisplay.style.display = "none"
            myDeleteMsg.style.display = "none"
            cancelBtn2.style.display = "none"
            deleteBtn2.style.display = "none"
        }
        
        function deleteTask2(index){
            let Tasks = [...mainTasks]
            const filteredTasks = Tasks.filter((_, i) => i !== index)
            setMainTasks(filteredTasks)
            const myOptionsDisplay = document.getElementById("myOptionsDisplay")
            const myDeleteMsg = document.getElementById("myDeleteMsg")
            const deleteBtn2 = document.getElementById("deleteBtn2")
            const cancelBtn2 = document.getElementById("cancelBtn2")
            myOptionsDisplay.style.display = "none"
            myDeleteMsg.style.display = "none"
            cancelBtn2.style.display = "none"
            deleteBtn2.style.display = "none"
            setDisplay5(false)
        }
       let [popUpAddTaskTurnOn, setpopUpAddTaskTurnOn] = useState(false)

       let [inputDisplay, setInputDisplay] = useState(false)

       let [btnDisplay, setBtnDisplay] = useState(false)

       let [inputValue, setInputValue] = useState("")

       function handleInputChange(e){
        const addTask4 = document.getElementById("addTask4")

        setInputValue(e.target.value)
        if(e.target.value.length == 0){
            setisDisabled(true)
            addTask4.style.backgroundColor = "hsl(192, 3%, 32%)"
        }
        else{
            setisDisabled(false)
            addTask4.style.backgroundColor = "hsl(185, 91%, 42%)"
        }
       }
        function addTaskPopUp(){
            setpopUpAddTaskTurnOn(true)
            setInputDisplay(true)
            setBtnDisplay(true)
            setInputValue("")
            const addTask = document.getElementById("addTask")
            const addTask2 = document.getElementById("addTask2")
            const addTask3 = document.getElementById("addTask3")
            addTask.style.display = "none"
            addTask2.style.display = "none"
            addTask3.style.display = "none"
        }
         
        function addTask3(){
        const myTask = document.getElementById("myAddTaskInput")
        const addTask4 = document.getElementById("addTask4")
        let myTaskVal = myTask.value;
        myTask.style.display = "none"
        addTask4.style.display = "none"
        setMainTasks(v => [...v, myTaskVal]) 
           setpopUpAddTaskTurnOn(false)
           setInputDisplay(false)
            setBtnDisplay(false)
        const addTask = document.getElementById("addTask")
            const addTask2 = document.getElementById("addTask2")
            const addTask3 = document.getElementById("addTask3")
            addTask.style.display = "block"
            setisDisabled2(false)


        }

        function removeDisplay(){
            setpopUpAddTaskTurnOn(false)
            const addTask = document.getElementById("addTask")
            addTask.style.display = "flex"

        }

        

        const nav = useNavigate()
        function sendHomePage(){
            nav("/sendHome")

        }

        function handleChange(e){
            if(e.target.value == 0){
                setisDisabled2(true)
            }
            else{
                setisDisabled2(false)
            }
            
        }
        let n3v = useNavigate()

        function displayDelPopUp(){
            setDisplayTrue(true)
            setTruE(false)
        }

    
        function deleteAcc(){
            localStorage.removeItem("MYNAME")
   
            localStorage.removeItem("P")
            
            localStorage.removeItem("E")

            localStorage.removeItem("myTasks")

            localStorage.removeItem("newPassword")

            setDisplay(false)


            n3v("/sendHome")

        }

        function cancel2(){
            setDisplayTrue(false)
            setTruE(true)
        }

        function cancel4(){
            setIsDisplay2(false)
            setDisplay5(false)
        }

    return( 
        <>
        <div className="allFunctionContainer">
            <div className="abcContainer">
        <div className="abc">
            
            <div className="coolAddTask" onClick={addTaskPopUp}>
            <span className="firstLetterOfDiv"
             onClick={addTaskPopUp}>+</span> Add Task</div>
        
            <div className="logoContainer">
                <div className="logoPicContainer">
            <img src="src/assets/logo2.png" id="logoPic" onClick={sendHomePage}></img>
            </div>
            <p id="logoname" onClick={sendHomePage}>todoli</p>
         </div>

        <input id="mySearch" type="search" onClick={displayPopUp} 
         placeholder="🔍Search" >
         </input>
       
         </div>
         </div>

         <div id="popUpDiv"
         style={isDisplay3 ? {display: "block"} : {display: "none"}}>
            {displaysearchTasks.map((task) => 
        <li id="myList" onClick={reDirect} 
         style={{listStyle: "none", color: "red", position: "fixed", right: "100%"}}>{task}</li>)}

         <input style={{display: "none"}}
          id="myDisplayInput" placeholder="Search Task"
         value={searchTasks}
          onChange={handleSearchTasks} onKeyDown={showTasks} 
         ></input>

         <p style={{position: "fixed"}}>{para}</p>

        </div>
        
            
        <h5 id="h5" style={{display: "none"}}></h5>
        <div className="click2" style={{height: "1000px"}} onClick={removeDisplayOfPopUp}>

        <div className="myAccountContainer">
        <button onClick={showEmailAndPass}
        className="myAccount">{localStorage.getItem("MYNAME")}</button>
          </div>
          
        <div className="click" onClick={hideEmailAndPass} style={{height: "5000px", width: "5000px"}}>
        <h2 id="3Mail" className="EmailDisplay"
         style={{display: "none"}}>
             {localStorage.getItem("E")}
             </h2>

        <h2 id="pass" className="PassDisplay"
         style={{display: "none"}}>{localStorage.getItem("P") == null ? localStorage.getItem("newPassword") : localStorage.getItem("P")}</h2>

        <button className="deleteAccount" style={isDisplay ? {display: "block"} : {display: "none"}}
        onClick={displayDelPopUp}>Delete Account</button>
        <div className="inboxParent">
        <h1 id="inbox"></h1>
        </div>
        <div className="delPopUp" style={displayTrue ? {display: "block"} : {display: "none"}}><h1>Are you sure you would like to delete your account?</h1>
        <button className="yesBtn" onClick={deleteAcc}>Yes</button> <button className="noBtn" onClick={cancel2}>Cancel</button>
        </div>


        <div className="popUpAddTaskContainer">
            <div className="popUpAddTask"
             style={popUpAddTaskTurnOn ? {display: "block"} : {display: "none"}}>
                
                <input className="myAddTaskInput" value={inputValue}
                 onChange={handleInputChange}
                  style={inputDisplay ? {display: "block"} : {display: "none"}}
                   id="myAddTaskInput" placeholder="+ Add task"></input>

                <button className="addTask4"
                 style={btnDisplay ? {display: "block"} : {display: "none"}} id="addTask4"
                 onClick={addTask3}>Add Task</button>
                
            </div>
        </div>
        <div className="dontClickPopUp" onClick={removeDisplay} style={{height: "5000px", width: "5000px"}}>
        <button id="signOutBtn"className="signOut"
         onClick={logOut} style={{display: "none"}}>Log Out</button>


         

        <div className="listItemsContainer">
        <ol>
        {mainTasks.map((t, index) => 
        <li draggable={true}
         onDragEnd={() => moveDown(index)} key={index} id="myTasks"
          style={showListDisplay ? {display: "block"} : {display: "none"}}> {t}
          
            <input type="radio"
             id="checkedTasks" value={isChecked} onClick={() =>
                taskFinished(index)} name="onlyOne"></input>

                <div className="threeDotsContainer">
             <div className="threeDot" onClick={showOptions}></div>
            <div className="threeDot" onClick={showOptions}></div>
            <div className="threeDot" onClick={showOptions}></div>
            </div>
                
            <div className="optionsDisplay" id="myOptionsDisplay"
         style={display5 ? {display: "block"} : {display: "none"}}>

            <button className="delTask"
             id="myDeleteTask" onClick={() => deleteTask(index)}
              style={isDisplay2 ? {display: "block"} : {display: "none"}}>
                Delete</button>

            <button className="cancel4" onClick={cancel4}>Cancel</button>
            
         </div>

         
        
    
               
        <div className="deleteMsg" id="myDeleteMsg"
         style={{display: "none"}}>Delete task? <br/><br/>
          The task <b>{localStorage.getItem("currentIndexTasks")}</b> will be completely deleted.

         <button id="deleteBtn2" onClick={() => deleteTask2(index)} style={{display: "none"}}>Delete
        </button>
        <button id="cancelBtn2" onClick={cancelClicked} style={{display: "none"}}>Cancel</button>
        </div>
        
        
        </li>)}
        </ol>
        </div>
        </div>
        </div>
        
       
      
        
        
        <audio src="src/assets/audio/mainnoise.mp3" id="myaudio"></audio>

        <div className="addTask3Container">
        <button id="addTask3" onClick={displayinput} style={{display: "none"}
        }>+ Add Task</button>   
        </div>
        
        
        <div className="addtaskcontainer">
        <button id="addTask" onClick={displayinput} style={truE ? {display: "block"} : {display: "none"}}>+ Add Task</button>
        </div>

        <div className="CancelBtncontainer">
        <button id="cancelTask" onClick={Cancel} style={{display: "none"}}
        >Cancel</button>
        </div>
        <div className="myTaskContainer">
        <input id="myTask"
         placeholder="Go Grocery Shopping"
         style={{display: "none"}}
          value={tasks} onChange={handleTaskInput}>
         </input>
        </div>

        <div className="addTaskContainer2">
        <button id="addTask2" disabled={isDisabled} onClick={addTask} style={{display: "none"}} value={myText} onChange={handleChange}
        >+ Add Task</button>
        </div>
        
        </div>

        </div>

       

        </>
    )
}


export default ToDoLi