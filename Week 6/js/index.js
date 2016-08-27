$(document).ready(function () {
    //City array (used as an array to iterate)
    var city = ['NYC', 'SF', 'LA', '.ATX', 'SYD'];
    //City Value array (used to add new option values)
    var cityVal = ['New York', 'Los Angeles', 'Sydney', 'Austin', 'San Fransisco'];
    // 
    var sel=document.getElementById('city-type');
    //Iterate over the city array
    for (var i = 0; i < city.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = cityVal[i];
        opt.value = cityVal[i];
        sel.appendChild(opt);
    };
    //initiate city-type value changes with event handler
    //changes of city-type values run the following function
    document.getElementById('city-type').onchange=(function() {
    var cityType = $('#city-type').val();
    //if else conditionals
        if (cityType == 'New York'){
          $('body, background').removeClass().addClass('nyc');
        }if (cityType == 'San Fransisco'){
          $('body, background').removeClass().addClass('sf');  
        }if (cityType == 'Los Angeles'){
          $('body, background').removeClass().addClass('la');
        }if (cityType == 'Austin'){
          $('body, background').removeClass().addClass('austin');
        }if (cityType == 'Sydney'){
          $('body, background').removeClass().addClass('sydney');
        };    
    });
});