(function () {
  "use strict";
  var doc = document;

  // Header: add background once scrolled
  var header = doc.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  var toggle = doc.querySelector(".nav-toggle");
  var links = doc.getElementById("nav-links");
  function setMenu(open) {
    if (!toggle || !links) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    links.classList.toggle("open", open);
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape") { setMenu(false); toggle.focus(); } });
    doc.addEventListener("click", function (e) { if (!header.contains(e.target)) setMenu(false); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  }

  // Reveal on scroll
  var items = doc.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Work filters
  var filters = doc.querySelectorAll(".filter");
  var cards = doc.querySelectorAll("[data-tags]");
  var status = doc.getElementById("filter-status");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      filters.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      var shown = 0;
      cards.forEach(function (c) {
        var match = f === "all" || c.getAttribute("data-tags").split(" ").indexOf(f) > -1;
        c.hidden = !match;
        if (match) {
          shown++;
          c.classList.remove("in"); void c.offsetWidth; c.classList.add("in");
        }
      });
      if (status) status.textContent = "Showing " + shown + (shown === 1 ? " project" : " projects");
    });
  });

  // Scroll-spy for project detail table of contents
  var tocLinks = doc.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
          var a = map[en.target.id];
          if (a) { a.classList.add("active"); a.setAttribute("aria-current", "true"); }
        }
      });
    }, { rootMargin: "-20% 0px -65% 0px" });
    Object.keys(map).forEach(function (id) { var s = doc.getElementById(id); if (s) spy.observe(s); });
  }

  // Footer year
  var y = doc.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
