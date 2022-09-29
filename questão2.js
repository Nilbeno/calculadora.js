 var input = require('prompt-sync')()

 var nome = input('Qual seu nome?' )
 var idade = input('Qual sua idade?' )
 var dias = parseInt(idade) * 365

 console.log(nome,'você viveu',dias,'dias')