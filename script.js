const input= document.getElementById("inputbox")
const button= document.getElementById("button")
const form = document.querySelector('form')
const main = document.getElementById("main")
const city = document.getElementById("city")
const temp = document.getElementById("temp")
const feelslike = document.getElementById("feelslike")
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const wicon = document.getElementById("wicon")
const databox = document.getElementById("data")
const apikey = '07e32ff9a6de6b0e0d2f1eaae47d5980'
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'


form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName = inputbox.value;
    // console.log(cityName);
    checkWeather(cityName);
})

async function checkWeather(cn){
    
    const response = await fetch(url +`&appid=${apikey}`+`&q=${cn}`)
    var data = await response.json()

    console.log(data)
    databox.style.display = "block";

    main.innerHTML = data.weather[0].main;
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp)+"°C";
    feelslike.innerHTML = "Feels Like "+Math.round(data.main.feels_like)+"°C";
    wind.innerHTML = data.wind.speed +" km/h";
    humidity.innerHTML = data.main.humidity +"%";

    //update icon
    if(data.weather[0].main == "Clouds"){
        wicon.src = "img/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        wicon.src = "img/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        wicon.src = "img/raining.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wicon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Haze"){
        wicon.src = "img/op.png";
    }
    else if(data.weather[0].main == "Snow"){
        wicon.src = "img/snow.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        wicon.src = "img/storm.png";
    }
    else{
        wicon.src = "img/cloudy.png";
    }
    

}

// Function to update date and time
function updateDateTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes + ' ' + ampm;

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var dateString = day + '/' + month + '/' + year;

    document.getElementById('time').innerHTML = timeString;
    document.getElementById('date').innerHTML = dateString;
}

updateDateTime();
setInterval(updateDateTime, 1000);





let keywords = [
    "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Patna",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Vadodara",
  "Firozabad",
  "Malda"
]

const searchResult = document.querySelector('.searchResult');
const inputbox = document.getElementById('inputbox');

input.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if(input.length){
        result = keywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        })
        // console.log(result)
        
    }
    display(result);

    if(!result.length){
        searchResult.innerHTML = '';
    }

}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick = selectInput(this) >"+list+"</li>";
    });

    searchResult.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
inputbox.value = list.innerHTML

searchResult.innerHTML = '';

checkWeather(inputbox.value);

}