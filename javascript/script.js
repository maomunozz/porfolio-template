function myFunction(id) {
  let elements = document.querySelectorAll(".project");
  elements.forEach((item) => {
    item.classList.remove("selected");
  });

  switch (id) {
    case "marketing":
      let marketing = document.querySelectorAll(".marketing");
      marketing.forEach((item) => {
        item.classList.add("selected");
      });
      break;

    case "web":
      let web = document.querySelectorAll(".web");
      web.forEach((item) => {
        item.classList.add("selected");
      });
      break;

    case "grafico":
      let grafico = document.querySelectorAll(".grafico");
      grafico.forEach((item) => {
        item.classList.add("selected");
      });
      break;

    case "todo":
      let todo = document.querySelectorAll(".project");
      todo.forEach((item) => {
        item.classList.remove("selected");
      });
      break;

    default:
      break;
  }
}
