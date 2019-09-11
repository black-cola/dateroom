$(function(){
var input, todolist, donelist, li, todocount, donecount, clear, value;
 todolist = $('#todolist');
 donelist = $('#donelist');
   function addList(){
    input = $('#input').val();
    value = $.trim(input);
    todocount = 0;
    donecount = 0;
    if(value == ''){
        // alert('请输入list');
        $('#input').val('');
        return;
    } else {
        $('#todolist').append('<li><input type = "checkbox" class="checkbox">' + value + '<span class="reduce">-</span></li>'); 
        todocount = $('#todolist > li').length;
        
        $('#todocount').text(todocount);
        $('#donecount').text(donecount);
        $('#input').val('');
        $('#input').focus();
    }
   
   } 
  
   $('#main').click(function(e){
       if($(e.target).attr('class') === 'reduce') {
           if($(e.target).parent().parent().attr('id') === 'todolist'){
               todocount--;
               $('#todocount').text(todocount);
           } else if($(e.target).parent().parent().attr('id') === 'donelist'){
                donecount--;
                $('#donecount').text(donecount);
           }
           $(e.target).parent().remove();
           
           
           
       }
       if($(e.target).parent().parent().attr('id') === 'todolist' && $(e.target).is(':checked') === true){
           $('#donelist').append($(e.target).parent());
           todocount--;
           $('#todocount').text(todocount);
           donecount++;
           $('#donecount').text(donecount);
       } else if($(e.target).parent().parent().attr('id') === 'donelist' && $(e.target).is(':checked') === false){
           $('#todolist').append($(e.target).parent());
           todocount++;
           $('#todocount').text(todocount);
           donecount--;
           $('#donecount').text(donecount);
       }
   });
   $('#input').keypress(function(e){
       var e = e || window.e || arguments.callee.caller.arguments[0];
       if(e.keyCode === 13) {
           addList();
           e.preventDefault ? e.preventDefault() : (e.returnValue = false);
       }
   });
   
   $('#clear').click(function(){
        /*if($('li').length === 0){
            return;
        }*/
        $('#todolist').text('');
        $('#donelist').text('');
        $('#todocount').text('0');
        $('#donecount').text('0');
    });
});