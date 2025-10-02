 const qrtext = document.getElementById("inputtext");
const qr = document.getElementById("qr");
const img = document.getElementById("img");

function qrGenerator() {
    if (inputtext.value.trim() === "") {
        alert("Enter Text or URL to Generate!");
        return; 
    }
    qr.style.display = "flex"; 
    img.src = "https://quickchart.io/qr?text=Here"  + inputtext.value;
}
