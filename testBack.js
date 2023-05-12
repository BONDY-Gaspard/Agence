import { OneID, allMaisons, allMaisonsFavori, allMaisonsSorted } from './backend.mjs'

/* try {
    const records = await allMaisons() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    } */

/* try {
    const record = await OneID();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await allMaisonsFavori();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

try {
    const record = await allMaisonsSorted();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    }


