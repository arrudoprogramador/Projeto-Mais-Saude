# 🏥 Projeto Mais Saúde

Aplicação de gestão de serviços de saúde composta por um backend em Laravel e uma aplicação cliente.

O projeto simula operações comuns de um sistema real, como autenticação de usuários e manipulação de dados via API.

---

## 📌 Estrutura


Projeto-Mais-Saude/
├── backend/ # API em Laravel
├── frontend/ # Aplicação cliente


---

## ⚙️ Tecnologias

- Backend: PHP + Laravel
- Frontend: (preencher com o que você usou)
- Banco de dados: (MySQL, SQLite, etc.)

---

## 🚀 Como executar

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
Frontend
cd frontend
npm install
npm start
💡 Sobre o projeto

Este projeto foi desenvolvido com foco em:

Organização de código com Laravel (MVC)
Criação de API REST
Separação entre backend e frontend
Simulação de regras básicas de negócio
🎯 Objetivo

Praticar desenvolvimento backend com Laravel e integração com aplicação cliente.
