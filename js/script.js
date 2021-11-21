let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

// display modal

// const buttons = document.querySelectorAll(".btn");
// buttons.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     showModal(event);
//   });
// });

// const showModal = (e) => {
//   // console.log(e.target.parentElement.parentElement.parentElement);
//   // console.log(e.target);
//   let id = e.target.dataset.id;

//   console.log(id);

//   const modal = document.querySelector(".work-modal");
//   const modalItem = document.querySelector(".work-modal__item");

//   modal.classList.add("work-modal--show");
//   modalItem.style.backgroundImage = `url(img/Product_Images/product-${id}.png)`;
// };

// document.querySelector(".fa-times-circle").addEventListener("click", () => {
//   closeModal();
// });

// const closeModal = () => {
//   document.querySelector(".work-modal").classList.remove("work-modal--show");
// };

const buttons = document.querySelectorAll(".btn");
buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showModal(event);
  });
});

let modal = document.querySelector(".modal");

const showModal = (e) => {
  // console.log(e.target.parentElement.parentElement.parentElement);
  // console.log(e.target);
  let id = e.target.dataset.id;

  console.log(id);
  modal.innerHTML += `<div class="work-modal">
      <div class="work-modal__item">
        <div class="work-modal__item-1">
          <div class="work-modal__item_card">
            <img
              src="img/Product_Images/product-${id}.png"
              alt="Audi Q3"
            />
            <p class="blueText">5 Seats 4 Doors</p>
            <h2>Audi Q3 2020</h2>
            <div class="work-modal__buy">
              <p>Starting from</p>
              <p class="work-modal__price"><span>39.999</span>&euro;</p>
            </div>
          </div>
        </div>
        <div class="work-modal__item-2">
          <div>
            <h3>Audi configurator</h3>
            <p>Create your own audi</p>
          </div>
          <table>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="electrical"
                  id="electrical"
                  value="0"
                  checked
                />
                <label for="ventil">48-V electrical system</label>
              </td>
              <td>0,EUR</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="suspension"
                  id="suspension"
                  value="0"
                />
                <label for="suspension">Adaptive air suspension - sport</label>
              </td>
              <td>278,60 EUR</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="acustic"
                  id="acustic"
                  value="558.78"
                  checked
                />
                <label for="acustic">Acustic side windows - optional</label>
              </td>
              <td>558,78 EUR</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="ambiental_led"
                  id="ambiental_led"
                  value="637.48"
                />
                <label for="ambiental_led">Ambiental LED</label>
              </td>
              <td>637,48 EUR</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="work-modal__close">
        <i class="fas fa-times-circle"></i>
      </div>
    </div>`;
  document.querySelector(".fa-times-circle").addEventListener("click", () => {
    closeModal();
  });

  const closeModal = () => {
    modal.remove();
    window.location.reload();
  };
};
