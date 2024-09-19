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
});
