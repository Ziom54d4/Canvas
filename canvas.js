window.onload = function()
{
    const can = document.querySelector('canvas');
    const ctx = can.getContext('2d');
    
    can.width = 1000;
    can.height = 500;
    
    const cw = can.width;
    const ch = can.height;
    
    const lineW = 6;
    const lineH = 400;
    
    const lineX = 497
    const lineY = 50;
    
    const ballSize = 20;
    let ballX = cw/2 - ballSize/2;
    let ballY = ch/2 - ballSize/2;
    
    let ballSpeedX = 3;
    let ballSpeedY = 3;
    
    let playersSpeedUp = 12;
    let playersSpeedDown = 12;
    
    const paddelW = 20;
    const paddelH = 100;
    
    const playerX = 40;
    const aiX = 940;
    
    let playerY = 200;
    let aiY = 200;
    
    let scorepo = 0;
    let scorept = 0;
    
    let scoreo = document.getElementById('score-o');
    scoreo.innerHTML = scorepo;
    
    let scoret = document.getElementById('score-t');
    scoret.innerHTML = scorept;
    
    function info()
    {
        can.style.letterSpacing = '6px';
        ctx.strokeStyle = '#99FF99';
        ctx.font = "30px Fantasy";
        ctx.strokeText("Canvas(Pong).v2",125,100);
    }
    
    function player()
    {
        ctx.fillStyle = '#303030';
        ctx.fillRect(playerX, playerY, paddelW, paddelH);
    }
    
    function ai()
    {
        ctx.fillStyle = '#303030';
        ctx.fillRect(aiX, aiY, paddelW, paddelH);
    }
    
    function ball()
    {
        ctx.fillStyle = '#9ACD32';
        ctx.fillRect(ballX, ballY, ballSize, ballSize);
        
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        
        if(ballY <= 0 || ballY + ballSize >= ch)
        {
            ballSpeedY = -ballSpeedY;    
        }
        
        if(ballX <= 0 || ballX + ballSize >= cw)
        {
            ballSpeedX = -ballSpeedX;        
        }
        
        if(ballX <= playerX + paddelW && ballX >= playerX && ballY + ballSize >= playerY && ballY <= playerY + paddelH)
        { 
            ballSpeedX *= -1;
            ballX = playerX + paddelW;
            Speedball();
        }
        
        if(ballX + ballSize >= aiX && ballX + ballSize <= aiX + paddelW && ballY + ballSize >= aiY && ballY <= aiY + paddelH)
        {
            ballSpeedX *= -1;
            ballX = aiX - ballSize;
            Speedball();
        }
        
        if(ballX <= 0)
        {   
            scoret.textContent = ++scorept;
            
            ballX = cw/2 - ballSize/2;
            ballY = ch/2 - ballSize/2;
        }
        
        if(ballX + ballSize >= cw)
        {
            scoreo.textContent = ++scorepo;
            
            ballX = cw/2 - ballSize/2;
            ballY = ch/2 - ballSize/2;
        }
        
        function score()
        {
            if(scorepo == 10)
            {
                ballX = cw/2 - ballSize/2;
                ballY = ch/2 - ballSize/2;
            }
            
            if(scorept == 10)
            {
                ballX = cw/2 - ballSize/2;
                ballY = ch/2 - ballSize/2;
            }
        }
    
        score();
    }
    
    function Speedball()
    {
        if(ballSpeedX > 0 && ballSpeedX < 7)
        {
              ballSpeedX += 1;      
        }
        
        else if(ballSpeedX < 0 && ballSpeedX > -7)
        {
            ballSpeedX -= 1;        
        }
    }
    
    function table()
    {
        ctx.fillStyle = '#3CB371';
        ctx.fillRect(0, 0, cw, ch);
        
        ctx.fillStyle = '#FEFF70';
        ctx.fillRect(lineX, lineY, lineW, lineH);
    }
    
    window.addEventListener('keydown', function(Event)
    {
        switch (event.keyCode)
        {
            case 87: // Up
                playerY -= playersSpeedUp;
            break;
                
            case 83: // Down
                playerY += playersSpeedDown;
            break;
                
            case 38: // Up
                aiY -= playersSpeedUp;
            break;

            case 40: // Down
                aiY += playersSpeedDown;
            break;
        }
        
        if(playerY >= ch - paddelH)
        {
            playerY = ch - paddelH;        
        }
        
        if(playerY <= 0)
        {
            playerY = 0;        
        }
        
        if(aiY >= ch - paddelH)
        {
            aiY = ch - paddelH;
        }
        
        if(aiY <= 0)
        {
            aiY = 0;
        }
    });
    
    table()
    ball()
    player()
    ai()
    info()

    var start = document.getElementById('start');
    start.onclick = function()
    {
        setInterval(game, 1000/60);
        start.style.display = 'none';
    }

    function game()
    {
        table()
        ball()
        player()
        ai()
        info()
    }
}

