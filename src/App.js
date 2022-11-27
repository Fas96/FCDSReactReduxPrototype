// import './App.css';
// import {useDispatch, useSelector} from "react-redux";
// import {actions} from "./store/index";
// const App= props=> {
//   const counter=useSelector(state=>state.counter);
//     const dispatch = useDispatch();
//     // const decrement=()=>{
//     //    return  dispatch({type: "DECREMENT"});
//     // }
//     //
//     // const increment=()=> {
//     //     return dispatch({type: "INCREMENT"});
//     // }
//
//     return (
//       <div >
//           <h1>Counter App</h1>
//         <h2>Counter: {counter}</h2>
//                 <button onClick={()=>dispatch(actions.add())}>Increment</button>
//             <button onClick={()=>dispatch(actions.sub())}>SUB</button>
//             <button onClick={()=>dispatch(actions.mul())}>MUL</button>
//             <button onClick={()=>dispatch(actions.div(5))}>DIV</button>
//             <button onClick={()=>dispatch(actions.res())}>RESET</button>
//
//
//       </div>
//   );
// }
//
// export default App;
import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector} from "react-redux";

function App() {
    const isAuthorized=useSelector(state=>state.auth.isAuthenticated);
    console.log(isAuthorized);
    return (
        <div className="App">
            {!isAuthorized && <Auth/>}
            {isAuthorized && <Layout/>}

        </div>
    );
}

export default App;