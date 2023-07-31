import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import GroupChatProfile from "./GroupChatProfile";

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { getSender, capatalize } from '../../utils';

import brokenImage from "../../assets/images/broken-image.png";

import styles from "./style.module.scss";
const { chatProfileOverview, chatImg, groupChat, imageCancelBtn } = styles;

function ChatProfileModal({ show, onHide, chat, user, unMountModal, onLeaveGroup, onSubmit }) {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(
        `${import.meta.env.VITE_SERVER_BASE_URL}/${chat?.groupIcon}`
    );

    const sender = getSender(user, chat.users);

    const schemaObjShape = {
        groupName: yup.string().required('Group Name is required')
            .min(4, 'Group Name must be at least 4 characters')
            .max(25, 'Group Name cannot exceed 16 characters')
            .matches(
                /^[a-zA-Z0-9_ ]+$/,
                'Group Name can only contain alphanumeric characters and underscores'
            ),
    };

    if (chat.isGroupChat) {
        var avatar = chat.groupIcon;
        var chatName = chat.chatName;

        var isGroupAdmin = chat.groupAdmins.some(groupAdmin => groupAdmin._id === user._id);

        schemaObjShape.groupIcon = yup.mixed()
            .test("fileType", "Only image files are allowed", (value) => {
                return (value.length && ["image/jpeg", "image/png", "image/gif"].includes(value[0].type)) || (value === chat?.groupIcon);
            })
            .test("fileSize", "The file is too large", (value) => {
                return (value.length && value[0].size <= 1 * 1000 * 1000) || (value === chat?.groupIcon);
            });

        if (isGroupAdmin) {
            schemaObjShape.users = yup.array().of(yup.object()).min(1, 'Group Must Contains at least one User').required("Users is Required!");

            schemaObjShape.groupAdmins = yup.array().of(yup.object()).min(1, 'Group Must Contains at least one Admin').required("Group Admin is Required!");
        }
    }
    else {
        avatar = sender.avatar;
        chatName = `${capatalize(sender.firstName)} ${capatalize(sender.lastName)}`;
    }

    const { register, control, handleSubmit, resetField, formState: { errors } } = useForm({
        resolver: yupResolver(yup.object().shape(schemaObjShape)),
        defaultValues: {
            groupName: chatName,
            groupIcon: avatar
        },
        mode: "all"
    });

    function handleImageRemove() {
        resetField("groupIcon");
        setSelectedImage(`${import.meta.env.VITE_SERVER_BASE_URL}/${chat?.groupIcon}`);
    }

    function handleUpload(event) {
        if (event.target.files.length === 0) {
            setSelectedImage(brokenImage);
            event.preventDefault();
            return;
        }

        const file = event.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(file.type)) {
            setSelectedImage(brokenImage);
            event.preventDefault();
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => setSelectedImage(reader.result);
        reader.readAsDataURL(file);
    }

    const { ref, ...restFileFields } = register("groupIcon");

    return (
        <Modal show={show} onHide={onHide} onExited={unMountModal} backdrop="static">
            <Modal.Header closeButton={true}> </Modal.Header>

            <Modal.Body>
                <div className={chatProfileOverview}>
                    {chat.isGroupChat ? (
                        <>
                            {(selectedImage !== `${import.meta.env.VITE_SERVER_BASE_URL}/${chat?.groupIcon}`) && <button className={imageCancelBtn} onClick={handleImageRemove}>
                                <AiOutlineCloseCircle />
                            </button>}

                            <div
                                className={`${chatImg} ${groupChat}`}
                                onClick={() => fileInputRef.current.click()}
                            >
                                <img
                                    alt={chatName}
                                    src={selectedImage}
                                />
                            </div>

                            {errors.groupIcon && (
                                <b className="text-danger d-block mt-1">{errors.groupIcon.message}</b>
                            )}

                            <input
                                type="file"
                                className="d-none"
                                onBlur={restFileFields.onBlur}
                                name={restFileFields.name}
                                onChange={(e) => {
                                    restFileFields.onChange(e);
                                    handleUpload(e);
                                }}
                                ref={(e) => {
                                    ref(e);
                                    fileInputRef.current = e;
                                }}
                            />
                        </>
                    ) : (
                        <div className={chatImg}>
                            <img
                                alt={chatName}
                                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`}
                            />
                        </div>
                    )}

                    <p> {chatName} </p>

                    {!chat.isGroupChat && <p className="mb-3"> {sender.email} </p>}
                </div>

                {chat.isGroupChat && (
                    <GroupChatProfile
                        user={user}
                        chat={chat}
                        errors={errors}
                        control={control}
                        register={register}
                        isGroupAdmin={isGroupAdmin}
                    />
                )}
            </Modal.Body>

            {chat.isGroupChat && (
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>Update Group Chat</Button>
                    <Button variant="danger" onClick={onLeaveGroup}>Leave Group</Button>
                </Modal.Footer>
            )}
        </Modal>
    );
}

export default React.memo(ChatProfileModal);