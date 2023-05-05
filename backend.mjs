import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

//await pb.collection('maison').getFullList() ;
//const records = await pb.collection('maison').getFullList() ;

try { const records = await pb.collection('maison').getFullList({ filter : 'nbSdb >3', }) ;
    console.table(records) ;
    } catch (e) {
    console.error(e) ;
    }

//await pb.collection('maison').getFullList();
//await pb.collection('maison').getOne('55wgbngz9010q42');
//await pb.collection('maison').getFullList({ sort : 'date', });