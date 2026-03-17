import fs from 'fs'

// Crear productos
const createProduct = (req, res) => {
    const product = req.body;

    const products= JSON.parse(
        fs.readFileSync('src/data/products.json', 'utf-8')
    );

    products.push(product);

    fs.writeFileSync(
        'src/data/products.json',
        JSON.stringify(products)
    );

    res.json({
        mensaje: "producto creado",
    });
};

// Obtener productos
const getProducts = (req, res) => {
    try{
const products = JSON.parse(fs.readFileSync("src/data/products.json", "utf-8"));
    res.json(products);
    }catch(error){
        console.log(error)
    }
    
};

export { createProduct, getProducts };