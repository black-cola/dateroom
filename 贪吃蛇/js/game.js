(function(){
    var that; //记录游戏对象
    function Game(map) {
        //实例化对象
        this.food = new Food(); 
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function() {
        //把蛇和食物对象渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake();
        bindKey();
        
        //测试蛇move方法
        // this.snake.move(); //蛇移动
        // this.snake.render(this.map);
        // this.snake.move(); //蛇移动
        // this.snake.render(this.map);   
    }
    //开始游戏的逻辑

    //通过键盘的方向键控制蛇移动的方向
    function bindKey() {
        //注册键盘事件，因为是文档页面来控制，所以给页面注册事件
        document.addEventListener('keydown',function(e){
            // console.log(e.KeyCode);
            switch(e.KeyCode) {
                //37-left,38-top,39-right,40-bottom
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        },false);
    }
    

    //蛇移动
    function runSnake() {
        var timerId = setInterval(function(){
            that.snake.move(that.food,that.map);
            that.snake.render(that.map);
    //当蛇碰到边界时游戏结束
        //获取蛇头
        var headX = that.snake.body[0].x;
        var headY = that.snake.body[0].y;
        // var maxX = (that.map.offsetWidth / that.snake.width) * that.snake.width;
        // var maxY = (that.map.offsetHeight / that.snake.height) * that.snake.height;
        var maxX = that.map.offsetWidth / that.snake.width;
        var maxY = that.map.offsetHeight / that.snake.height;
        if(headX < 0 || headX >= maxX) {
            alert('Game over');
            clearInterval(timerId);
        }
        if(headY < 0 || headY >= maxY) {
            alert('Game over');
            clearInterval(timerId);
        }
        },150);
        
        
    }
    window.Game = Game;
})()
var map = document.getElementById('map');
var game = new Game(map);
game.start();
