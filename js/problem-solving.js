//https://github.com/Ariful-178/problem-solving/blob/master/problem-solving.js
//
// 1km/1000=1meter 
function kilometerToMeter(km) {

    if (km > 0) {
        var result = km * 1000;
        return result;


    } else {

        return "kilometer can not be zero or negative";
    }


}
var result = kilometerToMeter(1);
console.log(result);
//
//




// budgetCalculetor
// watch-price=50
// phone-price=100
// laptop-price=500
function budgetCalculetor(watch, phone, laptop) {

    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;

    if (watch > 0 && phone > 0 && laptop > 0)

    {
        var result = watch + phone + laptop;
        return result;

    } else {

        return -1;
    }


}
var result = budgetCalculetor(1,1,1);
console.log(result);
//
//



// hotelCost
// 100 taka per night till 10 days
// 80 taka per night for next 10 days (11-20)
// 50 taka per night after 20 days 

function hotelCost(days) {
    var rent = 0;
    if (days <= 10) {
        rent = days * 100;
    } else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        rent = firstPart + secondPart;
    } else {

        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        rent = firstPart + secondPart + thirdPart;
    }
    return rent;



}

var result = hotelCost(21);
console.log(result);
//
//




//
// megaFriend
var largestName = megaFriend(["pasha-kashimpur", "habu", "kabila", "rokeya"]);

function megaFriend(names) {
    var len = names.length,
        index = 0,
        i = 0;
    if (len == 0) {

        return "its empty"
    }

    for (i = 0; i < len; i++) {
        if (names[index].length < names[i].length) {
            index = i;
        }
    }
    return names[index];
}



console.log(largestName)
//
//