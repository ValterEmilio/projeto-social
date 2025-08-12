function carregar(){
    var horaDoDia = document.getElementById('hora')
    data = new Date();
    var horaAtual = String(data.getHours()).padStart(2, '0');
    var min = String(data.getMinutes()).padStart(2, '0');
    horaDoDia.innerHTML = `${horaAtual}:${min}`;

}
function iniciarRelogio(){
    carregar(); // chama uma vez imediatamente
    setInterval(carregar, 1000); // atualiza a cada 1 segundo
}