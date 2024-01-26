async function loadPegel() {
  try {
    const response = await fetch("https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/json/currentdata.json");
    const { current_level, mostrecent_date } = await response.json();
    console.log("Current Level:", current_level);
    console.log("Most Recent Date:", mostrecent_date);

    document.getElementById("current").innerText = current_level;
    // Assuming you have another element with id "mostRecentDate" for displaying most recent date
    document.getElementById("mostRecentDate").innerText = mostrecent_date;

    return { current_level, mostrecent_date };
  } catch (error) {
    console.error("Error loading Pegel:", error);
    return null; // or handle the error in a way that suits your needs
  }
}

loadPegel();
