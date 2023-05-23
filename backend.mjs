import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

 export async function allMaisons() {
    const records = await pb.collection('maison').getFullList() ;
    return records ;
    } 

export async function OneID() {
    const records = await pb.collection('maison').getOne('55wgbngz9010q42') ;
    return records ;
    }

export async function allMaisonsFavori() {
    const records = await pb.collection('maison').getFullList({filter : "favori = TRUE", })
    return records ;
    }

export async function allMaisonsSorted() {
    const records = await pb.collection('maison').getFullList({ sort: 'prix', })
    return records ;
    }

export async function bySurface() {
    const records = await pb.collection('maison').getFullList({filter : "surface >100", })
    return records ;
    }

export async function surfaceORprice() {
    const records = await pb.collection('maison').getFullList({filter : "surface >= 100 && prix <= 1000000" , })
    return records ;
    }

export async function AgentID() {
    const records = await pb.collection('agent').getOne('grlhec2g0wp03uz') ;
    return records ;
    }

export async function allMaisonsAgents() {
    const record = await pb.collection('maison').getFullList({
        expand:'agent'
    });
    return record;
    }

export async function allMaisonsByAgentId(agentId) {
    const agent = await getAgentById(agentId);
        
    if (!agent) {
        throw new Error('Agent not found');
    }
        
    const records = await pb.collection('maison').getFullList({ filter: `agents="${agentId}"` });
    return records;
    }
    
export async function allMaisonsByAgentName(nom){
    const record = await pb.collection('agent').getFirstListItem(`nom ='${nom}'`, {expand: "maison(agent)"});
    return record;
    }
        
export async function allMaisonsSortedAgent() {
    const records = await pb.collection('maison').getFullList({
    expand:'agents',
    sort: 'agents.nom'
    });
    return records;
    }
       
export async function bySurfaceAgent(surface, agentId) {
    const records = await pb.collection('maison').getFullList({
    filter: `superficie > ${JSON.stringify(surface)} && agents.id = ${JSON.stringify(agentId)}`
    });
        
    return records;
    }
      
export async function maisonFavoriAgent(agentId) {
    const records = await pb.collection('maison').getFullList({
    filter: `agents.id = ${JSON.stringify(agentId)} && favori = true`
    });
        
    return records;
    }
         