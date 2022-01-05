let apiCardApi = new TempApi.CardApi();import TempApi from '../src/index';let card = new TempApi.Card();document.getElementById('igk5z').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page1';}};document.getElementById('i4gzs').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page3';}};document.getElementById('i3nge').onclick = (event) => {
    event.preventDefault();
    card['cardImage'] = document.querySelector("[annotationname = 'cardImage']").value;card['cardText'] = document.querySelector("[annotationname = 'cardText']").value;card['cardDescription'] = document.querySelector("[annotationname = 'cardDescription']").value;apiCardApi.createcard( card, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/Page1/'+response.body.query._id+'';}}});};