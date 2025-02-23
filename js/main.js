const select = document.querySelector("#month_select");
const yil = document.querySelector(".yil");
const kun = document.querySelector(".kun");
const Chiqarish = document.querySelector(".Chiqarish");
const boxs = document.querySelector(".boxs");
const body = document.querySelector("body");


Chiqarish.addEventListener("click", () => {
  const yilValue = yil.value;
  const oyValue = select.value;
  const kunValue = kun.value;

  if (!yilValue || !oyValue || !kunValue) {
    alert("Iltimos, barcha ma'lumotlarni kiriting!");
    return;
  }

  if (!/^\d+$/.test(yilValue) || yilValue > 9999) {
    alert("Yil faqat raqamlardan iborat bo‘lishi kerak!");
    return;
  } else if (!/^\d+$/.test(kunValue) || kunValue > 31) {
    alert("Kun faqat raqamlardan iborat bo‘lishi kerak!");
    return;
  }

  const yosh = new Date().getFullYear() - yilValue - 1;
  const kunlar = Math.floor((Date.now() - new Date(yilValue, select.selectedIndex, kunValue).getTime()) / (1000 * 60 * 60 * 24));
  const kabisaYillar = Math.floor(yosh / 4);
  
  const hayvonYil = ["Sichqon", "Sigir", "Yo'lbars", "Quyon", "Baliq", 
    "Ilon", "Ot", "Qo'y", "Maymun", "Tovuq", "It", "To'ng'iz"];
  const yilHayvon = hayvonYil[(yilValue - 4) % 12];


  if (boxs.innerHTML.trim() === "") {
    body.classList.add("activ");
    setTimeout(() => {
      body.classList.remove("activ");
    }, 1000);
  }

 
  setTimeout(() => {
    boxs.innerHTML = `
      <div class="box">
          <h3 class="sanoq">1</h3>
          <p>Siz <span>${yosh}</span> yoshdasiz.</p>
      </div>
      <div class="box">
          <h3 class="sanoq">2</h3>
          <p>Tug‘ilganingizga <span>${kunlar}</span> kun bo‘ldi.</p>
      </div>
      <div class="box">
          <h3 class="sanoq">3</h3>
          <p>Siz <span>${yilHayvon}</span> yilida tug‘ilgansiz.</p>
      </div>
      <div class="box">
          <h3 class="sanoq">4</h3>
          <p> <span>${kabisaYillar}</span> marta kabisa yili o‘tdi.</p>
      </div>
    `;
  }, 1000);
});
