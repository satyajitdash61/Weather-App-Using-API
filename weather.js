let cityName;
let hr="";
let min="";
let ampm="";
document.getElementById("p_eigth").style.color="rgb(67, 150, 228)";
document.querySelector(".searchbutton").addEventListener("click",function(){
    cityName=document.querySelector(".inputbox").value;
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=fd66e0316984985637d9a22619434442&units=metric',
        dataType: "json",
        type: 'GET',
        success: function (data) {
            jsonFile=data
            console.log(jsonFile);
            progress();
            temperature=Math.round(jsonFile.main.temp);
            console.log(jsonFile.name);
            document.getElementById("p_one").innerHTML=jsonFile.name+", "+jsonFile.sys.country;
            document.getElementById("p_seven").innerHTML=temperature;
            document.getElementById("p_six").innerHTML=jsonFile['weather'][0]['main'];
            let iconcode=jsonFile['weather'][0]['icon'];
            let icondisplay= "http://openweathermap.org/img/wn/" + iconcode + ".png";
            document.getElementById("myImg").src=icondisplay;


        },
        error: function(error){
            console.log(error);
            alert("Wrong Entry...")
        }
    });
})

    var currentdate = new Date();
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(currentdate.getHours()<=12){
    hr=currentdate.getHours();
    }   
    else{
        hr=currentdate.getHours();

    }
    min=currentdate.getMinutes();
    
    if(currentdate.getHours()<=12){
        ampm='am';
    }
    else{
        ampm='pm';
    }
    document.getElementById("p_two").innerHTML=days[currentdate.getDay()]+", "+hr+":"+min+" "+ampm;

    function f(){
        
        var fa=Math.round(((temperature*(9/5))+32));
        document.getElementById("p_seven").innerHTML=fa;
        document.getElementById("p_nine").style.color="rgb(67, 150, 228)";
        document.getElementById("p_eigth").style.color="rgb(0, 0, 0)";
    }
    function c(){

       document.getElementById("p_seven").innerHTML=temperature;
       //document.getElementById("p_eight").style.color="rgb(67, 150, 228)";
        document.getElementById("p_nine").style.color="rgb(0, 0, 0)";
        document.getElementById("p_eigth").style.color="rgb(67, 150, 228)";

    }



