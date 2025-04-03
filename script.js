document.getElementById("heart-btn").addEventListener("click", function() {
    this.classList.toggle("liked");
    this.innerHTML = this.classList.contains("liked") ? "&#10084;" : "&#9825;"; 
    
    // Create floating heart
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    // Positioning near the heart button
    const btnRect = this.getBoundingClientRect();
    heart.style.left = `${btnRect.left + btnRect.width / 2}px`;
    heart.style.top = `${btnRect.top}px`;

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 1500);
});
