/*
      1-Pedra
      2-Papel
      3-Tesoura
*/

/* Variáveis para atribuição da string da opção */
var player1Option;
var player2Option;

/* Escolha do elemento */
var player1 = prompt(`Jogador 1 
1 = pedra
2 = papel
3 = tesoura`);

/* Atribuição do nome da escolha */
switch (player1) {
      case '1': 
            player1Option = 'pedra';
            break;

      case '2':
            player1Option = 'papel';
            break;

      case '3':
            player1Option = 'tesoura';
            break;
}

var player2 = prompt(`Jogador 2 
1 = pedra
2 = papel
3 = tesoura`);

switch (player2) {
      case '1':
            player2Option = 'pedra';
            break;

      case '2':
            player2Option = 'papel';
            break;

      case '3':
            player2Option = 'tesoura';
            break;
}

      /* Lógica para as combinações de pedra */            
if (player1 == 1 && player2 == 3) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option}      VENCEDOR: jogador 1`);
}

else if (player1 == 1 && player2 == 2) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option}      VENCEDOR: jogador 2`);
}

else if (player1 == 1 && player2 == 1) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option}      RESULTADO: empate`);
}


      /* Lógica para as combinações do papel */
else if (player1 == 2 && player2 == 3) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 2`);
}

else if (player1 == 2 && player2 == 1) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 1`);
}

else if (player1 == 2 && player2 == 2) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} EMPATE`);
}


      /* Lógica para as combinações da tesoura */
else if (player1 == 3 && player2 == 1) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 2`);
}

else if (player1 == 3 && player2 == 2) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 1`);
}

else if (player1 == 3 && player2 == 3) {
      alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} EMPATE`);
}


      /* Validação de entrada válida */
else {
      alert("Valor inválido!");
}

