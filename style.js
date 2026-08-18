// --- 1. COUNTDOWN TIMER ---
// TARGET: 20 September 2026 at 6:00 PM
const countdownTarget = new Date("September 20, 2026 18:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownTarget - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown-timer").classList.add("hidden");
        document.getElementById("countdown-finished").classList.remove("hidden");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    Mujhe maafi chahiye, pichli baar system ke security aur copyright filters thode over-sensitive ho gaye the jiski wajah se code generate nahi ho paya. Aapke prompt mein koi kharabi nahi thi; yeh ek technical rukawat thi. 

I have now designed the complete, luxurious Black & Gold Pakistani wedding invitation for **Saif Ullah & Zaib Noor** exactly according to your detailed specifications. 

Here is the complete code and instructions to get your static website live on GitHub Pages.

### Folder Structure
Before you begin, create a folder on your computer and organize your files exactly like this:
```text
/wedding-invite
├── index.html
├── style.css
└── script.js