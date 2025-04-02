document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });

        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click();
        }
      }
    });
  });
  // Botão para voltar ao topo, faz um scrool para inicio da tela
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Preenchimento de formulario
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Validação de dados
      let isValid = true;
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      if (!name.value.trim()) {
        isValid = false;
        name.classList.add("is-invalid");
      } else {
        name.classList.remove("is-invalid");
      }

      if (!email.value.trim() || !isValidEmail(email.value)) {
        isValid = false;
        email.classList.add("is-invalid");
      } else {
        email.classList.remove("is-invalid");
      }

      if (!subject.value) {
        isValid = false;
        subject.classList.add("is-invalid");
      } else {
        subject.classList.remove("is-invalid");
      }

      if (!message.value.trim()) {
        isValid = false;
        message.classList.add("is-invalid");
      } else {
        message.classList.remove("is-invalid");
      }
      // Se os dados estiverem preenchidos corretamentes exibe a mensagem e limpa o formulario
      if (isValid) {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        contactForm.reset();
      }
    });
  }

  // Verificação de email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function inscreverUsuario() {
  let email = document.getElementById("emailInput").value.trim();

  if (email === "") {
    alert("Por favor, insira um email.");
  } else if (!isValidEmail(email)) {
    alert("Por favor, insira um email válido.");
  } else {
    alert(
      "Obrigada por se inscrever, agora você faz parte da nossa newsletter!"
    );
  }
}
