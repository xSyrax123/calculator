const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const button_text = event.target.textContent;

    if (button_text === "Clear") {
      display.textContent = "";
    }
    else if (button_text === "=") {
      const expression = display.textContent;
      const valid_chars = /^[\d+\-*/().]+$/;
      if (valid_chars.test(expression)) {
        try {
          display.textContent = eval(expression);
        } catch (e) {
          display.textContent = "Error";
        }
      }
    }
    else if (button_text === "←") {
      display.textContent = display.textContent.slice(0, -1);
    }
    else {
      display.textContent += button_text;
    }
  });
});
