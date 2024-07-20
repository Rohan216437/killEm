# KillEm: Whack-a-Mole Game

Welcome to **KillEm**, a modern, fun, and engaging Whack-a-Mole game built using React and Redux. Test your reflexes and see how many moles you can whack before you run out of lives!

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Snapshots](#snapshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out a live demo of the game [here](#).

## Features

- Interactive gameplay where moles randomly appear on the screen.
- Score tracking to keep a record of your performance.
- Lives indicator to show how many attempts you have left.
- Responsive design with Tailwind CSS for a smooth experience across devices.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/killem.git
   cd killem
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The game should now be running on `http://localhost:3000`.

## Usage

- **Main Page**: Click on the "Play" button to start the game.
- **Game Page**:
  - The mole can appear anywhere within the 70% of the screen area.
  - Use your mouse to click on the mole to score points.
  - The top 30% of the screen contains:
    - **Back Button** (left side) to return to the main page.
    - **Score** (center) to keep track of your points.
    - **Lives** (right side) to show how many lives you have left.

## Snapshots

![Main Page](src\assets\readmePlayPage.png)

*Main Page with Play button*

![Game Page](src\assets\readmeGroundPage.png)
*Game Page with interactive mole, score, and lives*

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **React Router**: For routing.
- **Tailwind CSS**: For styling.
- **React Icons**: For icons.
- **Testing Library**: For testing the application.

## Contributing

We welcome contributions to improve the game! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Enjoy the game and happy whacking! If you encounter any issues or have suggestions, feel free to open an issue or contact us.

