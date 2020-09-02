# Rancid Tomatillos

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<p align="center">
  <a href="https://github.com/carlymclift/RancidTomatillos">
  </a>

  <h3 align="center">Rancid Tomatillos</h3>

  <p align="center">
    <br />
    <a href="https://github.com/carlymclift/RancidTomatillos"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/carlymclift/RancidTomatillos/issues">Report Bug</a>
    ·
    <a href="https://github.com/carlymclift/RancidTomatillos/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project
- We were tasked with building an application much like Rotton Tomatoes. Our site has ratings and reviews for popular movies a user may want to know more about before watching. Or if they have watched; be able to tell others their opinion on it.
## How the user interacts:
- A user can interact by viewing the individual movie details, runtime, budget, revenue, and a description of the movie. They can also see reviews from other users. If a user wants to review a movie they can login, and write a review (which can be modified at anytime).  
- A user can also favorite movies that they like the most for easy viewing later. If they want to search for a movie, they can on the home page.

- This Project uses:
  - React (including React testing framework)
     - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
  - XML
  - Heroku backend server
  - Jest testing library
  - CSS

### Project in Action
- On page load, all users are taken to the home screen. Here, they can view all movies and click on any movie to be taken to the more detailed Movie Page. The user has limited functionality until they log in- users aren't able to favorite movies or add their own rating unless they are logged in.
![](public/READMEgifs/jkw-homePage-and-MoviePage.gif)
![](public/READMEgifs/jkw-disabled-favorites.gif)

- Once a user logs in, they are able to save movies as "Favorites" as well as leave comments and a review for the film. Because these actions rely on a back end server hosted on Heroku, user data will persist if they log out & back in.
![](public/READMEgifs/jkw-login-favoritesView.gif)
![](public/READMEgifs/jkw-addFavorites.gif)
![](public/READMEgifs/jkw-comment-review.gif)

### Installation

**Fork this repository:**

**Clone your forked repository**

On the command line:
`git clone` and the copied URL

**Change into the directory and install the project dependencies**

`cd` into directory and run `npm install` for dependencies.  

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<!-- USAGE EXAMPLES -->

## Usage

// screenshots

- The details of this project are outlined in the <a href="https://frontend.turing.io/projects/module-3/rancid-tomatillos-v2.html" target="\__blank">Rancid Tomatillos project spec</a>.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/carlymclift/RancidTomatillos/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are appreciated.

- Fork the Project

- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

- Push to the Branch (`git push origin feature/AmazingFeature`)

- Open a Pull Request

<!-- MAIN CONTRIBUTIONS -->

## Main Contributors

- Carly Clift
  - carlymclift@gmail.com
  - [Carly's Linkedin](https://www.linkedin.com/in/carly-clift-8795491a4/)
- Jake West
  - jacobkwest93@gmail.com
  - [Jakes's Linkedin](https://www.linkedin.com/in/jake-west-3840b71b4/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [GitHub Pages](https://pages.github.com)
- [Heroku](https://dashboard.heroku.com/)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/carlymclift/RancidTomatillos.svg?style=flat-square
[contributors-url]: https://github.com/carlymclift/RancidTomatillos/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/carlymclift/RancidTomatillos.svg?style=flat-square
[forks-url]: https://github.com/carlymclift/RancidTomatillos/network/members
[stars-shield]: https://img.shields.io/github/stars/carlymclift/RancidTomatillos.svg?style=flat-square
[stars-url]: https://github.com/carlymclift/RancidTomatillos/stargazers
[issues-shield]: https://img.shields.io/github/issues/carlymclift/RancidTomatillos.svg?style=flat-square
[issues-url]: https://github.com/carlymclift/RancidTomatillos/issues
