import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mohit Rawat — Full Stack Developer",
  description:
    "Portfolio of Mohit Rawat, a production-ready Full Stack Developer specialising in Next.js, React.js, Node.js and Express.js.",
  keywords: ["full stack developer", "web developer", "frontend developer", "portfolio", "React", "Next.js", "Node.js", "Express.js", "Razorpay", "AWS"],
  authors: [{ name: "Mohit Rawat" }],
  openGraph: {
    title: "Mohit Rawat — Full Stack Developer",
    description:
      "Production-ready full stack developer building scalable products with clean UI and real business impact.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
