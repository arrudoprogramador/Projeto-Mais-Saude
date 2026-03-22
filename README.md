# 🏥 Projeto Mais Saúde

Aplicação de gestão de serviços de saúde composta por um backend em Laravel e uma aplicação cliente.
O projeto simula operações comuns de um sistema real, como autenticação de usuários e manipulação de dados via API.

---

## ⚙️ Tecnologias

- Backend: PHP + Laravel
- Frontend: JS + React Native + API REST
- Banco de dados: MySQL

---

## 🚀 Como executar

### Backend

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

---

Frontend

```bash
npm install
npx expo start
```
---

💡 Este projeto foi desenvolvido com foco em:

Organização de código com Laravel (MVC)

Criação de API REST

Separação entre backend e frontend

Simulação de regras básicas de negócio

