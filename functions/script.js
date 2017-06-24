$('#random').on("click", function random(e) {
    result = Math.floor((Math.random() * 6) + 1);

    $('#category').children().removeClass('randomSelect');

    switch (result) {
        case 1:
            $('#cookedToOrder').addClass("randomSelect");
            category = "อาหารตามสั่ง";
            break;
        case 2:
            $('#dessert').addClass("randomSelect");
            category = "ของหวาน";
            break;
        case 3:
            $('#noodle').addClass("randomSelect");
            category = "อาหาร \"เส้น\"";
            break;
        case 4:
            $('#buffet').addClass("randomSelect");
            category = "บุฟเฟต์";
            break;
        case 5:
            $('#vegeterian').addClass("randomSelect");
            category = "อาหารมังสะวิรัติ";
            break;
        case 6:
            $('#clean').addClass("randomSelect");
            category = "อาหารคลีน";
            break;
        default:
            break;
    }
    $('.type').text(category);
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}