# Modèle de données simplifié

## Clients
- nom
- contact
- téléphone
- courriel
- adresse

## Parcelles (Champs)
- nom
- client (lien)
- superficie (ha ou acres)
- culture
- coordonnées / polygone (optionnel)

## Jobs
- nom / référence
- parcelle
- client
- date
- statut (planifié / en cours / terminé)
- produits appliqués
- dose
- superficie traitée
- météo (temp, vent, direction)
- notes

## Recettes
- nom
- produits + doses
- volume par acre
- notes

## Produits (Phyto)
- nom commercial
- matière active
- type (herbicide, fongicide, etc.)
- dose recommandée
