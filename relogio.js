function carregar(){
    var horaDoDia = document.getElementById('hora')
    data = new Date();
    var horaAtual = data.getHours();
    var min = String(data.getMinutes()).padStart(2, '0');
    horaDoDia.innerHTML = `${horaAtual}:${min}`;

}
function iniciarRelogio(){
    carregar(); // chama uma vez imediatamente
    setInterval(carregar, 1000); // atualiza a cada 1 segundo
}