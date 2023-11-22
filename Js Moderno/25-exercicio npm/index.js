const dayjs = require("dayjs")


function datadeNascimento(dia, mes, ano){
 const dataAtual= dayjs()
const nascimento=dayjs(`${ano}-${mes}-${dia}`)


const idadeAtual= dataAtual.diff(nascimento,'year')
const ProximoNiver = dayjs(nascimento).add(idadeAtual+1,'year')
 let TempoProxNiver = ProximoNiver.diff(dataAtual,'day')+1
 if (TempoProxNiver===366){
    TempoProxNiver=0;
 }


 const text=
 `Sua idade atual é ${idadeAtual}
  Seu próximo aniversário vai ser ${ProximoNiver.format('DD/MM/YYYY')}
  Falta(m) ${TempoProxNiver} dias para seu aniversário`

 return text;
}

console.log(datadeNascimento("13","11","2002"))


//Código corrigido




