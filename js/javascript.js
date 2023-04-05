document.addEventListener("DOMContentLoaded", () => {
    const thanksStatement = document.querySelector('.thanks-statement');
    const confettiCanvas = document.getElementById('footer-confetti');

    if (confettiCanvas) {
        const confettiCtx = confettiCanvas.getContext('2d');
        const confetti = window.confetti.create(confettiCtx, { resize: true, useWorker: true });
        let isConfettiActive = false;

        function startConfetti() {
            if (!isConfettiActive) {
                isConfettiActive = true;
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                }).then(() => {
                    isConfettiActive = false;
                });
            }
        }

        thanksStatement.addEventListener('click', startConfetti);
    }
});
