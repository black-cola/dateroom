function addTodolist(e) {
 
    var obj_list = {
   
     todo: "", //用于存储用户输入的数据
   
     done: false  //初始化用户输入的数据属性，以便对用户待办事项进行分类
   
    };
   
    document.getElementById("add_list").value = document.getElementById("add_list").value.trim();
   
    if (document.getElementById("add_list").value.length === 0){
   
     alert("不能为空");
   
     return;
   
    }
   
    obj_list.todo = document.getElementById("add_list").value;
   
    todolist.push(obj_list);
   
    saveData(todolist);
   
    document.getElementById("add_list").value = "";  //初始化输入框
   
    load();  //将用户输入的数据添加至dom节点
   
    document.getElementById("add_list").focus();
   
   }

//----------------------------------------------

   function load(){

    var todo = document.getElementById("todolist"),
   
     done = document.getElementById("donelist"),
   
     todocount = document.getElementById("todocount"),
   
     donecount = document.getElementById("donecount"),
   
     todoString = "",
   
     doneString = "",
   
     todoCount = 0,
   
     doneCount = 0;
   
    document.getElementById("add_list").focus();
   
    todolist = loadData();
   
    //todolist数组对象里若包含用户输入数据，则将其添加至dom节点；若为空对象，则初始化页面。
   
    if (todolist != null){
   
     for (var i=0; i<todolist.length; i ++){
   
      if(!todolist[i].done){
   
       todoString += "<li>"
   
   //通过onchange事件，复选框值有改变则调用update函数，并改变输入数据“done”属性的布尔值，这样
   
   //下次load()后，这段数据会进入不同的分组，未完成的事项分入已完成事项组，已完成事项分入未完成事项组
   
   //点击事项调用edit函数
   
   //点击“-”，调用remove函数
   
        + "<input type='checkbox' onchange='update("+i+", \"done\", true)'>"
   
        + "<p id='p-"+i+"' onclick='edit("+i+")'>" + todolist[i].todo + "</p>" +
   
        "<a onclick='remove("+i+")'>-</a>" +
   
        "</li>"; //将每次用户输入的数据，通过节点<p>利用id标记，以便后续编辑功能定位
   
       todoCount ++;
   
      }
   
      else{
   
       doneString += "<li>"
   
        + "<input type='checkbox' "
   
        + "onchange='update("+i+", \"done\", false)' checked>"
   
        + "<p id='p-"+i+"' onclick='edit("+i+")'>" + todolist[i].todo + "</p>"
   
        + "<a onclick='remove("+i+")'>-</a>"
   
        + "</li>";
   
       doneCount ++;
   
      }
   
     }
   
     todo.innerHTML = todoString;
   
     done.innerHTML = doneString;
   
     todocount.innerHTML = todoCount;
   
     donecount.innerHTML = doneCount;
   
    }
   
    else {
   
     todo.innerHTML = "";
   
     done.innerHTML = "";
   
     todocount.innerHTML = 0;
   
     donecount.innerHTML = 0;
   
    }
   
   }


   var data = { a:'123', b: '456', c: '789'};  
var dataArr = [];  
for(var i in data){  
var dataObj = {};//在里面定义对象  
    dataObj.name= data[i];  
    dataArr.push(dataObj);  
}  
console.log(dataArr)  