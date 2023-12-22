
import { Outlet } from 'react-router-dom';
const Main = () => {
     return (
          <div className=' w-full'>
            
               <div>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Main;