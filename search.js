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

searchResult.innerHTML = ''
inputbox.innerHTML = ''
}