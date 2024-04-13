
/*
* File: app.js
* Author: Balázs Réka
* Copyright: 2024, Balázs Réka
* Group: Szoft II
* Date: 2024-04-13
* Licenc: GNU GPL
*/

const doc = {
    tbody: document.querySelector('#tbody')
};

const state ={
    host: 'http://localhost:8000/',
    kolcsonzesek:[]
};
getKolcsonzesek();
function getKolcsonzesek(){
    let url = state.host + 'kolcsonzesek';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.kolcsonzesek = result;
        render();
    });
}

function render(){
    let rows = '';
    state.kolcsonzesek.forEach((kolcsonzes) => {
        rows += `
            <tr>
                <td>${kolcsonzes.id}</td>
                <td>${kolcsonzes.kolcsonzokId}</td>
                <td>${kolcsonzes.iro}</td>
                <td>${kolcsonzes.mufaj}</td>
                <td>${kolcsonzes.cim}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}

