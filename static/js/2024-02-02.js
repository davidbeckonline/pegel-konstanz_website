async function loadPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
    const this20240201 = await response.json();
    console.log(this20240201);
    const currentLevel = this20240201["current_level"];
    document.getElementById("current").innerText = currentLevel;
    return currentLevel;
    
    const mostrecentDate = this20240201["mostrecent_date"];
    document.getElementById("current").innerText = mostrecentDate;
    return mostrecentDate;
    
  } catch (error) {
    console.error("Error loading Pegel:", error);
    return null; // or handle the error in a way that suits your needs
  }
}

loadPegel();