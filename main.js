//  Get the container element 
var boxContainer = document.getElementsByClassName('box-container');

//  Get all the links inside the boxContainer 
var links = boxContainer.getElementsByTagName('a');

//  Loop through and add the active class to the current link 
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');

        //  If there is no active class
        // if (current.length > 0) {
        //     current[0].className = current[0].className.replace('active', '');
        // }

        //  Add the active class to the current link 
        this.className += 'active';
    });
}