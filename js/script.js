window.addEventListener("load", () => {
  // Isotope 인스턴스 객체 생성
  const sectionIso = new Isotope(".section", {
    // options
    itemSelector: "article",
    masonry: {
      // use element for option
      columnWidth: "article",
    },
  });

  const sortingBtns = document.querySelectorAll(".sorting li");
  sortingBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // // 재 정렬
      const filter = e.currentTarget.querySelector("a").getAttribute("href");

      sectionIso.arrange({
        filter: filter,
      });

      sortingBtns.forEach((btnEl) => {
        btnEl.classList.remove("on");
      });

      e.currentTarget.classList.add("on");
    });
  });
});

// modal

const modal = document.querySelector("#modal");
const modalClose = document.querySelector(".modal-close");

window.addEventListener("load", () => {
  modal.classList.add("active");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});
