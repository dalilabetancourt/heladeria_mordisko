import fs from 'fs';

// Crear usuario
const createUser = (req, res) => {
    const user = req.body;

    const users = JSON.parse(
        fs.readFileSync('src/data/user.json', 'utf-8')
    );

    users.push(user);

    fs.writeFileSync(
        'src/data/user.json',
        JSON.stringify(users)
    );

    res.json({
        mensaje: "usuario creado",
    });
};

// Obtener usuarios
const getUser = (req, res) => {
    const users = JSON.parse(
        fs.readFileSync('src/data/user.json', 'utf-8')
    );

    res.json(users);
};

export { createUser, getUser };