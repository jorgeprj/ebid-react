import React, { useEffect } from 'react';
import { Product } from '../../../types/Product';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

interface ModalProps {
    modalId: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    product: Product;
}

const Modal: React.FC<ModalProps> = ({ modalId, setModal, product }) => {
    const hideModal = () => setModal(false);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <>
            <div
                id={modalId}
                tabIndex={-1}
                aria-hidden="true"
                className={`fixed flex items-center justify-center inset-0 z-50`}
            >
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="relative p-4 w-full max-w-xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <div className='flex items-center'>
                                <CheckBadgeIcon className='h-6 w-6 text-black' />
                                <div className='ml-4'>
                                    <h3 className="text-xl font-semibold text-gray-900 ">
                                        Authentication Certificate
                                    </h3>
                                    <p className='text-gray-4 00 font-normal text-sm text-gray-400 text-nowrap'>ID: {product.code}</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={(hideModal)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500">
                                {product.description}
                            </p>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <p className="text-base leading-relaxed font-semibold text-gray-900">
                                        Brand:
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500">
                                        {product.authentication.brand}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <p className="text-base leading-relaxed font-semibold text-gray-900">
                                        Material:
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500">
                                        {product.authentication.material}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <p className="text-base leading-relaxed font-semibold text-gray-900">
                                        Certificate Link:
                                    </p>
                                    <p className="text-base leading-relaxed text-blue-500 hover:underline cursor-pointer">
                                        {product.authentication.link}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <p className="text-base leading-relaxed font-semibold text-gray-900">
                                        Authentication ID:
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500">
                                        {product.code}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <p className="text-base leading-relaxed font-semibold text-gray-900">
                                        Date Code:
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500">
                                        {product.authentication.date_code}
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                            <button
                                onClick={hideModal}
                                type="button"
                                className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Close Authentication Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;