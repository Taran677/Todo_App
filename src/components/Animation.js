setTimeout(() => {
  let header = document.getElementsByTagName("h1")[0];
  header.onmouseover = () => {
    header.style.color = "#bc8ed0";
  };
  header.onmouseout = () => {
    header.style.color = "#af66ce";
  };
  let getWidth = () => {
    let winWidth;
    return (winWidth = window.innerWidth);
  };
  let getHeight = () => {
    let winHeight;
    return (winHeight = window.innerHeight);
  };
  document.addEventListener("mousemove", function (event) {
    let index = () => {
      let length = event.clientX / getWidth();
      let degrees;
      if (length >= 0.5) {
        degrees = length * 10 - 5;
      } else {
        degrees = -(1 - length) * 10 + 5;
      }
      var root = document.documentElement;
      root.style.setProperty("--degrees", degrees + "deg");
      root.style.setProperty("--translatelength", degrees * 2 + "px");

      let y = event.clientY / getHeight();
      let lengthy = y;
      let heightCompy = header.offsetHeight / 2;
      let heightPercent = heightCompy / getHeight();

      let degreesy;
      if (lengthy >= heightPercent) {
        degreesy = lengthy * 10;
      } else {
        degreesy = -(1 - lengthy) * 10;
      }
      var root = document.documentElement;
      root.style.setProperty("--degreesy", degreesy + "deg");
      root.style.setProperty("--translatelengthy", degreesy + "px");
    };
    index();
  });

  getWidth();
  window.onresize = () => {
    getWidth();
  };
  getHeight();
  window.onresize = () => {
    getHeight();
  };
}, 200);
