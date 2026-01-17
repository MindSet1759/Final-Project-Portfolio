const faqQuestions = document.querySelectorAll('.faq-question');

console.log(faqQuestions);
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        const faqAnswer = faqItem.querySelector('.faq-answer');
        if (faqItem.classList.contains('active')) {
            faqAnswer.style.display = 'block';
        } else {
            faqAnswer.style.display = 'none';
        }

        // remove active class from other items
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherFaqItem = otherQuestion.parentElement;
                otherFaqItem.classList.remove('active');
                const otherFaqAnswer = otherFaqItem.querySelector('.faq-answer');
                otherFaqAnswer.style.display = 'none';
            }
        });

        // Optional: Smooth transition effect
        faqAnswer.style.maxHeight = faqItem.classList.contains('active') ? faqAnswer.scrollHeight + 'px' : '0'; 
    });
});

// Initialize all answers to be hidden
faqQuestions.forEach(question => {
    const faqItem = question.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    faqAnswer.style.display = 'none';
    faqAnswer.style.overflow = 'hidden';
    faqAnswer.style.transition = 'max-height 0.5s ease-out';
    faqAnswer.style.maxHeight = '0';
});

// Form validation

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Enter a valid email");
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        showError(messageInput, "Message is required");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    const field = input.parentElement;
    const error = field.querySelector(".error");
    error.textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

