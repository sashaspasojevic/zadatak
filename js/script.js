let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// display modal

const buttons = document.querySelectorAll(".btn");
buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showModal(event);
  });
});

let modal = document.querySelector(".modal");
let priceOfCar = 0;

const showModal = (e) => {
  let id = e.target.dataset.id;
  console.log(id);
  let nameOfCar = id.split("-");

  // let priceOfCar = 0;

  if (id === "card-audi-q3") {
    priceOfCar = 29999;
  }
  if (id === "card-audi-a4") {
    priceOfCar = 24999;
  }
  if (id === "card-audi-a3") {
    priceOfCar = 19999;
  }
  if (id === "card-audi-q7") {
    priceOfCar = 39999;
  }

  modal.innerHTML += `<div class="work-modal">
      <div class="work-modal__item">
        <div class="work-modal__item-1">
          <div class="work-modal__item_card">
            <img
              src="img/Product_Images/product-${id}.png"
              alt="Audi Q3"
            />
            <p class="blueText">5 Seats 4 Doors</p>
            <h2>${nameOfCar[1]} ${nameOfCar[2]} 2020</h2>
            <div class="work-modal__buy">
              <p>Starting from</p>
              <p class="work-modal__price"><span id="priceId">${priceOfCar}</span>&euro;</p>
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
                  value="278.60"
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

  document
    .querySelector("#suspension")
    .addEventListener("click", checkSuspension);

  document
    .querySelector("#ambiental_led")
    .addEventListener("click", checkAmbientalLed);

  const closeModal = () => {
    modal.remove();
    // modal.style.display = "none";

    window.location.reload();
  };
};

const checkSuspension = () => {
  if (document.querySelector("#suspension").checked) {
    priceOfCar =
      Number(document.querySelector("#priceId").textContent) +
      Number(document.querySelector("#suspension").value);
    document.querySelector("#priceId").innerHTML = priceOfCar.toFixed(2);
  } else {
    priceOfCar =
      priceOfCar - Number(document.querySelector("#suspension").value);
    document.querySelector("#priceId").innerHTML =
      Number(priceOfCar).toFixed(2);
  }
};

const checkAmbientalLed = () => {
  if (document.querySelector("#ambiental_led").checked) {
    priceOfCar =
      Number(document.querySelector("#priceId").textContent) +
      Number(document.querySelector("#ambiental_led").value);
    document.querySelector("#priceId").innerHTML =
      Number(priceOfCar).toFixed(2);
  } else {
    priceOfCar =
      priceOfCar - Number(document.querySelector("#ambiental_led").value);
    document.querySelector("#priceId").innerHTML =
      Number(priceOfCar).toFixed(2);
  }
};
