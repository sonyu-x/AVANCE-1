document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Cerrar menú al hacer clic en un enlace
        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    const passwordInput = document.getElementById("password");
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");

    if (passwordInput && strengthBar && strengthText) {

        passwordInput.addEventListener("input", () => {

            const password = passwordInput.value;
            let strength = 0;


            if (password.length >= 8) {
                strength++;
            }


            if (/[A-Z]/.test(password)) {
                strength++;
            }

            if (/[a-z]/.test(password)) {
                strength++;
            }

            if (/[0-9]/.test(password)) {
                strength++;
            }

            if (/[^A-Za-z0-9]/.test(password)) {
                strength++;
            }

            if (password.length === 0) {

                strengthBar.style.width = "0%";
                strengthText.textContent = "Escribe una contraseña";

            } else if (strength <= 2) {

                strengthBar.style.width = "30%";
                strengthText.textContent = "Contraseña débil";

            } else if (strength === 3 || strength === 4) {

                strengthBar.style.width = "65%";
                strengthText.textContent = "Contraseña media";

            } else {

                strengthBar.style.width = "100%";
                strengthText.textContent = "Contraseña fuerte";
            }
        });
    }


    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");

    if (quizForm && quizResult) {

        quizForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');


            if (!q1 || !q2) {
                quizResult.textContent = "⚠️ Por favor, responde todas las preguntas del cuestionario.";
                return;
            }

            let aciertos = 0;


            if (q1.value === "b") {
                aciertos++;
            }

            if (q2.value === "b") {
                aciertos++;
            }


            if (aciertos === 2) {
                quizResult.textContent = "✅ ¡Excelente! Respondiste correctamente todas las preguntas (2/2).";
            } else {
                quizResult.textContent = `❌ Obtuviste ${aciertos} de 2 aciertos. ¡Revisa los conceptos e inténtalo de nuevo!`;
            }
        });
    }


    const checklistTable = document.getElementById("checklistTable");
    const saveTableBtn = document.getElementById("saveTable");
    const resetTableBtn = document.getElementById("resetTable");

    const STORAGE_KEY = "cybershield_table";


    if (saveTableBtn && checklistTable) {

        saveTableBtn.addEventListener("click", () => {

            localStorage.setItem(
                STORAGE_KEY,
                checklistTable.innerHTML
            );

            alert("✅ Cambios guardados correctamente.");
        });
    }


    if (checklistTable) {

        const savedTable = localStorage.getItem(STORAGE_KEY);

        if (savedTable) {
            checklistTable.innerHTML = savedTable;
        }
    }

    if (resetTableBtn && checklistTable) {

        resetTableBtn.addEventListener("click", () => {

            const confirmation = confirm(
                "¿Deseas restablecer la tabla original?"
            );

            if (confirmation) {

                localStorage.removeItem(STORAGE_KEY);

                location.reload();
            }
        });
    }


    const contactForm = document.getElementById("contactForm");
    const formResult = document.getElementById("formResult");

    if (contactForm && formResult) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();


            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;
            }

            const name =
                document.getElementById("name")?.value.trim();

            const email =
                document.getElementById("email")?.value.trim();


            formResult.textContent =
                `✅ Gracias ${name}. Hemos recibido correctamente tu mensaje (${email}).`;

            formResult.classList.add("success");

            contactForm.reset();
        });
    }


    const topButton = document.getElementById("topButton");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");
            }
        });


        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

    console.log(
        "🛡️ CyberShield iniciado correctamente."
    );

    console.log(
        "Protege tus datos. Navega de forma segura."
    );

});