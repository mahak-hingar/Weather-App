let weather = {
    "apiKey": "b719dece95d9ec7d7489bf1256424720",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="
        + this.apiKey)
       
       
       
       
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name} = data;
        const { icon , description} =data.weather[0];
        const { temp , humidity} = data.main;
        const { speed} = data.wind;
        console.log(name,icon,description,temp -273,humidity,speed);
        document.querySelector(".city").innerText= "Weather in " + name ;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText = (temp -273) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = " Wind Speed: " + speed  + "Km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
   search: function(){
   this.fetchWeather( document.querySelector(".search-bar").value);
   },

};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
    
});
document
.querySelector(".search-bar")
.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("Jaipur")
