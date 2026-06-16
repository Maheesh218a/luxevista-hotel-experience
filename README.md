# LuxeVista Hotel Experience 🏨✨

A premium, fully responsive luxury hotel booking website demo built with modern web technologies. This project showcases a high-end UI/UX design with a complete dark/light theme system and dynamic animations.

![LuxeVista Preview](https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)

## 🌟 Key Features

- **Premium UI/UX Design**: High-fidelity glassmorphism elements, elegant typography, and carefully curated luxury color palettes.
- **Full Dark/Light Theme System**: Seamless toggle between Light and Dark modes with user preference saved in `localStorage`.
- **Smooth Animations**: Integrated Framer Motion for scroll-triggered animations, page transitions, and interactive component mounts.
- **Responsive Layout**: Mobile-first design that looks beautiful on phones, tablets, and desktop displays.
- **Multi-step Booking System**: Interactive date picking, room selection, and a beautiful booking confirmation modal.
- **Multi-language Support UI**: Toggle between English and Sinhala seamlessly (simulated).
- **Floating WhatsApp Integration**: Instant chat support integration pinned to the viewport.

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) (Bootstrapped with [Vite](https://vitejs.dev/))
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer, MainLayout, WhatsAppButton
│   └── sections/     # HeroSection, SpecialOffers, PremiumFeatures, QuickBooking
├── context/          # ThemeContext & LanguageContext
├── data/             # MockData for Rooms, Reviews, Events
├── pages/            # 10+ Complete Pages (Home, Rooms, Booking, Gallery, etc.)
├── utils/            # Helper functions (Tailwind Class Merger)
└── index.css         # Global styles and Tailwind directives
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have Node.js installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Maheesh218a/luxevista-hotel-experience.git
   ```
2. Navigate into the directory:
   ```bash
   cd luxevista-hotel-experience
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 📄 Pages Included

- **Home**: Dynamic hero, quick availability check, and featured highlights.
- **Rooms & Suites**: Detailed layouts with images, amenities, and comparison tables.
- **Online Booking**: Streamlined single-step form with dynamic summary and confirmation modal.
- **Gallery**: Masonry layout image grid and drone view video placeholder.
- **Facilities & Events**: Highlights of dining, spa, wedding packages, and corporate tours.
- **Location & Contact**: Map placeholder and detailed contact forms.

---
*Created as a premium frontend hotel booking demonstration.*
