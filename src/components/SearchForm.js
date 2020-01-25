import React from 'react'

function SearchForm() {
    return (
        <div>
            <input type="text" id="include" value="searchString" placeholder="search" />
            <input type="text" id="exclude" value="searchString" placeholder="search" />
            <details>
                <summary>Click to expand diet options</summary>
                <input type="checkbox" id="alcohol-free" name="Health" value="alcohol-free" />
                <label htmlFor="alcohol-free">Alcohol-free</label>

                <input type="checkbox" id="celery-free" name="Health" value="celery-free" />
                <label htmlFor="celery-free">Celery-free</label>

                <input type="checkbox" id="crustacean-free" name="Health" value="crustacean-free" />
                <label htmlFor="crustacean-free">Crustcean-free</label>

                <input type="checkbox" id="dairy-free" name="Health" value="dairy-free" />
                <label htmlFor="dairy-free">Dairy-free</label>

                <input type="checkbox" id="egg-free" name="Health" value="egg-free" />
                <label htmlFor="egg-free">Egg-free</label>

                <input type="checkbox" id="fish-free" name="Health" value="fish-free" />
                <label htmlFor="fish-free">Fish-free</label>

                <input type="checkbox" id="fodmap-free" name="Health" value="fodmap-free" />
                <label htmlFor="fodmap-free">FODMAP-free</label>

                <input type="checkbox" id="gluten-free" name="Health" value="gluten-free" />
                <label htmlFor="gluten-free">Gluten-free</label>

                <input type="checkbox" id="keto-friendly" name="Health" value="keto-friendly" />
                <label htmlFor="keto-friendly">Keto</label>

                <input type="checkbox" id="kidney-friendly" name="Health" value="kidney-friendly" />
                <label htmlFor="kidney-friendly">Kidney friendly</label>

                <input type="checkbox" id="kosher" name="Health" value="kosher" />
                <label htmlFor="kosher">Kosher</label>

                <input type="checkbox" id="low-potassium" name="Health" value="low-potassium" />
                <label htmlFor="low-potassium">Low potassium</label>

                <input type="checkbox" id="lupine-free" name="Health" value="lupine-free" />
                <label htmlFor="lupine-free">Lupine-free</label>

                <input type="checkbox" id="mustard-free" name="Health" value="mustard-free" />
                <label htmlFor="mustard-free">Mustard-free</label>

                <input type="checkbox" id="No-oil-added" name="Health" value="No-oil-added" />
                <label htmlFor="No-oil-added">No oil added</label>

                <input type="checkbox" id="low-sugar" name="Health" value="low-sugar" />
                <label htmlFor="low-sugar">No-sugar</label>

                <input type="checkbox" id="paleo" name="Health" value="paleo" />
                <label htmlFor="paleo">Paleo</label>

                <input type="checkbox" id="peanut-free" name="Health" value="peanut-free" />
                <label htmlFor="peanut-free">Peanut-free</label>

                <input type="checkbox" id="pecatarian" name="Health" value="pecatarian" />
                <label htmlFor="pecatarian">Pescatarian</label>

                <input type="checkbox" id="pork-free" name="Health" value="pork-free" />
                <label htmlFor="pork-free">Pork-free</label>

                <input type="checkbox" id="red-meat-free" name="Health" value="red-meat-free" />
                <label htmlFor="red-meat-free">Red meat-free</label>

                <input type="checkbox" id="sesame-free" name="Health" value="sesame-free" />
                <label htmlFor="sesame-free">Sesame-free</label>

                <input type="checkbox" id="shellfish-free" name="Health" value="shellfish-free" />
                <label htmlFor="shellfish-free">Shellfish-free</label>

                <input type="checkbox" id="soy-free" name="Health" value="soy-free" />
                <label htmlFor="soy-free">Soy-free</label>

                <input type="checkbox" id="sugar-conscious" name="Health" value="sugar-conscious" />
                <label htmlFor="sugar-conscious">Sugar-conscious</label>

                <input type="checkbox" id="tree-nut-free" name="Health" value="tree-nut-free" />
                <label htmlFor="tree-nut-free">Tree Nut-free</label>

                <input type="checkbox" id="vegan" name="Health" value="vegan" />
                <label htmlFor="vegan">Vegan</label>

                <input type="checkbox" id="vegetarian" name="Health" value="vegetarian" />
                <label htmlFor="vegetarian">Vegetarian</label>

                <input type="checkbox" id="wheat-free" name="Health" value="wheat-free" />
                <label htmlFor="wheat-free">Wheat-free</label>
            </details>
        </div>
    )
}

export default SearchForm