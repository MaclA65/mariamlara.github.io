// Rolagem suave nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Carrossel
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const indicatorsContainer = document.querySelector(".indicators");
  let currentIndex = 0;
  let autoSlide;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  
    document.querySelectorAll(".indicators div").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  
    currentIndex = index;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlideFunc() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  // Criar indicadores (bolinhas)
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.addEventListener("click", () => showSlide(i));
    indicatorsContainer.appendChild(dot);
  });
  
  // Inicialização
  showSlide(currentIndex);
  
  // Botões
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlideFunc);
  
  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlide);
  }
  startAutoSlide();
  
  
  