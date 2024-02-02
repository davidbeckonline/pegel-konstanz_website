async function loadPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const konstante_data = await response.json();

// date info
    const mostrecent_date = konstante_data["mostrecent_date"];
    document.getElementById("website_mostrecent_date").innerText = mostrecent_date;
    
    const mostrecent_time = konstante_data["mostrecent_time"];
    document.getElementById("website_mostrecent_time").innerText = mostrecent_time;    

// level info
    const current_level = konstante_data["current_level"];
    document.getElementById("website_current_level").innerText = current_level;
    
    const change_vs_yesterday = konstante_data["change_vs_yesterday"];
    document.getElementById("website_change_vs_yesterday").innerText = change_vs_yesterday;

// bridge info
    const bridge_kn_left = konstante_data["bridge_kn_left"];
    document.getElementById("website_bridge_kn_left").innerText = bridge_kn_left;
    
    const bridge_kn_center = konstante_data["bridge_kn_center"];
    document.getElementById("website_bridge_kn_center").innerText = bridge_kn_center;
    
    const bridge_kn_right = konstante_data["bridge_kn_right"];
    document.getElementById("website_bridge_kn_right").innerText = bridge_kn_right;
    
  } catch (error) {
    console.error("Error loading Pegel:", error);
    // You might want to do additional error handling or logging here.
  }
}

loadPegel();