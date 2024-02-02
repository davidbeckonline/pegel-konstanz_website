async function loadPegel() {
	try {
	  const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
	  const konstante_data = await response.json();
	  console.log(konstante_data);
	  const current_level = konstante_data["current_level"];
	  document.getElementById("website_current_level").innerText = current_level;

	  const mostrecent_date = konstante_data["mostrecent_date"];
	  document.getElementById("website_mostrecent_date").innerText = mostrecent_date;

	  return;
	} catch (error) {
	  console.error("Error loading Pegel:", error);
	  return null; // or handle the error in a way that suits your needs
	}
}