window.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelector(".skills");
  const assets = [
    { name: "HTML", image: "./assets/img/HTML5.svg" },
    { name: "CSS", image: "./assets/img/CSS3.svg" },
    { name: "Tailwind", image: "./assets/img/Tailwind CSS.svg" },
    { name: "javaScript", image: "./assets/img/JavaScript.svg" },
    { name: "Python", image: "./assets/img/Python.svg" },
    { name: "NodeJs", image: "./assets/img/Node.js.svg" },
    { name: "MongoDB", image: "./assets/img/MongoDB.svg" }, 
    { name: "Linux", image: "./assets/img/Linux.svg" },
  ];

  assets.map((el, key) => {
    skills.innerHTML += `
    <div class=" w-90 flex items-center flex-col bg-[#ffffff1c] p-4 rounded-2xl ">
          <p
            class="text-white text-xl font-extralight mb-2  tracking-widest"
          >
            ${el.name}
          </p>
          <div class="w-22">
            <img class="h-full w-full" src="${el.image}" alt="" />
          </div>
        </div>
    `;
  });
});
