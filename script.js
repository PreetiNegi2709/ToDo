let key,val;
let todoArray=[];
const content = document.querySelector(".todoList")

store_btn.addEventListener("click",function(e){
    key = document.getElementById("inp1").value
    val = document.getElementById("inp2").value
    todoArray = [...todoArray,{title:key,des:val}]
    // console.log(todoArray)
    // console.log(todoArray[0])
    // console.log(todoArray[1])
    const list = todoArray.map((rem,index)=>{
        // console.log("hi")
        return  `<div class="listElem"><h3> ${rem.title} :  </h3>
        <p> ${rem.des} </p> <button type="button" class="btn_cross"> X </button> </div> `
    })
    content.innerHTML= list
    // todo.innerHTML= list

    // let delRem = document.getElementsByClassName("btn_cross")
    // delRem.addEventListener('click',function(e){
    //     alert("ok")
    // })

    let delRem = document.querySelector(".btn_cross")
    delRem.addEventListener('click',function(e){
        alert("ok")
    })

})











