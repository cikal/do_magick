document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'
setTimeout(function() {
    let csvContent = "data:text/csv;charset=utf-8,";
    var tabel = [];
    $('tbody tr').each(function() {
        var tr = [];
        tr.push($(this).find('td > span:nth-child(1)').eq(0).text().trim())
        tr.push($(this).find('td > span:nth-child(2)').eq(0).text().trim().replace('(','').replace(/\,/g, '.').replace(')',''))
        for(let i = 1; i <= 16; i++) {
            tr.push($(this).find('td').eq(i).text().trim().replace(/\./g, ''))
        }
        tabel.push(tr);
    })
    tabel.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "dpr_ri.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}, 1000)
