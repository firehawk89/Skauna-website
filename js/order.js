/* ITEM COUNTER CHANGE */
const itemDecreaseBtn = document.querySelector(".order__item-btn-minus");
const itemIncreaseBtn = document.querySelector(".order__item-btn-plus");
const itemCounter = document
  .querySelector(".order__item-control")
  .getElementsByTagName("span")[0];

const minValue = 1;
const maxValue = 3;
let itemCounterValue = null; // current counter value

const decreaseCounter = (limit) => {
  itemCounterValue = parseInt(itemCounter.innerText); // get current counter value

  if (itemCounterValue > limit) {
    itemCounterValue--;
    itemCounter.innerText = itemCounterValue.toString(); // update counter

    if (itemCounterValue === limit) {
      itemDecreaseBtn.classList.add("is-disabled");
    } else {
      itemDecreaseBtn.classList.remove("is-disabled");
      itemIncreaseBtn.classList.remove("is-disabled");
    }
  }
};

const increaseCounter = (limit) => {
  itemCounterValue = parseInt(itemCounter.innerText); // get current counter value

  if (itemCounterValue < limit) {
    itemCounterValue++;
    itemCounter.innerText = itemCounterValue.toString(); // update counter

    if (itemCounterValue === limit) {
      itemIncreaseBtn.classList.add("is-disabled");
    } else {
      itemDecreaseBtn.classList.remove("is-disabled");
      itemIncreaseBtn.classList.remove("is-disabled");
    }
  }
};

itemDecreaseBtn.addEventListener("click", () => {
  decreaseCounter(minValue);
});

itemIncreaseBtn.addEventListener("click", () => {
  increaseCounter(maxValue);
});

/* BILLING FORM ACCORDION */
if (window.matchMedia("(max-width: 992px)").matches) {
  const billingTitle = document.querySelector(".order__form-title--left");
  const billingForm = document.querySelector(".order__billing-form");

  billingTitle.addEventListener("click", () => {
    // if form is not hidden
    if (billingForm.style.maxHeight) {
      billingTitle.classList.remove("is-active");
      billingForm.classList.remove("is-visible");
      billingForm.style.maxHeight = null;
    } else {
      billingTitle.classList.add("is-active");
      billingForm.classList.add("is-visible");
      billingForm.style.maxHeight = billingForm.scrollHeight + "px";
    }
  });
}
