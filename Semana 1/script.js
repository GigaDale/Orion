      /*
            1-Pedra
            2-Papel
            3-Tesoura
      */

      /* Variáveis para atribuição da string da opção */
var player1Option;
var player2Option;

 /* Atribuição do nome da escolha */
 const escolhaP1 = (player) => {
      switch (player) {
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
}

const escolhaP2 = (player) => {
      switch (player) {
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
}

/* Lógica para as combinações de pedra */ 
const combinacoesPedra = (player1, player2) => {
      if (player1 == 1 && player2 == 3) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option}      VENCEDOR: jogador 1`);
      }else if (player1 == 1 && player2 == 2) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option}      VENCEDOR: jogador 2`);
      }else if (player1 == 1 && player2 == 1) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option}      RESULTADO: empate`);
      }
      else {
            alert("Combinação inválida!");
      }
}

            /* Lógica para as combinações do papel */
const combinacoesPapel = (player1, player2) => {
      if (player1 == 2 && player2 == 3) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 2`);
      }else if (player1 == 2 && player2 == 1) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 1`);
      }else if (player1 == 2 && player2 == 2) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} EMPATE`);
      }
      else {
            alert("Combinação inválida!");
      }
}

            /* Lógica para as combinações da tesoura */
const combinacoesTesoura = (player1, player2) => {
      if (player1 == 3 && player2 == 1) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 2`);
      }else if (player1 == 3 && player2 == 2) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} VENCEDOR: jogador 1`);
      }else if (player1 == 3 && player2 == 3) {
            alert(`Jogador 1 = ${player1Option} e jogador 2 = ${player2Option} EMPATE`);
      }
      else {
            alert("Valor inválido!");
      }
}

      /* main */
do{
      var player1 = prompt(`Jogador 1 
      1 = pedra
      2 = papel
      3 = tesoura
      4 = sair`);

      var player2 = prompt(`Jogador 2 
      1 = pedra
      2 = papel
      3 = tesoura
      4 = sair`);

      escolhaP1(player1);
      escolhaP2(player2);

      
      switch (player1) {
            case '1':
                  combinacoesPedra(player1, player2);
                  break;
            case '2':
                  combinacoesPapel(player1, player2);
                  break;
            case '3':
                  combinacoesTesoura(player1, player2);
                  break;
      }
} while(player1 != 4 && player2 != 4);