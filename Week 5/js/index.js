$(document).ready(function() {
        // This function runs when a user submits a form entry.
        // And it accesses variable 'cityType' for use in if/ else if/ else statements.
    function backGroundChange() {
            // Variable 'cityType' accesses form entry via #city-type value.
        var cityType = $('#city-type').val();
            // If / else if/ else statements allows for different spellings of cities.
        if (cityType == 'NY' || cityType == 'NYC' || cityType == 'New York' || cityType == 'New York City'){
                // Updates background based on submitted city name. 
             $('body').css('background', 'url(./images/nyc.jpg) no-repeat center center fixed');
            
        }else if (cityType == 'SF' || cityType == 'San Francisco' || cityType == 'Bay Area' || cityType == 'SFO' || cityType == 'San Fran') {
            $('body').css('background', 'url(./images/sf.jpg) no-repeat center center fixed');
            
        }else if (cityType == 'Los Angeles' || cityType == 'LA' || cityType == 'LAX'){
            $('body').css('background', 'url(./images/la.jpg) no-repeat center center fixed');
            
        }else if (cityType == 'Austin' || cityType == 'ATX'){ 
            $('body').css('background', 'url(./images/austin.jpg) no-repeat center center fixed');
            
        }else if (cityType == 'Sydney' || cityType == 'SYD'){
            $('body').css('background', 'url(./images/sydney.jpg) no-repeat center center fixed');
            
        }else{
            alert('Pick a city dood!');
        }
        event.preventDefault();
        };
        //  On Submit to indicate when a user has submitted a form entry.
        $('form').submit(function(){
        //  Run backGroundChange function when a user submits a form entry.
        backGroundChange();
        });
    
    });