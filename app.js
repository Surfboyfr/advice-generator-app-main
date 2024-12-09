
const dice = document.querySelector('.dice');

dice.addEventListener('click', getAdvice);
// function to fetch data from the api
async function getAdvice(){
   try{
      // make a GET request to the API
      const response = await fetch('https://api.adviceslip.com/advice');

      // check if the response status is ok
      if(!response.ok){
         throw new Error('Network response was not ok' + response.statusText);
      } else { 
          // parse the JSON data from the response
      const data = await response.json();
      const mainData = data.slip.advice;
      const head = data.slip.id;

      // log the data to the console
      console.log(data);
      output = document.getElementById('advice');

       output.innerHTML = `
       <h3 class='h3'>ADVICE #${head}</h3>
       <p class='padding'>${mainData}</p>`;
      }       
    }
   catch(error){
      // log any errors that occur during the fetch
      console.error('there has been a problem mate!')
   }
};
 


