
var statistics = {



    "number_of_republicans": 0,
    "number_of_democrats": 0,
    "number_of_independents": 0,


    "republicansAvgVotParty" : 0,
    "democratsAvgVotParty" : 0,
    "independentsAvgVotParty" : 0,


    "republicans_lessloyals":[],
    "republicans_mostloyals":[],





    "List_of_democrats": [],
    "List_or_republicans": [],
    "List_of_independents": [],


   "all_members":[]

};






function getArrayMembers(){
    
  
   
    fetch('js/pro-congress-113-senate.json')


    .then(function(res) {
        return res.json();

    })


    .then(function(data) {
       
        var resultado = data["results"];

    
        
      resultado.forEach(function(elements){
         
         var miembros = elements.members;
         statistics.all_members = miembros

         

        
            miembros.forEach(function(Donmiembro){
                
           
                    

                    
                    if (Donmiembro.party === "R") {

                        statistics.List_or_republicans.push(Donmiembro);
                        statistics.number_of_republicans = statistics.List_or_republicans.length;
                       
        

                    } else if(Donmiembro.party === "D"){

                        statistics.List_of_democrats.push(Donmiembro);
                        statistics.number_of_democrats = statistics.List_of_democrats.length;
                     
            
            
            
                    }  else  {  statistics.List_of_independents.push(Donmiembro)
                                statistics.number_of_independents = statistics.List_of_independents.length;                    
                    
                    
                    
                    
                    
                    
                    };
                  
        
                    
        });
         
       
        statistics.republicansAvgVotParty = AvgParty(statistics.List_or_republicans);
        statistics.democratsAvgVotParty = AvgParty(statistics.List_of_democrats);
        statistics.independentsAvgVotParty =AvgParty(statistics.List_of_independents);

        tablas();
        var sorted = sortLeastLoyal(statistics.all_members, "DESC");
        tablaML(2, sorted);
        var sorted = sortLeastLoyal(statistics.all_members, "ASC");
        tablaML(3, sorted);
        
    

        // console.log(statistics.all_members.length);

        

  
       

        
      });
        

       
    
     





            });
      
        
            

}





    function AvgParty(partyList){

      let  total = 0;

      /**suma  todos los votos del partido de cada partido y dividirlo por la longitud de la lista */
    
      partyList.forEach(function(member){

        total = total  + member.votes_with_party_pct;

      });
        
      AvgWithParty= total  /  partyList.length;

      return AvgWithParty;
        

      }

   
    function sortLeastLoyal(partyList, orden){
       /** recorre cada miempbro del partido */
       var votes =[];

        if(orden === "DESC"){


        partyList.sort(function(a, b) {
     return a.votes_with_party_pct - b.votes_with_party_pct;

        });


        } else if( orden= "ASC") {

    partyList.sort(function(a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct;


   
    });


}

    let tenpercent = (10 * partyList.length)/100 ;
            
       
       for(let i=0; i< tenpercent; i++){
        votes.push(partyList[i]);

        statistics.republicans_lessloyals.push(partyList[i]);
      
    } return votes;

    }


    function tablaML(nrotabla, array) {
        /** TABLA least loyal y most loyal */
    
        if (nrotabla==2) {var tbody2 = document.querySelector("#tabla2");}
        else if (nrotabla==3) {var tbody2 = document.querySelector("#tabla3");}
        
        console.log(tbody2);
        array.forEach(function(element){
                  /*  console.log(element);*/
                
        tbody2.innerHTML +=`
        <tr>  
            
            <td>${element.first_name + " " + element.last_name}</td>
            <td> ${Math.round(element.total_votes*element.votes_with_party_pct/100)}</td>
            <td>${element.votes_with_party_pct}</td>
           
        </tr>
        `

            });


    }

    

    
    function tablas(){
        let tbody = document.querySelector("#tabla1");
       

        tbody.innerHTML +=`
        <tr>  
            
            <td>${"Republican"}</td>
            <td> ${statistics.number_of_republicans}</td>
            <td>${Math.round(statistics.republicansAvgVotParty)}</td>
           
        </tr>
    
        <tr>  
            
            <td>${"Democrats"}</td>
            <td> ${statistics.number_of_democrats}</td>
            <td>${Math.round(statistics.democratsAvgVotParty)}</td>
           
        </tr>


        <tr>  
            
            <td>${"Independents"}</td>
            <td> ${statistics.number_of_independents}</td>
            <td>${Math.round(statistics.independentsAvgVotParty)}</td>
           
        </tr>
    
    `
      




    }



    
    
   




     



window.onload = getArrayMembers();



        






    
        
            
