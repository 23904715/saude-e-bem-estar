
document.addEventListener('DOMContentLoaded', function() {
    const msg = document.getElementById('msg');
    setTimeout(() => msg.classList.add('text'), 500);
    setTimeout(() => {
        msg.classList.remove('text');
        setTimeout(() => msg.remove(), 400); 
    }, 8000);
});



function mudarFrase(num) {
    const titulo = document.getElementById("titulo");

    const frases = {
        1: "Ao cuidar de si mesmo, você cuida dos outros. Ao cuidar dos outros, você cuida de si mesmo.",
        2: "A lei da mente é implacável.O que você pensa, você cria;O que você sente, você atrai;O que você acreditaTorna-se realidade.",
        3: "Alegrai-vos porque em toda parte é aqui e tudo é agora.",
        4: "Melhor usar pantufas do que tentar colocar  tapete no mundo"
    };

    titulo.innerText = frases[num] || "O segredo da saúde mental e corporal está em viver o presente.";
}