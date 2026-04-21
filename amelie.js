
const songData = {
  "Starboy": { streams: "3.5B+", length: "3:50", year: 2016 },
  "Party Monster": { streams: "1.2B+", length: "4:09", year: 2016 },
  "False Alarm": { streams: "950M+", length: "3:40", year: 2016 },
  "Reminder": { streams: "1.4B+", length: "3:38", year: 2016 },
  "Rockin’": { streams: "700M+", length: "3:52", year: 2016 },
  "Secrets": { streams: "600M+", length: "4:25", year: 2016 },
  "True Colors": { streams: "500M+", length: "3:26", year: 2016 },
  "Stargirl Interlude": { streams: "900M+", length: "1:51", year: 2016 },
  "Sidewalks": { streams: "650M+", length: "3:51", year: 2016 },
  "Six Feet Under": { streams: "550M+", length: "3:59", year: 2016 },
  "Love to Lay": { streams: "480M+", length: "3:43", year: 2016 },
  "A Lonely Night": { streams: "500M+", length: "3:40", year: 2016 },
  "Attention": { streams: "430M+", length: "3:17", year: 2016 },
  "Ordinary Life": { streams: "460M+", length: "3:41", year: 2016 },
  "Nothing Without You": { streams: "420M+", length: "3:18", year: 2016 },
  "All I Know": { streams: "390M+", length: "5:21", year: 2016 },
  "Die for You": { streams: "4.2B+", length: "4:20", year: 2016 },
  "I Feel It Coming": { streams: "2.8B+", length: "4:29", year: 2016 }
};

const songs = document.querySelectorAll("ul li");

songs.forEach(song => {
  const songName = song.textContent.trim();

  const button = document.createElement("button");
  button.textContent = songName;

  const info = document.createElement("span");
  info.style.marginLeft = "15px";
  info.style.fontSize = "1.15rem";
  info.style.color = "#00ffff";
  info.style.display = "none";

  button.addEventListener("click", () => {
    // ✅ TOGGLE BEHAVIOR
    if (info.style.display === "inline") {
      info.style.display = "none";
    } else {
      const data = songData[songName];
      info.textContent = `Streams: ${data.streams} | Length: ${data.length} | ${data.year}`;
      info.style.display = "inline";
    }
  });

  song.textContent = "";
  song.appendChild(button);
  song.appendChild(info);
});
