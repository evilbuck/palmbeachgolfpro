import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata = {
  title: 'Elite Golf Pro | Professional Golf Instruction',
  description: 'Transform your golf game with personalized coaching from certified PGA professionals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}