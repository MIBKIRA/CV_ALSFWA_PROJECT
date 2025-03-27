// smooth scrolling - for all anchor links
// تفعيل السموث سكرولينج لأي لينك داخلي
// لما المستخدم يضغط على لينك بيبدأ يتحرك للهدف بسلاسة

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// تشغيل الأنيميشن عند السحب (scroll-triggered animations)
document.addEventListener("DOMContentLoaded", () => {
  // تشغيل الأنيميشن للعناصر اللي بتظهر في الشاشة وتحمل كلاس بإسم
  // section
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // إضافة كلاس عشان يبدأ الأنيميشن
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // العنصر يظهر لما 10% منه يكون ظاهر في الشاشة
  );

  sections.forEach((section) => {
    section.classList.add("hidden-section"); // بيخلي العناصر مخفية في الأول
    observer.observe(section); // يراقب كل سكشن عشان يشغل الأنيميشن لما يظهر
  });

  // تأثير الhover على الskills

  const skillItems = document.querySelectorAll(".skills-grid li");
  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("skill-highlight"); // لما الماوس يدخل يضيف كلاس التأثير
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("skill-highlight"); // لما الماوس يخرج يشيل التأثير
    });
  });

  // Add progress bar for page scroll
  // شريط التقدم عند السحب في الصفحة

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100; //حساب النسبة
    progressBar.style.width = `${scrolled}%`; // يحسب نسبة التقدم ويغير عرض الشريط
  });

  // إخفاء الهيدر عند السحب لأسفل
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add("header-hidden"); // يخفي الهيدر لما ينزل المستخدم
    } else {
      header.classList.remove("header-hidden"); // يرجعه لما المستخدم يطلع
    }
    lastScroll = currentScroll;
  });

  // Add print functionality
  // زرار طباعة الـ CV 🖨️
  // الكود شغال تمام ومفيهوش مشكلة، بس مش عارف ليه كنت كنسلته الصراحة 🤷‍♂️
  // 🔹 لو حضرتك عاوز تشغله، فك التعليق عن الكود

  /*
  const printButton = document.createElement("button");
  printButton.innerHTML = "🖨️ Print CV";
  printButton.className = "print-button";
  document.body.appendChild(printButton);

  printButton.addEventListener("click", () => {
    window.print();
  });
*/

  // زرار تفعيل الوضع الداكن
  const darkModeButton = document.createElement("button"); // نقوم بانشاء عنصر في ملف HTML
  darkModeButton.innerHTML = "🌓";
  darkModeButton.className = "dark-mode-button"; //بنديله كلاس علشان نقدر نحط الخصائص
  document.body.appendChild(darkModeButton);

  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); // يبدل بين الوضع العادي والداكن
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
  });

  // التأكد من تفعيل الوضع الداكن لو كان محفوظ

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // تأثير الكتابة على الاسم
  // من اكتر الحاجات الروشة اللي عملتها كفكرة يعني
  const nameElement = document.querySelector(".header h1");
  if (nameElement) {
    const name = nameElement.textContent;
    nameElement.textContent = "";
    let i = 0;
    const typeWriter = () => {
      if (i < name.length) {
        nameElement.textContent += name.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }
});

// كود لإنشاء مؤشر مخصص بيتحرك مع حركة الماوس
// بيعمل عنصر جديد <div> ويضيفه للصفحة، وبعدها يخليه يتحرك مع حركة الماوس
//  لو عاوز تشغله، شيل الـ "/*" و "*/" من حواليه
// لكن لازم نفعل custom-cursor من ملف css
//line num : 168 in CSS file

/*
const cursor = document.createElement("div");
cursor.className = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
}); 
*/

// تأثير الـ hover على اللينكات
// بيضيف تأثير خاص للمؤشر لما يقف المستخدم على أي لينك
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});
