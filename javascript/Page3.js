let apiCardApi = new TempApi.CardApi();import TempApi from '../src/index';window.onload = () => {apiCardApi.getAllcard((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("is02").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};document.getElementById('il6cu').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page1';}};