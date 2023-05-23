import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function addNewMaison(newMaison) {
    await pb.collection('maison').create(newMaison);
}

export async function addNewAgent(newAgent) {
    await pb.collection('agent').create(newAgent);
}

export async function DeleteMaisonById(RECORD_ID) {
    await pb.collection('maison').delete(RECORD_ID) ;
}

export async function DeleteAgentById(RECORD_ID) {
    await pb.collection('agent').delete(RECORD_ID) ;
}