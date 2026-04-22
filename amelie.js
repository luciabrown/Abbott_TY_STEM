
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
  "I Feel It Coming": { streams: "2.8B+", length: "4:29", year: 2016 },
  "Alone Again": { streams: "650M+", length: "4:10", year: 2020 },
  "Too Late": { streams: "800M+", length: "3:59", year: 2020 },
  "Hardest To Love": { streams: "520M+", length: "3:31", year: 2020 },
  "Scared To Live": { streams: "900M+", length: "3:10", year: 2020 },
  "Snowchild": { streams: "550M+", length: "4:07", year: 2020 },
  "Escape From LA": { streams: "480M+", length: "5:55", year: 2020 },
  "Heartless": { streams: "1.9B+", length: "3:18", year: 2020 },
  "Faith": { streams: "600M+", length: "4:43", year: 2020 },
  "Blinding Lights": { streams: "4.7B+", length: "3:20", year: 2020 },
  "In Your Eyes": { streams: "1.4B+", length: "3:58", year: 2020 },
  "Save Your Tears": { streams: "3.2B+", length: "3:35", year: 2020 },
  "Repeat After Me (Interlude)": { streams: "420M+", length: "3:15", year: 2020 },
  "After Hours": { streams: "850M+", length: "6:01", year: 2020 },
  "Until I Bleed Out": { streams: "500M+", length: "3:11", year: 2020 },
  "Real Life": { streams: "450M+", length: "3:43", year: 2015 },
  "Losers": { streams: "400M+", length: "4:41", year: 2015 },
  "Tell Your Friends": { streams: "950M+", length: "5:36", year: 2015 },
  "Often": { streams: "1.6B+", length: "4:09", year: 2015 },
  "The Hills": { streams: "2.4B+", length: "4:02", year: 2015 },
  "Acquainted": { streams: "600M+", length: "5:49", year: 2015 },
  "Can’t Feel My Face": { streams: "2.1B+", length: "3:33", year: 2015 },
  "Shameless": { streams: "480M+", length: "4:13", year: 2015 },
  "Earned It": { streams: "1.9B+", length: "4:37", year: 2015 },
  "In the Night": { streams: "900M+", length: "3:55", year: 2015 },
  "As You Are": { streams: "520M+", length: "5:40", year: 2015 },
  "Dark Times": { streams: "850M+", length: "4:20", year: 2015 },
  "Prisoner": { streams: "600M+", length: "4:34", year: 2015 },
  "Angel": { streams: "430M+", length: "6:17", year: 2015 },
  "Welcome To New York": { streams: "850M+", length: "3:32", year: 2014 },
  "Blank Space": { streams: "3.6B+", length: "3:51", year: 2014 },
  "Style": { streams: "2.4B+", length: "3:51", year: 2014 },
  "Out Of The Woods": { streams: "1.3B+", length: "3:55", year: 2014 },
  "All You Had To Do Was Stay": { streams: "1.0B+", length: "3:13", year: 2014 },
  "Shake It Off": { streams: "4.5B+", length: "3:39", year: 2014 },
  "I Wish You Would": { streams: "820M+", length: "3:27", year: 2014 },
  "Bad Blood": { streams: "2.2B+", length: "3:31", year: 2014 },
  "Wildest Dreams": { streams: "3.1B+", length: "3:40", year: 2014 },
  "How You Get The Girl": { streams: "900M+", length: "4:07", year: 2014 },
  "This Love": { streams: "1.1B+", length: "4:10", year: 2014 },
  "I Know Places": { streams: "950M+", length: "3:15", year: 2014 },
  "Clean": { streams: "1.4B+", length: "4:31", year: 2014 },
  "...Ready For It?": { streams: "1.9B+", length: "3:28", year: 2017 },
  "End Game": { streams: "1.2B+", length: "4:04", year: 2017 },
  "I Did Something Bad": { streams: "1.6B+", length: "3:58", year: 2017 },
  "Don't Blame Me": { streams: "2.7B+", length: "3:56", year: 2017 },
  "Delicate": { streams: "2.2B+", length: "3:52", year: 2017 },
  "Look What You Made Me Do": { streams: "2.4B+", length: "3:31", year: 2017 },
  "So It Goes...": { streams: "1.0B+", length: "3:47", year: 2017 },
  "Gorgeous": { streams: "1.4B+", length: "3:29", year: 2017 },
  "Getaway Car": { streams: "1.8B+", length: "3:53", year: 2017 },
  "King Of My Heart": { streams: "1.2B+", length: "3:34", year: 2017 },
  "Dancing With Our Hands Tied": { streams: "1.1B+", length: "3:31", year: 2017 },
  "Dress": { streams: "1.3B+", length: "3:50", year: 2017 },
  "This Is Why We Can't Have Nice Things": { streams: "1.0B+", length: "3:27", year: 2017 },
  "Call It What You Want": { streams: "1.5B+", length: "3:23", year: 2017 },
  "New Year's Day": { streams: "1.4B+", length: "3:55", year: 2017 },
  "I Forgot That You Existed": { streams: "1.1B+", length: "2:50", year: 2019 },
  "Cruel Summer": { streams: "3.5B+", length: "2:58", year: 2019 },
  "Lover": { streams: "2.4B+", length: "3:41", year: 2019 },
  "The Man": { streams: "1.2B+", length: "3:10", year: 2019 },
  "The Archer": { streams: "1.1B+", length: "3:31", year: 2019 },
  "I Think He Knows": { streams: "1.0B+", length: "2:53", year: 2019 },
  "Miss Americana & The Heartbreak Prince": { streams: "1.5B+", length: "3:54", year: 2019 },
  "Paper Rings": { streams: "1.6B+", length: "3:43", year: 2019 },
  "Cornelia Street": { streams: "1.9B+", length: "4:47", year: 2019 },
  "Death By A Thousand Cuts": { streams: "1.7B+", length: "3:18", year: 2019 },
  "London Boy": { streams: "1.3B+", length: "3:10", year: 2019 },
  "Soon You'll Get Better": { streams: "800M+", length: "3:21", year: 2019 },
  "False God": { streams: "1.1B+", length: "3:20", year: 2019 },
  "You Need To Calm Down": { streams: "2.2B+", length: "2:51", year: 2019 },
  "Afterglow": { streams: "1.2B+", length: "3:43", year: 2019 },
  "ME!": { streams: "1.9B+", length: "3:13", year: 2019 },
  "It's Nice To Have A Friend": { streams: "750M+", length: "2:30", year: 2019 },
  "Daylight": { streams: "1.4B+", length: "4:53", year: 2019 }

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
