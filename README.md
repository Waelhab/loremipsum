# Aflam: Centralized Cinema Experience

**Aflam** is a cutting-edge platform designed to revolutionize the moviegoing experience in Saudi Arabia. By integrating multiple cinema chains such as **Muvi**, **AMC**, **Vox**, and more, Aflam offers a seamless way to view, compare, and book movies—all in one place.

### Benefits
- Unified platform for all major cinemas.
- Advanced filtering options to make movie selection easy and intuitive.
- Modern, user-friendly design focused on delivering a seamless experience.

## Development Approach

Aflam will be developed using the **Agile methodology** to ensure:
- Flexibility in responding to user feedback.
- Iterative improvements for a high-quality product.
- Efficient collaboration among development teams.

Stay tuned for more updates as Aflam transforms the way you enjoy movies!


## Build Instructions

### Prerequisites
Before you start, make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (npm comes bundled with Node.js)

### Cloning the Repository
1. Clone the project repository:
   `git clone https://github.com/Waelhab/loremipsum.git`

2. Navigate to the project directory:
    `cd loremipsum`

3. Install Vite:
    `npm install vite`

4. Start the server:
    `npm run dev`

# UI

The following is a guide on the interface of our React application, to help you better understand what is currently available in this version.

## Login Page

![alt text](Login.png)

## Home Page

![alt text](Home.png)

## Filter By City

![alt text](FilterMovies.png)

## Movie Details

![alt text](MovieDetails.png)

## User History

![alt text](History.png)

# Generative AI Usage

To be fully transparent, we have included this section to highlight all the problems that we used generative AI to solve.

## Refactoring

We used AI to help us refactor several blocks of code, to help us ensure maximum interface and backend performance. We used the same prompt for all instances of refactoring, which is "Please refactor this code block to remove any unneeded code."

To be clear, when we asked generative AI to "refactor" code, we gave it our working code, and asked it to improve it.

### Where did we use generative AI to refactor?

- History and Sign In dynamic buttons in Navbar.jsx
- Handling the search feature (handleSearch) in SearchMovies.jsx

## Debugging

We used AI to help us debug long code blocks that had errors that we could not understand, and we asked generative AI to read over the code blocks and point out our errors using the prompt: "We are trying to do X. In the following code, where is the error?"

To be clear, when we asked generative AI to "debug" our code, we gave it code that was not working partially, and asked for guidance on where the issues are.

### Where did we use generative AI to debug our code?

- Price, time, and savings calculation in UserData.jsx

## Full Generation

We used AI to help us generate simulated data, and create icons for our project. Each instance had a separate prompt which are detailed below.

### Where did we use AI to fully generate code?

- The play button icon on a movie poster's trailer in MovieDetail.jsx ("Please generate us a small play button icon with a hollow center")
- The hamburger and X menu icons when using a 9:16 (smartphone) aspect ratio in Navbar.jsx ("Please generate a simple hamburger menu and X icons using html")
- Used AI to create mock movie details that we used for our simulated database in UserData.jsx ("Please generate 20 JSON objects of the following movie details: id, name, genre, ageRating, language, date, runtime, price, discount, liked")
