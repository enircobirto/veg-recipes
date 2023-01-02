const App = ()=>{
  let headerObj={
    title:"Enirq's veggie recipes"
  }
  return (
    <div className="App">
      <Header header={headerObj}/>
      <RecipeList />
    </div>
  )
}

const Header = ({header}) => {
  return(
    <div className="header">
      {console.log(header)}
      <h1>{header.title}</h1>
    </div>
  )
}

const RecipeList = ({}) => {
  const recipeList={
    0:{
      title:"kjsdfhc",
      shortDesc:"sddsdhfdsjdssdffdgdf",
      icon:"vegan",
      pic:"ttt.png"
    }
  }
  return(
    <div className="recipeList">
      <Recipe recipeInfo={recipeList[0]} />
    </div>
  )
}

const Recipe = ({recipeInfo}) => {
  let {title,shortDesc,icon,pic} = recipeInfo
  return(
    <div className="recipeItem">
      
    </div>
  )
}

export default App
