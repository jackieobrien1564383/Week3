import {
    spreadObj,
    objAssign,
    getObjEntries,
    getObjectValues,
    destructureObj
  } from "./objectMethods";
  
  /* Enter value between  1 - 9 */
  
  function testObjectMethod(value) {
    switch (value) {
      case 1:
        console.log(spreadObj());
        break;
      case 2:
        console.log(objAssign());
        break;
      case 3:
        console.log(getObjEntries());
        break;
      case 4:
        console.log(getObjectValues());
        break;
      case 5:
        console.log(destructureObj());
        break;
      default:
        console.log("Unknow number");
        break;
    }
  }
  
  /* Enter value between  1 - 9 */
  testObjectMethod(5);
  