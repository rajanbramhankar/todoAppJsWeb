
function addpop()
{

document.getElementById("popup").style.display="block"
}

function addpop2()
{

document.getElementById("popup2").style.display="block"
}


const tasklist=[]

function addtask()

{

document.getElementById("popup").style.display="none"

  const name=document.getElementById("card").value

    const tempObject={
    
    taskname:name,
    id:Date.now()
     }
    tasklist.push(tempObject)
  Cardsonscreen()
    
    }
    
function Cardsonscreen()
    {

const element=document.createElement("h1")
element.setAttribute("id","child")
element.innerText=tasklist[tasklist.length-1].taskname

const ExistingElement=document.getElementById("parent")
ExistingElement.appendChild(element)


const hr=document.createElement("hr")
hr.setAttribute("id","hr")
element.appendChild(hr)



const i=document.createElement("i")
i.setAttribute("id","plus")
i.innerHTML='<i class="fa-solid fa-circle-plus"></i>'
i.onclick=addpop2
element.appendChild(i)



const j=document.createElement("i")
j.setAttribute("id","delete")
j.innerHTML='<i class="fa-solid fa-trash-can"></i>'
element.appendChild(j)
j.onclick=deletecard


    }

    function deletecard()
    {


const trash=document.getElementById("child")
trash.parentNode.removeChild(trash)


    }



    // ****************************************************************************************
    const tasklist2=[]
const addtask2=()=>{


    document.getElementById("popup2").style.display="none"

    const name2=document.getElementById("card2").value

    const tempObject2={
    
    taskname2:name2
     }
    tasklist2.push(tempObject2)
  Cardsonscreen2()
}
function Cardsonscreen2()
{

    const element3=document.createElement("div")
    element3.setAttribute("class","dummy")

    element3.innerText=tasklist2[tasklist2.length-1].taskname2

    const ExistingChild=document.getElementById("child")
    ExistingChild.appendChild(element3)

    
    const butt=document.createElement("button")
    butt.setAttribute("id","but")
    butt.innerText="Mark Done"
    element3.appendChild(butt)
    


}