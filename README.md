## Desafio01
Este é um pequeno programa em JavaScript que solicita ao usuário um número inteiro positivo e calcula o somatório de todos os valores inteiros divisíveis por 3 ou 5 que são inferiores ao número fornecido.

## Como utilizar:

1 - Requisitos:
- Necessário ter o Node.js instalado no seu sistema.

2 - Execução:
- Abra o terminal e navegue até o diretório do projeto.
- Execute o comando `node desafio01.js` substituindo "desafio01.js" pelo nome do seu arquivo JavaScript

3 - Entrada do Usuário:
- O programa solicitará que o usuário digite um número inteiro positivo.

4 - Saída:
- O programa calculará o somatório dos múltiplos de 3 ou 5 até o número fornecido.
- O resultado será exibido no console.

## Explicação do Código:

### `somatorioTotal(num)`
Essa função aceita um número inteiro positivo `num` como argumento e retorna o somatório de todos os valores inteiros divisíveis por 3 ou 5 que são interiores a `num`.

### Entrada do Usuário:
- O programa usa o comando `prompt` para solicitar um número inteiro positivo ao usuário.
- Este número é convertido para um inteiro usando `parseInt`.

### Validação
- O código verifica se o número fornecido é um número válido, positivo e inteiro.

### Execução da Função
- O programa chama a função `somatorioTotal` com o número fornecido pelo usuário.
- A função utiliza um loop para calcular o somatório.

### Exibição do Resultado
- O resultado é exibido no console usando o comando `alert`.

