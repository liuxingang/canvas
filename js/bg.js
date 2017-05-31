 //canvas自适应

 var canvas_bg = document.getElementById('canvas_bg'),
            context = canvas_bg.getContext("2d");
        screeSize(canvas_bg, context, 1200, 560);


        function bgLine() {

            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(50, 280);
            context.lineTo(150, 280);
            context.strokeStyle = '#fff';
            context.stroke();
            //小矩形+折线
            context.save();
            context.translate(150, 270);
            context.beginPath();
            context.strokeRect(0, 0, 10, 20);
            context.moveTo(5, 0);
            context.lineTo(5, -33);
            context.lineTo(115, -33);
            context.moveTo(5, 20);
            context.lineTo(5, 75);
            context.lineTo(99, 75);
            context.stroke();
            context.restore();
            //圆球+大矩形
            context.save();
            context.translate(180, 120);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(56, 0);
            context.arc(50, -32, 22, Math.PI / 2, Math.PI / 4, false);
            context.lineTo(68, 0);
            context.lineTo(148, 0);
            context.lineTo(148, 310);
            context.lineTo(173, 310);
            context.lineTo(173, 390);
            context.lineTo(0, 390);
            context.closePath();
            context.stroke();
            //内部构造
            context.beginPath();
            context.moveTo(56, 0);
            context.lineTo(56, 80);
            context.lineTo(52, 84);
            context.lineTo(52, 146);
            context.arc(80, 160, 30, Math.PI * 1.15, Math.PI * 1.5, false);
            context.lineTo(86, 128);
            context.lineTo(86, 24);
            context.lineTo(40, 24);
            context.lineTo(40, 40);
            context.lineTo(26, 40);
            context.arcTo(22, 40, 20, 44, 6);
            context.lineTo(20, 289);
            context.lineTo(122, 288);
            context.lineTo(122, 238);
            context.lineTo(28, 238);
            context.lineTo(28, 70);
            context.lineTo(38, 70);
            context.lineTo(38, 84);
            context.lineTo(43, 84);
            context.lineTo(43, 130);
            context.lineTo(48, 130);
            context.arcTo(48, 178, 54, 180, 30);
            context.lineTo(68, 288)
            context.stroke();

            context.beginPath();
            context.strokeRect(30, 250, 77, 20);

            context.moveTo(148, 24);
            context.lineTo(120, 24);
            context.lineTo(120, 100);
            context.arc(112, 118, 20, -Math.PI / 2.8, Math.PI / 1.6, false);
            context.arc(90, 159, 26, -Math.PI / 3.5, Math.PI / 2, false);
            context.lineTo(90, 289);
            context.stroke();

            context.restore();

            //右侧背景
            context.save();
            context.translate(190, 126);
            context.beginPath();
            context.moveTo(235,315);
            context.lineTo(235,238);
            context.lineTo(420,150);
            context.lineTo(448,100);
            context.lineTo(834,100);
            context.lineTo(834,382);
            context.lineTo(204,382);
            context.stroke();
            //传送带
            context.beginPath();
            context.moveTo(186,334);
            context.lineTo(288,334);
            context.lineTo(294,330);
            context.stroke();

            context.beginPath();
            context.moveTo(186,354);
            context.lineTo(258,354);
            context.stroke();

            //右侧传送带
            context.beginPath();
            context.moveTo(736,221);
            // context.lineTo(818,221);
            context.arcTo(818,221,828,231,8);
            context.lineTo(878,334);
            context.moveTo(736,235);
    
            context.arcTo(798,235,810,248,8);
            context.lineTo(865,338);
            context.stroke();

            //右下侧传送带
            context.beginPath();
            context.moveTo(736,345);
            context.lineTo(896,345);
            context.stroke();

            context.beginPath();
            context.moveTo(736,359);
            context.lineTo(896,359);
            context.stroke();



            context.restore();





        }
        