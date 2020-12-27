import * as $protobuf from "protobufjs";
/** Namespace dto. */
export namespace dto {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo userId */
        userId?: (Long|null);

        /** UserInfo password */
        password?: (string|null);

        /** UserInfo nickname */
        nickname?: (string|null);

        /** UserInfo email */
        email?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IUserInfo);

        /** UserInfo userId. */
        public userId: Long;

        /** UserInfo password. */
        public password: string;

        /** UserInfo nickname. */
        public nickname: string;

        /** UserInfo email. */
        public email: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: dto.IUserInfo): dto.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link dto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link dto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): dto.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupInfo. */
    interface IGroupInfo {

        /** GroupInfo groupId */
        groupId?: (Long|null);

        /** GroupInfo groupName */
        groupName?: (string|null);

        /** GroupInfo ownerId */
        ownerId?: (Long|null);
    }

    /** Represents a GroupInfo. */
    class GroupInfo implements IGroupInfo {

        /**
         * Constructs a new GroupInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGroupInfo);

        /** GroupInfo groupId. */
        public groupId: Long;

        /** GroupInfo groupName. */
        public groupName: string;

        /** GroupInfo ownerId. */
        public ownerId: Long;

        /**
         * Creates a new GroupInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInfo instance
         */
        public static create(properties?: dto.IGroupInfo): dto.GroupInfo;

        /**
         * Encodes the specified GroupInfo message. Does not implicitly {@link dto.GroupInfo.verify|verify} messages.
         * @param message GroupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link dto.GroupInfo.verify|verify} messages.
         * @param message GroupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GroupInfo;

        /**
         * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GroupInfo;

        /**
         * Verifies a GroupInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInfo
         */
        public static fromObject(object: { [k: string]: any }): dto.GroupInfo;

        /**
         * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
         * @param message GroupInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq nickname */
        nickname?: (string|null);

        /** RegisterReq password */
        password?: (string|null);
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRegisterReq);

        /** RegisterReq nickname. */
        public nickname: string;

        /** RegisterReq password. */
        public password: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: dto.IRegisterReq): dto.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link dto.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link dto.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterReq
         */
        public static fromObject(object: { [k: string]: any }): dto.RegisterReq;

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @param message RegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RegisterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterResp. */
    interface IRegisterResp {

        /** RegisterResp ok */
        ok?: (boolean|null);

        /** RegisterResp msg */
        msg?: (string|null);

        /** RegisterResp userInfo */
        userInfo?: (dto.IUserInfo|null);
    }

    /** Represents a RegisterResp. */
    class RegisterResp implements IRegisterResp {

        /**
         * Constructs a new RegisterResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRegisterResp);

        /** RegisterResp ok. */
        public ok: boolean;

        /** RegisterResp msg. */
        public msg: string;

        /** RegisterResp userInfo. */
        public userInfo?: (dto.IUserInfo|null);

        /**
         * Creates a new RegisterResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterResp instance
         */
        public static create(properties?: dto.IRegisterResp): dto.RegisterResp;

        /**
         * Encodes the specified RegisterResp message. Does not implicitly {@link dto.RegisterResp.verify|verify} messages.
         * @param message RegisterResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRegisterResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterResp message, length delimited. Does not implicitly {@link dto.RegisterResp.verify|verify} messages.
         * @param message RegisterResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRegisterResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RegisterResp;

        /**
         * Decodes a RegisterResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RegisterResp;

        /**
         * Verifies a RegisterResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterResp
         */
        public static fromObject(object: { [k: string]: any }): dto.RegisterResp;

        /**
         * Creates a plain object from a RegisterResp message. Also converts values to other types if specified.
         * @param message RegisterResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RegisterResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq userId */
        userId?: (Long|null);

        /** LoginReq password */
        password?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ILoginReq);

        /** LoginReq userId. */
        public userId: Long;

        /** LoginReq password. */
        public password: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: dto.ILoginReq): dto.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link dto.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link dto.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): dto.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResp. */
    interface ILoginResp {

        /** LoginResp ok */
        ok?: (boolean|null);

        /** LoginResp msg */
        msg?: (string|null);

        /** LoginResp token */
        token?: (string|null);
    }

    /** Represents a LoginResp. */
    class LoginResp implements ILoginResp {

        /**
         * Constructs a new LoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ILoginResp);

        /** LoginResp ok. */
        public ok: boolean;

        /** LoginResp msg. */
        public msg: string;

        /** LoginResp token. */
        public token: string;

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResp instance
         */
        public static create(properties?: dto.ILoginResp): dto.LoginResp;

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link dto.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link dto.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.LoginResp;

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.LoginResp;

        /**
         * Verifies a LoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResp
         */
        public static fromObject(object: { [k: string]: any }): dto.LoginResp;

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @param message LoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.LoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetUserInfoReq. */
    interface ISetUserInfoReq {

        /** SetUserInfoReq userInfos */
        userInfos?: (dto.IUserInfo[]|null);
    }

    /** Represents a SetUserInfoReq. */
    class SetUserInfoReq implements ISetUserInfoReq {

        /**
         * Constructs a new SetUserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISetUserInfoReq);

        /** SetUserInfoReq userInfos. */
        public userInfos: dto.IUserInfo[];

        /**
         * Creates a new SetUserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetUserInfoReq instance
         */
        public static create(properties?: dto.ISetUserInfoReq): dto.SetUserInfoReq;

        /**
         * Encodes the specified SetUserInfoReq message. Does not implicitly {@link dto.SetUserInfoReq.verify|verify} messages.
         * @param message SetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetUserInfoReq message, length delimited. Does not implicitly {@link dto.SetUserInfoReq.verify|verify} messages.
         * @param message SetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetUserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SetUserInfoReq;

        /**
         * Decodes a SetUserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SetUserInfoReq;

        /**
         * Verifies a SetUserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetUserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): dto.SetUserInfoReq;

        /**
         * Creates a plain object from a SetUserInfoReq message. Also converts values to other types if specified.
         * @param message SetUserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetUserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetUserInfoResp. */
    interface ISetUserInfoResp {
    }

    /** Represents a SetUserInfoResp. */
    class SetUserInfoResp implements ISetUserInfoResp {

        /**
         * Constructs a new SetUserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISetUserInfoResp);

        /**
         * Creates a new SetUserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetUserInfoResp instance
         */
        public static create(properties?: dto.ISetUserInfoResp): dto.SetUserInfoResp;

        /**
         * Encodes the specified SetUserInfoResp message. Does not implicitly {@link dto.SetUserInfoResp.verify|verify} messages.
         * @param message SetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetUserInfoResp message, length delimited. Does not implicitly {@link dto.SetUserInfoResp.verify|verify} messages.
         * @param message SetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetUserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SetUserInfoResp;

        /**
         * Decodes a SetUserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SetUserInfoResp;

        /**
         * Verifies a SetUserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetUserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): dto.SetUserInfoResp;

        /**
         * Creates a plain object from a SetUserInfoResp message. Also converts values to other types if specified.
         * @param message SetUserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SetUserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetUserInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserInfoReq. */
    interface IGetUserInfoReq {

        /** GetUserInfoReq userIds */
        userIds?: (Long[]|null);
    }

    /** Represents a GetUserInfoReq. */
    class GetUserInfoReq implements IGetUserInfoReq {

        /**
         * Constructs a new GetUserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetUserInfoReq);

        /** GetUserInfoReq userIds. */
        public userIds: Long[];

        /**
         * Creates a new GetUserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoReq instance
         */
        public static create(properties?: dto.IGetUserInfoReq): dto.GetUserInfoReq;

        /**
         * Encodes the specified GetUserInfoReq message. Does not implicitly {@link dto.GetUserInfoReq.verify|verify} messages.
         * @param message GetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link dto.GetUserInfoReq.verify|verify} messages.
         * @param message GetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetUserInfoReq;

        /**
         * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetUserInfoReq;

        /**
         * Verifies a GetUserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): dto.GetUserInfoReq;

        /**
         * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
         * @param message GetUserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserInfoResp. */
    interface IGetUserInfoResp {

        /** GetUserInfoResp userInfos */
        userInfos?: (dto.IUserInfo[]|null);
    }

    /** Represents a GetUserInfoResp. */
    class GetUserInfoResp implements IGetUserInfoResp {

        /**
         * Constructs a new GetUserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetUserInfoResp);

        /** GetUserInfoResp userInfos. */
        public userInfos: dto.IUserInfo[];

        /**
         * Creates a new GetUserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoResp instance
         */
        public static create(properties?: dto.IGetUserInfoResp): dto.GetUserInfoResp;

        /**
         * Encodes the specified GetUserInfoResp message. Does not implicitly {@link dto.GetUserInfoResp.verify|verify} messages.
         * @param message GetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoResp message, length delimited. Does not implicitly {@link dto.GetUserInfoResp.verify|verify} messages.
         * @param message GetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetUserInfoResp;

        /**
         * Decodes a GetUserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetUserInfoResp;

        /**
         * Verifies a GetUserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): dto.GetUserInfoResp;

        /**
         * Creates a plain object from a GetUserInfoResp message. Also converts values to other types if specified.
         * @param message GetUserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetUserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateGroupReq. */
    interface ICreateGroupReq {

        /** CreateGroupReq groupName */
        groupName?: (string|null);
    }

    /** Represents a CreateGroupReq. */
    class CreateGroupReq implements ICreateGroupReq {

        /**
         * Constructs a new CreateGroupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICreateGroupReq);

        /** CreateGroupReq groupName. */
        public groupName: string;

        /**
         * Creates a new CreateGroupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGroupReq instance
         */
        public static create(properties?: dto.ICreateGroupReq): dto.CreateGroupReq;

        /**
         * Encodes the specified CreateGroupReq message. Does not implicitly {@link dto.CreateGroupReq.verify|verify} messages.
         * @param message CreateGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICreateGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateGroupReq message, length delimited. Does not implicitly {@link dto.CreateGroupReq.verify|verify} messages.
         * @param message CreateGroupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICreateGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.CreateGroupReq;

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.CreateGroupReq;

        /**
         * Verifies a CreateGroupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateGroupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGroupReq
         */
        public static fromObject(object: { [k: string]: any }): dto.CreateGroupReq;

        /**
         * Creates a plain object from a CreateGroupReq message. Also converts values to other types if specified.
         * @param message CreateGroupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.CreateGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateGroupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateGroupResp. */
    interface ICreateGroupResp {

        /** CreateGroupResp groupInfo */
        groupInfo?: (dto.IGroupInfo|null);
    }

    /** Represents a CreateGroupResp. */
    class CreateGroupResp implements ICreateGroupResp {

        /**
         * Constructs a new CreateGroupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICreateGroupResp);

        /** CreateGroupResp groupInfo. */
        public groupInfo?: (dto.IGroupInfo|null);

        /**
         * Creates a new CreateGroupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGroupResp instance
         */
        public static create(properties?: dto.ICreateGroupResp): dto.CreateGroupResp;

        /**
         * Encodes the specified CreateGroupResp message. Does not implicitly {@link dto.CreateGroupResp.verify|verify} messages.
         * @param message CreateGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICreateGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateGroupResp message, length delimited. Does not implicitly {@link dto.CreateGroupResp.verify|verify} messages.
         * @param message CreateGroupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICreateGroupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.CreateGroupResp;

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.CreateGroupResp;

        /**
         * Verifies a CreateGroupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateGroupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGroupResp
         */
        public static fromObject(object: { [k: string]: any }): dto.CreateGroupResp;

        /**
         * Creates a plain object from a CreateGroupResp message. Also converts values to other types if specified.
         * @param message CreateGroupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.CreateGroupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateGroupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetFriendsReq. */
    interface IGetFriendsReq {
    }

    /** Represents a GetFriendsReq. */
    class GetFriendsReq implements IGetFriendsReq {

        /**
         * Constructs a new GetFriendsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetFriendsReq);

        /**
         * Creates a new GetFriendsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFriendsReq instance
         */
        public static create(properties?: dto.IGetFriendsReq): dto.GetFriendsReq;

        /**
         * Encodes the specified GetFriendsReq message. Does not implicitly {@link dto.GetFriendsReq.verify|verify} messages.
         * @param message GetFriendsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetFriendsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFriendsReq message, length delimited. Does not implicitly {@link dto.GetFriendsReq.verify|verify} messages.
         * @param message GetFriendsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetFriendsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFriendsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFriendsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetFriendsReq;

        /**
         * Decodes a GetFriendsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFriendsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetFriendsReq;

        /**
         * Verifies a GetFriendsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFriendsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFriendsReq
         */
        public static fromObject(object: { [k: string]: any }): dto.GetFriendsReq;

        /**
         * Creates a plain object from a GetFriendsReq message. Also converts values to other types if specified.
         * @param message GetFriendsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetFriendsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFriendsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetFriendsResp. */
    interface IGetFriendsResp {

        /** GetFriendsResp userInfos */
        userInfos?: (dto.IUserInfo[]|null);
    }

    /** Represents a GetFriendsResp. */
    class GetFriendsResp implements IGetFriendsResp {

        /**
         * Constructs a new GetFriendsResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetFriendsResp);

        /** GetFriendsResp userInfos. */
        public userInfos: dto.IUserInfo[];

        /**
         * Creates a new GetFriendsResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFriendsResp instance
         */
        public static create(properties?: dto.IGetFriendsResp): dto.GetFriendsResp;

        /**
         * Encodes the specified GetFriendsResp message. Does not implicitly {@link dto.GetFriendsResp.verify|verify} messages.
         * @param message GetFriendsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetFriendsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFriendsResp message, length delimited. Does not implicitly {@link dto.GetFriendsResp.verify|verify} messages.
         * @param message GetFriendsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetFriendsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFriendsResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFriendsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetFriendsResp;

        /**
         * Decodes a GetFriendsResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFriendsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetFriendsResp;

        /**
         * Verifies a GetFriendsResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFriendsResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFriendsResp
         */
        public static fromObject(object: { [k: string]: any }): dto.GetFriendsResp;

        /**
         * Creates a plain object from a GetFriendsResp message. Also converts values to other types if specified.
         * @param message GetFriendsResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetFriendsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFriendsResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupsReq. */
    interface IGetGroupsReq {
    }

    /** Represents a GetGroupsReq. */
    class GetGroupsReq implements IGetGroupsReq {

        /**
         * Constructs a new GetGroupsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetGroupsReq);

        /**
         * Creates a new GetGroupsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupsReq instance
         */
        public static create(properties?: dto.IGetGroupsReq): dto.GetGroupsReq;

        /**
         * Encodes the specified GetGroupsReq message. Does not implicitly {@link dto.GetGroupsReq.verify|verify} messages.
         * @param message GetGroupsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetGroupsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupsReq message, length delimited. Does not implicitly {@link dto.GetGroupsReq.verify|verify} messages.
         * @param message GetGroupsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetGroupsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetGroupsReq;

        /**
         * Decodes a GetGroupsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetGroupsReq;

        /**
         * Verifies a GetGroupsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupsReq
         */
        public static fromObject(object: { [k: string]: any }): dto.GetGroupsReq;

        /**
         * Creates a plain object from a GetGroupsReq message. Also converts values to other types if specified.
         * @param message GetGroupsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetGroupsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupsResp. */
    interface IGetGroupsResp {

        /** GetGroupsResp groupInfos */
        groupInfos?: (dto.IGroupInfo[]|null);
    }

    /** Represents a GetGroupsResp. */
    class GetGroupsResp implements IGetGroupsResp {

        /**
         * Constructs a new GetGroupsResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetGroupsResp);

        /** GetGroupsResp groupInfos. */
        public groupInfos: dto.IGroupInfo[];

        /**
         * Creates a new GetGroupsResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupsResp instance
         */
        public static create(properties?: dto.IGetGroupsResp): dto.GetGroupsResp;

        /**
         * Encodes the specified GetGroupsResp message. Does not implicitly {@link dto.GetGroupsResp.verify|verify} messages.
         * @param message GetGroupsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetGroupsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupsResp message, length delimited. Does not implicitly {@link dto.GetGroupsResp.verify|verify} messages.
         * @param message GetGroupsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetGroupsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupsResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetGroupsResp;

        /**
         * Decodes a GetGroupsResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetGroupsResp;

        /**
         * Verifies a GetGroupsResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupsResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupsResp
         */
        public static fromObject(object: { [k: string]: any }): dto.GetGroupsResp;

        /**
         * Creates a plain object from a GetGroupsResp message. Also converts values to other types if specified.
         * @param message GetGroupsResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetGroupsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupsResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessAddReq. */
    interface IProcessAddReq {

        /** ProcessAddReq reqId */
        reqId?: (Long|null);

        /** ProcessAddReq accept */
        accept?: (boolean|null);
    }

    /** Represents a ProcessAddReq. */
    class ProcessAddReq implements IProcessAddReq {

        /**
         * Constructs a new ProcessAddReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProcessAddReq);

        /** ProcessAddReq reqId. */
        public reqId: Long;

        /** ProcessAddReq accept. */
        public accept: boolean;

        /**
         * Creates a new ProcessAddReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProcessAddReq instance
         */
        public static create(properties?: dto.IProcessAddReq): dto.ProcessAddReq;

        /**
         * Encodes the specified ProcessAddReq message. Does not implicitly {@link dto.ProcessAddReq.verify|verify} messages.
         * @param message ProcessAddReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProcessAddReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProcessAddReq message, length delimited. Does not implicitly {@link dto.ProcessAddReq.verify|verify} messages.
         * @param message ProcessAddReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProcessAddReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProcessAddReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProcessAddReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProcessAddReq;

        /**
         * Decodes a ProcessAddReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProcessAddReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProcessAddReq;

        /**
         * Verifies a ProcessAddReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProcessAddReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessAddReq
         */
        public static fromObject(object: { [k: string]: any }): dto.ProcessAddReq;

        /**
         * Creates a plain object from a ProcessAddReq message. Also converts values to other types if specified.
         * @param message ProcessAddReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProcessAddReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessAddReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessAddResp. */
    interface IProcessAddResp {
    }

    /** Represents a ProcessAddResp. */
    class ProcessAddResp implements IProcessAddResp {

        /**
         * Constructs a new ProcessAddResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProcessAddResp);

        /**
         * Creates a new ProcessAddResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProcessAddResp instance
         */
        public static create(properties?: dto.IProcessAddResp): dto.ProcessAddResp;

        /**
         * Encodes the specified ProcessAddResp message. Does not implicitly {@link dto.ProcessAddResp.verify|verify} messages.
         * @param message ProcessAddResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProcessAddResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProcessAddResp message, length delimited. Does not implicitly {@link dto.ProcessAddResp.verify|verify} messages.
         * @param message ProcessAddResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProcessAddResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProcessAddResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProcessAddResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProcessAddResp;

        /**
         * Decodes a ProcessAddResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProcessAddResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProcessAddResp;

        /**
         * Verifies a ProcessAddResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProcessAddResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessAddResp
         */
        public static fromObject(object: { [k: string]: any }): dto.ProcessAddResp;

        /**
         * Creates a plain object from a ProcessAddResp message. Also converts values to other types if specified.
         * @param message ProcessAddResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProcessAddResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessAddResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request reqId */
        reqId?: (Long|null);

        /** Request reqType */
        reqType?: (dto.Request.RequestType|null);

        /** Request fromId */
        fromId?: (Long|null);

        /** Request toId */
        toId?: (Long|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRequest);

        /** Request reqId. */
        public reqId: Long;

        /** Request reqType. */
        public reqType: dto.Request.RequestType;

        /** Request fromId. */
        public fromId: Long;

        /** Request toId. */
        public toId: Long;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: dto.IRequest): dto.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link dto.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link dto.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): dto.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Request {

        /** RequestType enum. */
        enum RequestType {
            TFriend = 0,
            TGroup = 1
        }
    }

    /** Properties of an Elem. */
    interface IElem {

        /** Elem text */
        text?: (string|null);

        /** Elem fileUrl */
        fileUrl?: (string|null);

        /** Elem imageUrl */
        imageUrl?: (string|null);
    }

    /** Represents an Elem. */
    class Elem implements IElem {

        /**
         * Constructs a new Elem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IElem);

        /** Elem text. */
        public text: string;

        /** Elem fileUrl. */
        public fileUrl: string;

        /** Elem imageUrl. */
        public imageUrl: string;

        /**
         * Creates a new Elem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Elem instance
         */
        public static create(properties?: dto.IElem): dto.Elem;

        /**
         * Encodes the specified Elem message. Does not implicitly {@link dto.Elem.verify|verify} messages.
         * @param message Elem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Elem message, length delimited. Does not implicitly {@link dto.Elem.verify|verify} messages.
         * @param message Elem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Elem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Elem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Elem;

        /**
         * Decodes an Elem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Elem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Elem;

        /**
         * Verifies an Elem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Elem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Elem
         */
        public static fromObject(object: { [k: string]: any }): dto.Elem;

        /**
         * Creates a plain object from an Elem message. Also converts values to other types if specified.
         * @param message Elem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Elem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Elem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Msg. */
    interface IMsg {

        /** Msg msgType */
        msgType?: (dto.Msg.MsgType|null);

        /** Msg fromId */
        fromId?: (Long|null);

        /** Msg toId */
        toId?: (Long|null);

        /** Msg elements */
        elements?: (dto.IElem[]|null);
    }

    /** Represents a Msg. */
    class Msg implements IMsg {

        /**
         * Constructs a new Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IMsg);

        /** Msg msgType. */
        public msgType: dto.Msg.MsgType;

        /** Msg fromId. */
        public fromId: Long;

        /** Msg toId. */
        public toId: Long;

        /** Msg elements. */
        public elements: dto.IElem[];

        /**
         * Creates a new Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Msg instance
         */
        public static create(properties?: dto.IMsg): dto.Msg;

        /**
         * Encodes the specified Msg message. Does not implicitly {@link dto.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link dto.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Msg;

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Msg;

        /**
         * Verifies a Msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Msg
         */
        public static fromObject(object: { [k: string]: any }): dto.Msg;

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @param message Msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Msg {

        /** MsgType enum. */
        enum MsgType {
            TFriend = 0,
            TGroup = 1
        }
    }

    /** Properties of a Packet. */
    interface IPacket {

        /** Packet timestamp */
        timestamp?: (Long|null);

        /** Packet packetType */
        packetType?: (dto.Packet.PacketType|null);

        /** Packet request */
        request?: (dto.IRequest|null);

        /** Packet msg */
        msg?: (dto.IMsg|null);
    }

    /** Represents a Packet. */
    class Packet implements IPacket {

        /**
         * Constructs a new Packet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPacket);

        /** Packet timestamp. */
        public timestamp: Long;

        /** Packet packetType. */
        public packetType: dto.Packet.PacketType;

        /** Packet request. */
        public request?: (dto.IRequest|null);

        /** Packet msg. */
        public msg?: (dto.IMsg|null);

        /** Packet Data. */
        public Data?: ("request"|"msg");

        /**
         * Creates a new Packet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Packet instance
         */
        public static create(properties?: dto.IPacket): dto.Packet;

        /**
         * Encodes the specified Packet message. Does not implicitly {@link dto.Packet.verify|verify} messages.
         * @param message Packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Packet message, length delimited. Does not implicitly {@link dto.Packet.verify|verify} messages.
         * @param message Packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Packet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Packet;

        /**
         * Decodes a Packet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Packet;

        /**
         * Verifies a Packet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Packet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Packet
         */
        public static fromObject(object: { [k: string]: any }): dto.Packet;

        /**
         * Creates a plain object from a Packet message. Also converts values to other types if specified.
         * @param message Packet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Packet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Packet {

        /** PacketType enum. */
        enum PacketType {
            TRequest = 0,
            TMsg = 1
        }
    }

    /** Represents an EcustQQService */
    class EcustQQService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EcustQQService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EcustQQService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EcustQQService;

        /**
         * Calls Register.
         * @param request RegisterReq message or plain object
         * @param callback Node-style callback called with the error, if any, and RegisterResp
         */
        public register(request: dto.IRegisterReq, callback: dto.EcustQQService.RegisterCallback): void;

        /**
         * Calls Register.
         * @param request RegisterReq message or plain object
         * @returns Promise
         */
        public register(request: dto.IRegisterReq): Promise<dto.RegisterResp>;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResp
         */
        public login(request: dto.ILoginReq, callback: dto.EcustQQService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         * @returns Promise
         */
        public login(request: dto.ILoginReq): Promise<dto.LoginResp>;

        /**
         * Calls SetUserInfo.
         * @param request SetUserInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SetUserInfoResp
         */
        public setUserInfo(request: dto.ISetUserInfoReq, callback: dto.EcustQQService.SetUserInfoCallback): void;

        /**
         * Calls SetUserInfo.
         * @param request SetUserInfoReq message or plain object
         * @returns Promise
         */
        public setUserInfo(request: dto.ISetUserInfoReq): Promise<dto.SetUserInfoResp>;

        /**
         * Calls GetUserInfo.
         * @param request GetUserInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserInfoResp
         */
        public getUserInfo(request: dto.IGetUserInfoReq, callback: dto.EcustQQService.GetUserInfoCallback): void;

        /**
         * Calls GetUserInfo.
         * @param request GetUserInfoReq message or plain object
         * @returns Promise
         */
        public getUserInfo(request: dto.IGetUserInfoReq): Promise<dto.GetUserInfoResp>;

        /**
         * Calls CreateGroup.
         * @param request CreateGroupReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateGroupResp
         */
        public createGroup(request: dto.ICreateGroupReq, callback: dto.EcustQQService.CreateGroupCallback): void;

        /**
         * Calls CreateGroup.
         * @param request CreateGroupReq message or plain object
         * @returns Promise
         */
        public createGroup(request: dto.ICreateGroupReq): Promise<dto.CreateGroupResp>;

        /**
         * Calls GetFriends.
         * @param request GetFriendsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetFriendsResp
         */
        public getFriends(request: dto.IGetFriendsReq, callback: dto.EcustQQService.GetFriendsCallback): void;

        /**
         * Calls GetFriends.
         * @param request GetFriendsReq message or plain object
         * @returns Promise
         */
        public getFriends(request: dto.IGetFriendsReq): Promise<dto.GetFriendsResp>;

        /**
         * Calls GetGroups.
         * @param request GetGroupsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGroupsResp
         */
        public getGroups(request: dto.IGetGroupsReq, callback: dto.EcustQQService.GetGroupsCallback): void;

        /**
         * Calls GetGroups.
         * @param request GetGroupsReq message or plain object
         * @returns Promise
         */
        public getGroups(request: dto.IGetGroupsReq): Promise<dto.GetGroupsResp>;

        /**
         * Calls ProcessAdd.
         * @param request ProcessAddReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ProcessAddResp
         */
        public processAdd(request: dto.IProcessAddReq, callback: dto.EcustQQService.ProcessAddCallback): void;

        /**
         * Calls ProcessAdd.
         * @param request ProcessAddReq message or plain object
         * @returns Promise
         */
        public processAdd(request: dto.IProcessAddReq): Promise<dto.ProcessAddResp>;
    }

    namespace EcustQQService {

        /**
         * Callback as used by {@link dto.EcustQQService#register}.
         * @param error Error, if any
         * @param [response] RegisterResp
         */
        type RegisterCallback = (error: (Error|null), response?: dto.RegisterResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#login}.
         * @param error Error, if any
         * @param [response] LoginResp
         */
        type LoginCallback = (error: (Error|null), response?: dto.LoginResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#setUserInfo}.
         * @param error Error, if any
         * @param [response] SetUserInfoResp
         */
        type SetUserInfoCallback = (error: (Error|null), response?: dto.SetUserInfoResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#getUserInfo}.
         * @param error Error, if any
         * @param [response] GetUserInfoResp
         */
        type GetUserInfoCallback = (error: (Error|null), response?: dto.GetUserInfoResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#createGroup}.
         * @param error Error, if any
         * @param [response] CreateGroupResp
         */
        type CreateGroupCallback = (error: (Error|null), response?: dto.CreateGroupResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#getFriends}.
         * @param error Error, if any
         * @param [response] GetFriendsResp
         */
        type GetFriendsCallback = (error: (Error|null), response?: dto.GetFriendsResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#getGroups}.
         * @param error Error, if any
         * @param [response] GetGroupsResp
         */
        type GetGroupsCallback = (error: (Error|null), response?: dto.GetGroupsResp) => void;

        /**
         * Callback as used by {@link dto.EcustQQService#processAdd}.
         * @param error Error, if any
         * @param [response] ProcessAddResp
         */
        type ProcessAddCallback = (error: (Error|null), response?: dto.ProcessAddResp) => void;
    }
}
