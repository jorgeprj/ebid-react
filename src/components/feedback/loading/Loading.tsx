import React from 'react';
import styled from 'styled-components';

const Loader = styled.span`
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #22c55e;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 0.75s linear infinite;
`;

const Loading: React.FC = () => {
    return (
        <div style={{height: "80vh"}}>
            <div className='flex flex-col h-full items-center justify-center mb-96'>
                <div className="text-2xl">
                    <img src="../logo.png" className="h-12" alt="ebid Logo" />
                </div>
                <p className="text-gray-500 mb-4">Collectibles Auction </p>
                <Loader />
            </div>
        </div>

    );
};

export default Loading;