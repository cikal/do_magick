document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'
setTimeout(function() {
    let csvContent = "data:text/csv;charset=utf-8,";
    var tabel = [];
    $('tbody tr').each(function() {
        var tr = [];
		if($(this).find('td:nth-child(1) > button').text().trim() != "+Luar Negeri") {
			tr.push($(this).find('td:nth-child(1) > button').text().trim())
        } else {
			tr.push("Luar Negeri")
		}
        tr.push($(this).find('td:nth-child(1) > span').text().trim().replace('(','').replace(/\,/g, '.').replace(')',''))
        tr.push($(this).find('td:nth-child(2)').text().trim().replace(/\./g,''))
        tr.push($(this).find('td:nth-child(3)').text().trim().replace(/\./g,''))
        tabel.push(tr)
    })
    tabel.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "pilpres.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
},1000);
