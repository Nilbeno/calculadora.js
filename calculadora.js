<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    
    
   
</head>

<body>

        

    <h1>Calculadora JavaScript</h1>
    <br>
   <h1> Primeiro número </h1> <br>
    <input id="n1" type="number"> <br></br>
    <h1> Segundo número </h1> <br>
    <input id="n2" type="number"> <br></br>
    <button onclick="soma()">Somar</button>
    <button onclick="subitrair()">Subtrair</button>
    <button onclick="multiplicar()">Multiplicar</button>
    <button onclick="dividir()">Dividir</button> <br><br>
    O resultado é: <span id="res"> </span>
    <script>
        var n1 = document.getElementById("n1")
        var n2 = document.getElementById("n2")
        var res = document.getElementById("res") // res é o resultado
        function soma() {
            res.innerHTML = parseInt(n1.value) + parseInt(n2.value)
        }

        function subitrair() {
            res.innerHTML = parseInt(n1.value) - parseInt(n2.value)
        }

        function multiplicar() {
            res.innerHTML = parseInt(n1.value) * parseInt(n2.value)
        }

        function dividir() {
            if (n2 == 0) {
                res = "Não é possivel dividir por zero"
            }

            else {
            res.innerHTML = parseInt(n1.value) / parseInt(n2.value)
        }
        }
    </script>
   
</body>

</html>