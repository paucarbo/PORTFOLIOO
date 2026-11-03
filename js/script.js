function iniciarColors() {
  // XARXES
  document.querySelectorAll(".social").forEach(function (xarxa) {
    const text = xarxa.querySelector("span");
    const logo = xarxa.querySelector("img");

    function canviarColor(actiu) {
      if (text) {
        text.style.color = actiu ? "#000000" : "#E9E7DB";
      }

    
      if (logo) {
        logo.style.filter = actiu ? "brightness(0)" : "none";
      }
    }

    if (text) {
      text.style.transition = "color 0.3s";
    }

    if (logo) {
      logo.style.transition = "filter 0.3s";
    }

    canviarColor(false);

    xarxa.addEventListener("mouseenter", function () {
      canviarColor(true);
    });

    xarxa.addEventListener("mouseleave", function () {
      canviarColor(false);
    });
  });

  // CORREU
  document
    .querySelectorAll(".field input, .field textarea, .btn-text")
    .forEach(function (caixa) {
      caixa.style.backgroundColor = "#E9E7DB";
      caixa.style.transition = "background-color 0.3s";

      caixa.addEventListener("mouseenter", function () {
        caixa.style.backgroundColor = "#AEADA8";
      });

      caixa.addEventListener("mouseleave", function () {
        caixa.style.backgroundColor = "#E9E7DB";
      });
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarColors);
} else {
  iniciarColors();
}

// MÓBIL
function activarColorsMobil() {
  // XARXES SOCIALS
  document.querySelectorAll(".social").forEach(function (xarxa) {
    const text = xarxa.querySelector("span");
    const logo = xarxa.querySelector("img");

    function pintar(actiu) {
      if (text) {
        text.style.color = actiu ? "#000000" : "#E9E7DB";
      }

      if (logo) {
        logo.style.filter = actiu ? "brightness(0)" : "none";
      }
    }

    xarxa.addEventListener("pointerdown", function () {
      pintar(true);
    });

    ["pointerup", "pointercancel", "pointerleave"].forEach(function (event) {
      xarxa.addEventListener(event, function () {
        pintar(false);
      });
    });
  });

  // CAAIXES DE GMAIL I BOTÓ
  document
    .querySelectorAll(".field input, .field textarea, .btn-text")
    .forEach(function (element) {
      let pressionat = false;

      function actualitzarColor() {
        const seleccionat = document.activeElement === element;

        element.style.backgroundColor =
          pressionat || seleccionat ? "#AEADA8" : "#E9E7DB";
      }

      element.addEventListener("pointerdown", function () {
        pressionat = true;
        actualitzarColor();
      });

      ["pointerup", "pointercancel", "pointerleave"].forEach(function (event) {
        element.addEventListener(event, function () {
          pressionat = false;
          actualitzarColor();
        });
      });

      element.addEventListener("focus", actualitzarColor);
      element.addEventListener("blur", actualitzarColor);
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", activarColorsMobil);
} else {
  activarColorsMobil();
}
