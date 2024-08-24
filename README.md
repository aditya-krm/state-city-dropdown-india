# state-city-dropdown-india

A React component that provides a customizable dropdown for selecting states and cities in India. This package is designed to be developer-friendly and allows for easy integration and styling within your React projects with vanilla css, tailwind css, inline css and many more.

## Features

- State and City Selection: Provides an easy-to-use dropdown for selecting Indian states and their corresponding cities.
- Custom Styling: Allows you to apply custom styles to match your application's design.
- Developer-Friendly: Simple and intuitive API to integrate into your React projects.

## Installation

Install the package using npm or yarn:

```bash
npm install state-city-dropdown-india
```

```bash
yarn add state-city-dropdown-india
```

## Usage

Here's a basic example of how to use the state-city-dropdown-india component in your project:

```jsx
import React, { useState } from "react";
import StateCityDropdown from "state-city-dropdown-india";

function App() {
  const [state, setState] = useState(""); // state and city are the selected values
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <h1>Select Your State and City</h1>
      <StateCityDropdown
        selectedState={state}
        selectedCity={city}
        onStateChange={(selectedState) => setState(selectedState)}
        onCityChange={(selectedCity) => setCity(selectedCity)}
        // styles: tailwind, inline, custom
        className="tailwind classes"
        style={{ inlineStyle }}
        customStyle={customStyle} // vanilla css or custom css
        // to modify select, option modify the below props
        // selectClassName,
        // optionClassName,
      />
    </div>
  );
}

export default App;
```

## Props

The StateCityDropdown component accepts the following props:

- `selectedState`: The currently selected state.
- `selectedCity`: The currently selected city.
- `onStateChange`: A callback function that is called when the state is changed.
- `onCityChange`: A callback function that is called when the city is changed.
- `className`: The class name for the dropdown container. You can use this prop to apply tailwind css classes.
- `style`: The inline style for the dropdown container. You can use this prop to apply inline styles.
- `customStyle`: The custom style for the dropdown container. You can use this prop to apply vanilla css or custom css.
- `selectClassName`: The class name for the select element. You can use this prop to apply tailwind css classes.
- `optionClassName`: The class name for the option elements. You can use this prop to apply tailwind css classes.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions, bug reports, or feature requests.

###

github repo: [state-city-dropdown-india](https://github.com/aditya-krm/state-city-dropdown-india)

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, feel free to reach out to me at [email](mailto:adkarmakar521@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/aditya-karmakar-a0342b15a/).
