import React from 'react';

function SearchForm(props) {
  return (
    <div>
      <p className="instructions">
        To find recipes using what you already have in your kitchen, enter
        ingredients separated by a space (i.e. greek+yogurt lemon)
      </p>
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
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="balanced">Balanced</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="high-protein"
                  name="diet"
                  value="high-protein"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="high-protein">High-protein</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="high-fiber"
                  name="diet"
                  value="high-fiber"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="high-fiber">High-fiber</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-fat"
                  name="diet"
                  value="low-fat"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="low-fat">Low-fat</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-carb"
                  name="diet"
                  value="low-carb"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="low-carb">Low-carb</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-sodium"
                  name="diet"
                  value="low-sodium"
                  onChange={props.toggleCheckbox}
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
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="alcohol-free">Alcohol-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="fodmap-free"
                  name="health"
                  value="fodmap-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="fodmap-free">FODMAP-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="keto-friendly"
                  name="health"
                  value="keto-friendly"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="keto-friendly">Keto</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="kidney-friendly"
                  name="health"
                  value="kidney-friendly"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="kidney-friendly">Kidney friendly</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-potassium"
                  name="health"
                  value="low-potassium"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="low-potassium">Low potassium</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="kosher"
                  name="health"
                  value="kosher"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="kosher">Kosher</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="No-oil-added"
                  name="health"
                  value="No-oil-added"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="No-oil-added">No oil added</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="low-sugar"
                  name="health"
                  value="low-sugar"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="low-sugar">No-sugar</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="paleo"
                  name="health"
                  value="paleo"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="paleo">Paleo</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pescatarian"
                  name="health"
                  value="pescatarian"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="pescatarian">Pescatarian</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="pork-free"
                  name="health"
                  value="pork-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="pork-free">Pork-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="red-meat-free"
                  name="health"
                  value="red-meat-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="red-meat-free">Red meat-free</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vegetarian"
                  name="health"
                  value="vegetarian"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="vegetarian">Vegetarian</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vegan"
                  name="health"
                  value="vegan"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="vegan">Vegan</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="sugar-conscious"
                  name="health"
                  value="sugar-conscious"
                  onChange={props.toggleCheckbox}
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
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="celery-free">Celery</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="crustacean-free"
                  name="health"
                  value="crustacean-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="crustacean-free">Crustcean</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="healhTags"
                  name="health"
                  value="dairy-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="dairy-free">Dairy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="egg-free"
                  name="health"
                  value="egg-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="egg-free">Egg</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="fish-free"
                  name="health"
                  value="fish-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="fish-free">Fish</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="gluten-free"
                  name="health"
                  value="gluten-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="gluten-free">Gluten</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="lupine-free"
                  name="health"
                  value="lupine-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="lupine-free">Lupine</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="mustard-free"
                  name="health"
                  value="mustard-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="mustard-free">Mustard</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="peanut-free"
                  name="health"
                  value="peanut-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="peanut-free">Peanut</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="sesame-free"
                  name="health"
                  value="sesame-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="sesame-free">Sesame</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="shellfish-free"
                  name="health"
                  value="shellfish-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="shellfish-free">Shellfish</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="soy-free"
                  name="health"
                  value="soy-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="soy-free">Soy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="tree-nut-free"
                  name="health"
                  value="tree-nut-free"
                  onChange={props.toggleCheckbox}
                />
                <label htmlFor="tree-nut-free">Tree Nut</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="wheat-free"
                  name="health"
                  value="wheat-free"
                  onChange={props.toggleCheckbox}
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
