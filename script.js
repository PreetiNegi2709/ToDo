let key, val;
let todoArray = [];
let delete_btn;
const content = document.querySelector(".todoList");
store_btn.addEventListener("click", function (e) {
  key = document.getElementById("inp1").value;
  val = document.getElementById("inp2").value;
  todoArray = [...todoArray, { title: key, des: val }];
  const list = todoArray.map((rem,index) => {
    return `<li class="listElem">
        <h3> ${rem.title} :  </h3>
        <p> ${rem.des} </p> 
        <button type="button" class="btn_cross">X</button></li>`;
}).join(`<br>`);
// array ko string conv krte h to , inset hota h; map by def string me conv krta h

content.innerHTML = list; 

  delete_btn = document.getElementsByClassName("btn_cross");
  for (let i = 0; i < delete_btn.length; i++) {
    delete_btn[i].addEventListener("click", function () {
    //   alert("item deleted");
      var div = this.parentElement;
      div.style.display="none";
    });
  }
});