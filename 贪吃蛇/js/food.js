(function(){   //自调用函数，避免命名冲突
        var position = 'absolute';
        //声明一个空数组来存储上次的食物，为删除做准备
        var elements = [];
        function Food(options) {
            options = options || {};
            this.x = options.x || 0; //食物的位置
            this.y = options.y || 0; //食物的位置
            this.width = options.width || 20;
            this.height = options.height || 20;
            this.color = options.color || 'blue';
        }
        
    
        //渲染
        Food.prototype.render = function(map) {
               //删除食物
               remove();
            //动态创建div  页面上显示的食物
            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div); //向数组中添加元素
            //随机设置x、y的值
            this.x = Tools.getRandom(0, map.clientWidth / this.width - 1) * this.width;
            this.y = Tools.getRandom(0, map.clientHeight / this.width - 1) * this.height;
            //设置div样式
            div.style.left = this.x + 'px';
            div.style.top = this.y + 'px';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor = this.color ;
            div.style.position = position;
        }
        function remove() {
            for(var i = elements.length - 1; i >= 0; i--) {
                //删除div
                elements[i].parentNode.removeChild(elements[i]);
                //删除数组中的元素
                //删除数组元素
                //splice 第一个参数是从哪个位置删除
                //第二个参数是删除几个元素
                elements.splice(i, 1);
            }
        }
        window.Food = Food; //window顶级对象，在哪都可以调用
   
    
})()
 //测试
//  var map = document.getElementById('map');
//  var food = new Food();
//  food.render(map);
