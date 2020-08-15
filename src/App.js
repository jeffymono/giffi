import React,{Suspense} from 'react';
import {Route,Link} from 'wouter'
import Detail from './pages/Detail/index'
import './App.css'
import StaticContext from './context/StaticContext'
import SearchResult from './pages/SearchResults';
import { GifContextProvider } from './context/GifContext';
const Home = React.lazy(()=>import ('./pages/Home/index'))
function App() {

  return (
    <StaticContext.Provider value={{name:"Jeferson",edad:24}}>
    <div className="App">
      <Suspense fallback={null}>
      <section className="App-Content">
        <Link to="/">
        <img className="App-logo" src='/logo.png' alt="logo"/>
        </Link>
        <GifContextProvider>
       <Route path="/" component={Home}/>
       <Route path="/search/:keyword" component={SearchResult}></Route>
       <Route path="/gif/:id" component={Detail}></Route>
       <Route path='/404' component={()=><h1>La página no existe :(</h1>}/>
       </GifContextProvider>
      </section>
      </Suspense>
    </div>
    </StaticContext.Provider>
  )
}

export default App;
