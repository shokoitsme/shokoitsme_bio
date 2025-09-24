// Создание анимированного фона
function createBackground() {
  const bg = document.getElementById("bgAnimation");
  const bubbleCount = 20;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Случайные параметры
    const size = Math.random() * 100 + 20;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = Math.random() * 0.1 + 0.05;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${posX}%`;
    bubble.style.top = `${posY}%`;
    bubble.style.opacity = opacity;

    // Взаимодействие
    bubble.addEventListener("mouseover", () => {
      bubble.style.transform = "scale(1.5)";
      bubble.style.opacity = "0.2";
      bubble.style.background = "#85b4ff";
    });

    bubble.addEventListener("mouseout", () => {
      bubble.style.transform = "scale(1)";
      bubble.style.opacity = opacity;
      bubble.style.background = "#679EEE";
    });

    bg.appendChild(bubble);
  }

  animateBubbles();
}

// Анимация пузырей
function animateBubbles() {
  const bubbles = document.querySelectorAll(".bubble");

  bubbles.forEach((bubble) => {
    const moveX = (Math.random() - 0.5) * 40;
    const moveY = (Math.random() - 0.5) * 40;
    const duration = Math.random() * 20 + 10;

    bubble.style.transition = `all ${duration}s ease-in-out`;
    bubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  setTimeout(animateBubbles, 15000);
}

// Раскрытие/закрытие секции опыта работы
function setupExperienceSection() {
  const experienceHeader = document.getElementById("experienceHeader");
  const experienceContent = document.getElementById("experienceContent");
  const toggleArrow = experienceHeader.querySelector(".toggle-arrow");

  // Изначально скрываем контент
  experienceContent.classList.remove("expanded");

  experienceHeader.addEventListener("click", function () {
    const isExpanded = experienceContent.classList.contains("expanded");

    if (isExpanded) {
      // Закрываем
      experienceContent.classList.remove("expanded");
      toggleArrow.classList.remove("rotated");
    } else {
      // Открываем
      experienceContent.classList.add("expanded");
      toggleArrow.classList.add("rotated");
    }
  });
}

// Раскрытие/закрытие деталей опыта работы
function setupExperienceItems() {
  const expItems = document.querySelectorAll(".exp-item");

  expItems.forEach((item) => {
    // Изначально скрываем детали
    const details = item.querySelector(".exp-details");

    item.addEventListener("click", function (e) {
      // Предотвращаем срабатывание при клике на родительскую секцию
      e.stopPropagation();

      const isExpanded = this.classList.contains("expanded");

      // Закрываем все остальные элементы
      expItems.forEach((otherItem) => {
        if (otherItem !== this) {
          otherItem.classList.remove("expanded");
        }
      });

      // Переключаем текущий элемент
      if (isExpanded) {
        this.classList.remove("expanded");
      } else {
        this.classList.add("expanded");
      }
    });
  });
}

// Интерактивные технологии
function setupTechInteractions() {
  const techCards = document.querySelectorAll(".tech-card");

  techCards.forEach((card) => {
    card.addEventListener("click", function () {
      const techName = this.textContent;
      const descriptions = {
        JavaScript: "Мой основной язык для веб-разработки",
        "HTML/CSS": "Фундамент всех моих проектов",
        React: "Любимая библиотека для UI",
        "Node.js": "Серверная разработка и боты",
        Figma: "Прототипирование и дизайн",
        "Adobe Suite": "Графический дизайн и редактирование",
        "Discord API": "Создание ботов и интеграций",
        Python: "Автоматизация и скрипты",
      };

      const description = descriptions[techName] || "Интересная технология!";
      showMessage(`${techName}: ${description}`);
    });
  });
}

// Анимация при скролле
function setupScrollAnimations() {
  const elements = document.querySelectorAll(".section, .profile-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.8s ease forwards";
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}

// Таймер для проектов "скоро"
function updateProjectTimers() {
  const projectCards = document.querySelectorAll(
    '.project-card[data-status="soon"]'
  );

  projectCards.forEach((card) => {
    const progress = card.querySelector(".progress");
    const randomProgress = Math.random() * 20 + 60; // 60-80%
    progress.style.width = `${randomProgress}%`;
  });
}

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", function () {
  createBackground();
  setupExperienceSection();
  setupExperienceItems();
  setupTechInteractions();
  setupScrollAnimations();
  updateProjectTimers();
});

// Дополнительная функция: смена фона при скролле
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  document.querySelector(
    ".bg-animation"
  ).style.transform = `translateY(${rate}px)`;
});
