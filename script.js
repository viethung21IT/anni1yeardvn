const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Trong đây hông có gì đâu chỉ có Sơ ri thoai<br>coi xong ròi load lại trang bấm nút kế bên nhé🤩";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnFheWQ1bWRzN2o5Z3Z4YXpnYnVjMXkyNXg2amV5OGs0MGo1OXFlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yEONQJzw89jxukap8g/giphy.gif";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
