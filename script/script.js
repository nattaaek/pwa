$('#random').on("click", function random(e) {
    result = Math.floor((Math.random() * 6) + 1);

    $('#category').children().removeAttr('style');

    switch (result) {
        case 1:
            $('#cookedToOrder').css("border", " 5px solid red");
            category = "อาหารตามสั่ง";
            break;
        case 2:
            $('#dessert').css("border", " 5px solid red");
            category = "ของหวาน";
            break;
        case 3:
            $('#noodle').css("border", " 5px solid red");
            category = "อาหาร \"เส้น\"";
            break;
        case 4:
            $('#buffet').css("border", " 5px solid red");
            category = "บุฟเฟต์";
            break;
        case 5:
            $('#vegeterian').css("border", " 5px solid red");
            category = "อาหารมังสะวิรัติ";
            break;
        case 6:
            $('#clean').css("border", " 5px solid red");
            category = "อาหารคลีน";
            break;
        default:
            break;
    }
});