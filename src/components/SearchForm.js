import React from 'react';

function SearchForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="searchForm">
        <div className="textInputs">
          <label className="search">include:</label>
          <input
            type="text"
            id="includeSearchString"
            value={props.includeSearchString}
            placeholder="search"
            required
            onChange={props.handleChange}
            className="search"
          />
          <label className="search">exclude:</label>
          <input
            type="text"
            id="excludeSearchString"
            value={props.excludeSearchString}
            placeholder="search"
            onChange={props.handleChange}
            className="search"
          />
          <button type="submit" className="search">
            Search
          </button>
        </div>
        <details className="checkboxes">
          <summary>Click for recipe filters</summary>
          <div className="checkboxLists">
            <ul className="healthLabels">
              <p>Health labels:</p>
              <li>
                <input
                  type="checkbox"
                  id="balanced"
                  name="diet"
                  value="balanced"
                />
                <label htmlFor="balanced">Balanced</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="high-protein"
                  name="diet"
                  value="high-protein"
                />
                <label htmlFor="high-protein">High-protein</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="high-fiber"
                  name="diet"
                  value="high-fiber"
                />
                <label htmlFor="high-fiber">High-fiber</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-fat"
                  name="diet"
                  value="low-fat"
                />
                <label htmlFor="low-fat">Low-fat</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-carb"
                  name="diet"
                  value="low-carb"
                />
                <label htmlFor="low-carb">Low-carb</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-sodium"
                  name="diet"
                  value="low-sodium"
                />
                <label htmlFor="low-sodium">Low-sodium</label>
              </li>
            </ul>
            <ul className="dietLabels">
              <p>Diet considerations:</p>
              <li>
                <input
                  type="checkbox"
                  id="alcohol-free"
                  name="health"
                  value="alcohol-free"
                />
                <label htmlFor="alcohol-free">Alcohol-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="fodmap-free"
                  name="health"
                  value="fodmap-free"
                />
                <label htmlFor="fodmap-free">FODMAP-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="keto-friendly"
                  name="health"
                  value="keto-friendly"
                />
                <label htmlFor="keto-friendly">Keto</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="kidney-friendly"
                  name="health"
                  value="kidney-friendly"
                />
                <label htmlFor="kidney-friendly">Kidney friendly</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-potassium"
                  name="health"
                  value="low-potassium"
                />
                <label htmlFor="low-potassium">Low potassium</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="kosher"
                  name="health"
                  value="kosher"
                />
                <label htmlFor="kosher">Kosher</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="No-oil-added"
                  name="health"
                  value="No-oil-added"
                />
                <label htmlFor="No-oil-added">No oil added</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-sugar"
                  name="health"
                  value="low-sugar"
                />
                <label htmlFor="low-sugar">No-sugar</label>
              </li>
              <li>
                <input type="checkbox" id="paleo" name="health" value="paleo" />
                <label htmlFor="paleo">Paleo</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pecatarian"
                  name="health"
                  value="pecatarian"
                />
                <label htmlFor="pecatarian">Pescatarian</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pork-free"
                  name="health"
                  value="pork-free"
                />
                <label htmlFor="pork-free">Pork-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="red-meat-free"
                  name="health"
                  value="red-meat-free"
                />
                <label htmlFor="red-meat-free">Red meat-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vegetarian"
                  name="health"
                  value="vegetarian"
                />
                <label htmlFor="vegetarian">Vegetarian</label>
              </li>
              <li>
                <input type="checkbox" id="vegan" name="health" value="vegan" />
                <label htmlFor="vegan">Vegan</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-sugar"
                  name="health"
                  value="low-sugar"
                />
                <label htmlFor="low-sugar">Low-sugar</label>
              </li>
            </ul>
            <ul className="allergies">
              <p>Allergies:</p>
              <li>
                <input
                  type="checkbox"
                  id="celery-free"
                  name="health"
                  value="celery-free"
                />
                <label htmlFor="celery-free">Celery</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="crustacean-free"
                  name="health"
                  value="crustacean-free"
                />
                <label htmlFor="crustacean-free">Crustcean</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="healhTags"
                  name="health"
                  value="dairy-free"
                />
                <label htmlFor="dairy-free">Dairy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="egg-free"
                  name="health"
                  value="egg-free"
                />
                <label htmlFor="egg-free">Egg</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="fish-free"
                  name="health"
                  value="fish-free"
                />
                <label htmlFor="fish-free">Fish</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="gluten-free"
                  name="health"
                  value="gluten-free"
                />
                <label htmlFor="gluten-free">Gluten</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="lupine-free"
                  name="health"
                  value="lupine-free"
                />
                <label htmlFor="lupine-free">Lupine</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="mustard-free"
                  name="health"
                  value="mustard-free"
                />
                <label htmlFor="mustard-free">Mustard</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="peanut-free"
                  name="health"
                  value="peanut-free"
                />
                <label htmlFor="peanut-free">Peanut</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="sesame-free"
                  name="health"
                  value="sesame-free"
                />
                <label htmlFor="sesame-free">Sesame</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="shellfish-free"
                  name="health"
                  value="shellfish-free"
                />
                <label htmlFor="shellfish-free">Shellfish</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="soy-free"
                  name="health"
                  value="soy-free"
                />
                <label htmlFor="soy-free">Soy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="tree-nut-free"
                  name="health"
                  value="tree-nut-free"
                />
                <label htmlFor="tree-nut-free">Tree Nut</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="wheat-free"
                  name="health"
                  value="wheat-free"
                />
                <label htmlFor="wheat-free">Wheat</label>
              </li>
            </ul>
          </div>
        </details>
      </form>
    </div>
  );
}

export default SearchForm;
