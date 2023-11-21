<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pares e Ímpares</title>
</head>

<body>
    <script>
        var numero = parseInt(prompt("Digite um número maior que zero"));
        if (numero > 0) {
            var pares = [];
            var impares = [];
            for (var i = 1; i <= numero; i++) {
                i % 2 === 0 ? pares.push(i) : impares.push(i);
            }
            //Mostra na tela, em ordem crescente, os números pares:
            var resultadoPares = document.createElement("p");
            resultadoPares.textContent = "Pares: " + pares.join(", ");
            document.body.appendChild(resultadoPares);

            //Mostra na tela, em ordem crescente, os números ímpares:
            var resultadoImpares = document.createElement("p");
            resultadoImpares.textContent = "Ímpares: " + impares.join(", ");
            document.body.appendChild(resultadoImpares);
        } else {
            console.log("Insira um número válido maior que zero!");
        }
    </script>
</body>

</html>
