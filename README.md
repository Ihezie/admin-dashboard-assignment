# Admin Dashboard Task

## Description ⚡️

This project is an admin dashboard mockup created as part of a job application to [EverTry](https://evertry.co/). The task was to implement a dashboard that allows an admin to log in, view and manage appointments. New appointments can be added to the dashboard via an "add-to-list" button. The appointments can then be scheduled or cancelled depending on their current status. Appointments can also be deleted from the list.

I utilized `useReducer` and `useContext` to manage the application's state. I chose `useReducer` to ensure updates to the dashboard are made in a clean and easy to read way, with all major updates handled by a central reducer function. I believe this approach is more maintainable than multiple useState instances which can quickly make the code difficult to understand.

I stuck as closely as possible to designs provided. The only discernable difference is fact that I made it fully responsive on all screen sizes, despite the designs being desktop-only. 

Run project locally to explore the implementation and overall user experience.

## Run Locally 🏃🏽

```bash
git clone https://github.com/Ihezie/admin-dashboard-assignment.git
cd admin-dashboard-assignment
npm install
npm run dev
```

## Tools Used 🛠️

- React
- Tanstack Table
- TailwindCSS
- Shadcn
- React Hook Form
