document
  .getElementById("urlForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const urlInput = document.getElementById("urlInput").value;
    const resultDiv = document.getElementById("result");
    const shortUrlElement = document.getElementById("shortUrl");

    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          urlInput
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      shortUrlElement.href = data.shorturl;
      shortUrlElement.textContent = data.shorturl;
      resultDiv.classList.remove("hidden");
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
