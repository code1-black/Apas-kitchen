# Deploy Food Hub to Vercel - Step by Step

## Quick Deployment (5 minutes)

### Method 1: Direct Upload to Vercel
1. **Zip your project**:
   - Select all files in your `food-hub` folder
   - Right-click → "Send to" → "Compressed folder"
   - Name it `food-hub.zip`

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login (free account)
   - Click "Add New Project"
   - Click "Browse all templates" 
   - Select "Import Git Repository"
   - Upload your `food-hub.zip` file
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Method 2: GitHub + Vercel (Recommended)
1. **Create GitHub repo**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name: `food-hub`
   - Don't check "Initialize with README"
   - Click "Create repository"

2. **Upload files**:
   - Click "uploading an existing file"
   - Drag all your project files
   - Write commit message: "Initial Food Hub app"
   - Click "Commit new files"

3. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Click "Import" next to your GitHub repo
   - Click "Deploy"

## Your app will be live at: `https://your-project-name.vercel.app`

## Environment Variables (if needed later)
- No environment variables needed for current setup
- WhatsApp integration works client-side

## Custom Domain (Optional)
- In Vercel dashboard → Settings → Domains
- Add your custom domain for free