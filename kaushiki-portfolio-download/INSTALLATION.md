# Installation Instructions

## Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

## Step-by-Step Setup

### 1. Install Yarn (if not already installed)
```bash
npm install -g yarn
```

### 2. Install Dependencies
Navigate to the project folder and run:
```bash
yarn install
```

This will install all required packages including:
- React 19
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- And all other dependencies

### 3. Start Development Server
```bash
yarn start
```

The application will open at `http://localhost:3000`

### 4. Build for Production
```bash
yarn build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

After installation, your project will have:

```
kaushiki-portfolio/
├── node_modules/          # Dependencies (created after yarn install)
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── data/            # Mock data
│   ├── styles/          # CSS files
│   └── App.js           # Main app
├── package.json         # Dependencies & scripts
└── tailwind.config.js   # Tailwind configuration
```

## Customization

### Update Your Information

1. Open `src/data/mock.js`
2. Update all sections with your information:
   - Personal info (name, email, LinkedIn)
   - Education
   - Skills
   - Projects
   - Work experience
   - Certifications
   - Achievements

### Change Colors

1. Open `src/styles/portfolio.css`
2. Search and replace color codes:
   - `#a855f7` (purple)
   - `#ec4899` (pink)

### Adjust Animations

All animations are in `src/styles/portfolio.css`:
- Typing speed: Line 24-26
- Carousel speed: Line 180
- Particle float: Line 215

## Troubleshooting

### Port Already in Use
If port 3000 is busy, the app will automatically try port 3001.

### Module Not Found
Run `yarn install` again to ensure all dependencies are installed.

### Styling Issues
Clear your browser cache and restart the development server.

## Need Help?

Check the main README.md for more detailed information about features and customization options.

## Happy Coding! 🚀
