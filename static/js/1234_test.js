async function loadPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
    const current = await response.json();
    console.log(current);
    const currentLevel = current["current_level"];
    document.getElementById("current").innerText = currentLevel;
    return currentLevel;
  } catch (error) {
    console.error("Error loading Pegel:", error);
    return null; // or handle the error in a way that suits your needs
  }
}

loadPegel();