

const tabela = [
    [1, "PALMEIRAS", 62, 34, 18, 8, 8, 56, 30, 26, 60, '<img src="img/palmeiras.png" alt="palmeiras">'],
    [2, "BOTAFOGO", 60, 33, 18, 6, 9, 53, 30, 23, 60, '<img src="img/botafogo.png" alt="botafogo">'],
    [3, "GRÊMIO", 59, 34, 18, 5, 11, 57, 50, 7, 57, '<img src="img/gremio.png" alt="gremio">'],
    [4, "BRAGANTINO", 59, 33, 16, 11, 6, 46, 29, 17, 59, '<img src="img/bragatino.png" alt="bragantino">'],
    [5, "ATLÉTICO-MG", 57, 34, 16, 9, 9, 43, 27, 16, 55, '<img src="img/atleticomg.png" alt="atletico">'],
    [6, "FLAMENGO", 57, 33, 16, 9, 8, 50, 37, 13, 57, '<img src="img/flamengo.png" alt="flamengo">'],                                                                 
    [7, "ATHLETICO-PR", 51, 34, 13, 12, 9, 47, 39, 8, 50, '<img src="img/athleticopr.png" alt="athleticopr">'],
    [8, "FLUMINENSE", 47, 33, 13, 8, 12, 43, 42, 1, 47, '<img src="img/fluminense.png" alt="fluminense">'],
]


function createTable() {
    let tableHtml = '<table id="teams-table"><tr><th>CLASSIFICAÇÃO</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>%</th></tr>';
    
    tabela.forEach(function (item, index) {

        const classeItem = index <= 8 ? 'posicao-' + index : '';

        tableHtml += '<tr><td class="' + classeItem + '">' + item[0] + 
        item[11] + item[1] + '</td><td>' + item[2] + '</td><td>' + 
        item[3] + '</td><td>' + item[4] + '</td><td>' + 
        item[5] + '</td><td>' + item[6] + '</td><td>' + item[7] +
        '</td><td>' + item[8] + '</td><td>' + item[9] + '</td><td>' + 
        item[10] + '</td></tr>';
    });
    tableHtml += '</table>';
    document.getElementById('table-container').innerHTML = tableHtml;
}

createTable();