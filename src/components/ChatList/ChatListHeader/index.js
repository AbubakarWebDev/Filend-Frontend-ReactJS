import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiPlusCircle } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { homePageActions } from '../../../store/slices/homePageSlice';

import styles from './style.module.scss';
const { chatListHeader, toggleBtn, btnContainer } = styles;

function ChatListHeader({ handleClick }) {
    const dispatch = useDispatch();

    return (
        <div className={chatListHeader}>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <h4>My Chats</h4>

                <button
                    className={`btn btn-dark ${toggleBtn}`}
                    onClick={() => dispatch(homePageActions.setChatRoom(true))}
                >
                    <FiArrowRight />
                </button>
            </div>

            <div className={`w-100 d-flex justify-content-between align-items-center ${btnContainer}`}>
                <button
                    type="button"
                    className="btn btn-dark d-flex align-items-center me-2"
                    onClick={() => dispatch(homePageActions.setSearchUserSidebar(true))}
                >
                    <span className="me-2 text-nowrap">Find Friends</span>
                    <FaSearch />
                </button>

                <button
                    type="button"
                    onClick={handleClick}
                    className="btn btn-dark d-flex align-items-center"
                >
                    <span className="me-2 text-nowrap">New Group Chat</span>
                    <HiPlusCircle />
                </button>
            </div>

        </div>
    )
}

export default React.memo(ChatListHeader);