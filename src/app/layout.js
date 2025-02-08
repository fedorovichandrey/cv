import "./globals.css";

export const metadata = {
  title: "Andrey Fedorovich CV",
  description: "I’m a Software Developer with more than 6 years of experience. Technology is my passion. I really enjoy creating digital services and watching how they affect our lives. My approach to product development is multifaceted, considering business, design, user, and technical perspectives. The tech world empowers engineers to build innovative solutions, and I’m excited to be a part of that journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
