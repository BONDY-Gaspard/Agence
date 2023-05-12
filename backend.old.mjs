import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

//await pb.collection('maison').getFullList() ;
//const records = await pb.collection('maison').getFullList() ;

try { const records = await pb.collection('maison').getFullList({filter : "nomMaison != 'Villa de la Mer'", sort : 'nomMaison'}) ;
    console.table(records) ;
    } catch (e) {
    console.error(e) ;
    }

/* Savoir les détails d'une maison avec l'id
await pb.collection('maison').getOne('n3m1e3w4roriuzq') ; */

/* Savoir toute la liste des maisons 
await pb.collection('maison').getFullList() */

/* Afficher toutes les maisons par ordre croissant de leur date de ´
cr´eation dans la base de données.
await pb.collection('maison').getFullList({ sort: 'created', }) */

/* Afficher toutes les maisons par ordre décroissant de leur date de ´
cr´eation dans la base de données.
await pb.collection('maison').getFullList({ sort: '-created', }) */

/*Ecrire le code permettant d’afficher toutes les maisons qui sont en favori.
await pb.collection('maison').getFullList({filter : "favori = TRUE", }) */

/* Ecrire le code permettant d’afficher toutes les maisons qui ont une superficie superieur a 100. 
await pb.collection('maison').getFullList({filter : "surface >100", }) */

/* Ecrire le code permettant d’afficher toutes les maisons qui ont une superficie superieur a 100 et 2 salles de bain. 
await pb.collection('maison').getFullList({filter : "surface >= 100 && nbSdb >= 2" , }) */

/* Ecrire le code permettant d’afficher toutes les maisons qui ont une superficie superieur a 100 ou 2 chambres. 
await pb.collection('maison').getFullList({filter : "surface >= 100 || nbChambres >= 2" , }) */

/* Ecrire le code permettant d’afficher toutes les maisons ayant une superficie sup´erieur `a 100, ´
ordonn´ees par ordre croissant de leurs prix.
await pb.collection('maison').getFullList({filter : "surface >= 100", sort: 'prix' }) */

/* Ecrire le code permettant d’afficher toutes les maisons ordonn´ees par ordre croissant de leur
nom.
await pb.collection('maison').getFullList({sort: 'nomMaison' }) */

/* Ecrire le code permettant d’afficher toutes les maisons ordonn´ees par ordre croissant de leur nom.
await pb.collection('maison').getFullList({filter: "nomMaison = 'Maison villa'"}) ; */

/* Ecrire le code permettant d’afficher toutes les maisons dont le nom est different d’un nom
donne et ordonnees par ordre croissant de leur nom.
await pb.collection('maison').getFullList({filter: "nomMaison !='Maison mitoyenne'"}) ; */

/* Ecrire le code permettant d’afficher toutes les maisons dont le nom est diff´erent d’un nom
donne et ordonnees par ordre croissant de leur nom.
await pb.collection('maison').getFullList({filter: "nomMaison !='Maison mitoyenne'", sort: 'nomMaison'}) ; */


