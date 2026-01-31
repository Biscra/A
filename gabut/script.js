let scale = 1;

function mockNo() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // perbesar YA
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  // munculin ejekan
  noBtn.classList.add("active");

  // ganti teks ejekan random
  const mocks = [
    "ih kok dipencet 😝",
    "nggak ngaruh 😜",
    "YA makin gede tuh 😆",
    "salah pilih 😏"
  ];
  noBtn.querySelector(".mock").innerText =
    mocks[Math.floor(Math.random() * mocks.length)];
}

function showMessage() {
  document.getElementById("message").classList.add("show");
}
