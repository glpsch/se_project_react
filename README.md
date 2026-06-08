# WTWR (What to Wear?)

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

- [Github pages](https://glpsch.github.io/se_project_react/)

The project is currently in development

## Current version specifics:
### Features

- Fetches current weather data and location information from the OpenWeather API.
- Displays the current temperature and weather conditions.
- Filters clothing recommendations based on the current weather (`hot`, `warm`, or `cold`).
- Renders clothing items dynamically.
- Includes a reusable modal system for:
  - Adding new clothing items
  - Viewing item details
- Supports closing modals via:
  - Close button
  - Escape key
  - Clicking outside the modal
- Responsive interface built with React and Vite.

### Technologies

- React
- Vite
- JavaScript (ES6+)
- OpenWeather API
- CSS

### Future Improvements

- Add and delete clothing items
- Like/favorite items
- User authentication
- Celsius/Fahrenheit unit switching
- Backend integration for persistent data storage