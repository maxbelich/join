# Join

Join is a Kanban board web app built with Angular and Supabase. It was originally developed as a team project during the Developer Akademie bootcamp and is now maintained as my personal portfolio version with its own Supabase backend.

The app allows users to organize tasks across four workflow stages, assign contacts, manage subtasks, and track progress using drag and drop.

## Features

- Sign up and log in with email and password
- Guest Login without creating an account
- Summary dashboard with task statistics and upcoming deadlines
- Kanban board with To Do, In Progress, Await Feedback, and Done
- Drag and drop task management
- Search tasks by title, description, or assigned contact
- Create, edit, and delete tasks
- Priorities, due dates, categories, contacts, and subtasks
- Create, edit, and delete contacts
- Realtime updates through Supabase

## Tech Stack

- Angular 22
- TypeScript
- SCSS
- Supabase
- PostgreSQL
- Supabase Authentication
- Supabase Realtime

## Setup

Install dependencies:

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

The database schema is included in:

```text
supabase/migrations/
```

Link your Supabase project and apply the migration:

```bash
supabase link --project-ref YOUR_PROJECT_REFERENCE
supabase db push
```

Enable Anonymous Sign Ins and Realtime for:

- contacts
- tasks
- subtasks
- task_contacts

Start the application:

```bash
npm start
```

The app runs at:

```text
http://localhost:4200
```

## Project Background

Join was originally created as a team project during my Fullstack Developer training at Developer Akademie.

This repository is my personal continuation of the project. It uses an independent Supabase backend and database while preserving the original Git history and team project origin.

Original team repository:

https://github.com/Umeyrp/join

## Author

Max Belich
