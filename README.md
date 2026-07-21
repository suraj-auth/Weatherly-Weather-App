# 🌤️ Weatherly

Weatherly is a responsive weather forecast web application built with **React.js**. Search any city in India and instantly get real-time weather details, an hourly breakdown, a 5-day forecast, and a map view — all in a clean, fast, single-page interface.

---

## ✨ Features

- 🔍 **Smart city search** with real-time autocomplete suggestions
- 🌡️ **Current weather** — temperature, humidity, wind speed, cloud cover, rain probability, visibility, and pressure
- ⏰ **Hourly forecast strip** (3 AM – 11 PM)
- 📅 **5-day forecast** page
- 🗺️ **Map view**
- ⚡ **No page reloads** — smooth client-side routing
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- ⏳ Graceful **loading and error states**

---

## 🛠️ Tech Stack

| Category         | Technology |
|-------------------|------------|
| Framework          | [React.js](https://react.dev) (v19) |
| Build Tool         | [Vite](https://vitejs.dev) |
| Styling            | [Tailwind CSS](https://tailwindcss.com) (v4) |
| Routing            | [React Router DOM](https://reactrouter.com) |
| State Management   | React Context API |
| Icons              | [Lucide React](https://lucide.dev) |
| Weather Data       | [Open Weather13 API](https://rapidapi.com) (via RapidAPI) |
| Geocoding          | [Geocoding by API Ninjas](https://rapidapi.com) (via RapidAPI) |

---

## 📂 Project Structure

```
Weather-App/
├── public/
├── src/
│   ├── assets/                     # Images & weather/cloud icons
│   ├── components/
│   │   ├── app-components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Hero.jsx            # Dashboard container, handles API calls
│   │   │   ├── Hero1.jsx           # Current weather details
│   │   │   ├── Hero2.jsx           # Hourly forecast strip
│   │   │   ├── Forecast.jsx        # 5-day forecast page
│   │   │   └── Map.jsx
│   │   └── helper-components/
│   │       ├── Loader.jsx
│   │       └── Error.jsx
│   ├── constant/
│   │   ├── Helper.jsx              # Central export hub (components, icons, context)
│   │   └── city.js                 # City list used for search autocomplete
│   ├── App.jsx                     # Route definitions
│   ├── Layout.jsx                  # Context Provider + shared Navbar
│   └── main.jsx                    # App entry point
├── package.json
└── README.md
```

---

## ⚙️ How It Works

1. The user types a city name into the **SearchBar**, which filters a local city list to show live autocomplete suggestions.
2. On search, the **Geocoding by API Ninjas** API converts the city name into latitude/longitude coordinates.
3. Those coordinates are passed to the **Open Weather13 API**, which returns a 5-day / 3-hour interval forecast.
4. The result is stored in a shared **React Context**, so the Dashboard, Hourly strip, and Forecast page can all read the same data without re-fetching.
5. A **Loader** is shown while data is being fetched, and a friendly **Error** message is shown if either API call fails.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or above
- A free [RapidAPI](https://rapidapi.com/) account, subscribed to:
  - [Open Weather13](https://rapidapi.com/) API
  - [Geocoding by API Ninjas](https://rapidapi.com/) API

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/Weather-App.git
cd Weather-App

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the project root and add your RapidAPI key:

```env
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```

> Update the fetch options in `Hero.jsx` (or wherever your API options are defined) to read the key from `import.meta.env.VITE_RAPIDAPI_KEY` instead of a hardcoded value before pushing this publicly.

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📸 Screenshots

| Dashboard | Forecast | Map |
|-----------|----------|-----|
| _add screenshot_ | _add screenshot_ | _add screenshot_ |

---

## 🔮 Future Enhancements

- Dark mode toggle
- Browser geolocation for auto-detecting the user's city
- Save favourite cities
- Celsius / Fahrenheit unit toggle
- Interactive map instead of a static image
- PWA support with offline caching
- Backend proxy to keep API keys secure

---

## 🙋 Author

Built as part of an MCA Summer Training Internship project.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

