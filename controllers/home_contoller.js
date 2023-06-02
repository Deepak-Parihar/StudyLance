
//  res.render()  used to render a view and sends the rendered HTML string to the client.
// module.exports() used to export code  from a given file so that other files are allowed to access the exported code.
module.exports.home = function(req,res){
    return res.render('homePage');
}

module.exports.gate = function(req,res){
    return res.render('gatePage');
}

module.exports.rgpv = function(req,res){
    return res.render('rgpv');
}
module.exports.donate = function(req,res){
    return res.render('donate');
}
module.exports.contactUs = function(req,res){
    return res.render('contactUs');
}
module.exports.aboutUs = function(req,res){
    return res.render('aboutUs');
}



module.exports.csit = function(req,res){
    return res.render('cs_it');
}
module.exports.eee = function(req,res){
    return res.render('electrical-eng');
}
module.exports.ece = function(req,res){
    return res.render('ele-&-com');
}
module.exports.me = function(req,res){
    return res.render('mech-eng');
}
module.exports.ce = function(req,res){
    return res.render('civil-eng');
}
module.exports.che = function(req,res){
    return res.render('chem-eng');
}