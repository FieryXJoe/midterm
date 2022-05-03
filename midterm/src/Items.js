import { Navigate,useNavigate } from 'react-router-dom';
import FetchingAllData from './FetchingAllData';

function Items() {
  return (
      <div className="items">
          <FetchingAllData />
      </div>
  );
}

export default Items;
