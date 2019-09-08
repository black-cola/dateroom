    // function removeList(){
    //     var currentLi = e.target.parentNode;
    //     e.target.parentNode.parentNode.removeChild(currentLi);
        
    // }

    // var reduceSpan = document.querySelectorAll('span.reduce');

    
(function(){
    var lis, input, todolist, donelist, todocount, donecount, value, li, checkbox, text, span, txt, main, todolen, donelen, main, clear;
    main = document.getElementById('main');
    input = document.getElementById('input');
    todolist = document.getElementById('todolist');
    donelist = document.getElementById('donelist');
    todocount = document.getElementById('todocount');
    donecount = document.getElementById('donecount');
    clear = document.getElementById('clear');
    function addList(){
    lis = [];
    //console.log(Array.isArray(lis));
    //input = document.getElementById('input');
    
    todolen = 0;
    donelen = 0;
    value = input.value.trim();
    li = document.createElement('li');
    checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    text = document.createTextNode(value);
    span = document.createElement('span');
    txt = document.createTextNode('-');
    span.classList.add('reduce');
    span.appendChild(txt);
    checkbox.type = "checkbox";
    if(value == '') {
        // alert('请输入list');
        return;
    } else{ 
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(span);
        todolist.appendChild(li);
        todolen = todolist.querySelectorAll('li').length;
        donelen = donelist.querySelectorAll('li').length;
        todocount.innerHTML = todolen;
        donecount.innerHTML = donelen;
        input.value="";
        input.focus(); 
    }
}

    main.onclick = function(e) {
     var currentLi = e.target.parentNode;
        if(e.target.parentNode.parentNode.getAttribute('id') == 'todolist' &&  e.target.checked) {
            todolen--;
            todocount.innerHTML = todolen;
            donelen++;
            donecount.innerHTML = donelen;
            donelist.appendChild(currentLi);
        } else if(e.target.parentNode.parentNode.getAttribute('id') == 'donelist' &&  e.target.checked == false) {
            todolen++;
            todocount.innerHTML = todolen;
            donelen--;
            donecount.innerHTML = donelen;
            todolist.appendChild(currentLi);
            
        }
        if(e.target.getAttribute('class') == 'reduce') {
            
            if(currentLi.parentNode.getAttribute('id') == 'todolist') {
                todolen--;
            todocount.innerHTML = todolen;
            } else {
                donelen--;
            donecount.innerHTML = donelen;
            }
            e.target.parentNode.parentNode.removeChild(currentLi);
        } 
            
    }
    
    clear.onclick = function() { 
        if(document.querySelectorAll('li').length == 0) {
            return;
        }
        todolist.innerHTML = '';
        donelist.innerHTML = '';
        todocount.innerHTML = 0;
        donecount.innerHTML = 0;
        console.log('clear');
    }
    // document.getElementById("input").onkeypress = function (e) {
    //     if(e.keyCode === 13) {
    //         console.log(3);
    //         addList();
    //     }
    // }
        
    // document.addEventListener('keypress',function(e){
    //     if(e.keyCode === 13) {
    //         console.log(3);
    //         addList();
    //     }
    // });

    // input.addEventListener('keypress',function(e){
    //     var e = e || window.e || arguments.callee.caller.arguments[0];
    //     if(e || e.keyCode === '13') {
    //         setTimeout(function(){
    //             addList();
    //         },0);
    //     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    //     }
    // });
    input.addEventListener('keypress',function(e){
        var e = e || window.e || arguments.callee.caller.arguments[0];
        if(e || e.keyCode === '13') {
            
            addList();
            //取消回车键keypress事件的默认行为
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        }
    });
    
    
    })();

    // function edit() {
    //     li.innerHTML = checkbox + '<input type = "text" value = text> ' + span;
    //     console.log(li.innerHTML);
    // }
    

