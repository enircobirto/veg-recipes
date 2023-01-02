import './App.css'

const App = ()=>{
  let headerObj={
    title:"Enirq's veggie recipes"
  }
  return (
    <div className="app">
      <Header header={headerObj}/>
      <RecipeList />
    </div>
  )
}

const Header = ({header}) => {
  return(
    <div className="header">
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
      pic:"0.jpg"
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
      <div className="imgContainer">
        <RecipeImg pic={pic}/>
        <RecipeText 
          title={title}
          shortDesc={shortDesc}
          icon={icon}
        />
      </div>
      
    </div>
  )
}

const RecipeImg = ({pic})=>{
  const folder="img"
  let src=folder+"/"+pic
  console.log(src)
  return(
    <div className="img">
      <img src="img/0.jpg"/>
    </div>
  )
}

const RecipeText = ({title,shortDesc,icon})=>{
  return(
    <div className="recipeText">
      <div className="recipeTitle">{title}</div>
      <div className="recipeShortDesc">{shortDesc}</div>
      <div className="recipeicon">icon</div>
    </div>
  )
}

export default App
