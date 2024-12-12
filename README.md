# Fertility Care - Contact & Locations Page

This repository contains the **Contact & Locations** page for the Fertility Care website, built with **Next.js 14**. The page is fully optimized for SEO, performance, and accessibility. It follows best practices for search engine optimization (SEO), OpenGraph tags, responsive design, and schema markup.

---

## 🚀 **Features**

### 1️⃣ **SEO Enhancements**

- **Metadata API**: Dynamic titles, descriptions, and meta tags for search engines and social sharing.
- **OpenGraph Support**: Proper OpenGraph tags for previews on Facebook, LinkedIn, etc.
- **Twitter Card Support**: Optimized display for Twitter sharing.
- **Schema Markup**: Local Business Schema is included to help Google understand location details.

### 2️⃣ **Performance Optimizations**

- **Lazy Loading Images**: Next.js `<Image />` ensures optimal image loading and responsiveness.
- **Server Components**: Modern Next.js 14 Server Components are used for better performance.
- **Fast Loading Times**: Built with Next.js optimizations to ensure fast page loads.

### 3️⃣ **Accessibility**

- **Semantic HTML**: Proper usage of headings, sections, and form inputs for screen readers.
- **Keyboard Navigation**: Users can easily navigate using keyboards or assistive devices.

### 4️⃣ **Contact Form**

- Users can submit their name, email, and message.
- Form fields are validated and accessible.

---

## 📁 **Project Structure**

```
project-root/
├── app/
│   └── contact-locations/
│       └── page.js    # Main Next.js page for Contact & Locations
├── public/
│   └── images/       # Image files for clinic locations
├── README.md         # This README file
└── package.json      # Project dependencies and scripts
```

---

## 📦 **Installation**

To get started with this project, clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/fertility-care-contact.git

# Navigate to the project directory
cd fertility-care-contact

# Install dependencies
npm install
```

---

## 🔥 **Usage**

To start the development server, run the following command:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📄 **File Breakdown**

### `/app/contact-locations/page.js`

This file contains the main page component, which includes:

- **Dynamic Metadata**: Uses Next.js Metadata API for SEO.
- **Dynamic Locations**: Renders clinic locations dynamically from a predefined list.
- **Contact Form**: Allows users to submit a message.

### `/public/images/`

This directory stores the images of the clinic locations. Images are optimized for performance and lazy-loaded.

---

## 📋 **Key Scripts**

- **`npm run dev`**: Starts the Next.js development server.
- **`npm run build`**: Builds the production-ready Next.js application.
- **`npm run start`**: Starts the production server.

---

## 🌐 **SEO Strategy**

### 1️⃣ **Meta Tags**

- Title, description, OpenGraph, and Twitter cards are defined in the **Next.js Metadata API**.

### 2️⃣ **Local Business Schema**

- **LocalBusiness Schema** is included to improve search visibility for local queries.

### 3️⃣ **Performance Optimization**

- Images are optimized using Next.js `<Image />`.
- Server Components enhance page load times.

---

## 🚀 **Deployment**

To deploy this project, use [Vercel](https://vercel.com/) (recommended) or any other cloud provider that supports Next.js.

```bash
# Build the production files
npm run build

# Start the production server
npm run start
```

For **Vercel** deployment:

1. Go to [vercel.com](https://vercel.com/).
2. Connect your GitHub repo.
3. Deploy the project with default settings.

---

## 🛠️ **Customizations**

To customize the clinic locations, edit the `locations` array in `/app/contact-locations/page.js`:

```javascript
const locations = [
  {
    id: 1,
    name: "Main Fertility Care Center",
    address: "123 Fertility Lane, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "maincenter@fertilitycare.com",
    image: "/images/clinic1.jpg",
    hours: "Mon-Fri 08:00 - 18:00",
  },
];
```

Update the clinic name, address, and image file as needed.

---

## 🌍 **Environment Variables**

For a production environment, you might need to set up the following environment variables in a `.env` file:

```
NEXT_PUBLIC_SITE_URL=https://www.fertilitycare.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

These variables can be added to Vercel under **Project Settings > Environment Variables**.

---

## 📚 **Technologies Used**

- **Next.js 14**: For building a server-rendered and statically optimized web page.
- **Next.js Metadata API**: For SEO and metadata.
- **Tailwind CSS** (optional): For responsive and modern UI design.
- **Schema Markup**: LocalBusiness schema for better SEO visibility.

---

## 📝 **To-Do List**

- [ ] Add validation to the contact form.
- [ ] Add reCAPTCHA to prevent spam submissions.
- [ ] Add Google Analytics for user tracking.

---

## 🤝 **Contributing**

Contributions are welcome! Please submit a pull request or open an issue if you'd like to contribute to this project.

---

## 📄 **License**

This project is licensed under the MIT License. You are free to use, modify, and distribute it as long as you include the original license.

---

## 📧 **Contact**

For questions or support, please email [support@fertilitycare.com](mailto:support@fertilitycare.com).

---

Made with ❤️ by the Fertility Care Development Team.
