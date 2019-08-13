(function() {
    var position = 'absolute';
    var elements = [];
    function Snake(options) {
        options = options || {};
        //蛇节的大小
        this.width = options.width || 20;
        this.height = options.height ||20;
        //蛇节的方向
        this.direction = options.direction || 'right';
        //蛇的身体
        this.body = [
           {x: 3, y: 2, color: 'black'},
           {x: 2, y: 2, color: 'green'},
           {x: 1, y: 2, color: 'green'}
        ]; 
    }
    Snake.prototype.render = function(map) {
        //删除之前创建的蛇
        remove();
        //把每个蛇节渲染到地图上
        for(var i = 0, length = this.body.length; i < length; i++) {
            //循环一次，将蛇节放在object中
            var object = this.body[i];
             //动态生成元素
            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            //设置样式
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.left = this.width * object.x + 'px';
        div.style.top = this.height * object.y + 'px';
        div.style.backgroundColor = object.color;
        div.style.position = position;
        }
        function remove() {
            for(var i = elements.length - 1; i >= 0; i--) {
                //删除DIV
                elements[i].parentNode.removeChild(elements[i]);
                //删除数组中的元素
                elements.splice(i, 1);
            }
        }
    }
    Snake.prototype.move = function(food,map) {
        //控制蛇身体的移动（当前蛇节到上一个蛇节的位置）
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        //控制蛇头的位置
        //判断蛇头的方向
        var head = this.body[0];
        switch(this.direction) {
            case 'right':
            head.x += 1;
            break;
            case 'left':
            head.x -= 1;
            break;
            case 'top':
            head.y -= 1;
            break;
            case 'bottom':
            head.y += 1;
            break;
        } 
        //蛇吃食物，当蛇头的坐标与食物坐标相同时，蛇的身体增加一节，食物再随机生成
        //获取蛇头坐标
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            //蛇身增加，就是将蛇的最后一节在复制一份并加到蛇身上
            var last = this.body[this.body.length - 1];
            this.body.push = ({
                x: last.x,
                y: last.y,
                color: last.color
            });
            //再随机生成食物
            food.render(map);
        }
        
    }
    window.Snake = Snake;
})()
//测试
// var snake = new Snake();
// var map = document.getElementById('map');
// snake.render(map);