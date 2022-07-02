function clicking() {
    var length = document.getElementById("length").value;
    var breadth = document.getElementById("breadth").value;
    var height = document.getElementById("height").value;
    var area = length * breadth * height;

    document.getElementById("displayhere").innerHTML = 'Total' + ' ' + area;


}