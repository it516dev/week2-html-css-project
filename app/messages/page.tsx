import { prisma } from "@/lib/prisma";
import type { Message } from "@prisma/client";

interface MessagesPageProps {
  searchParams: Promise<{
    success?: string;
  }>;
}

export default async function MessagesPage({
  searchParams,
}: MessagesPageProps) {
  const params = await searchParams;

  const messages: Message[] = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
  });

  const showSuccess = params.success === "1";

  return (
    <main className="messages-page">
      <section className="messages-section">
        <div className="messages-header">
          <h1>Contact Messages</h1>
          <p>
            Recent messages submitted through the contact form.
          </p>
        </div>

        {showSuccess && (
          <div className="success-banner">
            <strong>Success!</strong> Your message has been submitted
            successfully.
          </div>
        )}

        {messages.length === 0 ? (
          <div className="empty-state">
            <h3>No Messages Yet</h3>
            <p>
              Messages submitted through the contact form will appear
              here.
            </p>
          </div>
        ) : (
          <div className="messages-grid">
            {messages.map((message) => (
              <article
                key={message.id}
                className="message-card"
              >
                <div className="message-card-header">
                  <div>
                    <h3>{message.name}</h3>
                    <span>{message.email}</span>
                  </div>

                  <div className="message-date">
                    {new Date(
                      message.createdAt
                    ).toLocaleString()}
                  </div>
                </div>

                <div className="message-phone">
                  {message.phone}
                </div>

                <p className="message-body">
                  {message.message}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}