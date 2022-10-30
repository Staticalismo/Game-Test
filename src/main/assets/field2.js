 field2.onclick = function(event) {
	

      // Coordenadas del campo relativas a la ventana
      let field2Coords = this.getBoundingClientRect();
      


      // El balón tiene position:absolute, el campo: position:relative
      // por lo que las coordenadas de la bola son relativas a la esquina superior izquierda interna del campo
      let ballCoords = {
        top: event.clientY - field2Coords.top - field2.clientTop - ball.clientHeight / 2,
        left: event.clientX - field2Coords.left - field2.clientLeft - ball.clientWidth / 2
      };

      // previniendo el cruce del limite superior del campo
      if (ballCoords.top < 0) ballCoords.top = 0;

      // previniendo el cruce del limite izquierdo del campo
      if (ballCoords.left < 0) ballCoords.left = 0;


      // // previniendo el cruce del limite derecho del campo
      if (ballCoords.left + ball.clientWidth > field2.clientWidth) {
        ballCoords.left = field2.clientWidth - ball.clientWidth;
      }

      // previniendo el cruce del limite inferior del campo
      if (ballCoords.top + ball.clientHeight > field2.clientHeight) {
        ballCoords.top = field2.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }// JavaScript Document