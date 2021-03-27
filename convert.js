$(document).ready( function(){

    const link = " https://api.exchangeratesapi.io/latest"

   $("#from,#to,#frmAmnt").bind('click keyup', async function()
    {
        const res = await fetch(link)

        console.log(res)
    
        const data = await res.json()
    
        let keys =Object.keys(data.rates)

       /*keys.forEach(item =>
        {
            var elem = document.createElement('option')
            var elem = $('<input type="text"/>');
            elem.textContent = item
           document.querySelector("#from").appendChild(elem)
          
        })*/
        keys.forEach(item => {
            $('<option />', { text: item }).appendTo('#from');
           });
        /*keys.forEach(item =>
         {
                var elem = document.createElement('option')
                elem.textContent = item
               document.querySelector("#to").appendChild(elem)
        })*/
        keys.forEach(item => {
            $('<option />', { text: item }).appendTo('#to');
           });
        var fromval = $("#from").val()

        var toval=$("#to").val()

         var oneunit = data.rates[toval]/data.rates[fromval]

         var amt = $("#frmAmnt").val()

         var test = oneunit*amt 

        test = test.toFixed(4)

         /*document.querySelector("#toAmnt").value = test.toFixed(4)*/

         $("#toAmnt").val(test )
    })

   

})



 