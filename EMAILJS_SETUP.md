# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or your preferred email provider
4. Connect your email account (muhammadali.chd12@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New message from {{from_name}} - {{subject}}
```

**Email Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

## Step 5: Set Up Environment Variables

1. **Create .env file** in your project root:
```bash
cp env.example .env
```

2. **Edit .env file** and replace the placeholder values:
```env
VITE_EMAILJS_USER_ID=your_actual_user_id
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

## Example .env Configuration:
```env
VITE_EMAILJS_USER_ID=user_abc123def456
VITE_EMAILJS_SERVICE_ID=service_xyz789
VITE_EMAILJS_TEMPLATE_ID=template_contact_form
```

## Step 6: Restart Development Server
After creating the .env file, restart your development server:
```bash
npm run dev
```

## Features:
- ✅ Sends emails to muhammadali.chd12@gmail.com
- ✅ Includes sender name, email, subject, and message
- ✅ Shows loading state while sending
- ✅ Displays success/error messages
- ✅ Form resets after successful submission
- ✅ Prevents multiple submissions
- ✅ Environment variables for secure configuration 