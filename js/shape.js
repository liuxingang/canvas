function Ball(radius, color) {
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        color = "#ff0000";
    }

    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    // this.color = color;
    this.lineWidth = 0;
}

Ball.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();

    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
};

Ball.prototype.getBounds = function() {
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2
    }
}

//arrow
function Arrow(color) {
    if (color === undefined) {
        color = "#fff";
    }

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = color;
    this.lineWidth = 1;
    this.size = 2;

}

Arrow.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(-this.size * 4, -this.size / 2);
    context.lineTo(0, -this.size / 2);
    context.lineTo(0, -this.size * 1.8);
    context.lineTo(this.size * 5, 0);
    context.lineTo(0, this.size * 1.8);
    context.lineTo(0, this.size / 2);
    context.lineTo(-this.size * 4, this.size / 2);
    context.lineTo(-this.size * 4, -this.size / 2);
    context.closePath();
    context.fill();


    context.restore();
}

//齿轮 gear
function Gear(radius, lineWidth, fillColor) {
    if (radius === undefined) {
        radius = 30;
    }
    if (lineWidth === undefined) {
        lineWidth = 40;
    }
    if (fillColor === undefined) {
        fillColor = "grey";
    }



    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.fillColor = fillColor;
    this.lineWidth = lineWidth;
}

Gear.prototype.draw = function(context) {

    context.save();
    context.translate(this.x, this.y);
    var gr = context.createLinearGradient(-this.lineWidth, 0, this.lineWidth, 0);
    gr.addColorStop(0, '#d6d6d6');
    gr.addColorStop(0.6, 'grey');
    gr.addColorStop(1, '#1a11ff');
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.fillColor;
    context.strokeStyle = gr;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.stroke();



    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();

    //锯齿
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.strokeStyle = '#fff';
    context.lineWidth = 2;
    var gwidth = this.radius + this.lineWidth / 2;

    for (var i = 0; i < 6; i++) {
        context.beginPath();
        context.moveTo(gwidth * Math.cos(i * 60 * Math.PI / 180), gwidth * Math.sin(i * 60 * Math.PI / 180));
        context.lineTo((gwidth + 5) * Math.cos(i * 60 * Math.PI / 180), (gwidth + 5) * Math.sin(i * 60 * Math.PI / 180));
        context.stroke();
        context.closePath();
    }

    context.restore();
};

//滚筒
function Roller(x,y,radius, color) {
    if (x === undefined) {
        x = 100;
    }
    if (y === undefined) {
        y = 100;
    }
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        color = "#ff0000";
    }

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
}

Roller.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    var gr = context.createLinearGradient(-this.radius, 0, this.radius, 0);
    gr.addColorStop(0, '#d6d6d6');
    gr.addColorStop(0.5, 'grey');
    gr.addColorStop(1, '#1a11ff');
    context.lineWidth = this.lineWidth;
    context.fillStyle = gr;
    context.beginPath();

    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    //内圆
    context.save();
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(0, 0, this.radius / 10, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.restore();

    //边框
    context.beginPath();
    context.arc(0, 0, this.radius * 1.06, 0, Math.PI * 2, true);
    context.stroke();

    context.restore();
};


function Dot(radius, color) {
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        color = "#ff0000";
    }

    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    // this.color = color;
    this.lineWidth = 0;
}

Dot.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.globalCompositeOperation = "destination-over";
    context.beginPath();

    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
};

//直线粒子动画
//x,y 坐标
//numDots 粒子数量
//width 粒子分布区域宽度
//height 粒子分布区域高度
//color 粒子颜色
function LineDots(x, y, numDots, width, height, color) {
    if (numDots === undefined) {
        numDots = 100;
    }
    if (x === undefined) {
        x = 100;
    }
    if (y === undefined) {
        y = 100;
    }
    if (color === undefined) {
        color = 'yellow';
    }
    if (width === undefined) {
        width = 200;
    }
    if (height === undefined) {
        height = 20;
    }

    this.x = x;
    this.y = y;
    this.numDots = numDots;
    this.dots = [];
    this.color = color;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;

    for (var dot, i = 0; i < numDots; i++) {
        dot = new Dot(1, this.color);
        dot.x = this.x + Math.random() * this.width;
        dot.y = this.y + Math.random() * this.height;
        // dot.vx = 0;
        // dot.vy = 0;
        this.dots.push(dot);
    }
};

LineDots.prototype.draw = function(context) {
    var self = this;

    function draw(dot, e) {
        dot.vx += e.speedX;
        dot.vy += e.speedY;
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (e.speedX > 0 && dot.x > e.x + e.width) {
            dot.x = e.x + Math.random() * e.width;
            dot.vx = 0;
        }

        if (e.speedX < 0 && dot.x < e.x) {
            dot.x = e.x + Math.random() * e.width;
            dot.vx = 0;
        }

        if (e.speedY > 0 && dot.y > e.y + e.height) {
            dot.y = e.y + Math.random() * e.height;
            dot.vy = 0;
        }
        if (e.speedY < 0 && dot.y < e.y) {
            dot.y = e.y + Math.random() * e.height;
            dot.vy = 0;
        }

        dot.draw(context);
    }

    for (var i = 0; i < this.numDots; i++) {
        draw(this.dots[i], self)
    }
};

//圆弧粒子动画
//x,y 坐标位置
//numDots 粒子数量
//hashRadiusOut 粒子分布的外径
//hashRadiusInner 粒子分布的内径
//color 粒子颜色
function CircleDots(x, y, numDots, hashRadiusOut, hashRadiusInner, directionSize, color) {
    if (x === undefined) {
        x = 50;
    }
    if (y === undefined) {
        y = 50;
    }
    if (numDots === undefined) {
        numDots = 50;
    }
    if (color === undefined) {
        color = 'yellow';
    }
    if (hashRadiusOut === undefined) {
        hashRadiusOut = 30;
    }
    if (hashRadiusInner === undefined) {
        hashRadiusInner = 8;
    }
    if (directionSize === undefined) {
        directionSize = -Math.PI / 2;
    }

    this.x = x;
    this.y = y;
    this.numDots = numDots;
    this.dots = [];
    this.color = color;
    this.hashRadiusOut = hashRadiusOut;
    this.hashRadiusInner = hashRadiusInner;
    this.speed = 0;
    this.directionSize = directionSize; //控制弧形的大小和方向 


    for (var dot, i = 0; i < this.numDots; i++) {
        dot = new Dot(1, this.color);
        dot.angle = Math.random() * (Math.PI) + this.directionSize;
        dot.centerRadius = this.hashRadiusOut - Math.random() * this.hashRadiusInner;
        this.dots.push(dot);
    }
};

CircleDots.prototype.draw = function(context) {
    var self = this;

    function draw(dot, e) {

        dot.vx = Math.cos(dot.angle) * dot.centerRadius;
        dot.vy = Math.sin(dot.angle) * dot.centerRadius;

        dot.x = e.x + dot.vx;
        dot.y = e.y + dot.vy;
        dot.angle += e.speed;

        if (e.speed > 0) {

            if (dot.angle > (e.directionSize + Math.PI)) {
                dot.angle = Math.random() * (Math.PI) + e.directionSize;
            }

        }
        if (e.speed < 0) {

            if (dot.angle < e.directionSize) {
                dot.angle = Math.random() * (Math.PI) + e.directionSize;
            }

        }
        dot.draw(context);
    }

    for (var i = 0; i < this.numDots; i++) {
        draw(this.dots[i], self)
    }
};
