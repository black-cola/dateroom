function addSth(e) {
    //声明一个对象来记录列表
    var obj_list = {
        todo: '', //存储文本框的value值
        done: false  //初始化用户输入的数据属性，以便对用户待办事项进行分类
    }
    var title = document.getElementById('title');
    var todolist = document.getElementById('todolist'); 
    if(title.value.length == 0) {
        alert("todo不能为空");
        return;
    } 
    obj_list.todo = title;
    todolist.push(obj_list);

    saveData(todolist);
    title = "";     //初始化输入框
    load();     //将用户输入的数据添加至dom节点
    title.focus();
}
//添加数据至dom节点
function load() {
    var todolist = document.getElementById('todolist');
    var donelist = document.getElementById("donelist");
    var todocount = document.getElementById('todocount');
    var donecount = document.getElementById('donecount');
    todostring = "",
    donestring = "",
    todocount = 0;
    donecount = 0;

    document.getElementById("title").focus();
    todolist = loadData();

    if (todolist !== null) {
        for (var i=0; i<todolist.length; i++) {
            if (!todolist[i].done) {
                todostring +='<li>' + "<input type='checkbox' οnchange='update("+i+", \"done\", true)'>"
                + "<p id='p-"+i+"' οnclick='edit("+i+")'>" + todolist[i].todolist + "</p>" +
                "<a οnclick='remove("+i+")'>-</a>" +
                "</li>";

                todocount++;
            }else {
                donestring += "<li>"
                    + "<input type='checkbox' "
                    + "οnchange='update("+i+", \"done\", false)' checked>"
                    + "<p id='p-"+i+"' οnclick='edit("+i+")'>" + todolist[i].todolist + "</p>"
                    + "<a οnclick='remove("+i+")'>-</a>"
                    + "</li>";

                donecount++;
            }
        }
        todolist.innerHTML = todostring;
        donelist.innerHTML = donestring;
        todocount.innerHTML = todocount;
        donecount.innerHTML = donecount;
    }else {
    todolist.innerHTML = "";
    donelist.innerHTML = "";
    todocount.innerHTML = 0;
    donecount.innerHTML = 0;
    }
}

function edit(i) {
    var p = document.getElementById('p-' + i),
        pContent = p.innerHTML,
        inputId;
 
//通过upadate函数对todolist数组相应项进行更新，将用户输入的内容写入到todolist数组相应项的todo属性中
    function confirm() {
        if (inputId.value.length === 0) {
            p.innerHTML = pContent;
            alert("内容不能为空");
        }
        else {
            update(i, "todo", inputId.value);   //修改事项内容后，更新数组里对应项"todo"属性的值，以便更新dom节点
        }
    }
 
//结合keypress事件，按下enter键，调用confirm函数
    function enter(e) {
        if (e.keyCode == 13){
            confirm();
        }
    }
    p.innerHTML = "<input type='text' id='input-"+i+"' value='"+pContent+"'>";
    inputId = document.getElementById('input-'+i);
    inputId.focus();
    inputId.setSelectionRange(0, inputId.value.length);
    inputId.onblur = confirm;   //表单控件失去焦点，调用confirm函数，即对页面内容进行更新
    inputId.onkeypress = enter;     //对按键事件进行监控
}

function update(i, field, value) {
    todolist[i][field] = value;
    saveData(todolist);
    load();
}

function remove(i) {
    todolist.splice(i, 1);
 
    saveData(todolist); //相同名称的缓存会覆盖，更新缓存
 
    load();
}

function saveData(data) {
    localStorage.setItem("mytodolist", JSON.stringify(data));   //JS对象转换成JSON对象存进本地缓存
}
function loadData() {
    var hisTory = localStorage.getItem("mytodolist");
    if(hisTory != null){
        return JSON.parse(hisTory);     //JSON对象转换为JS对象
    }
    else { 
        return []; 
    }
}

function clear() {
    localStorage.clear();
    load();
}

window.addEventListener("load", load);  //页面加载完毕调用load函数
document.getElementById("clear").onclick = clear;
document.getElementById("title").onkeypress = function (e) {
    if(e.keyCode === 13){
        addSth();
    }
};
