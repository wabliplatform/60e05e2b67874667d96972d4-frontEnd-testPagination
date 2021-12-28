let apiCardApi = new TempApi.CardApi();import TempApi from '../src/index';window.onload = () => {apiCardApi.getAllcard((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("io7yf").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'cardImage']");
        if(htmlElement !== null){
          htmlElement.src = data[data.length -i -1].cardImage;
        }
       } catch (e) { console.log(e) };try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'cardText']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].cardText;
        }
       } catch (e) { console.log(e) };try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'cardDescription']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].cardDescription;
        }
       } catch (e) { console.log(e) };try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'cardButton']");
        if(htmlElement !== null){
          htmlElement.undefined = data[data.length -i -1].cardButton;
        }
       } catch (e) { console.log(e) };
        
      }
    });
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].remove()})}});};