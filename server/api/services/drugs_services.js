const Drugs = require('../models/drugs')

const createDrugs = (data) =>{
    let drugName =data.drugName;
    let type = data.type;
    let qty = data.qty;

    const drugs = new Drugs( {
        drugName,
        type,
        qty
    });

    return drugs.save();

}

module.exports = {
    createDrugs,
    
  };