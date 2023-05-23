import {addNewMaison,addNewAgent, DeleteMaisonById, DeleteAgentById } from './backend.mjs'

/* try {
const newMaison ={
    "nomMaison" : "MaisonMMI",
    "prix" : 250000,
    "nbChambres" : 4,
    "nbSdb" : 2,
    "adresse" : "Montbéliard",
    "surface" : 123,
    "favori" : true,
    "agent" : "grlhec2g0wp03uz"
};

await addNewMaison(newMaison);
} catch (e) {
console.error(e);
} */

/* try {
    const newAgent ={
        "nom" : "cule",
        "prenom" : "Jean",
        "email" : "jean.cule@example.com",
    };
    
    await addNewAgent(newAgent);
    } catch (e) {
    console.error(e);
    } */

/* try {
    const RECORD_ID ="hizh4f6j1xtotly";

    await DeleteMaisonById(RECORD_ID);
    } catch (e) {
    console.error(e);
    } */

try {
    const RECORD_ID ="di2c273jjfy2zct";
    
    await DeleteAgentById(RECORD_ID);
    } catch (e) {
    console.error(e);
    }

