# Join

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

Fullstack Kanban task management application built with Angular, TypeScript, Supabase and PostgreSQL.

**Live:** [join.maxbelich.de](https://join.maxbelich.de/)

Join allows users to organize tasks across multiple workflow stages, assign contacts, manage subtasks and track progress with drag and drop.

## Features

- Sign up and log in with email and password
- Guest login without creating an account
- Summary dashboard with task statistics and upcoming deadlines
- Kanban board with To Do, In Progress, Await Feedback and Done
- Drag-and-drop task management
- Search tasks by title, description or assigned contact
- Create, edit and delete tasks
- Priorities, due dates, categories, contacts and subtasks
- Create, edit and delete contacts
- Realtime updates through Supabase

## Tech Stack

- **Angular 22**
- **TypeScript**
- **SCSS**
- **Angular CDK**
- **Supabase**
- **PostgreSQL**
- **Supabase Authentication**
- **Supabase Realtime**

## Backend & Database

The portfolio version uses its own Supabase project and PostgreSQL database.

The database schema is versioned in the repository through Supabase migrations and includes the main application tables:

- `contacts`
- `tasks`
- `subtasks`
- `task_contacts`

The schema defines relationships between tasks, contacts and subtasks, including foreign keys and cascading deletes. Row Level Security is enabled for the application tables.

Database migrations are stored in:

```text
supabase/migrations/
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/maxbelich/join.git
```

Open the project directory:

```bash
cd join
```

Install the dependencies:

```bash
npm install
```

Configure your Supabase project in:

```text
src/environments/environment.ts
src/environments/environment.development.ts
```

Example:

```typescript
export const environment = {
  production: false,
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseAnonKey: 'YOUR_SUPABASE_PUBLISHABLE_KEY',
};
```

Link your Supabase project:

```bash
supabase link --project-ref YOUR_PROJECT_REFERENCE
```

Apply the included database migration:

```bash
supabase db push
```

Enable Anonymous Sign Ins and Realtime for:

- `contacts`
- `tasks`
- `subtasks`
- `task_contacts`

Start the application:

```bash
npm start
```

Then open:

```text
http://localhost:4200
```

## Project Background

Join was originally developed as a team project during my Fullstack Developer training at [Developer Akademie](https://developerakademie.com/).

This repository is my personal continuation of that project. It preserves the original Git history and team-project origin while using an independent Supabase backend and database for my portfolio version.

The Supabase schema required by the application is included in this repository so the backend structure can be reproduced in a separate project.

**Original team repository:**  
https://github.com/Umeyrp/join

## Author

**Max Belich**

[Portfolio](https://maxbelich.de/) · [LinkedIn](https://www.linkedin.com/in/max-belich-6b844b424/)

## License

© 2026 Max Belich. All rights reserved.
