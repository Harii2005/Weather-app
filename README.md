# Weather App

A simple, user-friendly weather application built with React and MUI that allows users to check current weather conditions for any city around the world.

![Weather App Screenshot](public/screenshot.png)

## Features

- Search for weather information by city name
- Display current temperature, min and max temperatures
- Show humidity and "feels like" temperature
- Visual description of current weather conditions
- Clean, modern UI with responsive design

## Tech Stack

- React.js
- Material UI (MUI) for UI components
- OpenWeatherMap API for weather data
- Vite for fast development and building

## Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd Weather-app
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key

```
VITE_WEATHER_API_KEY=your_api_key_here
```

> **Note:** You can get a free API key by signing up at [OpenWeatherMap](https://openweathermap.org/api)

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the weather details for the selected city
4. To search for a different city, simply enter a new city name and search again

## Project Structure

```
src/
  ├── App.jsx           # Main application component
  ├── WeatherApp.jsx    # Weather application container
  ├── Searchbox.jsx     # Search input component
  ├── InfoBox.jsx       # Weather information display component
  ├── main.jsx         # Application entry point
  └── assets/          # Static assets
```

## Environment Variables

The following environment variables are used in this project:

- `VITE_WEATHER_API_KEY`: Your OpenWeatherMap API key

## Deployment

To build the application for production:

```bash
npm run build
```

This will generate a `dist` folder with all the optimized files for deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Material UI](https://mui.com/) for the UI components
- [Vite](https://vitejs.dev/) for the build tooling
