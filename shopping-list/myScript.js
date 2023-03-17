// <ul> yapisina li ekleyen method
function insertItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("tbox").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Alınacak bir şey yazmalısın!");
    } else {
        document.getElementById("liste").appendChild(li);
    }
    document.getElementById("tbox").value = "";
    // liste elemanlarini tek tek silmemiz icin gerekecek kapatma butonu
    var span = document.createElement("SPAN");
    var x = document.createTextNode("x");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// yukarida ekledigimiz butonu aktif kullanmamiza yarayacak kod
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// <ul> icindeki tum li 'leri silen kod
function clearAll() {
    var eleman = document.getElementById("liste");
    eleman.textContent = '';
}
// ekle butonununu enter tusu ile kullanmak
var input = document.getElementById("tbox");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btnAdd").click();
    }
});