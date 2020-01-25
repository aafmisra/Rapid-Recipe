# Project Proposal Worksheet - Rapid Recipe :stew:


## Project Description
Rapid Recipe will allow users to input ingredients they already have to get recipes they can make with those ingredients. They will also be able to filter out things they can’t or don’t eat. Stretch goals include a nutrition facts page for each recipe, auto-generated shopping lists, and bookmarking. 

## Wireframes

[Rapid Recipe Wireframe](https://docs.google.com/drawings/d/1y7ENAiOVCiKA0ykc6b3e_pm2iIaksGdH1emSkk3PEQI/edit?usp=sharing)
![Rapid Recipe WireFrame](https://i.imgur.com/kUEgIuk.jpg)


## MVP User Stories
MVP:
* _As a user, I want to be able to search for recipes using ingredients I already have so that I can get new meal ideas_
* _As a user, I need to be able to filter out recipes that include things I’m allergic to or don’t fit within my dietary restrictions so that I can generate recipes I can actually make and eat_

Stretch:
* _As a user, I’d like to be able to bookmark recipes so that I can come back to them later or make them again_
* _As a user, I’d like to be able to write and store my own recipes so that I can have them all in one place_
* _As a user, I’d like to be able to generate a shopping list of ingredients I need to buy for each recipe so I don’t have to create it manually_


## API
### Edamam Recipe Search API documentation:
[Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api)

### Example response

url used: https://api.edamam.com/search?app_id=[MY_APP]&app_key=[MY_KEY]&q=pistachios,pecans,cinnamon&from=0&to=20&health=alcohol-free&excluded=yogurt

This sample is suuuuuper long because of all the detailed nutrition data. I will mostly be using the label, ingredients, image, and url of the full recipe online. If I get to work on my stretch goals, I may utilize some of the nutrition info, as well as the "bookmarked" and "bought" values.

<details>
  <summary>click to expand code snippet</summary>

```
{
  "q": "pistachios, pecans, cinnamon",
  "from": 0,
  "to": 20,
  "more": true,
  "count": 74,
  "hits": [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_274fa7a61767efb7921dc14e8a238b8a",
        "label": "Warm And Nutty Breakfast Couscous",
        "image": "https://www.edamam.com/web-img/2df/2dfefde64a332878b471881ce0f16238.jpg",
        "source": "Food52",
        "url": "http://www.food52.com/recipes/2505_warm_and_nutty_breakfast_couscous",
        "shareAs": "http://www.edamam.com/recipe/warm-and-nutty-breakfast-couscous-274fa7a61767efb7921dc14e8a238b8a/pistachios%2C+pecans%2C+cinnamon/alcohol-free",
        "yield": 4.0,
        "dietLabels": [],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Alcohol-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup water",
          "1/2 cup dry couscous",
          "1/2 cup chopped mixed unsalted nuts, equal parts almond, pecans, pistachios, and walnuts",
          "2 tablespoons unsalted pepitas or sunflower seeds",
          "2-3 pinches of cinnamon",
          "3 tablespoons pure maple syrup"
        ],
        "ingredients": [
          {
            "text": "1 cup water",
            "weight": 237.0
          },
          {
            "text": "1/2 cup dry couscous",
            "weight": 86.5
          },
          {
            "text": "1/2 cup chopped mixed unsalted nuts, equal parts almond, pecans, pistachios, and walnuts",
            "weight": 61.5
          },
          {
            "text": "1/2 cup chopped mixed unsalted nuts, equal parts almond, pecans, pistachios, and walnuts",
            "weight": 0.0
          },
          {
            "text": "2 tablespoons unsalted pepitas or sunflower seeds",
            "weight": 17.5
          },
          {
            "text": "2-3 pinches of cinnamon",
            "weight": 0.4062500005220039
          },
          {
            "text": "3 tablespoons pure maple syrup",
            "weight": 60.0
          }
        ],
        "calories": 930.0734375012894,
        "totalWeight": 462.906250000522,
        "totalTime": 0.0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 930.0734375012894,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 37.51498750000648,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 4.303371562501801,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 17.976284375001285,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.729991250000355,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 127.9469968754207,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.380218750277185,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 41.45421562501132,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 36.275999999999996,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 27.180159375020832,
            "unit": "g"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 27.5606250000522,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 171.36562500523047,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 184.5637500003132,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1015.7909375022498,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.36355000004343,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.859084375009553,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 565.3600000003343,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 13.500937500078301,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 3.704437500019836,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9747343750001148,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.990161562500214,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.330986250006954,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.377866875000825,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 88.41437500003133,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 88.41437500003133,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.578675000012111,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.12675000016286522,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 266.8767812500553,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 46.50367187506447,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 57.71536538462535,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 21.516857812509006,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 42.64899895847357,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 49.52087500110874,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 54.360318750041664,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1.148359375002175,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 17.13656250052305,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 43.94375000007457,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 21.612573138345738,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 24.241944444685725,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 35.08258522735957,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 80.76571428576203,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1.5001041666753667,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 4.116041666688707,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 81.2278645833429,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 76.166274038478,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 33.31866406254346,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 105.98975961544808,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 22.103593750007832,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 50.524500000080735,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.10562500013572103,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 37.51498750000648,
            "hasRDI": true,
            "daily": 57.71536538462535,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 4.303371562501801,
                "hasRDI": true,
                "daily": 21.516857812509006,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.0,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 17.976284375001285,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 12.729991250000355,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 127.9469968754207,
            "hasRDI": true,
            "daily": 42.64899895847357,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 115.56677812514351,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 12.380218750277185,
                "hasRDI": true,
                "daily": 49.52087500110874,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 41.45421562501132,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 36.275999999999996,
                "hasRDI": false,
                "daily": 0.0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 27.180159375020832,
            "hasRDI": true,
            "daily": 54.360318750041664,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 27.5606250000522,
            "hasRDI": true,
            "daily": 1.148359375002175,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 171.36562500523047,
            "hasRDI": true,
            "daily": 17.13656250052305,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 184.5637500003132,
            "hasRDI": true,
            "daily": 43.94375000007457,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1015.7909375022498,
            "hasRDI": true,
            "daily": 21.612573138345738,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 4.36355000004343,
            "hasRDI": true,
            "daily": 24.241944444685725,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 3.859084375009553,
            "hasRDI": true,
            "daily": 35.08258522735957,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 565.3600000003343,
            "hasRDI": true,
            "daily": 80.76571428576203,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 13.500937500078301,
            "hasRDI": true,
            "daily": 1.5001041666753667,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 3.704437500019836,
            "hasRDI": true,
            "daily": 4.116041666688707,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.9747343750001148,
            "hasRDI": true,
            "daily": 81.2278645833429,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.990161562500214,
            "hasRDI": true,
            "daily": 76.166274038478,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 5.330986250006954,
            "hasRDI": true,
            "daily": 33.31866406254346,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.377866875000825,
            "hasRDI": true,
            "daily": 105.98975961544808,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 88.41437500003133,
            "hasRDI": true,
            "daily": 22.103593750007832,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 88.41437500003133,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 7.578675000012111,
            "hasRDI": true,
            "daily": 50.524500000080735,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 0.12675000016286522,
            "hasRDI": true,
            "daily": 0.10562500013572103,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0.0,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 266.8767812500553,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    }
   }
 }
```
</details>

## Component Hierarchy

[Component Hierarchy](https://docs.google.com/drawings/d/1C_KdBk7rqlfNn0FVAm1N6gjcn2wkmtTTH67PZxepzYY/edit?usp=sharing)
![Component Hierarchy](https://i.imgur.com/KFUwW9e.jpg)

