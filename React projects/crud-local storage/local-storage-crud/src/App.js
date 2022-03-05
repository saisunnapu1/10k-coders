import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import store,{rootStore, store1} from './Redux-Components/store';
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
import CakeShop from './Redux-Components/CakeShop';
import HooksCakeShop from './Redux-Components/Cakes/HooksCakeShop';
import HooksIceCreamShop from './Redux-Components/IcreCream/HooksIceCreamShop';
import LolliPopShop from './Redux-Components/lollipops/LolliPopShop';
import NewCakeContainer from './Redux-Components/Cakes/NewCakeContainer';
import Stylesheet from './Class_Components/Stylesheet';
import File from './Class_Components/File';
import CounterClass from './Class_Components/CounterCount';
import ApiFetch from './Hooks_components/ApiFetch';
import ApiComponent from './Redux-Components/ApiFire/ApiComponent';
import { FetchStore } from './Redux-Components/ApiFire/ApiStore';
import LifeCycle from './Class_Components/LifeCycle';
import ClickCounter from './Class_Components/ClickCounter';
import HoverCounter from './Class_Components/HoverCounter';
import User from './Class_Components/RenderProps/User';
import RenderPropsCounter from './Class_Components/RenderProps/RenderPropsCounter';
import RenderPropsHover from './Class_Components/RenderProps/RenderPropsHover';
import RenderCounter from './Class_Components/RenderProps/RenderCounter';
import MyForm from './Hooks_components/MyForm';
import PureCompo from './Class_Components/PureComponent';
import ParentCompo from './Class_Components/ParentCompo';
import RefsDemo from './Class_Components/RefsDemo';
import FocusInput from './Class_Components/FocusInput';
import FRParentInput from './Class_Components/FRParentInput';


// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const obj={
  color:"red"
}

export const UserContext =React.createContext()
export const ChannelContext=React.createContext()
function App() {
  return (

    <div className="hello">
      {/* <h1>hello I m app component</h1> */}
      <h1 style={obj}>Make your hands dirty</h1>
      <FRParentInput/>
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <h2>I am SAI</h2> */}
      {/* <ParentCompo/> */}
      {/* <MyForm/> */}
      {/* <RenderCounter render={(count,incrementCount)=> <RenderPropsCounter count={count} incrementCount={incrementCount} />} />
      <RenderCounter render={(count,incrementCount)=> <RenderPropsHover count={count} incrementCount={incrementCount} />} /> */}
      {/* <User render={(isLoggedIn)=> isLoggedIn?"well come sai":"user"}/>
      <RenderPropsCounter/>
      <RenderPropsHover/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
        {/* <ApiComponent/> */}
      {/* <LifeCycle/> */}
      {/* <Provider store={FetchStore}>
            <ApiComponent/> 
      </Provider>   */}
    
    
      {/* <CounterClass/>     */}
      {/* <File/> */}
      {/* <Stylesheet Color={true} /> */}
      {/* <Provider store={rootStore}>
        <CakeShop/>
        <HooksCakeShop/>
      <LolliPopShop/>
      <NewCakeContainer/>

     </Provider> */}
     {/* <Provider store={store1}>
       <HooksIceCreamShop/>
       
       
     </Provider> */}
     {/* <h1>app.js</h1> */}

   
    
      {/* <Object/> */}
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
