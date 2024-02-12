function calculateTriangleArea(event) {
  const base = getInputValueById("triangle-base-value");
  const height = getInputValueById("triangle-height-value");
  const area = 0.5 * base * height;
  const areaName = event.currentTarget.dataset.ariaName;
  setInnerTextById("triangle-area", area, areaName);
}

function calculateRectangleArea(event) {
  const width = getInputValueById("rectangle-width-value");
  const length = getInputValueById("rectangle-length-value");
  const area = width * length;
  const areaName = event.currentTarget.dataset.ariaName;
  setInnerTextById("rectangle-area", area, areaName);
}

function calculateParallelogramArea(event) {
  const base = getInputValueById("parallelogram-base-value");
  const height = getInputValueById("parallelogram-height-value");
  const area = base * height;
  const areaName = event.currentTarget.dataset.ariaName;

  setInnerTextById("Parallelogram", area, areaName);
}

// generic function
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValue = inputField.value;
  const value = parseFloat(inputValue);
  return value;
}

function setInnerTextById(displayId, areaValue, areaName) {
  const ariaOutputContainer = document.getElementById("aria-output-container");
  const output = document.getElementById(displayId);
  const li = document.createElement("li");
  li.classList.add(
    "text-lg",
    "font-medium",
    "flex",
    "items-center",
    "justify-between",
    "gap-5"
  );
  li.textContent = areaName;
  const sp1 = document.createElement("span");
  sp1.innerText = `${areaValue}cm`;
  const sp2 = document.createElement("span");
  sp2.innerText = "Convert to m";
  sp2.classList.add(
    "text-sm",
    "text-white",
    "py-2",
    "px-3",
    "rounded",
    "bg-[#1090D8]",
    "cursor-pointer"
  );
  const sup2 = document.createElement("sup");
  sup2.innerText = "2";
  const sup1 = document.createElement("sup");
  sup1.innerText = "2";
  sp1.appendChild(sup1);
  sp2.appendChild(sup2);
  li.appendChild(sp1);
  li.appendChild(sp2);
  ariaOutputContainer.appendChild(li);
  console.log(li);
}
