let images = [
  {
    img: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg.webp",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2QxLUdCVnoLzyTNUT8RsA8TUNIy2iFXGJQ&usqp=CAU",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GNjLAA1YqVVb6PA5trmrX_oaQzXqw21ssQ&usqp=CAU",
  },
];

function display(images) {
  let i = 0;
  if (images !== undefined) {
    let caro = document.getElementById("c");
    function changeImage() {
      caro.src = images[i].img;
      i = (i + 1) % images.length;
      setTimeout(changeImage, 2000);
    }
    changeImage();
  }
}

display(images);

$("input").animate({ fontSize: "19px" }, "slow");

$(document).ready(function () {
  $("#searchButton").on("click", function () {
    var searchTerm = $("#searchInput").val().trim();

    if (searchTerm !== "") {
      window.location.href = "http://127.0.0.1:5500/" + searchTerm + ".html";
    }
  });
});
