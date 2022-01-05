let apiCardApi = new TempApi.CardApi();import TempApi from '../src/index';document.getElementById('ieidx').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page2';}};document.getElementById('imojm').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page3';}};window.onload = () => {apiCardApi.getAllcard((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("ivyy9").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'cardImage']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].cardImage;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'cardText']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].cardText;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'cardDescription']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].cardDescription;
        }
       } catch (e) { console.log(e) };
        
      }
    });
    
    let numberOfPages = Math.ceil(data.length/subDataElements.length);
    let pagination = document.querySelector('[paginationlist="true"]');

    for(let i =1; i<pagination.childNodes.length-1;i){
      pagination.removeChild(pagination.childNodes[i]);
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if(i === numberOfPages-1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        onClickPaginationButton(numberOfPages - i,child);
      };
      pagination.insertBefore(child, pagination.children[1]);
    }
    
    if(pagination.childNodes[0].getAttribute('paginationnewer') === 'true' && numberOfPages > 0){
      pagination.childNodes[0].onclick=function(){
        onClickPaginationButton(1,pagination.childNodes[0]);
      }
    }
    
    if(pagination.childNodes[numberOfPages+1].getAttribute('paginationolder') === 'true' && numberOfPages > 0){
      pagination.childNodes[numberOfPages+1].onclick=function(){
        onClickPaginationButton(numberOfPages,pagination.childNodes[numberOfPages+1]);
      }
    }

  
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};const onClickPaginationButton = (chunk, child) => {
    for (let i = 0; i < child.parentNode.childNodes.length; i++) {

      if(child.parentNode.childNodes[i].classList.value.includes('active') === true){
        child.parentNode.childNodes[i].classList.remove('active');
      }
    }

    child.classList.add('active');

  apiCardApi.getAllcard((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("ivyy9").querySelectorAll( "[dataitem='true']" );
[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else{
            subDataElements[index].style.display = 'block';
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'cardImage']");
    if(insideSubDataElement !== null){
      insideSubDataElement.src = data[revertIndex].cardImage;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'cardText']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].cardText;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'cardDescription']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].cardDescription;
    }
   } catch (e) { console.log(e) };
        }
    })
    }});}