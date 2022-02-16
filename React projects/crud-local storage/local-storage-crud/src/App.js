import './App.css';
import React from 'react'
import ClassClick from './components/ClassClick';
import Counter from './Hooks_components/Counter';
import counter from './components/Counter';
import Crud from './components/crud';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import HooksCount from './Hooks_components/HooksCount';
import ClassCounter from './components/ClassCounter';
import HookCounter from './Hooks_components/HookCounter';
import ClassMouse from './components/ClassMouse';
import HookMouse from './Hooks_components/HookMouse';
import MouseContainer from './Hooks_components/MouseContainer';

import ClassTimer from './components/ClassTimer';
import TimerHooks from './Hooks_components/TimerHooks';
import DataFetching from './Hooks_components/DataFetching';
import TwoDataFetch from './Hooks_components/TwoDataFetch';
import UseEffectFetch from './Hooks_components/UseEffectFetch';
import Fetch from './Hooks_components/Fetch';
import ComponentC from './Hooks_components/ComponentC';
import UseReducer from './Hooks_components/UseReducer';
import UseReducerTwo from './Hooks_components/UseReducerTwo';
import UseReducerThree from './Hooks_components/UseReducerThree';
import ComponentAll from './Hooks_components/GlobalState/ComponentAll';
import Object from './Hooks_components/GlobalState/Object' 

export const UserContext =React.createContext()
export const ChannelContext=React.createContext()
function App() {
  return (

    <div className="hello">
   
      <h1>i m app</h1>
      <Object/>
      {/* <ComponentAll/> */}
{/* 
      <UseReducerThree/> */}
      {/* <UseReducerTwo/> */}
      {/* <UseReducer/> */}
      {/* <UserContext.Provider value={'sai'}>
     <ChannelContext.Provider value={'10000 coders'}>
     <ComponentC/>
     </ChannelContext.Provider>
      </UserContext.Provider> */}
     
      {/* <Fetch/> */}
      {/* <UseEffectFetch/> */}
    {/* <ClassTimer/> */}
    {/* <TimerHooks/> */}
    {/* <DataFetching/> */}
    {/* <TwoDataFetch/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
   {/* <ParentComponent/> */}
     {/* <UserGreeting/> */}
     {/* <NameList/> */}
     {/* <Counter/> */}
     {/* <HooksCount/> */}
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     {/* <ClassMouse/> */}
   

      {/* <EventBind/>
      <Crud/>
     <Counter/> */}

     {/* <Greet name="sai" song="Infinity" />
     <Welcome name="musk" nickName="Hustler" />
     <FunctionClick/>
     <ClassClick/> */}

    </div>
  );
}

export default App;
