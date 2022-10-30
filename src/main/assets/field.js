// JavaScript Document field.onclick = function(event) {
	

      // Coordenadas del campo relativas a la ventana
      let fieldCoords = this.getBoundingClientRect();
      


      // El balón tiene position:absolute, el campo: position:relative
      // por lo que las coordenadas de la bola son relativas a la esquina superior izquierda interna del campo
      let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      };

      // previniendo el cruce del limite superior del campo
      if (ballCoords.top < 0) ballCoords.top = 0;

      // previniendo el cruce del limite izquierdo del campo
      if (ballCoords.left < 0) ballCoords.left = 0;


      // // previniendo el cruce del limite derecho del campo
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      // previniendo el cruce del limite inferior del campo
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }