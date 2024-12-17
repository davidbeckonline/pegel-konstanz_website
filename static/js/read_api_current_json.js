async function loadapiPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/api/json/currentdata.json");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const konstante_data = await response.json();

// date info
    const mostrecent_date = konstante_data["mostrecent_date"];
    document.getElementById("website_api_mostrecent_date").innerText = mostrecent_date;
    
    const mostrecent_time = konstante_data["mostrecent_time"];
    document.getElementById("website_api_mostrecent_time").innerText = mostrecent_time;    

// level info
    const current_level = konstante_data["current_level"];
    document.getElementById("website_api_current_level").innerText = current_level;

    const current_level_head = konstante_data["current_level"];
    document.getElementById("website_api_current_level_head").innerText = current_level_head;
  
    const change_vs_yesterday = konstante_data["change_vs_yesterday"];
    document.getElementById("website_api_change_vs_yesterday").innerText = change_vs_yesterday;

    const change_vs_yesterday_head = konstante_data["change_vs_yesterday"];
    document.getElementById("website_api_change_vs_yesterday_head").innerText = change_vs_yesterday_head;

// extended level info API

    const current_level_d1 = konstante_data["current_level_d1"];
    document.getElementById("website_api_current_level_d1").innerText = current_level_d1;

    const change_24h = konstante_data["change_24h"];
    document.getElementById("website_api_change_24h").innerText = change_24h;
  
    const change_72h = konstante_data["change_72h"];
    document.getElementById("website_api_change_72h").innerText = change_72h;

    const change_10d = konstante_data["change_10d"];
    document.getElementById("website_api_change_10d").innerText = change_10d;


// bridge info
    const current_level_bridge = konstante_data["current_level"];
    document.getElementById("website_api_current_level_bridge").innerText = current_level_bridge;

    const bridge_kn_left = konstante_data["bridge_kn_left"];
    document.getElementById("website_api_bridge_kn_left").innerText = bridge_kn_left;
    
    const bridge_kn_center = konstante_data["bridge_kn_center"];
    document.getElementById("website_api_bridge_kn_center").innerText = bridge_kn_center;
    
    const bridge_kn_right = konstante_data["bridge_kn_right"];
    document.getElementById("website_api_bridge_kn_right").innerText = bridge_kn_right;
    
  } catch (error) {
    console.error("Error loading Pegel:", error);
    // You might want to do additional error handling or logging here.
  }
}

loadapiPegel();