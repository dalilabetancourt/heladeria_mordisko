const home = (req,res)=>{
    res.send('pagina principal corriendo');
};

const about =(req, res)=>{
    res.send ('cargando desde about');
};

const form =(req, res)=>{
   res.send ('cargando desde form');
};

export{
    home, about, form
};