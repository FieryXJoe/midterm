import { Navigate,useNavigate, useParams } from 'react-router-dom';
import FetchingData from './FetchingData';

function ViewItem() {
  const {itemNum} = useParams();
  return (
      <div className="view-item">
        <FetchingData number = {itemNum} />
      </div>
  );
}

export default ViewItem;
