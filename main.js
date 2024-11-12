$(document).ready(function(){
    // Function to change the color of clicked span
    function TextColorChange(element) {
        $(element).css('color', 'blue');
    }

    // Click event for span elements
    $('span').click(function(){
        TextColorChange(this);
    });

    // Function to toggle the visibility of the name
    function ToggleName(element) {
        $(element).toggle();
    }

    // Click event for the "Toggle Name" button
    $('#nameToggle').click(function(){
        ToggleName('#myName');
    });

    // Function to load hobbies from JSON file
    function loadHobbies() {
        $.getJSON('hobbies.json', function(data) {
            $('#hobbyList').empty();
            $.each(data.hobbies, function(index, hobby) {
                $('#hobbyList').append('<li>' + hobby + '</li>');
            });
        }).fail(function() {
            console.error('Error: Unable to load hobbies.json');
            alert('Failed to load the hobbies.');
        });
    }

    // Click event for the "Get Hobbies" button
    $('#getHobbies').click(function(){
        loadHobbies(); // Call the function to load hobbies when button is clicked
    });

    // Add hover event to enlarge the span on mouse enter and reset on mouse leave
    $('span').hover(
        function(){
            // On mouse enter, increase font size and bold the text
            $(this).css({
                'font-size': '1.1em',
                'font-weight': 'bold'
            });
        }, 
        function(){
            // On mouse leave, reset font size and weight
            $(this).css({
                'font-size': '',
                'font-weight': ''
            });
        }
    );
    
    $('#myTable tr:odd').css('background-color', '#f9f9f9');  // Odd rows
    $('#myTable tr:even').css('background-color', '#e0f7fa'); // Even rows

    
    $('span:first').css('background-color', '#ffeb3b');
    $('span:last').css('background-color', '#ff9800');
});

    // AJAX call for Chuck Norris joke
    $('#getJoke').click(function() {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/chucknorris',
            headers: { 'X-Api-Key': '7JgKfcbkexJ97ksymLRK8g==frPeBBebrbjJGX9p' },
            contentType: 'application/json',
            success: function(result) {
                $('#jokeData').empty().append(`<p>${result.joke}</p>`);
            },
            error: function(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                alert("An error occurred while loading the joke.");
            }
        });
    });
    const lat = 38.6270;  
    const lon = -90.1994; 
    const apiKey = 'a7663ed94d23752c643d0e2985ccb7d7';
    // AJAX call for weather data
    $('#getWeather').click(function() {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`,
            type: 'GET',
            success: function(data) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                $('#weatherData').empty().append(`<p>Current Weather: ${weatherDescription}</p><p>Temperature: ${temperature} °F</p>`);
            },
            error: function(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                alert("An error occurred while loading the weather data.");
            }
        });
    });

    $(document).ready(function() {
       
        $("#tabs").tabs();
    
      
        $("#accordion").accordion();
    
        
        $("#progressbar").progressbar({
            value: 80
        });
    });
    

