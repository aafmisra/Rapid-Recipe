import React, { Component } from 'react'

class Results extends Component {
    componentDidMount() {
        const url = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}q=pistachios,pecans,cinnamon`
    }

    render() {
        return <div></div>
    }
}

export default Results