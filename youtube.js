//   'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBCV7Dm2QGzHjap1jlIOZI4UaUvGXLiXlA'
let videos_div = document.getElementById("videos");
async function findVideos() {
  videos_div.innerHTML = null;
  let q = document.getElementById("query").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyA91vng7PfW3jKYtU1d3N0xn8OnB_Y4dJc`
  );
  let data = await res.json();
  console.log("data", data);
  let { items } = data;
  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });
  items.forEach(({ id: { videoId } }) => {
    let content = document.createElement("div");
    let sidebar = document.createElement("div");
    let div = document.createElement("div");
    content.append(sidebar, div);

    div.setAttribute("class", "vd");

    div.innerHTML = `<iframe width="350" height="200" margin="300px" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    videos_div.appendChild(div);
  });
}
// findVideos();
