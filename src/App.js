import React, {useState} from 'react'
import Axios from 'axios'
// import {v5 as uuidv5} from 'uuid'

import Recipe from './components/Recipe/Recipe'
import AlertMessage from './components/AlertMessage/AlertMessage'
import chief from './img/chief.png'
import './App.css'


const App = () =>{
    const [foodQuery, setFoodQuery] = useState("")
    const [foodRecipe, setFoodRecipe] = useState([])
    const [alert, setAlert] = useState("")

    const ID = 'b235abcb'
    const KEY = '809ec57c6a89e2e94fc2eaf93b4f53cc'	 
    const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${foodQuery}&app_id=${ID}&app_key=${KEY}`

    const fetchData = async () => {
        if(foodQuery){
        const fetchedData = await Axios.get(URL)

        if(!fetchedData.data.count)
        {
            return setAlert(`No Food With the Name "${foodQuery}" is found!!`)
        }
        setFoodRecipe(fetchedData.data.hits)
        console.log(fetchedData)
        setFoodQuery("")
        setAlert("")
        }
        else{
            setAlert('~ Please input a food name!! ~')
        }

    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }

    const onChange = (e) => {
        setFoodQuery(e.target.value)
    }

    return(
        <div className="App">
            <h1>Dish Recipe Lookup</h1>
            <img src={chief} alt={"chief"}></img>
            <form onSubmit={onSubmit} className="search-form">
                {alert && <AlertMessage alert={alert}/>}
                <input type="text" placeholder="Anything on your mind?" autoComplete="off" onChange={onChange} value={foodQuery}/>
                <input type="submit" value="search" />
            </form>
            <div className="recipes">
                {foodRecipe && foodRecipe.map((recipe,i) => <Recipe recipe={recipe} key={i}/>)}
            </div>
        
        </div>
    )
}

export default App