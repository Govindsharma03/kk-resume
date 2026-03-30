# Kaushiki Kumari - Portfolio Website

A modern, high-end personal portfolio website built with React, featuring purple/pink gradient design, glassmorphism effects, and smooth animations.

## Features

✨ **Design Highlights:**
- Purple/Pink gradient theme matching reference design
- Glassmorphism cards with animated borders
- Smooth scroll animations
- Typing animation for roles
- Animated skill progress bars with shimmer effect
- Moving carousel for projects with 3D effects
- Floating particles on skill cards
- Fully responsive design

📱 **Sections:**
- Hero with typing animation
- About with achievement stats
- Education
- Skills (Programming, Web, AI/ML, Tools, Concepts)
- Projects (Moving carousel)
- Work Experience
- Certifications
- Achievements
- Contact (Email & LinkedIn only)

## Installation

1. Install dependencies:
```bash
yarn install
```

2. Start development server:
```bash
yarn start
```

3. Build for production:
```bash
yarn build
```

## File Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky navigation
│   ├── Footer.jsx          # Footer with links
│   └── ui/                 # Shadcn UI components
├── pages/
│   └── Portfolio.jsx       # Main portfolio page
├── data/
│   └── mock.js            # All portfolio data
├── styles/
│   └── portfolio.css      # Custom animations & effects
├── App.js                 # Main app component
└── index.css              # Global styles

```

## Customization

### Update Personal Information
Edit `/src/data/mock.js` to update:
- Personal details
- Skills & expertise
- Projects
- Work experience
- Certifications
- Achievements

### Color Scheme
The portfolio uses purple/pink gradients. To customize colors, edit:
- `/src/styles/portfolio.css` - All gradient and color definitions
- Search for `#a855f7` (purple) and `#ec4899` (pink) to replace

### Projects Carousel Speed
In `/src/styles/portfolio.css`, adjust the animation speed:
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
Change `30s` in `.carousel-track` to speed up/slow down.

## Tech Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn UI (Radix UI)
- **Icons:** Lucide React
- **Animations:** Custom CSS animations

## Key Components

### Typing Animation
The hero section features a typing animation that cycles through roles. Configured in `Portfolio.jsx` useState hooks.

### Moving Carousel
Projects are displayed in an infinite scrolling carousel that moves right to left. Hover to pause.

### Glassmorphism Cards
All cards use glassmorphism with backdrop blur and purple borders.

### Floating Particles
AI & ML and Tools sections have animated floating particles for visual interest.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - Feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using React and Tailwind CSS
