const cursor = document.getElementById("cursor");
const circle = document.getElementById("circle");
const dot = document.getElementById("dot");

const handleMouseMove = (event) => {
  let isVisible = false;
  const x = event.clientX;
  const y = event.clientY;
  dot.style.top = `${y}px`;
  dot.style.left = `${x}px`;
  setTimeout(() => {
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    if (!isVisible) {
      cursor.style.opacity = 1;
    }
  }, 100);
};

document.addEventListener("mousemove", handleMouseMove);
