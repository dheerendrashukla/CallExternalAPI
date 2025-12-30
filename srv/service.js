const cds = require('@sap/cds');

module.exports = cds.service.impl(function(){
   // const bp = await cds.connect.to('API_BUSINESS_PARTNER')
    this.on('READ','A_BusinessPartner', async (req,next)=>{
        console.log(req.query);
        return next();
        //return bp.run(req.query);
    })
})   