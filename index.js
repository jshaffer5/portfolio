function showMore() {
  let htmlCollection = document.getElementsByClassName("more-cards");
  let elements = Array.from(htmlCollection);
  console.log("showMore() called");
  elements.map(element => {
    if (element.style.display != "block") {
      element.style.display = "block";
      document.getElementById("show-more-projects").innerText = "Show Less";
    } else {
      element.style.display = "none";
      document.getElementById("show-more-projects").innerText = "Show More";
    }
  });
}
