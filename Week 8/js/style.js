$(document).ready(function(){
    
    //event handler for form submission
    $('form').submit(function(e){
        
        //variables for each text input
    var userName = document.getElementById('userName').value,
        email = document.getElementById('email').value,
        psWd = document.getElementById('psWd').value,
        vals = [userName, email, psWd];
        //variables for each radio button (these aren't used here)
    var onLine = document.getElementsByName('onLine'),
        friend = document.getElementsByName('friend'),
        radio = document.getElementsByName('radio');
        //variable for succcessful form div
        var $yourOutputsDiv = document.getElementById('yourOutputsDiv');
        
        $(this).find('input[type=text]').each(function (n, element){
            if ($(element).val() == '') {
                //alert user of blank fields
                alert('Some fields are blank. Please fill them in');
                //border becomes red around missing text
                $(element).addClass("error");
                e.preventDefault();
            }else if ($(element).val() !== ''){
                e.preventDefault();
                // else alert user of success
                console.log(vals);
                $('#yourOutputsDiv').text("Form submitted!");
            };
        });
    });
});