# SECURITY.md

# Security Measures Implemented

## OWASP A01:2021 – Broken Access Control

The application uses **Auth.js** for user authentication and protects the `/messages` page from unauthorized access. Before displaying stored contact messages, the application checks whether a valid user session exists using:

```ts
const session = await auth();

if (!session?.user) {
  redirect("/api/auth/signin");
}
```

If a user is not authenticated, they are redirected to the sign-in page instead of accessing protected data. This prevents unauthorized users from viewing sensitive information submitted through the contact form and mitigates the risk of Broken Access Control.

---

## OWASP A03:2021 – Injection

The application uses **Prisma ORM** to communicate with the PostgreSQL database instead of constructing SQL queries manually. New contact messages are stored using:

```ts
await prisma.message.create({
  data: {
    name,
    phone,
    email,
    message,
  },
});
```

Prisma automatically parameterizes database queries, reducing the risk of SQL Injection attacks that could occur if malicious input were concatenated into raw SQL statements. User input is also validated before being stored in the database.

---

# Summary

The project implements two important OWASP security mitigations:

* **Broken Access Control Prevention** through authenticated access to protected pages using Auth.js.
* **Injection Prevention** through the use of Prisma ORM and server-side input validation before database operations.

These measures improve the confidentiality and integrity of the application while following secure web development practices.
