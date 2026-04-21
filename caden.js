/* ===============================
   Artist Metadata
================================ */

const ARTIST_DATA = {
  "taylor swift": {
    song: "Anti‑Hero",
    accent: "#f472b6"
  },
  "drake": {
    song: "God’s Plan",
    accent: "#38bdf8"
  },
  "beyonce": {
    song: "Crazy In Love",
    accent: "#facc15"
  },
  "ed sheeran": {
    song: "Shape of You",
    accent: "#fb923c"
  },
  "the weeknd": {
    song: "Blinding Lights",
    accent: "#a855f7"
  }
};

/* ===============================
   Utilities
================================ */

function normalizeName(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function createPopup(accent, text) {
  const popup = document.createElement("div");

  Object.assign(popup.style, {
    position: "absolute",
    background: "rgba(0,0,0,0.9)",
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "0.85rem",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.4px",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    border: `1px solid ${accent}66`,
    boxShadow: `0 8px 32px ${accent}55`,
    opacity: "0",
    transform: "translate(-18px, -50%) scale(0.96)",
    transition:
      "opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    zIndex: 9999
  });

  popup.textContent = text;

  /* Arrow */
  const arrow = document.createElement("div");
  Object.assign(arrow.style, {
    position: "absolute",
    left: "-6px",
    top: "50%",
    width: "12px",
    height: "12px",
    background: "rgba(0,0,0,0.9)",
    borderLeft: `1px solid ${accent}66`,
    borderBottom: `1px solid ${accent}66`,
    transform: "translateY(-50%) rotate(45deg)"
  });

  popup.appendChild(arrow);

  return popup;
}

/* ===============================
   Core Logic
================================ */

document.querySelectorAll("tbody tr").forEach(row => {
  const cell = row.querySelector("td");
  if (!cell) return;

  const artistKey = normalizeName(cell.textContent);
  const artist = ARTIST_DATA[artistKey];
  if (!artist) return;

  /* Apply accent globally for CSS */
  row.style.setProperty("--accent", artist.accent);

  let popup = null;
  let hideTimeout = null;

  row.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);

    popup = createPopup(
      artist.accent,
      `Most Played Song: ${artist.song}`
    );

    document.body.appendChild(popup);

    const rect = row.getBoundingClientRect();
    popup.style.top = `${
      rect.top + rect.height / 2 + window.scrollY
    }px`;
    popup.style.left = `${
      rect.right + 16 + window.scrollX
    }px`;

    requestAnimationFrame(() => {
      popup.style.opacity = "1";
      popup.style.transform = "translate(0, -50%) scale(1)";
    });
  });

  row.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      if (!popup) return;

      popup.style.opacity = "0";
      popup.style.transform = "translate(-12px, -50%) scale(0.97)";
      popup.addEventListener(
        "transitionend",
        () => popup.remove(),
        { once: true }
      );

      popup = null;
    }, 60);
  });
});