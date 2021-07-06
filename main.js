jQuery(document).ready(function($) {
    $('.description') .hide()
$('a[href^="#"]').on('click', function(event) {
    $('.description') .hide()
    
    var target = $(this).attr('href');

    $('.description'+target).toggle();
})

})