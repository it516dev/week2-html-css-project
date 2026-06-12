import { auth, signIn, signOut } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    const name = session.user.name || "User";
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="auth-wrapper"
      >
        <div className="user-chip" title={name}>
          <span className="avatar">{initials}</span>
          <span className="username">{name}</span>
        </div>

        <button type="submit" className="auth-btn logout">
          Sign out
        </button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="auth-wrapper"
    >
      <button type="submit" className="auth-btn login">
        Sign in
      </button>
    </form>
  );
}