const fs = require('fs');

for (let i = 0; i < 37364; i++) {
    let rawdata = fs.readFileSync(`json/${i + 1}.json`);
    let parsedData = JSON.parse(rawdata);
    delete parsedData['edition'];
    delete parsedData['dna'];
    // delete parsedData['compiler'];
    // parsedData['createdBy'] = "Sahil";
    let data = JSON.stringify(parsedData, null, 2);
    fs.writeFileSync(`json/${i + 1}.json`, data);
    console.log(parsedData);
}