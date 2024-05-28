let horas = new Date().getHours();
document.write(horas)
let img = document.getElementById('imagem')


if(horas <= 12){
    img.src= "./midia/images.jpeg"
}