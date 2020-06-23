var btn = document.querySelector('.button');
var list = document.querySelector('.list');
var input = document.querySelector('#input');
var task =document.querySelector('#task');
btn.addEventListener('click',updateData);
var data = [];
function updateData(){
    data.push({
        text:input.value
    });
    dataHandle();
}
function remove(e){
    data.splice(e.target.dataset.delete,1);
    dataHandle();
}
function removeAll(e){
    data = [];
    dataHandle();
}
function dataHandle(){
    var str ='';
    data.forEach(function(item,index){
        str += `<li>第${index+1}件：  ${ item.text} <button class="del" data-delete="${index}">刪除</button></li>`;
    });
    list.innerHTML = str;
    task.innerHTML =data.length;
    var del = document.querySelectorAll('.del');
    del.forEach(function(el,index){
        el.addEventListener('click',remove);
    });
    var delAll = document.querySelector('.deleteAll');
    delAll.addEventListener('click',removeAll);
}