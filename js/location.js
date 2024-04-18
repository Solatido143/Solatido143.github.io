$(document).ready(function() {
    // Select the location-icon element
    $(".location-icon").hover(
        function() {
            var iconElement = $(this).find("i.fa-circle-dot");
            if (iconElement.length > 0) {
                iconElement.removeClass("fa-circle-dot p-1").addClass("fa-location-dot fs-4");
            }
        },
        function() {
            var iconElement = $(this).find("i.fa-location-dot");
            if (iconElement.length > 0) {
                iconElement.removeClass("fa-location-dot fs-4").addClass("fa-circle-dot p-1");
            }
        }
    );
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

