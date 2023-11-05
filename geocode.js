const axios = require("axios");

// Replace 'YOUR_API_KEY' with your actual Google Maps Geocoding API key
const apiKey = "AIzaSyB0qUXWx5AVEhC8Hv4WSVAaD3sjas-CXOk";
const address = "1600 Amphitheatre Parkway, Mountain View, CA";

const geocodeAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address: address,
          key: apiKey,
        },
      }
    );

    const results = response.data.results;
    if (results.length > 0) {
      const location = results[0].geometry.location;
      const latitude = location.lat;
      const longitude = location.lng;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } else {
      console.log("No results found for the address.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

geocodeAddress(address);
