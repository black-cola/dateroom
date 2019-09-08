function addList() {
    //声明一个对象，用来存储用户输入的数据以及数据的属性
    var obj_list = {todo: '', done: false};
    var input =  document.getElementById('input');
    var value = input.value.trim();
    if(value.length == 0) {
        alert('请输入list');
        return;
    } 
    //那么此对象的todo属性值就为文本框的value值
   // obj_list.todo = value;
    //将对象添加到一个todolist数组中
    var list = [];
    //list.push(obj_list);
    
    
    //console.log(list);
    //数据添加至列表后，清空文本框
    
    //获取正在进行ol列表
    var todolist = document.getElementById('todolist');
    //获取已经完成ol列表
    var donelist = document.getElementById('donelist');
    //获取存放未完成列表的数量span
    var todocount = document.getElementById('todocount');
    ////获取存放已完成列表的数量span
    var donecount = document.getElementById('dontcount');

    var todoString = '';
    var doneString = '';
    todocount = 0;
    donecount = 0;
    
    if(list != null) {
    

        for(var i = 0, len = list.length; i < len; i++) {
            // console.log('for');
            if(!list[i].done) {
                todoString += '<li>' +
                '<input type = checkbox >' +
                '<p id = p-' + i + '>' + 
                list[i].todo + '</p>' +
                '<span>-</span>' + 
                '</li>';
                todocount++;
                console.log('数组的done为真');
            } else {
                doneString += '<li>' +
                '<input type = checkbox >' +
                '<p id = p-' + i + '>' + 
                list[i].todo + '</p>' +
                '<span>-</span>' + 
                '</li>';
                donecount++;
            }
        }
        // console.log(123);
        todolist.innerHTML = todoString;
        donelist.innerHTML = doneString;
        todocount.innerHTML = todocount;
        donecount.innerHTML = donecount;
    } else {
    
        console.log(456);
        todolist.innerHTML = '';
        donelist.innerHTML = '';
        todocount.innerHTML = 0;
        donecount.innerHTML = 0;
    }
    //文本框聚焦
    //input.focus();

    input = '';
}