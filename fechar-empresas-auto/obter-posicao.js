const robot = require('robotjs');

// Função para capturar e exibir a posição do mouse
function obterPosicaoMouse() {
    const posicao = robot.getMousePos();
    console.log(`Posição atual do mouse: x=${posicao.x}, y=${posicao.y}`);
}

obterPosicaoMouse();

const { exec } = require('child_process');

function abrirGlandata(glandata) {
    exec(glandata, (err) => {
        if (err) {
            console.error(`Erro ao abrir o glandata: ${err.message}`);
        }
    });
}

function clicar(x, y) {
    robot.moveMouse(x, y);
    robot.mouseClick()
}

function digitar(texto) {
    robot.typeString(texto);
}

function tempoEspera(tempo) {
    return new Promise(r => setTimeout(r, 2000)); // espera dois segundos
}

(async function apurarEmpresa() {

    login = { x: 0, y: 0}

    robot.keyTap('alt');
    robot.keyTap('m');
    robot.keyTap('a');
    robot.keyTap('enter');

    await tempoEspera(2000);

})

(async function main() {
    console.log("Abrindo glandata");
    abrirGlandata('C:\\Users\\kevin\\Desktop\\PainelGlanData.lnk')
    
    await apurarEmpresa()
})