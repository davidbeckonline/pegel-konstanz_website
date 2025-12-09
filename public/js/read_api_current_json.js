async function loadapiPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const konstante_data = await response.json();

    // date info
    document.getElementById("website_api_mostrecent_date").innerText = konstante_data.mostrecent_date;
    document.getElementById("website_api_mostrecent_time").innerText = konstante_data.mostrecent_time;

    // level info
    document.getElementById("website_api_current_level").innerText = konstante_data.current_level;
    document.getElementById("website_api_current_level_head").innerText = konstante_data.current_level;
    document.getElementById("website_api_change_vs_yesterday").innerText = konstante_data.change_vs_yesterday;
    document.getElementById("website_api_change_vs_yesterday_head").innerText = konstante_data.change_vs_yesterday;

    // extended level info API
    document.getElementById("website_api_current_level_d1").innerText = konstante_data.current_level_d1;
    document.getElementById("website_api_change_24h").innerText = konstante_data.change_24h;
    document.getElementById("website_api_change_72h").innerText = konstante_data.change_72h;
    document.getElementById("website_api_change_10d").innerText = konstante_data.change_10d;

    // bridge info
    document.getElementById("website_api_current_level_bridge").innerText = konstante_data.current_level;
    document.getElementById("website_api_bridge_kn_left").innerText = konstante_data.bridge_kn_left;
    document.getElementById("website_api_bridge_kn_center").innerText = konstante_data.bridge_kn_center;
    document.getElementById("website_api_bridge_kn_right").innerText = konstante_data.bridge_kn_right;

  } catch (error) {
    console.error("Error loading Pegel:", error);
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadapiPegel);