let setCharacters = ()=>{};
const onClose = (id) => {
    console.log(id);
    const idToNum = parseInt(id);
    setCharacters((prevCharacters) => {
        prevCharacters.filter((char) => Number(char.id) !== Number(id)));
        console.log(prevCharacters);
    }
}

onClose("3");