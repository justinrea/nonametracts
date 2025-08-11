# Free Website Analytics Setup Guide

I've added Google Analytics 4 (GA4) to your website! Here's how to complete the setup:

## Step 1: Create a Google Analytics Account

1. Go to https://analytics.google.com/
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter your account name (e.g., "No Name Tracts")
5. Configure data sharing settings (recommended: keep defaults)

## Step 2: Create a Property

1. Enter property name: "No Name Tracts Website"
2. Select your reporting time zone
3. Select currency (if relevant)
4. Click "Next"

## Step 3: Set Up Data Stream

1. Choose "Web" as your platform
2. Enter your website URL: `https://nonametracts.com`
3. Enter stream name: "No Name Tracts Main Site"
4. Click "Create stream"

## Step 4: Get Your Measurement ID

1. After creating the stream, you'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`
2. Copy this ID

## Step 5: Update Your Website

Replace `GA_MEASUREMENT_ID` in these files with your actual Measurement ID:

### Files to update:
- `index.html` (lines with `GA_MEASUREMENT_ID`)
- `who-has-believed.html` (lines with `GA_MEASUREMENT_ID`)

### Find and replace:
```
GA_MEASUREMENT_ID
```
**With your actual ID like:**
```
G-ABC123DEF4
```

## What Analytics Are Now Tracking

✅ **Page Views** - Every page visit
✅ **Tract Downloads** - When users download PDFs
✅ **Email Clicks** - When users click your contact email
✅ **Navigation** - Section scrolling and menu clicks
✅ **User Behavior** - Time on site, bounce rate, etc.

## Alternative Free Analytics Options

If you prefer privacy-focused alternatives:

### 1. Plausible Analytics (Simple & Privacy-Friendly)
- Visit: https://plausible.io/
- Has a free tier for small sites
- GDPR compliant, no cookies
- Lightweight script: 
```html
<script defer data-domain="nonametracts.com" src="https://plausible.io/js/script.js"></script>
```

### 2. Simple Analytics
- Visit: https://simpleanalytics.com/
- Privacy-first, GDPR compliant
- Free tier available

### 3. Umami (Self-hosted)
- Visit: https://umami.is/
- Completely free if self-hosted
- Open source and privacy-focused

## Viewing Your Analytics

After setup (allow 24-48 hours for data):

1. Go to https://analytics.google.com/
2. Select your property
3. View reports in the left sidebar:
   - **Realtime** - Live visitor data
   - **Reports** - Page views, users, behavior
   - **Events** - Downloads, clicks, navigation

## Tips for Your Ministry Site

- Monitor which tracts are downloaded most
- See which pages visitors spend most time on
- Track geographic reach of your ministry
- Identify popular content for future tract ideas

Your analytics are now set up and ready to go! Just replace the measurement ID and you'll start collecting valuable insights about your website visitors.
