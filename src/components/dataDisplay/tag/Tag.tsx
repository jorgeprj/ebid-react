import React, { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
    return(
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
            {children}
        </span>
    )
}

export default Tag