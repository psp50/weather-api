
const form = document.getElementById("weatherForm");
const inputValue = document.getElementById("inputValue");

const descElement = document.querySelector(".desc");
const tempElement = document.querySelector(".temp");
const windSpeedElement = document.querySelector(".windspeed");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const city = inputValue.value.trim();

//   if (!city) return;

//   try {
//     console.log("Fetching weather for:", city);

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     );

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     const data = await response.json();

//     const description = data.weather[0].description;
//     const tempK = data.main.temp;
//     const windSpeed = data.wind.speed;

//     // Convert Kelvin → Celsius
//     const tempC = (tempK - 273.15).toFixed(1);

//     // Update UI
//     descElement.textContent = description;
//     tempElement.textContent = `${tempC} °C`;
//     windSpeedElement.textContent = `${windSpeed} m/s`;

//   } catch (error) {
//     console.error("Error:", error);

//     descElement.textContent = "Error fetching data";
//     tempElement.textContent = "";
//     windSpeedElement.textContent = "";
//   }
// });



form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = inputValue.value.trim();
    
    if(!city){
        return
    }

    try{
        console.log('Fetching data from: ', city);

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85007a7e152e6935ae38840aa6d794ec`);

        if(!response.ok){
            throw new error('City Not Found');
            
        }

        const data =await response.json();
            const description = data.weather[0].description;
            const tempK = data.main.temp;
            const windSpeed = data.wind.speed;

            const tempC = (tempK - 273.15).toFixed(1);


            descElement.textContent = `Desciption ${description}`;
            tempElement.textContent = `Temperature is ${tempC} °C`;
            windSpeedElement.textContent = `Windspeed - ${windSpeed} m/s`;


    }catch (error) {
    console.error("Error:", error);

    descElement.textContent = "Error fetching data";
    tempElement.textContent = "";
    windSpeedElement.textContent = "";
  }

})