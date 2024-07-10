function winRate(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    let rank;

    if (saldoDeVitorias <= 10) {
        rank = "Ferro";
    } else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
        rank = "Bronze";
    } else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
        rank = "Prata";
    } else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
        rank = "Ouro";
    } else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
        rank = "Diamante";
    } else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return rank;
}

let vitorias = 200;
let derrotas = 89;

let rank = winRate(vitorias, derrotas);

console.log("O Herói tem um saldo de " + (vitorias - derrotas) + " e está no nível " + rank);
