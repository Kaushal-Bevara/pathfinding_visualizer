import React from 'react';

const Node = ({ row, col, isNodeActive}) => {
    const [isActive, setIsActive] = useState(isNodeActive);
    const switchActivity = () => {
        setIsActive(!isActive);
    }
    return (
        <div
            className={`grid-node ${isActive ? 'active' : 'inactive'}`}
            onClick={switchActivity}
        >
            
        </div>
  );
};

export default Node;
