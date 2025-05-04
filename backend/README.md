### 🔍 GET /orders/me

Permet à un client connecté de récupérer la liste de ses commandes.

#### 🔐 Authentification : requise (`Bearer token`)

#### ✅ Réponse :
Liste des commandes associées à l’utilisateur.

#### 📦 Filtrage par statut (optionnel)

Vous pouvez filtrer les commandes avec :

- `en_attente`
- `livrée`
- `annulée`
- `finalisée`
- etc.

#### 📘 Exemple d’appel :
```http
GET /orders/me?status=livrée





# 📦 API Durancy – Documentation des Routes

Bienvenue dans l’API REST de **Durancy**, version MVP.  
Ce projet gère les utilisateurs, les kits de réparation et les commandes.  
Vous trouverez ci-dessous un récapitulatif des **routes** disponibles pour le front-end.

---

## 👤 Authentification & Comptes (`/users`)

| Méthode | URL              | Accès         | Description                                     |
|--------|------------------|---------------|-------------------------------------------------|
| POST   | /users/register  | Public        | Créer un compte (client ou partenaire)         |
| POST   | /users/login     | Public        | Connexion (retourne un token)                  |
| GET    | /users/me        | Client/Admin  | Voir ses infos personnelles                    |
| PUT    | /users/me        | Client/Admin  | Modifier ses infos personnelles                |
| DELETE | /users/me        | Client/Admin  | Supprimer son compte                           |
| GET    | /users/          | Admin         | Voir tous les utilisateurs                     |
| PUT    | /users/:id       | Admin/User    | Modifier un compte (si propriétaire ou admin)  |
| DELETE | /users/:id       | Admin/User    | Supprimer un compte (si propriétaire ou admin) |

---

## 🧰 Kits de réparation (`/kits`)

| Méthode | URL           | Accès  | Description                         |
|--------|---------------|--------|-------------------------------------|
| GET    | /kits         | Public | Voir tous les kits disponibles      |
| GET    | /kits/:id     | Public | Voir le détail d’un kit             |
| POST   | /kits         | Admin  | Créer un nouveau kit                |
| PUT    | /kits/:id     | Admin  | Modifier un kit                     |
| DELETE | /kits/:id     | Admin  | Supprimer un kit                    |

---

## 🛒 Commandes (`/orders`)

| Méthode | URL                    | Accès         | Description                                         |
|--------|------------------------|---------------|-----------------------------------------------------|
| POST   | /orders                | Client        | Créer une commande avec des kits                   |
| GET    | /orders/me             | Client        | Voir l’historique de SES commandes                 |
| GET    | /orders/me?status=...  | Client        | Voir ses commandes filtrées par statut            |
| GET    | /orders/:id            | Client/Admin  | Voir UNE commande (si admin ou propriétaire)       |
| GET    | /orders                | Admin         | Voir toutes les commandes                         |
| DELETE | /orders/:id            | Admin         | Supprimer une commande                            |
| PATCH  | /orders/:id/cancel     | Admin         | Annuler une commande (status → annulée)           |

---

## 📌 Notes importantes

- Toutes les routes protégées nécessitent un **header Authorization** :  
  `Authorization: Bearer VOTRE_TOKEN_ICI`
- Les statuts de commande possibles : `en_attente`, `annulée`, `livrée`, `finalisée`, etc.
- Pour les routes avec `:id`, il faut remplacer par l’**ID réel** de la ressource.



