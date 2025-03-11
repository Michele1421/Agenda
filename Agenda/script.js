let nome;
let numero;
let check = Number (prompt(`Premere 1 per eliminare o aggiungere un contatto, \n premere 2 se vuoi modificare un contatto `))

let rubrica= { 
    Contatti: [
         {nome: `Giuseppe`, numero: `123456780`},
         {nome: `Mary`, numero: `123453560`},
         {nome: `Francesco`, numero: `133356780`}

    ],

     Contacts: function(){
     
           this.Contatti.forEach(contatto => {
              
              console.log(` ${contatto.nome}: ${contatto.numero}`);


           })
     
     },

     Contacts2: function(nome){
let contatto = this.Contatti.find(contatto=> contatto.nome == name)
          if(contatto){
               console.log (`Contatto Trovato: ${contatto.nome}: ${contatto.numero}`);
          } else{
               console.log(`Contatto Non Trovato`);
          }
     },


      Rimuovicontatto:function(nome, numero){
            
             let contatto= this.Contatti.find(contatto => contatto.nome == name)
          let indice = this.Contatti.indexOf(contatto)
          if(contatto) {
               this.Contatti.splice(index, 1)
               console.log(`Contatto Eliminato`);
          }else{
               this.Contatti.push({nome: nome, numero: numero})
               console.log(`Contatto Aggiunto`);
          }

     },    

      Modificacontatto:function(){
          let contatto= this.Contatti.find(contatto.nome== name)
          if(contatto){
               console.log (`Contatto Modificato`);
               contatto.numero= nuovonumero
          }else{
               console.log (`Contatto Non Trovato`);
          }
      }

}
   
rubrica.Contacts2(nome)

switch(check)
{
     
      case 1:
          nome= prompt(`Inserisci il nome`)
          numero=prompt(`Inserisci il numero`)
          rubrica.Rimuovicontatto(nome, numero)
          
          break;
      case 2: 
          nome= prompt(`Inserisci il nome`)
          numero=prompt(`Inserisci il numero`)
          rubrica.Modificacontatto(nome, numero)
      
          break;

}
rubrica.Contacts()


























