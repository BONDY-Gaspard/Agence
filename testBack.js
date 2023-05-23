import { OneID, allMaisons, allMaisonsFavori, allMaisonsSorted, bySurface, surfaceORprice, AgentID, allMaisonsAgents, allMaisonsByAgentId, allMaisonsByAgentName, allMaisonsSortedAgent, bySurfaceAgent, maisonFavoriAgent } from './backend.mjs'


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

/* try {
    const record = await allMaisonsSorted();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await bySurface();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await surfaceORprice();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await AgentID();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await allMaisonsAgents('');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await allMaisonsByAgentId('grlhec2g0wp03uz');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await allMaisonsByAgentName('Lee');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    }  */

/* try {
    const record = await allMaisonsSortedAgent('Lee');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    }  */

/*  try {
    const record = await bySurfaceAgent('Lee');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

/* try {
    const record = await bySurfaceAgent(600, 'grlhec2g0wp03uz');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } */

try {
    const record = await maisonFavoriAgent('grlhec2g0wp03uz');
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    } 

