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
const getProducts = () => {
    try {
        const data = fs.readFileSync('src/data/products.json', 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
    
};

export { createProduct, getProducts };