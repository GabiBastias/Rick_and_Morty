const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Reply with a status: 200.', async() => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Reply an object with the properties: "id", "name", "species", "gender", "status", "origin", "location" and "image".', async() => {
            const response = await agent.get('/rickandmorty/character/1');
            const props = ["id", "name", "species", "gender", "status", "origin", "location", "image"];
            props.forEach((prop) => {
                expect(response.body).toHaveProperty(prop);
            })
        });
        it('If there is an error, reply with a status: 500.', async()=>{
            await agent.get('/rickandmorty/character/900').expect(500)
        })
    })
    
    describe('GET /rickandmorty/login.', () => {
        it('If the login info is right', async() => {
            const access = { access: true };
            const response = await agent.get('/rickandmorty/login?email=gabi.bastias10@gmail.com&password=Nyme1998');
            expect(response.body).toEqual(access);
        });
        it('If the login info is wrong.', async() => {
            const access = { access: false };
            const response = await agent.get('/rickandmorty/login?email=gabibastias@gmail.com&password=holamundo');
            expect(response.body).toEqual(access);
        });
    })

    let character1;
    beforeEach(() => {
        return character1 = {
            id: 866, 
            name: 'Jonh', 
            species: 'Human', 
            gender: 'Male', 
            status: 'Alive', 
            origin: 'Earth', 
            location: 'Earth', 
            image: 'JonhImg.png'
        }
    })
    describe('POST /rickandmorty/fav', () => {
        const character2 = {
            id: 897, 
            name: 'Maria', 
            species: 'Human', 
            gender: 'Female', 
            status: 'Alive', 
            origin: 'Earth', 
            location: 'Earth', 
            image: 'MariaImg.png'
        }
        it('Return the element on array.', async() => {
            const response = await agent.post('/rickandmorty/fav').send(character1);
            expect(response.body).toContainEqual(character1);
        })
        it('Return the element previusly created.', async() => {
            const response = await agent.post('/rickandmorty/fav').send(character2);
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
            
        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        const character2 = {
            id: 897, 
            name: 'Maria', 
            species: 'Human', 
            gender: 'Female', 
            status: 'Alive', 
            origin: 'Earth', 
            location: 'Earth', 
            image: 'MariaImg.png'
        }
        it('Return an array if no one character is delete.', async()=> {
            const response = await agent.delete('/rickandmorty/fav/45');
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        })
        it('Delete the character with the ID selected', async() => {
            const response = await agent.delete('/rickandmorty/fav/866');
            expect(response.body).not.toContainEqual(character1);
        })
    })
})
