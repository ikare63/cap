# Cap V15 — vignettes, jauges et mesures corrigées

Cette version conserve le moteur fonctionnel de Cap et refait l’interface pour se rapprocher du premier mockup :

- 9 onglets en haut, en deux rangées, sans défilement horizontal ;
- header compact avec le logo Cap original ;
- accueil avec neuf photos héro adaptées aux différentes activités ;
- entraînement réellement centré sur la séance, avec 24 illustrations PNG cohérentes, séries et charges ;
- échauffement piscine à sec avec son illustration dédiée ;
- Nutrition en bleu nuit avec anneaux et repas compacts ;
- Mesures en bleu nuit avec un mannequin sportif PNG et un graphique ;
- dark mode ;
- détails secondaires repliables pour garder l’essentiel sur un écran mobile.

## Patch à mettre sur GitHub
Le dossier `assets` ne contient plus aucun dossier de version. Sa structure est volontairement limitée à `exercises`, `hero`, `measures`, au logo et au favicon.

Remplacer l’ensemble du dossier par cette version afin de supprimer les anciens doublons et de conserver tous les scripts.


## Mise à jour Mesures v32
- marge de lecture du poids : ± 1 kg ;
- une variation de poids de 1 kg ou moins est considérée comme compatible avec la marge ;
- une saisie partielle n’efface plus les autres valeurs du même jour ;
- les calculs Navy / masse maigre / FFMI réutilisent les dernières mensurations connues si la saisie du jour est partielle ;
- les courbes de poids montrent une bande de ± 1 kg ;
- taille affichée comme plage 170–172 cm, avec 171 cm comme référence de calcul par défaut.


## v33 — 15/09/2026
- IMC et Navy déplacés dans Mesures.
- Bien-être rapide supprimé de l’accueil.
- Score Cap = nutrition + activité de la journée + sommeil de la nuit suivante (pondération égale).
- Reprise des anciens tour de taille/cou conservés pour les mesures partielles.
