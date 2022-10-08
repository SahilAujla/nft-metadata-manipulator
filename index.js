const fs = require('fs');

let numberOfNFTs = 100;
let nftStartTokenId = 1;

for (let i = 0; i < numberOfNFTs; i++) {
    let rawdata = fs.readFileSync(`json/${i + nftStartTokenId}.json`);

    let parsedData = JSON.parse(rawdata);

    delete parsedData['edition']; // will delete the edition attribute from all the json file under the json folder

    delete parsedData['dna']; // will  delete the DNA attribute from all the json file under the json folder

    delete parsedData['compiler']; // will  delete the compiler attribute from all the json file under the json folder

    parsedData['createdBy'] = "Sahil"; // will add a new attribute with the key of createdBy and value of Sahil to all the  metadata files.

    let data = JSON.stringify(parsedData, null, 2);

    fs.writeFileSync(`json/${i + 1}.json`, data);
    
    console.log(parsedData);
}