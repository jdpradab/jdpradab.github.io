function envolverLetras(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
}

envolverLetras('.pg-text .letters');

anime({
  targets: '.pg-text .letter',
  opacity: [0, 1],
  delay: (el, i) => 7000 + 45 * i,
  easing: "easeOutExpo",
});

// Botones
const boton = document.querySelector(".I");
const boton2 = document.querySelector(".D");

anime({
  targets: ".I",
  delay: 6500,
  height: [0, 80],
  width: [0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

anime({
  targets: ".D",
  delay: 6500,
  height: [0, 80],
  width: [0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

boton.addEventListener("mouseenter", () => {
  anime({
    targets: ".I",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton.addEventListener("mouseleave", () => {
  anime({
    targets: ".I",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

boton.addEventListener("click", () => {
  anime({
    targets: ".I",
    backgroundColor: "rgba(117, 255, 255, 0.15)",
    duration: 300,
    complete: () => {
      anime({
        targets: ".I",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
        duration: 100
      });
    }
  });
});

boton2.addEventListener("mouseenter", () => {
  anime({
    targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton2.addEventListener("mouseleave", () => {
  anime({
    targets: ".D",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

boton2.addEventListener("click", () => {
  anime({
    targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.15)",
    duration: 300,
    complete: () => {
      anime({
        targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
        duration: 100
      });
    }
  });
});

//A recuadro
anime({
  targets:".rc",
  delay: 6000,
  duration:1000,
  height: [0, 350],
  width: [0, 1300],
  opacity: [0,1],
  easing: "easeOutExpo" 

})

// Envolver letras de todos los párrafos
envolverLetras('.p1-text');
envolverLetras('.p2-text');
envolverLetras('.p3-text');
envolverLetras('.p4-text');
envolverLetras('.p5-text');
envolverLetras('.p6-text');
envolverLetras('.p7-text');

// Animación del título
anime({
  targets: ".tit",
  opacity: [0, 1],
  delay: 5000,
  duration: 1000,
  easing: "easeOutExpo"
});

// Animación del fondo
const timeline = anime.timeline({
  easing: 'easeOutQuad',
  duration: 1000,
  loop: false
});

timeline
  .add({
    targets: ".fondo",
    opacity: [0, 0.7],
    delay: 1000,
    duration: 2000,
    easing: "linear"
  })
  .add({
    targets: ".fondo",
    opacity: [0.7, 0],
    delay: 300,
    duration: 500,
    easing: "easeOutExpo"
  })
  .add({
    targets: ".fondo",
    opacity: [0, 0.7],
    delay: 10,
    duration: 200,
    easing: "easeOutExpo"
  })
  .add({
    targets: ".fondo",
    opacity: [0.7, 0],
    delay: 10,
    duration: 0,
    easing: "linear"
  });

// funcionalidad botones 


// Oculta todos los párrafos al inicio
anime({
  targets: [
    '.p1-text .letter','.p2-text .letter','.p3-text .letter',
    '.p4-text .letter','.p5-text .letter','.p6-text .letter','.p7-text .letter'
  ],
  opacity: [1, 0],
  duration: 0,
  easing: "linear",
});

let indexActual = 0;
let timelines2 = [];
let animacionParrafosActual = null;

const divs = [".pg1", ".pg2", ".pg3"];

function ocultarTodosLosParrafos() {
  anime({
    targets: [
      '.p1-text .letter','.p2-text .letter','.p3-text .letter',
      '.p4-text .letter','.p5-text .letter','.p6-text .letter','.p7-text .letter'
    ],
    opacity: 0,
    duration: 0,
    easing: "linear",
  });
}

function aparecerParrafos(selectores) {
  if (animacionParrafosActual) {
    animacionParrafosActual.pause();
  }

  animacionParrafosActual = anime({
    targets: selectores,
    opacity: [0, 1],
    delay: (el, i) => 45 * i,
    easing: "easeOutExpo",
    duration: 800,
  });

  return animacionParrafosActual;
}

function aparecerIcono(selector) {
  return anime({
    targets: selector,
    opacity: [
      { value: 0, duration: 250 },
      { value: 1, duration: 250 }
    ],
    easing: "easeInOutSine",
    loop: false
  });
}

function cambiarAnimacion(nuevoIndex) {
  if (timelines2[indexActual]) {
    timelines2[indexActual].pause();
    document.querySelector(divs[indexActual]).style.opacity = 0;
  }

  if (animacionParrafosActual) {
    animacionParrafosActual.pause();
  }

  ocultarTodosLosParrafos();

  indexActual = (nuevoIndex + divs.length) % divs.length;

  timelines2[indexActual] = aparecerIcono(divs[indexActual]);

  if (indexActual === 0) {
    aparecerParrafos(['.p1-text .letter', '.p2-text .letter']);
  } else if (indexActual === 1) {
    aparecerParrafos(['.p3-text .letter', '.p4-text .letter']);
  } else if (indexActual === 2) {
    aparecerParrafos(['.p5-text .letter', '.p6-text .letter', '.p7-text .letter']);
  }
}

// Mostrar el primer párrafo automáticamente
setTimeout(() => {
  timelines2[0] = aparecerIcono(divs[0]);
  aparecerParrafos(['.p1-text .letter', '.p2-text .letter']);
}, 7000);

// Eventos de botones
document.querySelector(".D").addEventListener("click", () => {
  cambiarAnimacion(indexActual + 1);
});

document.querySelector(".I").addEventListener("click", () => {
  cambiarAnimacion(indexActual - 1);
});
