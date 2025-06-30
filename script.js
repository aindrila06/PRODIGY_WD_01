// Dynamic navbar insertion
const navHTML = `
<nav id="navbar" class="fixed top-0 left-0 w-full z-50 bg-white px-6 py-4 flex justify-between items-center border-b border-[#e2e8f0] shadow-sm transition-all duration-300">
  <div class="text-xl font-black text-sky-600">PRODIGY INFOTECH</div>
  <div class="flex items-center gap-6">
    <div class="relative">
      <input type="text" placeholder="Search..." class="pl-10 pr-4 py-2 rounded-full bg-[#e0f2fe] text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all" />
      <svg class="absolute left-3 top-2.5 w-5 h-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
      </svg>
    </div>
    <ul class="hidden md:flex gap-6 text-sm font-semibold">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li><a href="about.html" class="nav-link">About</a></li>
      <li><a href="services.html" class="nav-link">Services</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>
  </div>
</nav>
`;

document.getElementById("navbar-placeholder").innerHTML = navHTML;

// Highlight active nav link
const path = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === path) {
    link.classList.add("active");
  }
});

// Scroll shadow effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("shadow-md", window.scrollY > 30);
});
