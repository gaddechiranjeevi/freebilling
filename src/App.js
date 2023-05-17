import BillApp from "./Mybilling/BillingApp";
import UserApp from "./User/Component/UserApp";
import "./App.css";

// user details



function App() {
  if(localStorage.getItem("Key") == null){
    return (
      <div>
    
         <UserApp/>
      </div>
    );
    }else{
      return (
        <div>
          
           <BillApp/>
        </div>
      );
    }
}

export default App;
