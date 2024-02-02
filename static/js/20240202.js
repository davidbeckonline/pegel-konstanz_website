async function loadPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const konstante_data = await response.json();
    
    const current_level = konstante_data["current_level"];
    document.getElementById("website_current_level").innerText = current_level;

    const mostrecent_date = konstante_data["mostrecent_date"];
    document.getElementById("website_mostrecent_date").innerText = mostrecent_date;
  } catch (error) {
    console.error("Error loading Pegel:", error);
    // You might want to do additional error handling or logging here.
  }
}

loadPegel();