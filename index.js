function showMore() {
  let htmlCollection = document.getElementsByClassName("more-cards");
  let elements = Array.from(htmlCollection);
  console.log("showMore() called");
  // elements.map(element => {
  //   if (element.style.display != "block") {
  //     element.style.display = "block";
  //     document.getElementById("show-more-projects").innerText = "Show Less";
  //   } else {
  //     element.style.display = "none";
  //     document.getElementById("show-more-projects").innerText = "Show More";
  //   }
  // });

  $( document ).ready(function() {
    if ($(".more-cards").css('display') != "block"){
      $(".more-cards").slideDown("fast", function() {
          console.log("slideDown() called, display is set to: ", $(this).css('display'));
          // $(this).attr("style", "display:block");
          $("#show-more-projects").text("Show Less");
      });
    } else {
      $(".more-cards").slideUp("fast", function() {
        console.log("slideUp() called", $(this).css('display'));
        // $(this).attr("style", "display:none")
        $("#show-more-projects").text("Show More");
      });
    }
  
  });
}


