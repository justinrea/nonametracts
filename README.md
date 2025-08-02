<<<<<<< HEAD
# No Name Tracts Website

A simple, professional website for nonametracts.com

## Setup Instructions

### Local Development
1. Open `index.html` in your web browser to preview the site locally
2. Make any desired changes to the content or styling

### Hosting on GitHub Pages (Free)

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `nonametracts-website` (or any name you prefer)
   - Make it public
   - Don't initialize with README (since we already have files)

2. **Upload Your Files:**
   ```bash
   # In your terminal, navigate to this folder
   cd /Users/riverview/Desktop/nonametracts
   
   # Initialize git repository
   git init
   
   # Add your files
   git add .
   git commit -m "Initial website setup"
   
   # Connect to your GitHub repository (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/nonametracts-website.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save the settings

4. **Configure Cloudflare:**
   - In your Cloudflare dashboard, go to DNS settings
   - Add a CNAME record:
     - Name: `@` (for root domain) or `www`
     - Target: `YOUR_USERNAME.github.io`
   - Add another CNAME record if you want both www and non-www to work:
     - Name: `www` (if you used `@` above) or `@` (if you used `www` above)
     - Target: `YOUR_USERNAME.github.io`

### Alternative Free Hosting Options

1. **Netlify:**
   - Drag and drop your folder to [netlify.com](https://netlify.com)
   - Connect your custom domain in site settings

2. **Vercel:**
   - Import your GitHub repository to [vercel.com](https://vercel.com)
   - Add your custom domain in project settings

3. **Firebase Hosting:**
   - Use Google Firebase hosting for free tier

## Customization

- Edit `index.html` to change content
- Modify `styles.css` to adjust colors, fonts, and layout
- Add more pages by creating additional HTML files
- Add images to an `images/` folder

## Features

- Responsive design that works on mobile and desktop
- Modern, professional styling
- Fast loading
- SEO-friendly structure
- Contact information section

## Support

For any questions about your domain setup, refer to Cloudflare's documentation or contact their support.
=======
# nonametracts
No Name Tracts - A simple website project.
>>>>>>> 2ecf0d27448a99fe8493fb4fec4901fe30ba3a50
