# Rapid-Recipe :stew: :curry: :spaghetti:

## About This App

![Rapid Recipe search page](https://i.imgur.com/PH1aXjx.png)

I love to cook. My father is from India, and thanks to him I have tried and learned how to cook many different cuisines. My partner, on the other hand, knows how to cook about 5 things and most of them involve pasta. Rapid Recipe is for both of us.

Even though I love cooking, I often find myself making the same dishes over and over, either out of convenience or because it's just too much work to go looking for new recipes on the internet. It's hard to do when you don't know what you want to eat. I made Rapid Recipe because it was something I really wanted to exist. Now, when my partner and I meal plan, we can use Rapid Recipe to find new dishes using ingredients we already have.

## Planning

### User stories

#### Who will use Rapid Recipe?

Everyone eats, so Rapid Recipe should be usable for as many people as possible.

#### Why will they use it?

Anyone who already loves cooking and wants to add variety. Anyone who is learning to cook and wants to try new things. Budget conscious people who want to make delicious things using what they already have. Anyone with an allergy or diet restriction who needs safe recipes.

#### What is Rapid Recipe?

It is an app that allows users to input ingredients to search for recipes in Edamam's database.

### Notes and wireframes

![Rapid Recipe Wireframe](https://i.imgur.com/kUEgIuk.jpg)
This wireframe shows my vision for a landing page with a simple design, with search form and results gallery components.

![Rapid Recipe Component Hierarchy](https://i.imgur.com/KFUwW9e.jpg)
This chart illustrates the planned organization of the app's components, and where I will manage state and props.

### Bronze, Silver, Gold, Platinum plans

Bronze (MVP)

- [x] Built with React
- [x] Includes data from Edamam Recipe Search API
- [x] Uses at least 4 separate components
- [x] Deployed using Heroku
- [x] Uses flexbox or CSS grid for layout
- [x] Allows users to search recipes with ingredients to include
- [x] Allows users to search recipes with ingredients to exclude
- [x] Allows users to search recipes with health-conscious options

Silver

- [x] Fully responsive
- [x] Feature that allows users to generate a shopping list of ingredients they need to buy for each recipe so they don’t have to create it manually

Gold

- [x] Bookmark feature, so users can come back to recipes later or make them again
- [ ] Feature that allows users to write and store their own recipes

## Features

### Search

Users can input ingredients they want to include in their recipe, as well as ingredients to exclude. In addition, they can choose from an extensive list of dietary filters like vegan, keto, and low-carb to find meals that fit their dietary restrictions.

### Bookmark

Users can click a bookmark icon on any recipe they find, and it will get added to their "My Recipes" section. These recipes are saved client-side using local storage, so the bookmarks persist between browser sessions without a login. Users can also remove recipes from their bookmarked section.

### Grocery List

Each recipe card also has an "Add to Grocery List" button. When the user clicks it, that recipe's ingredients are added to the "My Groceries" section. On that page, users can click individual items to cross them off the list, and click a button to clear the list when they are done. This feature also uses local storage to maintain the list between browser sessions.

## Technologies Used

Rapid Recipe was built with ReactJS, JSX/HTML, and CSS. React router was used for all navigation, making it a single-page application. [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api) was used for the recipe searches. This awesome API is what allowed for detailed search parameters.

## Biggest Challenges

My biggest challenge for this project was extracting the value of the various search inputs and turning it into something that could be plugged into the API fetch url. The checkbox inputs were particularly challenging, as they come with a unique set of properties and behaviors to consider.

## Biggest Successes

The thing I'm most proud of on this project is the number of features I was able to add. I think the biggest relief, though, came when I finally conquered the checkbox search filters. Adding that functionality was pretty essential to my concept, and the long list of filters is one of the big benefits of using Edamam over other recipe databases, so I was pretty excited when I finally got it working. Rather than using state to control each checkbox, I created a Set of checked checkboxes.

### A snippet I'm particularly proud of

I'm pretty proud of my handleSubmit function, which is the onSubmit handler for my search form. Input values from both text inputs are split on the spaces (allowing users to input multiple ingredients at once), and then an array is created with those substrings being converted to the API search parameter syntax, and then joined as one string to be plugged into the fetch url. A similar process is performed on the checkbox inputs. An array is created from the Set of checked checkboxes which is then mapped and joined to be plugged in as one string into the fetch url.

```javascript
handleSubmit = event => {
  event.preventDefault();
  let splitString = this.state.excludeSearchString
    .split(' ')
    .map(subStr => {
      return `&excluded=${subStr}`;
    })
    .join('');
  let setArray = Array.from(this.selectedCheckboxes);
  let filterArray = setArray
    .map(entry => {
      return `&${entry.name}=${entry.value}`;
    })
    .join('');
  this.getRecipes(splitString, filterArray);
};
```

## Unsolved Issues and Ideas for the Future

In the future, I'd love for users to be able to create and store their own recipes.

One small piece of functionality I wasn't able to include involves the bookmark icon. I think the user experience would be improved if bookmarked recipes displayed a filled-in icon. I'd like to tackle this in the future.

## Installation Instructions

Fork and clone this repo to download your local copy of the files. Use `yarn start` or `npm start` to launch the development server.

Create a free account on Edamam to get your app ID and API key. Store those in an .env.local file with the names used in the fetch url.

## Contributions

Please submit an issue on this repo if you find a bug in the code. To make suggestions on features or other behavior, please make a pull request. Thanks!

## Gratitude

Thank you to all my GA teachers and fellow students for help and support throughout this project week!
