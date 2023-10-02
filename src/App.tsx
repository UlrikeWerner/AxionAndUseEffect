import {useEffect, useState} from "react";
import TopNavigation from "./TopNavigation.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import {Character, charactersResponse} from "./characters.ts";
import CharacterDetails from "./CharacterDetails.tsx";

import AddCharacter from "./AddCharacter.tsx";

export default function App() {
    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results);

    useEffect(() => {
        console.log("test");
    }, []);


    function saveCharacter(characterToSave: Character) {
        setCharacters([...characters, characterToSave])
    }

    return (
        <>
            <TopNavigation/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/add"} element={<AddCharacter saveCharacter={saveCharacter}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}/>
            </Routes>
        </>
    );
}
