# SECURITY.md

# Security Measures Implemented

## OWASP A01:2021 – Broken Access Control

The application implements **Auth.js** for authentication and enforces server-side access control on the `/messages` route. Before rendering protected content, the application verifies whether a valid user session exists using:

```ts
const session = await auth();

if (!session?.user) {
  redirect("/api/auth/signin");
}
```

If no authenticated session is present, the user is redirected to the sign-in page. This ensures that only authenticated users can access protected resources and prevents unauthorized access to sensitive data submitted through the contact form. This mitigation reduces the risk of broken access control and session-based access bypass attacks.

---

## OWASP A03:2021 – Injection

The application uses **Prisma ORM** for all database operations with PostgreSQL, eliminating the need for manual SQL query construction. Contact form submissions are stored using Prisma’s safe query builder:

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

Prisma automatically parameterizes all queries, preventing SQL injection vulnerabilities that could occur if malicious input were injected into raw SQL statements. No unsafe raw SQL methods (such as `queryRawUnsafe`) are used in the application. Additionally, user input is validated before being persisted to the database, further reducing injection risk.

---

## Summary

The project implements two OWASP Top 10 security mitigations:

* **A01 Broken Access Control** through server-side authentication checks using Auth.js to restrict access to protected routes.
* **A03 Injection** through Prisma ORM parameterized queries and avoidance of unsafe SQL execution patterns.

These measures strengthen the confidentiality and integrity of the application and follow modern secure web development best practices.
