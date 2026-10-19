// import Button from "./components/Button";
// import { useState } from "react";
// import Alert from "./components/Alert";

// function App() {
//   const [alertVisible, SetAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => SetAlertVisibility(false)}>
//           My Alert
//           <br />
//           <strong>Holy guacamole!</strong>You should check in on some of those
//           fields below.
//         </Alert>
//       )}

//       <Button color="primary" onClick={() => SetAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }

// export default App;

// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div className="alert alert-primary" role="alert">
//       <Alert>
//         Hello <span> World</span>
//       </Alert>
//     </div>
//   );
// }

// // Export the App Component as well
// export default App;

import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisco", "Aba", "Port Harcourt", "Enugu"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  } ;
  return <div>
    <ListGroup items={items} heading="Cities"onSelectItem={handleSelectItem}/>
    </div>
};

// Export the App Component as well
export default App;
