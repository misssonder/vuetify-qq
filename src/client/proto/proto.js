/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.dto = (function() {

    /**
     * Namespace dto.
     * @exports dto
     * @namespace
     */
    var dto = {};

    dto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof dto
         * @interface IUserInfo
         * @property {Long|null} [userId] UserInfo userId
         * @property {string|null} [password] UserInfo password
         * @property {string|null} [nickname] UserInfo nickname
         * @property {string|null} [email] UserInfo email
         */

        /**
         * Constructs a new UserInfo.
         * @memberof dto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {dto.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo userId.
         * @member {Long} userId
         * @memberof dto.UserInfo
         * @instance
         */
        UserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo password.
         * @member {string} password
         * @memberof dto.UserInfo
         * @instance
         */
        UserInfo.prototype.password = "";

        /**
         * UserInfo nickname.
         * @member {string} nickname
         * @memberof dto.UserInfo
         * @instance
         */
        UserInfo.prototype.nickname = "";

        /**
         * UserInfo email.
         * @member {string} email
         * @memberof dto.UserInfo
         * @instance
         */
        UserInfo.prototype.email = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof dto.UserInfo
         * @static
         * @param {dto.IUserInfo=} [properties] Properties to set
         * @returns {dto.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link dto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof dto.UserInfo
         * @static
         * @param {dto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link dto.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.UserInfo
         * @static
         * @param {dto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof dto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof dto.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.UserInfo)
                return object;
            var message = new $root.dto.UserInfo();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.password != null)
                message.password = String(object.password);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.UserInfo
         * @static
         * @param {dto.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.password = "";
                object.nickname = "";
                object.email = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof dto.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    dto.GroupInfo = (function() {

        /**
         * Properties of a GroupInfo.
         * @memberof dto
         * @interface IGroupInfo
         * @property {Long|null} [groupId] GroupInfo groupId
         * @property {string|null} [groupName] GroupInfo groupName
         * @property {Long|null} [ownerId] GroupInfo ownerId
         */

        /**
         * Constructs a new GroupInfo.
         * @memberof dto
         * @classdesc Represents a GroupInfo.
         * @implements IGroupInfo
         * @constructor
         * @param {dto.IGroupInfo=} [properties] Properties to set
         */
        function GroupInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupInfo groupId.
         * @member {Long} groupId
         * @memberof dto.GroupInfo
         * @instance
         */
        GroupInfo.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GroupInfo groupName.
         * @member {string} groupName
         * @memberof dto.GroupInfo
         * @instance
         */
        GroupInfo.prototype.groupName = "";

        /**
         * GroupInfo ownerId.
         * @member {Long} ownerId
         * @memberof dto.GroupInfo
         * @instance
         */
        GroupInfo.prototype.ownerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GroupInfo instance using the specified properties.
         * @function create
         * @memberof dto.GroupInfo
         * @static
         * @param {dto.IGroupInfo=} [properties] Properties to set
         * @returns {dto.GroupInfo} GroupInfo instance
         */
        GroupInfo.create = function create(properties) {
            return new GroupInfo(properties);
        };

        /**
         * Encodes the specified GroupInfo message. Does not implicitly {@link dto.GroupInfo.verify|verify} messages.
         * @function encode
         * @memberof dto.GroupInfo
         * @static
         * @param {dto.IGroupInfo} message GroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.groupName);
            if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ownerId);
            return writer;
        };

        /**
         * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link dto.GroupInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GroupInfo
         * @static
         * @param {dto.IGroupInfo} message GroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupInfo message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GroupInfo} GroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GroupInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.int64();
                    break;
                case 2:
                    message.groupName = reader.string();
                    break;
                case 3:
                    message.ownerId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GroupInfo} GroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupInfo message.
         * @function verify
         * @memberof dto.GroupInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            if (message.ownerId != null && message.hasOwnProperty("ownerId"))
                if (!$util.isInteger(message.ownerId) && !(message.ownerId && $util.isInteger(message.ownerId.low) && $util.isInteger(message.ownerId.high)))
                    return "ownerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GroupInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GroupInfo} GroupInfo
         */
        GroupInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GroupInfo)
                return object;
            var message = new $root.dto.GroupInfo();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            if (object.ownerId != null)
                if ($util.Long)
                    (message.ownerId = $util.Long.fromValue(object.ownerId)).unsigned = false;
                else if (typeof object.ownerId === "string")
                    message.ownerId = parseInt(object.ownerId, 10);
                else if (typeof object.ownerId === "number")
                    message.ownerId = object.ownerId;
                else if (typeof object.ownerId === "object")
                    message.ownerId = new $util.LongBits(object.ownerId.low >>> 0, object.ownerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GroupInfo
         * @static
         * @param {dto.GroupInfo} message GroupInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
                object.groupName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ownerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ownerId = options.longs === String ? "0" : 0;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            if (message.ownerId != null && message.hasOwnProperty("ownerId"))
                if (typeof message.ownerId === "number")
                    object.ownerId = options.longs === String ? String(message.ownerId) : message.ownerId;
                else
                    object.ownerId = options.longs === String ? $util.Long.prototype.toString.call(message.ownerId) : options.longs === Number ? new $util.LongBits(message.ownerId.low >>> 0, message.ownerId.high >>> 0).toNumber() : message.ownerId;
            return object;
        };

        /**
         * Converts this GroupInfo to JSON.
         * @function toJSON
         * @memberof dto.GroupInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupInfo;
    })();

    dto.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof dto
         * @interface IRegisterReq
         * @property {string|null} [nickname] RegisterReq nickname
         * @property {string|null} [password] RegisterReq password
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof dto
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {dto.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq nickname.
         * @member {string} nickname
         * @memberof dto.RegisterReq
         * @instance
         */
        RegisterReq.prototype.nickname = "";

        /**
         * RegisterReq password.
         * @member {string} password
         * @memberof dto.RegisterReq
         * @instance
         */
        RegisterReq.prototype.password = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof dto.RegisterReq
         * @static
         * @param {dto.IRegisterReq=} [properties] Properties to set
         * @returns {dto.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link dto.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof dto.RegisterReq
         * @static
         * @param {dto.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link dto.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RegisterReq
         * @static
         * @param {dto.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof dto.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RegisterReq} RegisterReq
         */
        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RegisterReq)
                return object;
            var message = new $root.dto.RegisterReq();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RegisterReq
         * @static
         * @param {dto.RegisterReq} message RegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickname = "";
                object.password = "";
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this RegisterReq to JSON.
         * @function toJSON
         * @memberof dto.RegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterReq;
    })();

    dto.RegisterResp = (function() {

        /**
         * Properties of a RegisterResp.
         * @memberof dto
         * @interface IRegisterResp
         * @property {boolean|null} [ok] RegisterResp ok
         * @property {string|null} [msg] RegisterResp msg
         * @property {dto.IUserInfo|null} [userInfo] RegisterResp userInfo
         */

        /**
         * Constructs a new RegisterResp.
         * @memberof dto
         * @classdesc Represents a RegisterResp.
         * @implements IRegisterResp
         * @constructor
         * @param {dto.IRegisterResp=} [properties] Properties to set
         */
        function RegisterResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterResp ok.
         * @member {boolean} ok
         * @memberof dto.RegisterResp
         * @instance
         */
        RegisterResp.prototype.ok = false;

        /**
         * RegisterResp msg.
         * @member {string} msg
         * @memberof dto.RegisterResp
         * @instance
         */
        RegisterResp.prototype.msg = "";

        /**
         * RegisterResp userInfo.
         * @member {dto.IUserInfo|null|undefined} userInfo
         * @memberof dto.RegisterResp
         * @instance
         */
        RegisterResp.prototype.userInfo = null;

        /**
         * Creates a new RegisterResp instance using the specified properties.
         * @function create
         * @memberof dto.RegisterResp
         * @static
         * @param {dto.IRegisterResp=} [properties] Properties to set
         * @returns {dto.RegisterResp} RegisterResp instance
         */
        RegisterResp.create = function create(properties) {
            return new RegisterResp(properties);
        };

        /**
         * Encodes the specified RegisterResp message. Does not implicitly {@link dto.RegisterResp.verify|verify} messages.
         * @function encode
         * @memberof dto.RegisterResp
         * @static
         * @param {dto.IRegisterResp} message RegisterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.dto.UserInfo.encode(message.userInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RegisterResp message, length delimited. Does not implicitly {@link dto.RegisterResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RegisterResp
         * @static
         * @param {dto.IRegisterResp} message RegisterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RegisterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RegisterResp} RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RegisterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.userInfo = $root.dto.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RegisterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RegisterResp} RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterResp message.
         * @function verify
         * @memberof dto.RegisterResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.dto.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates a RegisterResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RegisterResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RegisterResp} RegisterResp
         */
        RegisterResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RegisterResp)
                return object;
            var message = new $root.dto.RegisterResp();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".dto.RegisterResp.userInfo: object expected");
                message.userInfo = $root.dto.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RegisterResp
         * @static
         * @param {dto.RegisterResp} message RegisterResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ok = false;
                object.msg = "";
                object.userInfo = null;
            }
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.dto.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this RegisterResp to JSON.
         * @function toJSON
         * @memberof dto.RegisterResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterResp;
    })();

    dto.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof dto
         * @interface ILoginReq
         * @property {Long|null} [userId] LoginReq userId
         * @property {string|null} [password] LoginReq password
         */

        /**
         * Constructs a new LoginReq.
         * @memberof dto
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {dto.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq userId.
         * @member {Long} userId
         * @memberof dto.LoginReq
         * @instance
         */
        LoginReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginReq password.
         * @member {string} password
         * @memberof dto.LoginReq
         * @instance
         */
        LoginReq.prototype.password = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof dto.LoginReq
         * @static
         * @param {dto.ILoginReq=} [properties] Properties to set
         * @returns {dto.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link dto.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof dto.LoginReq
         * @static
         * @param {dto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link dto.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.LoginReq
         * @static
         * @param {dto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof dto.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.LoginReq)
                return object;
            var message = new $root.dto.LoginReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.LoginReq
         * @static
         * @param {dto.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.password = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof dto.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    dto.LoginResp = (function() {

        /**
         * Properties of a LoginResp.
         * @memberof dto
         * @interface ILoginResp
         * @property {boolean|null} [ok] LoginResp ok
         * @property {string|null} [msg] LoginResp msg
         * @property {string|null} [token] LoginResp token
         */

        /**
         * Constructs a new LoginResp.
         * @memberof dto
         * @classdesc Represents a LoginResp.
         * @implements ILoginResp
         * @constructor
         * @param {dto.ILoginResp=} [properties] Properties to set
         */
        function LoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResp ok.
         * @member {boolean} ok
         * @memberof dto.LoginResp
         * @instance
         */
        LoginResp.prototype.ok = false;

        /**
         * LoginResp msg.
         * @member {string} msg
         * @memberof dto.LoginResp
         * @instance
         */
        LoginResp.prototype.msg = "";

        /**
         * LoginResp token.
         * @member {string} token
         * @memberof dto.LoginResp
         * @instance
         */
        LoginResp.prototype.token = "";

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @function create
         * @memberof dto.LoginResp
         * @static
         * @param {dto.ILoginResp=} [properties] Properties to set
         * @returns {dto.LoginResp} LoginResp instance
         */
        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link dto.LoginResp.verify|verify} messages.
         * @function encode
         * @memberof dto.LoginResp
         * @static
         * @param {dto.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link dto.LoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.LoginResp
         * @static
         * @param {dto.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResp message.
         * @function verify
         * @memberof dto.LoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.LoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.LoginResp} LoginResp
         */
        LoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.LoginResp)
                return object;
            var message = new $root.dto.LoginResp();
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.LoginResp
         * @static
         * @param {dto.LoginResp} message LoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ok = false;
                object.msg = "";
                object.token = "";
            }
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginResp to JSON.
         * @function toJSON
         * @memberof dto.LoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResp;
    })();

    dto.SetUserInfoReq = (function() {

        /**
         * Properties of a SetUserInfoReq.
         * @memberof dto
         * @interface ISetUserInfoReq
         * @property {Array.<dto.IUserInfo>|null} [userInfos] SetUserInfoReq userInfos
         */

        /**
         * Constructs a new SetUserInfoReq.
         * @memberof dto
         * @classdesc Represents a SetUserInfoReq.
         * @implements ISetUserInfoReq
         * @constructor
         * @param {dto.ISetUserInfoReq=} [properties] Properties to set
         */
        function SetUserInfoReq(properties) {
            this.userInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetUserInfoReq userInfos.
         * @member {Array.<dto.IUserInfo>} userInfos
         * @memberof dto.SetUserInfoReq
         * @instance
         */
        SetUserInfoReq.prototype.userInfos = $util.emptyArray;

        /**
         * Creates a new SetUserInfoReq instance using the specified properties.
         * @function create
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {dto.ISetUserInfoReq=} [properties] Properties to set
         * @returns {dto.SetUserInfoReq} SetUserInfoReq instance
         */
        SetUserInfoReq.create = function create(properties) {
            return new SetUserInfoReq(properties);
        };

        /**
         * Encodes the specified SetUserInfoReq message. Does not implicitly {@link dto.SetUserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {dto.ISetUserInfoReq} message SetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.dto.UserInfo.encode(message.userInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetUserInfoReq message, length delimited. Does not implicitly {@link dto.SetUserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {dto.ISetUserInfoReq} message SetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetUserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SetUserInfoReq} SetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SetUserInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.dto.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetUserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SetUserInfoReq} SetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetUserInfoReq message.
         * @function verify
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetUserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.dto.UserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SetUserInfoReq} SetUserInfoReq
         */
        SetUserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SetUserInfoReq)
                return object;
            var message = new $root.dto.SetUserInfoReq();
            if (object.userInfos) {
                if (!Array.isArray(object.userInfos))
                    throw TypeError(".dto.SetUserInfoReq.userInfos: array expected");
                message.userInfos = [];
                for (var i = 0; i < object.userInfos.length; ++i) {
                    if (typeof object.userInfos[i] !== "object")
                        throw TypeError(".dto.SetUserInfoReq.userInfos: object expected");
                    message.userInfos[i] = $root.dto.UserInfo.fromObject(object.userInfos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SetUserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SetUserInfoReq
         * @static
         * @param {dto.SetUserInfoReq} message SetUserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetUserInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userInfos = [];
            if (message.userInfos && message.userInfos.length) {
                object.userInfos = [];
                for (var j = 0; j < message.userInfos.length; ++j)
                    object.userInfos[j] = $root.dto.UserInfo.toObject(message.userInfos[j], options);
            }
            return object;
        };

        /**
         * Converts this SetUserInfoReq to JSON.
         * @function toJSON
         * @memberof dto.SetUserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetUserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetUserInfoReq;
    })();

    dto.SetUserInfoResp = (function() {

        /**
         * Properties of a SetUserInfoResp.
         * @memberof dto
         * @interface ISetUserInfoResp
         */

        /**
         * Constructs a new SetUserInfoResp.
         * @memberof dto
         * @classdesc Represents a SetUserInfoResp.
         * @implements ISetUserInfoResp
         * @constructor
         * @param {dto.ISetUserInfoResp=} [properties] Properties to set
         */
        function SetUserInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SetUserInfoResp instance using the specified properties.
         * @function create
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {dto.ISetUserInfoResp=} [properties] Properties to set
         * @returns {dto.SetUserInfoResp} SetUserInfoResp instance
         */
        SetUserInfoResp.create = function create(properties) {
            return new SetUserInfoResp(properties);
        };

        /**
         * Encodes the specified SetUserInfoResp message. Does not implicitly {@link dto.SetUserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {dto.ISetUserInfoResp} message SetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SetUserInfoResp message, length delimited. Does not implicitly {@link dto.SetUserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {dto.ISetUserInfoResp} message SetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetUserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SetUserInfoResp} SetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SetUserInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetUserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SetUserInfoResp} SetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetUserInfoResp message.
         * @function verify
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetUserInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SetUserInfoResp} SetUserInfoResp
         */
        SetUserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SetUserInfoResp)
                return object;
            return new $root.dto.SetUserInfoResp();
        };

        /**
         * Creates a plain object from a SetUserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SetUserInfoResp
         * @static
         * @param {dto.SetUserInfoResp} message SetUserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetUserInfoResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SetUserInfoResp to JSON.
         * @function toJSON
         * @memberof dto.SetUserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetUserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetUserInfoResp;
    })();

    dto.GetUserInfoReq = (function() {

        /**
         * Properties of a GetUserInfoReq.
         * @memberof dto
         * @interface IGetUserInfoReq
         * @property {Array.<Long>|null} [userIds] GetUserInfoReq userIds
         */

        /**
         * Constructs a new GetUserInfoReq.
         * @memberof dto
         * @classdesc Represents a GetUserInfoReq.
         * @implements IGetUserInfoReq
         * @constructor
         * @param {dto.IGetUserInfoReq=} [properties] Properties to set
         */
        function GetUserInfoReq(properties) {
            this.userIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserInfoReq userIds.
         * @member {Array.<Long>} userIds
         * @memberof dto.GetUserInfoReq
         * @instance
         */
        GetUserInfoReq.prototype.userIds = $util.emptyArray;

        /**
         * Creates a new GetUserInfoReq instance using the specified properties.
         * @function create
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {dto.IGetUserInfoReq=} [properties] Properties to set
         * @returns {dto.GetUserInfoReq} GetUserInfoReq instance
         */
        GetUserInfoReq.create = function create(properties) {
            return new GetUserInfoReq(properties);
        };

        /**
         * Encodes the specified GetUserInfoReq message. Does not implicitly {@link dto.GetUserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {dto.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userIds != null && message.userIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.userIds.length; ++i)
                    writer.int64(message.userIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link dto.GetUserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {dto.IGetUserInfoReq} message GetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetUserInfoReq} GetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetUserInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userIds && message.userIds.length))
                        message.userIds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.userIds.push(reader.int64());
                    } else
                        message.userIds.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetUserInfoReq} GetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserInfoReq message.
         * @function verify
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (var i = 0; i < message.userIds.length; ++i)
                    if (!$util.isInteger(message.userIds[i]) && !(message.userIds[i] && $util.isInteger(message.userIds[i].low) && $util.isInteger(message.userIds[i].high)))
                        return "userIds: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetUserInfoReq} GetUserInfoReq
         */
        GetUserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetUserInfoReq)
                return object;
            var message = new $root.dto.GetUserInfoReq();
            if (object.userIds) {
                if (!Array.isArray(object.userIds))
                    throw TypeError(".dto.GetUserInfoReq.userIds: array expected");
                message.userIds = [];
                for (var i = 0; i < object.userIds.length; ++i)
                    if ($util.Long)
                        (message.userIds[i] = $util.Long.fromValue(object.userIds[i])).unsigned = false;
                    else if (typeof object.userIds[i] === "string")
                        message.userIds[i] = parseInt(object.userIds[i], 10);
                    else if (typeof object.userIds[i] === "number")
                        message.userIds[i] = object.userIds[i];
                    else if (typeof object.userIds[i] === "object")
                        message.userIds[i] = new $util.LongBits(object.userIds[i].low >>> 0, object.userIds[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetUserInfoReq
         * @static
         * @param {dto.GetUserInfoReq} message GetUserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userIds = [];
            if (message.userIds && message.userIds.length) {
                object.userIds = [];
                for (var j = 0; j < message.userIds.length; ++j)
                    if (typeof message.userIds[j] === "number")
                        object.userIds[j] = options.longs === String ? String(message.userIds[j]) : message.userIds[j];
                    else
                        object.userIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userIds[j]) : options.longs === Number ? new $util.LongBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0).toNumber() : message.userIds[j];
            }
            return object;
        };

        /**
         * Converts this GetUserInfoReq to JSON.
         * @function toJSON
         * @memberof dto.GetUserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoReq;
    })();

    dto.GetUserInfoResp = (function() {

        /**
         * Properties of a GetUserInfoResp.
         * @memberof dto
         * @interface IGetUserInfoResp
         * @property {Array.<dto.IUserInfo>|null} [userInfos] GetUserInfoResp userInfos
         */

        /**
         * Constructs a new GetUserInfoResp.
         * @memberof dto
         * @classdesc Represents a GetUserInfoResp.
         * @implements IGetUserInfoResp
         * @constructor
         * @param {dto.IGetUserInfoResp=} [properties] Properties to set
         */
        function GetUserInfoResp(properties) {
            this.userInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserInfoResp userInfos.
         * @member {Array.<dto.IUserInfo>} userInfos
         * @memberof dto.GetUserInfoResp
         * @instance
         */
        GetUserInfoResp.prototype.userInfos = $util.emptyArray;

        /**
         * Creates a new GetUserInfoResp instance using the specified properties.
         * @function create
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {dto.IGetUserInfoResp=} [properties] Properties to set
         * @returns {dto.GetUserInfoResp} GetUserInfoResp instance
         */
        GetUserInfoResp.create = function create(properties) {
            return new GetUserInfoResp(properties);
        };

        /**
         * Encodes the specified GetUserInfoResp message. Does not implicitly {@link dto.GetUserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {dto.IGetUserInfoResp} message GetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.dto.UserInfo.encode(message.userInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUserInfoResp message, length delimited. Does not implicitly {@link dto.GetUserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {dto.IGetUserInfoResp} message GetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetUserInfoResp} GetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetUserInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.dto.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetUserInfoResp} GetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserInfoResp message.
         * @function verify
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.dto.UserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetUserInfoResp} GetUserInfoResp
         */
        GetUserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetUserInfoResp)
                return object;
            var message = new $root.dto.GetUserInfoResp();
            if (object.userInfos) {
                if (!Array.isArray(object.userInfos))
                    throw TypeError(".dto.GetUserInfoResp.userInfos: array expected");
                message.userInfos = [];
                for (var i = 0; i < object.userInfos.length; ++i) {
                    if (typeof object.userInfos[i] !== "object")
                        throw TypeError(".dto.GetUserInfoResp.userInfos: object expected");
                    message.userInfos[i] = $root.dto.UserInfo.fromObject(object.userInfos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetUserInfoResp
         * @static
         * @param {dto.GetUserInfoResp} message GetUserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userInfos = [];
            if (message.userInfos && message.userInfos.length) {
                object.userInfos = [];
                for (var j = 0; j < message.userInfos.length; ++j)
                    object.userInfos[j] = $root.dto.UserInfo.toObject(message.userInfos[j], options);
            }
            return object;
        };

        /**
         * Converts this GetUserInfoResp to JSON.
         * @function toJSON
         * @memberof dto.GetUserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoResp;
    })();

    dto.CreateGroupReq = (function() {

        /**
         * Properties of a CreateGroupReq.
         * @memberof dto
         * @interface ICreateGroupReq
         * @property {string|null} [groupName] CreateGroupReq groupName
         */

        /**
         * Constructs a new CreateGroupReq.
         * @memberof dto
         * @classdesc Represents a CreateGroupReq.
         * @implements ICreateGroupReq
         * @constructor
         * @param {dto.ICreateGroupReq=} [properties] Properties to set
         */
        function CreateGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroupReq groupName.
         * @member {string} groupName
         * @memberof dto.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.groupName = "";

        /**
         * Creates a new CreateGroupReq instance using the specified properties.
         * @function create
         * @memberof dto.CreateGroupReq
         * @static
         * @param {dto.ICreateGroupReq=} [properties] Properties to set
         * @returns {dto.CreateGroupReq} CreateGroupReq instance
         */
        CreateGroupReq.create = function create(properties) {
            return new CreateGroupReq(properties);
        };

        /**
         * Encodes the specified CreateGroupReq message. Does not implicitly {@link dto.CreateGroupReq.verify|verify} messages.
         * @function encode
         * @memberof dto.CreateGroupReq
         * @static
         * @param {dto.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupName);
            return writer;
        };

        /**
         * Encodes the specified CreateGroupReq message, length delimited. Does not implicitly {@link dto.CreateGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.CreateGroupReq
         * @static
         * @param {dto.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.CreateGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroupReq message.
         * @function verify
         * @memberof dto.CreateGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            return null;
        };

        /**
         * Creates a CreateGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.CreateGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.CreateGroupReq} CreateGroupReq
         */
        CreateGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.CreateGroupReq)
                return object;
            var message = new $root.dto.CreateGroupReq();
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.CreateGroupReq
         * @static
         * @param {dto.CreateGroupReq} message CreateGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.groupName = "";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            return object;
        };

        /**
         * Converts this CreateGroupReq to JSON.
         * @function toJSON
         * @memberof dto.CreateGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateGroupReq;
    })();

    dto.CreateGroupResp = (function() {

        /**
         * Properties of a CreateGroupResp.
         * @memberof dto
         * @interface ICreateGroupResp
         * @property {dto.IGroupInfo|null} [groupInfo] CreateGroupResp groupInfo
         */

        /**
         * Constructs a new CreateGroupResp.
         * @memberof dto
         * @classdesc Represents a CreateGroupResp.
         * @implements ICreateGroupResp
         * @constructor
         * @param {dto.ICreateGroupResp=} [properties] Properties to set
         */
        function CreateGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroupResp groupInfo.
         * @member {dto.IGroupInfo|null|undefined} groupInfo
         * @memberof dto.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.groupInfo = null;

        /**
         * Creates a new CreateGroupResp instance using the specified properties.
         * @function create
         * @memberof dto.CreateGroupResp
         * @static
         * @param {dto.ICreateGroupResp=} [properties] Properties to set
         * @returns {dto.CreateGroupResp} CreateGroupResp instance
         */
        CreateGroupResp.create = function create(properties) {
            return new CreateGroupResp(properties);
        };

        /**
         * Encodes the specified CreateGroupResp message. Does not implicitly {@link dto.CreateGroupResp.verify|verify} messages.
         * @function encode
         * @memberof dto.CreateGroupResp
         * @static
         * @param {dto.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupInfo != null && Object.hasOwnProperty.call(message, "groupInfo"))
                $root.dto.GroupInfo.encode(message.groupInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateGroupResp message, length delimited. Does not implicitly {@link dto.CreateGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.CreateGroupResp
         * @static
         * @param {dto.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.CreateGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupInfo = $root.dto.GroupInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroupResp message.
         * @function verify
         * @memberof dto.CreateGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupInfo != null && message.hasOwnProperty("groupInfo")) {
                var error = $root.dto.GroupInfo.verify(message.groupInfo);
                if (error)
                    return "groupInfo." + error;
            }
            return null;
        };

        /**
         * Creates a CreateGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.CreateGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.CreateGroupResp} CreateGroupResp
         */
        CreateGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.CreateGroupResp)
                return object;
            var message = new $root.dto.CreateGroupResp();
            if (object.groupInfo != null) {
                if (typeof object.groupInfo !== "object")
                    throw TypeError(".dto.CreateGroupResp.groupInfo: object expected");
                message.groupInfo = $root.dto.GroupInfo.fromObject(object.groupInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.CreateGroupResp
         * @static
         * @param {dto.CreateGroupResp} message CreateGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.groupInfo = null;
            if (message.groupInfo != null && message.hasOwnProperty("groupInfo"))
                object.groupInfo = $root.dto.GroupInfo.toObject(message.groupInfo, options);
            return object;
        };

        /**
         * Converts this CreateGroupResp to JSON.
         * @function toJSON
         * @memberof dto.CreateGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateGroupResp;
    })();

    dto.GetFriendsReq = (function() {

        /**
         * Properties of a GetFriendsReq.
         * @memberof dto
         * @interface IGetFriendsReq
         */

        /**
         * Constructs a new GetFriendsReq.
         * @memberof dto
         * @classdesc Represents a GetFriendsReq.
         * @implements IGetFriendsReq
         * @constructor
         * @param {dto.IGetFriendsReq=} [properties] Properties to set
         */
        function GetFriendsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetFriendsReq instance using the specified properties.
         * @function create
         * @memberof dto.GetFriendsReq
         * @static
         * @param {dto.IGetFriendsReq=} [properties] Properties to set
         * @returns {dto.GetFriendsReq} GetFriendsReq instance
         */
        GetFriendsReq.create = function create(properties) {
            return new GetFriendsReq(properties);
        };

        /**
         * Encodes the specified GetFriendsReq message. Does not implicitly {@link dto.GetFriendsReq.verify|verify} messages.
         * @function encode
         * @memberof dto.GetFriendsReq
         * @static
         * @param {dto.IGetFriendsReq} message GetFriendsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetFriendsReq message, length delimited. Does not implicitly {@link dto.GetFriendsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetFriendsReq
         * @static
         * @param {dto.IGetFriendsReq} message GetFriendsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFriendsReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetFriendsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetFriendsReq} GetFriendsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetFriendsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFriendsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetFriendsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetFriendsReq} GetFriendsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFriendsReq message.
         * @function verify
         * @memberof dto.GetFriendsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFriendsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetFriendsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetFriendsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetFriendsReq} GetFriendsReq
         */
        GetFriendsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetFriendsReq)
                return object;
            return new $root.dto.GetFriendsReq();
        };

        /**
         * Creates a plain object from a GetFriendsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetFriendsReq
         * @static
         * @param {dto.GetFriendsReq} message GetFriendsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFriendsReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetFriendsReq to JSON.
         * @function toJSON
         * @memberof dto.GetFriendsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFriendsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetFriendsReq;
    })();

    dto.GetFriendsResp = (function() {

        /**
         * Properties of a GetFriendsResp.
         * @memberof dto
         * @interface IGetFriendsResp
         * @property {Array.<dto.IUserInfo>|null} [userInfos] GetFriendsResp userInfos
         */

        /**
         * Constructs a new GetFriendsResp.
         * @memberof dto
         * @classdesc Represents a GetFriendsResp.
         * @implements IGetFriendsResp
         * @constructor
         * @param {dto.IGetFriendsResp=} [properties] Properties to set
         */
        function GetFriendsResp(properties) {
            this.userInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFriendsResp userInfos.
         * @member {Array.<dto.IUserInfo>} userInfos
         * @memberof dto.GetFriendsResp
         * @instance
         */
        GetFriendsResp.prototype.userInfos = $util.emptyArray;

        /**
         * Creates a new GetFriendsResp instance using the specified properties.
         * @function create
         * @memberof dto.GetFriendsResp
         * @static
         * @param {dto.IGetFriendsResp=} [properties] Properties to set
         * @returns {dto.GetFriendsResp} GetFriendsResp instance
         */
        GetFriendsResp.create = function create(properties) {
            return new GetFriendsResp(properties);
        };

        /**
         * Encodes the specified GetFriendsResp message. Does not implicitly {@link dto.GetFriendsResp.verify|verify} messages.
         * @function encode
         * @memberof dto.GetFriendsResp
         * @static
         * @param {dto.IGetFriendsResp} message GetFriendsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendsResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.dto.UserInfo.encode(message.userInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFriendsResp message, length delimited. Does not implicitly {@link dto.GetFriendsResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetFriendsResp
         * @static
         * @param {dto.IGetFriendsResp} message GetFriendsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendsResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFriendsResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetFriendsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetFriendsResp} GetFriendsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendsResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetFriendsResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.dto.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFriendsResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetFriendsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetFriendsResp} GetFriendsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendsResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFriendsResp message.
         * @function verify
         * @memberof dto.GetFriendsResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFriendsResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.dto.UserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetFriendsResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetFriendsResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetFriendsResp} GetFriendsResp
         */
        GetFriendsResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetFriendsResp)
                return object;
            var message = new $root.dto.GetFriendsResp();
            if (object.userInfos) {
                if (!Array.isArray(object.userInfos))
                    throw TypeError(".dto.GetFriendsResp.userInfos: array expected");
                message.userInfos = [];
                for (var i = 0; i < object.userInfos.length; ++i) {
                    if (typeof object.userInfos[i] !== "object")
                        throw TypeError(".dto.GetFriendsResp.userInfos: object expected");
                    message.userInfos[i] = $root.dto.UserInfo.fromObject(object.userInfos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetFriendsResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetFriendsResp
         * @static
         * @param {dto.GetFriendsResp} message GetFriendsResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFriendsResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userInfos = [];
            if (message.userInfos && message.userInfos.length) {
                object.userInfos = [];
                for (var j = 0; j < message.userInfos.length; ++j)
                    object.userInfos[j] = $root.dto.UserInfo.toObject(message.userInfos[j], options);
            }
            return object;
        };

        /**
         * Converts this GetFriendsResp to JSON.
         * @function toJSON
         * @memberof dto.GetFriendsResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFriendsResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetFriendsResp;
    })();

    dto.GetGroupsReq = (function() {

        /**
         * Properties of a GetGroupsReq.
         * @memberof dto
         * @interface IGetGroupsReq
         */

        /**
         * Constructs a new GetGroupsReq.
         * @memberof dto
         * @classdesc Represents a GetGroupsReq.
         * @implements IGetGroupsReq
         * @constructor
         * @param {dto.IGetGroupsReq=} [properties] Properties to set
         */
        function GetGroupsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetGroupsReq instance using the specified properties.
         * @function create
         * @memberof dto.GetGroupsReq
         * @static
         * @param {dto.IGetGroupsReq=} [properties] Properties to set
         * @returns {dto.GetGroupsReq} GetGroupsReq instance
         */
        GetGroupsReq.create = function create(properties) {
            return new GetGroupsReq(properties);
        };

        /**
         * Encodes the specified GetGroupsReq message. Does not implicitly {@link dto.GetGroupsReq.verify|verify} messages.
         * @function encode
         * @memberof dto.GetGroupsReq
         * @static
         * @param {dto.IGetGroupsReq} message GetGroupsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetGroupsReq message, length delimited. Does not implicitly {@link dto.GetGroupsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetGroupsReq
         * @static
         * @param {dto.IGetGroupsReq} message GetGroupsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupsReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetGroupsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetGroupsReq} GetGroupsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetGroupsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetGroupsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetGroupsReq} GetGroupsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupsReq message.
         * @function verify
         * @memberof dto.GetGroupsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetGroupsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetGroupsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetGroupsReq} GetGroupsReq
         */
        GetGroupsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetGroupsReq)
                return object;
            return new $root.dto.GetGroupsReq();
        };

        /**
         * Creates a plain object from a GetGroupsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetGroupsReq
         * @static
         * @param {dto.GetGroupsReq} message GetGroupsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupsReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetGroupsReq to JSON.
         * @function toJSON
         * @memberof dto.GetGroupsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGroupsReq;
    })();

    dto.GetGroupsResp = (function() {

        /**
         * Properties of a GetGroupsResp.
         * @memberof dto
         * @interface IGetGroupsResp
         * @property {Array.<dto.IGroupInfo>|null} [groupInfos] GetGroupsResp groupInfos
         */

        /**
         * Constructs a new GetGroupsResp.
         * @memberof dto
         * @classdesc Represents a GetGroupsResp.
         * @implements IGetGroupsResp
         * @constructor
         * @param {dto.IGetGroupsResp=} [properties] Properties to set
         */
        function GetGroupsResp(properties) {
            this.groupInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupsResp groupInfos.
         * @member {Array.<dto.IGroupInfo>} groupInfos
         * @memberof dto.GetGroupsResp
         * @instance
         */
        GetGroupsResp.prototype.groupInfos = $util.emptyArray;

        /**
         * Creates a new GetGroupsResp instance using the specified properties.
         * @function create
         * @memberof dto.GetGroupsResp
         * @static
         * @param {dto.IGetGroupsResp=} [properties] Properties to set
         * @returns {dto.GetGroupsResp} GetGroupsResp instance
         */
        GetGroupsResp.create = function create(properties) {
            return new GetGroupsResp(properties);
        };

        /**
         * Encodes the specified GetGroupsResp message. Does not implicitly {@link dto.GetGroupsResp.verify|verify} messages.
         * @function encode
         * @memberof dto.GetGroupsResp
         * @static
         * @param {dto.IGetGroupsResp} message GetGroupsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupsResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupInfos != null && message.groupInfos.length)
                for (var i = 0; i < message.groupInfos.length; ++i)
                    $root.dto.GroupInfo.encode(message.groupInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGroupsResp message, length delimited. Does not implicitly {@link dto.GetGroupsResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetGroupsResp
         * @static
         * @param {dto.IGetGroupsResp} message GetGroupsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupsResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupsResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetGroupsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetGroupsResp} GetGroupsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupsResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetGroupsResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.groupInfos && message.groupInfos.length))
                        message.groupInfos = [];
                    message.groupInfos.push($root.dto.GroupInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupsResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetGroupsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetGroupsResp} GetGroupsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupsResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupsResp message.
         * @function verify
         * @memberof dto.GetGroupsResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupsResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupInfos != null && message.hasOwnProperty("groupInfos")) {
                if (!Array.isArray(message.groupInfos))
                    return "groupInfos: array expected";
                for (var i = 0; i < message.groupInfos.length; ++i) {
                    var error = $root.dto.GroupInfo.verify(message.groupInfos[i]);
                    if (error)
                        return "groupInfos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGroupsResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetGroupsResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetGroupsResp} GetGroupsResp
         */
        GetGroupsResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetGroupsResp)
                return object;
            var message = new $root.dto.GetGroupsResp();
            if (object.groupInfos) {
                if (!Array.isArray(object.groupInfos))
                    throw TypeError(".dto.GetGroupsResp.groupInfos: array expected");
                message.groupInfos = [];
                for (var i = 0; i < object.groupInfos.length; ++i) {
                    if (typeof object.groupInfos[i] !== "object")
                        throw TypeError(".dto.GetGroupsResp.groupInfos: object expected");
                    message.groupInfos[i] = $root.dto.GroupInfo.fromObject(object.groupInfos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGroupsResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetGroupsResp
         * @static
         * @param {dto.GetGroupsResp} message GetGroupsResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupsResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.groupInfos = [];
            if (message.groupInfos && message.groupInfos.length) {
                object.groupInfos = [];
                for (var j = 0; j < message.groupInfos.length; ++j)
                    object.groupInfos[j] = $root.dto.GroupInfo.toObject(message.groupInfos[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGroupsResp to JSON.
         * @function toJSON
         * @memberof dto.GetGroupsResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupsResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGroupsResp;
    })();

    dto.ProcessAddReq = (function() {

        /**
         * Properties of a ProcessAddReq.
         * @memberof dto
         * @interface IProcessAddReq
         * @property {Long|null} [reqId] ProcessAddReq reqId
         * @property {boolean|null} [accept] ProcessAddReq accept
         */

        /**
         * Constructs a new ProcessAddReq.
         * @memberof dto
         * @classdesc Represents a ProcessAddReq.
         * @implements IProcessAddReq
         * @constructor
         * @param {dto.IProcessAddReq=} [properties] Properties to set
         */
        function ProcessAddReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessAddReq reqId.
         * @member {Long} reqId
         * @memberof dto.ProcessAddReq
         * @instance
         */
        ProcessAddReq.prototype.reqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProcessAddReq accept.
         * @member {boolean} accept
         * @memberof dto.ProcessAddReq
         * @instance
         */
        ProcessAddReq.prototype.accept = false;

        /**
         * Creates a new ProcessAddReq instance using the specified properties.
         * @function create
         * @memberof dto.ProcessAddReq
         * @static
         * @param {dto.IProcessAddReq=} [properties] Properties to set
         * @returns {dto.ProcessAddReq} ProcessAddReq instance
         */
        ProcessAddReq.create = function create(properties) {
            return new ProcessAddReq(properties);
        };

        /**
         * Encodes the specified ProcessAddReq message. Does not implicitly {@link dto.ProcessAddReq.verify|verify} messages.
         * @function encode
         * @memberof dto.ProcessAddReq
         * @static
         * @param {dto.IProcessAddReq} message ProcessAddReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessAddReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqId != null && Object.hasOwnProperty.call(message, "reqId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reqId);
            if (message.accept != null && Object.hasOwnProperty.call(message, "accept"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.accept);
            return writer;
        };

        /**
         * Encodes the specified ProcessAddReq message, length delimited. Does not implicitly {@link dto.ProcessAddReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProcessAddReq
         * @static
         * @param {dto.IProcessAddReq} message ProcessAddReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessAddReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProcessAddReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProcessAddReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProcessAddReq} ProcessAddReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessAddReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProcessAddReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqId = reader.int64();
                    break;
                case 2:
                    message.accept = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProcessAddReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProcessAddReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProcessAddReq} ProcessAddReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessAddReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProcessAddReq message.
         * @function verify
         * @memberof dto.ProcessAddReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProcessAddReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isInteger(message.reqId) && !(message.reqId && $util.isInteger(message.reqId.low) && $util.isInteger(message.reqId.high)))
                    return "reqId: integer|Long expected";
            if (message.accept != null && message.hasOwnProperty("accept"))
                if (typeof message.accept !== "boolean")
                    return "accept: boolean expected";
            return null;
        };

        /**
         * Creates a ProcessAddReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProcessAddReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProcessAddReq} ProcessAddReq
         */
        ProcessAddReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProcessAddReq)
                return object;
            var message = new $root.dto.ProcessAddReq();
            if (object.reqId != null)
                if ($util.Long)
                    (message.reqId = $util.Long.fromValue(object.reqId)).unsigned = false;
                else if (typeof object.reqId === "string")
                    message.reqId = parseInt(object.reqId, 10);
                else if (typeof object.reqId === "number")
                    message.reqId = object.reqId;
                else if (typeof object.reqId === "object")
                    message.reqId = new $util.LongBits(object.reqId.low >>> 0, object.reqId.high >>> 0).toNumber();
            if (object.accept != null)
                message.accept = Boolean(object.accept);
            return message;
        };

        /**
         * Creates a plain object from a ProcessAddReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProcessAddReq
         * @static
         * @param {dto.ProcessAddReq} message ProcessAddReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessAddReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqId = options.longs === String ? "0" : 0;
                object.accept = false;
            }
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (typeof message.reqId === "number")
                    object.reqId = options.longs === String ? String(message.reqId) : message.reqId;
                else
                    object.reqId = options.longs === String ? $util.Long.prototype.toString.call(message.reqId) : options.longs === Number ? new $util.LongBits(message.reqId.low >>> 0, message.reqId.high >>> 0).toNumber() : message.reqId;
            if (message.accept != null && message.hasOwnProperty("accept"))
                object.accept = message.accept;
            return object;
        };

        /**
         * Converts this ProcessAddReq to JSON.
         * @function toJSON
         * @memberof dto.ProcessAddReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessAddReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessAddReq;
    })();

    dto.ProcessAddResp = (function() {

        /**
         * Properties of a ProcessAddResp.
         * @memberof dto
         * @interface IProcessAddResp
         */

        /**
         * Constructs a new ProcessAddResp.
         * @memberof dto
         * @classdesc Represents a ProcessAddResp.
         * @implements IProcessAddResp
         * @constructor
         * @param {dto.IProcessAddResp=} [properties] Properties to set
         */
        function ProcessAddResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ProcessAddResp instance using the specified properties.
         * @function create
         * @memberof dto.ProcessAddResp
         * @static
         * @param {dto.IProcessAddResp=} [properties] Properties to set
         * @returns {dto.ProcessAddResp} ProcessAddResp instance
         */
        ProcessAddResp.create = function create(properties) {
            return new ProcessAddResp(properties);
        };

        /**
         * Encodes the specified ProcessAddResp message. Does not implicitly {@link dto.ProcessAddResp.verify|verify} messages.
         * @function encode
         * @memberof dto.ProcessAddResp
         * @static
         * @param {dto.IProcessAddResp} message ProcessAddResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessAddResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ProcessAddResp message, length delimited. Does not implicitly {@link dto.ProcessAddResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProcessAddResp
         * @static
         * @param {dto.IProcessAddResp} message ProcessAddResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessAddResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProcessAddResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProcessAddResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProcessAddResp} ProcessAddResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessAddResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProcessAddResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProcessAddResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProcessAddResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProcessAddResp} ProcessAddResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessAddResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProcessAddResp message.
         * @function verify
         * @memberof dto.ProcessAddResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProcessAddResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ProcessAddResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProcessAddResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProcessAddResp} ProcessAddResp
         */
        ProcessAddResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProcessAddResp)
                return object;
            return new $root.dto.ProcessAddResp();
        };

        /**
         * Creates a plain object from a ProcessAddResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProcessAddResp
         * @static
         * @param {dto.ProcessAddResp} message ProcessAddResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessAddResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ProcessAddResp to JSON.
         * @function toJSON
         * @memberof dto.ProcessAddResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessAddResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProcessAddResp;
    })();

    dto.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof dto
         * @interface IRequest
         * @property {Long|null} [reqId] Request reqId
         * @property {dto.Request.RequestType|null} [reqType] Request reqType
         * @property {Long|null} [fromId] Request fromId
         * @property {Long|null} [toId] Request toId
         */

        /**
         * Constructs a new Request.
         * @memberof dto
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {dto.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request reqId.
         * @member {Long} reqId
         * @memberof dto.Request
         * @instance
         */
        Request.prototype.reqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Request reqType.
         * @member {dto.Request.RequestType} reqType
         * @memberof dto.Request
         * @instance
         */
        Request.prototype.reqType = 0;

        /**
         * Request fromId.
         * @member {Long} fromId
         * @memberof dto.Request
         * @instance
         */
        Request.prototype.fromId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Request toId.
         * @member {Long} toId
         * @memberof dto.Request
         * @instance
         */
        Request.prototype.toId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof dto.Request
         * @static
         * @param {dto.IRequest=} [properties] Properties to set
         * @returns {dto.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link dto.Request.verify|verify} messages.
         * @function encode
         * @memberof dto.Request
         * @static
         * @param {dto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqId != null && Object.hasOwnProperty.call(message, "reqId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reqId);
            if (message.reqType != null && Object.hasOwnProperty.call(message, "reqType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reqType);
            if (message.fromId != null && Object.hasOwnProperty.call(message, "fromId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fromId);
            if (message.toId != null && Object.hasOwnProperty.call(message, "toId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.toId);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link dto.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Request
         * @static
         * @param {dto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqId = reader.int64();
                    break;
                case 2:
                    message.reqType = reader.int32();
                    break;
                case 3:
                    message.fromId = reader.int64();
                    break;
                case 4:
                    message.toId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof dto.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isInteger(message.reqId) && !(message.reqId && $util.isInteger(message.reqId.low) && $util.isInteger(message.reqId.high)))
                    return "reqId: integer|Long expected";
            if (message.reqType != null && message.hasOwnProperty("reqType"))
                switch (message.reqType) {
                default:
                    return "reqType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (!$util.isInteger(message.fromId) && !(message.fromId && $util.isInteger(message.fromId.low) && $util.isInteger(message.fromId.high)))
                    return "fromId: integer|Long expected";
            if (message.toId != null && message.hasOwnProperty("toId"))
                if (!$util.isInteger(message.toId) && !(message.toId && $util.isInteger(message.toId.low) && $util.isInteger(message.toId.high)))
                    return "toId: integer|Long expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Request)
                return object;
            var message = new $root.dto.Request();
            if (object.reqId != null)
                if ($util.Long)
                    (message.reqId = $util.Long.fromValue(object.reqId)).unsigned = false;
                else if (typeof object.reqId === "string")
                    message.reqId = parseInt(object.reqId, 10);
                else if (typeof object.reqId === "number")
                    message.reqId = object.reqId;
                else if (typeof object.reqId === "object")
                    message.reqId = new $util.LongBits(object.reqId.low >>> 0, object.reqId.high >>> 0).toNumber();
            switch (object.reqType) {
            case "TFriend":
            case 0:
                message.reqType = 0;
                break;
            case "TGroup":
            case 1:
                message.reqType = 1;
                break;
            }
            if (object.fromId != null)
                if ($util.Long)
                    (message.fromId = $util.Long.fromValue(object.fromId)).unsigned = false;
                else if (typeof object.fromId === "string")
                    message.fromId = parseInt(object.fromId, 10);
                else if (typeof object.fromId === "number")
                    message.fromId = object.fromId;
                else if (typeof object.fromId === "object")
                    message.fromId = new $util.LongBits(object.fromId.low >>> 0, object.fromId.high >>> 0).toNumber();
            if (object.toId != null)
                if ($util.Long)
                    (message.toId = $util.Long.fromValue(object.toId)).unsigned = false;
                else if (typeof object.toId === "string")
                    message.toId = parseInt(object.toId, 10);
                else if (typeof object.toId === "number")
                    message.toId = object.toId;
                else if (typeof object.toId === "object")
                    message.toId = new $util.LongBits(object.toId.low >>> 0, object.toId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Request
         * @static
         * @param {dto.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqId = options.longs === String ? "0" : 0;
                object.reqType = options.enums === String ? "TFriend" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fromId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.toId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toId = options.longs === String ? "0" : 0;
            }
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (typeof message.reqId === "number")
                    object.reqId = options.longs === String ? String(message.reqId) : message.reqId;
                else
                    object.reqId = options.longs === String ? $util.Long.prototype.toString.call(message.reqId) : options.longs === Number ? new $util.LongBits(message.reqId.low >>> 0, message.reqId.high >>> 0).toNumber() : message.reqId;
            if (message.reqType != null && message.hasOwnProperty("reqType"))
                object.reqType = options.enums === String ? $root.dto.Request.RequestType[message.reqType] : message.reqType;
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (typeof message.fromId === "number")
                    object.fromId = options.longs === String ? String(message.fromId) : message.fromId;
                else
                    object.fromId = options.longs === String ? $util.Long.prototype.toString.call(message.fromId) : options.longs === Number ? new $util.LongBits(message.fromId.low >>> 0, message.fromId.high >>> 0).toNumber() : message.fromId;
            if (message.toId != null && message.hasOwnProperty("toId"))
                if (typeof message.toId === "number")
                    object.toId = options.longs === String ? String(message.toId) : message.toId;
                else
                    object.toId = options.longs === String ? $util.Long.prototype.toString.call(message.toId) : options.longs === Number ? new $util.LongBits(message.toId.low >>> 0, message.toId.high >>> 0).toNumber() : message.toId;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof dto.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * RequestType enum.
         * @name dto.Request.RequestType
         * @enum {number}
         * @property {number} TFriend=0 TFriend value
         * @property {number} TGroup=1 TGroup value
         */
        Request.RequestType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TFriend"] = 0;
            values[valuesById[1] = "TGroup"] = 1;
            return values;
        })();

        return Request;
    })();

    dto.Elem = (function() {

        /**
         * Properties of an Elem.
         * @memberof dto
         * @interface IElem
         * @property {string|null} [text] Elem text
         * @property {string|null} [fileUrl] Elem fileUrl
         * @property {string|null} [imageUrl] Elem imageUrl
         */

        /**
         * Constructs a new Elem.
         * @memberof dto
         * @classdesc Represents an Elem.
         * @implements IElem
         * @constructor
         * @param {dto.IElem=} [properties] Properties to set
         */
        function Elem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Elem text.
         * @member {string} text
         * @memberof dto.Elem
         * @instance
         */
        Elem.prototype.text = "";

        /**
         * Elem fileUrl.
         * @member {string} fileUrl
         * @memberof dto.Elem
         * @instance
         */
        Elem.prototype.fileUrl = "";

        /**
         * Elem imageUrl.
         * @member {string} imageUrl
         * @memberof dto.Elem
         * @instance
         */
        Elem.prototype.imageUrl = "";

        /**
         * Creates a new Elem instance using the specified properties.
         * @function create
         * @memberof dto.Elem
         * @static
         * @param {dto.IElem=} [properties] Properties to set
         * @returns {dto.Elem} Elem instance
         */
        Elem.create = function create(properties) {
            return new Elem(properties);
        };

        /**
         * Encodes the specified Elem message. Does not implicitly {@link dto.Elem.verify|verify} messages.
         * @function encode
         * @memberof dto.Elem
         * @static
         * @param {dto.IElem} message Elem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Elem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.fileUrl != null && Object.hasOwnProperty.call(message, "fileUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fileUrl);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageUrl);
            return writer;
        };

        /**
         * Encodes the specified Elem message, length delimited. Does not implicitly {@link dto.Elem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Elem
         * @static
         * @param {dto.IElem} message Elem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Elem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Elem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Elem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Elem} Elem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Elem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Elem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.fileUrl = reader.string();
                    break;
                case 3:
                    message.imageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Elem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Elem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Elem} Elem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Elem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Elem message.
         * @function verify
         * @memberof dto.Elem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Elem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                if (!$util.isString(message.fileUrl))
                    return "fileUrl: string expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            return null;
        };

        /**
         * Creates an Elem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Elem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Elem} Elem
         */
        Elem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Elem)
                return object;
            var message = new $root.dto.Elem();
            if (object.text != null)
                message.text = String(object.text);
            if (object.fileUrl != null)
                message.fileUrl = String(object.fileUrl);
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            return message;
        };

        /**
         * Creates a plain object from an Elem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Elem
         * @static
         * @param {dto.Elem} message Elem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Elem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.text = "";
                object.fileUrl = "";
                object.imageUrl = "";
            }
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                object.fileUrl = message.fileUrl;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            return object;
        };

        /**
         * Converts this Elem to JSON.
         * @function toJSON
         * @memberof dto.Elem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Elem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Elem;
    })();

    dto.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof dto
         * @interface IMsg
         * @property {dto.Msg.MsgType|null} [msgType] Msg msgType
         * @property {Long|null} [fromId] Msg fromId
         * @property {Long|null} [toId] Msg toId
         * @property {Array.<dto.IElem>|null} [elements] Msg elements
         */

        /**
         * Constructs a new Msg.
         * @memberof dto
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {dto.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            this.elements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg msgType.
         * @member {dto.Msg.MsgType} msgType
         * @memberof dto.Msg
         * @instance
         */
        Msg.prototype.msgType = 0;

        /**
         * Msg fromId.
         * @member {Long} fromId
         * @memberof dto.Msg
         * @instance
         */
        Msg.prototype.fromId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg toId.
         * @member {Long} toId
         * @memberof dto.Msg
         * @instance
         */
        Msg.prototype.toId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg elements.
         * @member {Array.<dto.IElem>} elements
         * @memberof dto.Msg
         * @instance
         */
        Msg.prototype.elements = $util.emptyArray;

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof dto.Msg
         * @static
         * @param {dto.IMsg=} [properties] Properties to set
         * @returns {dto.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link dto.Msg.verify|verify} messages.
         * @function encode
         * @memberof dto.Msg
         * @static
         * @param {dto.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgType);
            if (message.fromId != null && Object.hasOwnProperty.call(message, "fromId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fromId);
            if (message.toId != null && Object.hasOwnProperty.call(message, "toId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.toId);
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    $root.dto.Elem.encode(message.elements[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link dto.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Msg
         * @static
         * @param {dto.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.int32();
                    break;
                case 2:
                    message.fromId = reader.int64();
                    break;
                case 3:
                    message.toId = reader.int64();
                    break;
                case 4:
                    if (!(message.elements && message.elements.length))
                        message.elements = [];
                    message.elements.push($root.dto.Elem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof dto.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                switch (message.msgType) {
                default:
                    return "msgType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (!$util.isInteger(message.fromId) && !(message.fromId && $util.isInteger(message.fromId.low) && $util.isInteger(message.fromId.high)))
                    return "fromId: integer|Long expected";
            if (message.toId != null && message.hasOwnProperty("toId"))
                if (!$util.isInteger(message.toId) && !(message.toId && $util.isInteger(message.toId.low) && $util.isInteger(message.toId.high)))
                    return "toId: integer|Long expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (var i = 0; i < message.elements.length; ++i) {
                    var error = $root.dto.Elem.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Msg)
                return object;
            var message = new $root.dto.Msg();
            switch (object.msgType) {
            case "TFriend":
            case 0:
                message.msgType = 0;
                break;
            case "TGroup":
            case 1:
                message.msgType = 1;
                break;
            }
            if (object.fromId != null)
                if ($util.Long)
                    (message.fromId = $util.Long.fromValue(object.fromId)).unsigned = false;
                else if (typeof object.fromId === "string")
                    message.fromId = parseInt(object.fromId, 10);
                else if (typeof object.fromId === "number")
                    message.fromId = object.fromId;
                else if (typeof object.fromId === "object")
                    message.fromId = new $util.LongBits(object.fromId.low >>> 0, object.fromId.high >>> 0).toNumber();
            if (object.toId != null)
                if ($util.Long)
                    (message.toId = $util.Long.fromValue(object.toId)).unsigned = false;
                else if (typeof object.toId === "string")
                    message.toId = parseInt(object.toId, 10);
                else if (typeof object.toId === "number")
                    message.toId = object.toId;
                else if (typeof object.toId === "object")
                    message.toId = new $util.LongBits(object.toId.low >>> 0, object.toId.high >>> 0).toNumber();
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".dto.Msg.elements: array expected");
                message.elements = [];
                for (var i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".dto.Msg.elements: object expected");
                    message.elements[i] = $root.dto.Elem.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Msg
         * @static
         * @param {dto.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                object.msgType = options.enums === String ? "TFriend" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fromId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.toId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toId = options.longs === String ? "0" : 0;
            }
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = options.enums === String ? $root.dto.Msg.MsgType[message.msgType] : message.msgType;
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (typeof message.fromId === "number")
                    object.fromId = options.longs === String ? String(message.fromId) : message.fromId;
                else
                    object.fromId = options.longs === String ? $util.Long.prototype.toString.call(message.fromId) : options.longs === Number ? new $util.LongBits(message.fromId.low >>> 0, message.fromId.high >>> 0).toNumber() : message.fromId;
            if (message.toId != null && message.hasOwnProperty("toId"))
                if (typeof message.toId === "number")
                    object.toId = options.longs === String ? String(message.toId) : message.toId;
                else
                    object.toId = options.longs === String ? $util.Long.prototype.toString.call(message.toId) : options.longs === Number ? new $util.LongBits(message.toId.low >>> 0, message.toId.high >>> 0).toNumber() : message.toId;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (var j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.dto.Elem.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof dto.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MsgType enum.
         * @name dto.Msg.MsgType
         * @enum {number}
         * @property {number} TFriend=0 TFriend value
         * @property {number} TGroup=1 TGroup value
         */
        Msg.MsgType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TFriend"] = 0;
            values[valuesById[1] = "TGroup"] = 1;
            return values;
        })();

        return Msg;
    })();

    dto.Packet = (function() {

        /**
         * Properties of a Packet.
         * @memberof dto
         * @interface IPacket
         * @property {Long|null} [timestamp] Packet timestamp
         * @property {dto.Packet.PacketType|null} [packetType] Packet packetType
         * @property {dto.IRequest|null} [request] Packet request
         * @property {dto.IMsg|null} [msg] Packet msg
         */

        /**
         * Constructs a new Packet.
         * @memberof dto
         * @classdesc Represents a Packet.
         * @implements IPacket
         * @constructor
         * @param {dto.IPacket=} [properties] Properties to set
         */
        function Packet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Packet timestamp.
         * @member {Long} timestamp
         * @memberof dto.Packet
         * @instance
         */
        Packet.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Packet packetType.
         * @member {dto.Packet.PacketType} packetType
         * @memberof dto.Packet
         * @instance
         */
        Packet.prototype.packetType = 0;

        /**
         * Packet request.
         * @member {dto.IRequest|null|undefined} request
         * @memberof dto.Packet
         * @instance
         */
        Packet.prototype.request = null;

        /**
         * Packet msg.
         * @member {dto.IMsg|null|undefined} msg
         * @memberof dto.Packet
         * @instance
         */
        Packet.prototype.msg = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Packet Data.
         * @member {"request"|"msg"|undefined} Data
         * @memberof dto.Packet
         * @instance
         */
        Object.defineProperty(Packet.prototype, "Data", {
            get: $util.oneOfGetter($oneOfFields = ["request", "msg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Packet instance using the specified properties.
         * @function create
         * @memberof dto.Packet
         * @static
         * @param {dto.IPacket=} [properties] Properties to set
         * @returns {dto.Packet} Packet instance
         */
        Packet.create = function create(properties) {
            return new Packet(properties);
        };

        /**
         * Encodes the specified Packet message. Does not implicitly {@link dto.Packet.verify|verify} messages.
         * @function encode
         * @memberof dto.Packet
         * @static
         * @param {dto.IPacket} message Packet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Packet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
            if (message.packetType != null && Object.hasOwnProperty.call(message, "packetType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.packetType);
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                $root.dto.Request.encode(message.request, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.dto.Msg.encode(message.msg, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Packet message, length delimited. Does not implicitly {@link dto.Packet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Packet
         * @static
         * @param {dto.IPacket} message Packet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Packet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Packet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Packet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Packet} Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Packet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Packet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                case 2:
                    message.packetType = reader.int32();
                    break;
                case 101:
                    message.request = $root.dto.Request.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.msg = $root.dto.Msg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Packet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Packet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Packet} Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Packet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Packet message.
         * @function verify
         * @memberof dto.Packet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Packet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.packetType != null && message.hasOwnProperty("packetType"))
                switch (message.packetType) {
                default:
                    return "packetType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.request != null && message.hasOwnProperty("request")) {
                properties.Data = 1;
                {
                    var error = $root.dto.Request.verify(message.request);
                    if (error)
                        return "request." + error;
                }
            }
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (properties.Data === 1)
                    return "Data: multiple values";
                properties.Data = 1;
                {
                    var error = $root.dto.Msg.verify(message.msg);
                    if (error)
                        return "msg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Packet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Packet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Packet} Packet
         */
        Packet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Packet)
                return object;
            var message = new $root.dto.Packet();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            switch (object.packetType) {
            case "TRequest":
            case 0:
                message.packetType = 0;
                break;
            case "TMsg":
            case 1:
                message.packetType = 1;
                break;
            }
            if (object.request != null) {
                if (typeof object.request !== "object")
                    throw TypeError(".dto.Packet.request: object expected");
                message.request = $root.dto.Request.fromObject(object.request);
            }
            if (object.msg != null) {
                if (typeof object.msg !== "object")
                    throw TypeError(".dto.Packet.msg: object expected");
                message.msg = $root.dto.Msg.fromObject(object.msg);
            }
            return message;
        };

        /**
         * Creates a plain object from a Packet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Packet
         * @static
         * @param {dto.Packet} message Packet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Packet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.packetType = options.enums === String ? "TRequest" : 0;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.packetType != null && message.hasOwnProperty("packetType"))
                object.packetType = options.enums === String ? $root.dto.Packet.PacketType[message.packetType] : message.packetType;
            if (message.request != null && message.hasOwnProperty("request")) {
                object.request = $root.dto.Request.toObject(message.request, options);
                if (options.oneofs)
                    object.Data = "request";
            }
            if (message.msg != null && message.hasOwnProperty("msg")) {
                object.msg = $root.dto.Msg.toObject(message.msg, options);
                if (options.oneofs)
                    object.Data = "msg";
            }
            return object;
        };

        /**
         * Converts this Packet to JSON.
         * @function toJSON
         * @memberof dto.Packet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Packet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PacketType enum.
         * @name dto.Packet.PacketType
         * @enum {number}
         * @property {number} TRequest=0 TRequest value
         * @property {number} TMsg=1 TMsg value
         */
        Packet.PacketType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TRequest"] = 0;
            values[valuesById[1] = "TMsg"] = 1;
            return values;
        })();

        return Packet;
    })();

    dto.EcustQQService = (function() {

        /**
         * Constructs a new EcustQQService service.
         * @memberof dto
         * @classdesc Represents an EcustQQService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function EcustQQService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (EcustQQService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EcustQQService;

        /**
         * Creates new EcustQQService service using the specified rpc implementation.
         * @function create
         * @memberof dto.EcustQQService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {EcustQQService} RPC service. Useful where requests and/or responses are streamed.
         */
        EcustQQService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link dto.EcustQQService#register}.
         * @memberof dto.EcustQQService
         * @typedef RegisterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.RegisterResp} [response] RegisterResp
         */

        /**
         * Calls Register.
         * @function register
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IRegisterReq} request RegisterReq message or plain object
         * @param {dto.EcustQQService.RegisterCallback} callback Node-style callback called with the error, if any, and RegisterResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.register = function register(request, callback) {
            return this.rpcCall(register, $root.dto.RegisterReq, $root.dto.RegisterResp, request, callback);
        }, "name", { value: "Register" });

        /**
         * Calls Register.
         * @function register
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IRegisterReq} request RegisterReq message or plain object
         * @returns {Promise<dto.RegisterResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#login}.
         * @memberof dto.EcustQQService
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.LoginResp} [response] LoginResp
         */

        /**
         * Calls Login.
         * @function login
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.ILoginReq} request LoginReq message or plain object
         * @param {dto.EcustQQService.LoginCallback} callback Node-style callback called with the error, if any, and LoginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.dto.LoginReq, $root.dto.LoginResp, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.ILoginReq} request LoginReq message or plain object
         * @returns {Promise<dto.LoginResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#setUserInfo}.
         * @memberof dto.EcustQQService
         * @typedef SetUserInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.SetUserInfoResp} [response] SetUserInfoResp
         */

        /**
         * Calls SetUserInfo.
         * @function setUserInfo
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.ISetUserInfoReq} request SetUserInfoReq message or plain object
         * @param {dto.EcustQQService.SetUserInfoCallback} callback Node-style callback called with the error, if any, and SetUserInfoResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.setUserInfo = function setUserInfo(request, callback) {
            return this.rpcCall(setUserInfo, $root.dto.SetUserInfoReq, $root.dto.SetUserInfoResp, request, callback);
        }, "name", { value: "SetUserInfo" });

        /**
         * Calls SetUserInfo.
         * @function setUserInfo
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.ISetUserInfoReq} request SetUserInfoReq message or plain object
         * @returns {Promise<dto.SetUserInfoResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#getUserInfo}.
         * @memberof dto.EcustQQService
         * @typedef GetUserInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.GetUserInfoResp} [response] GetUserInfoResp
         */

        /**
         * Calls GetUserInfo.
         * @function getUserInfo
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IGetUserInfoReq} request GetUserInfoReq message or plain object
         * @param {dto.EcustQQService.GetUserInfoCallback} callback Node-style callback called with the error, if any, and GetUserInfoResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.getUserInfo = function getUserInfo(request, callback) {
            return this.rpcCall(getUserInfo, $root.dto.GetUserInfoReq, $root.dto.GetUserInfoResp, request, callback);
        }, "name", { value: "GetUserInfo" });

        /**
         * Calls GetUserInfo.
         * @function getUserInfo
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IGetUserInfoReq} request GetUserInfoReq message or plain object
         * @returns {Promise<dto.GetUserInfoResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#createGroup}.
         * @memberof dto.EcustQQService
         * @typedef CreateGroupCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.CreateGroupResp} [response] CreateGroupResp
         */

        /**
         * Calls CreateGroup.
         * @function createGroup
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.ICreateGroupReq} request CreateGroupReq message or plain object
         * @param {dto.EcustQQService.CreateGroupCallback} callback Node-style callback called with the error, if any, and CreateGroupResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.createGroup = function createGroup(request, callback) {
            return this.rpcCall(createGroup, $root.dto.CreateGroupReq, $root.dto.CreateGroupResp, request, callback);
        }, "name", { value: "CreateGroup" });

        /**
         * Calls CreateGroup.
         * @function createGroup
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.ICreateGroupReq} request CreateGroupReq message or plain object
         * @returns {Promise<dto.CreateGroupResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#getFriends}.
         * @memberof dto.EcustQQService
         * @typedef GetFriendsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.GetFriendsResp} [response] GetFriendsResp
         */

        /**
         * Calls GetFriends.
         * @function getFriends
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IGetFriendsReq} request GetFriendsReq message or plain object
         * @param {dto.EcustQQService.GetFriendsCallback} callback Node-style callback called with the error, if any, and GetFriendsResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.getFriends = function getFriends(request, callback) {
            return this.rpcCall(getFriends, $root.dto.GetFriendsReq, $root.dto.GetFriendsResp, request, callback);
        }, "name", { value: "GetFriends" });

        /**
         * Calls GetFriends.
         * @function getFriends
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IGetFriendsReq} request GetFriendsReq message or plain object
         * @returns {Promise<dto.GetFriendsResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#getGroups}.
         * @memberof dto.EcustQQService
         * @typedef GetGroupsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.GetGroupsResp} [response] GetGroupsResp
         */

        /**
         * Calls GetGroups.
         * @function getGroups
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IGetGroupsReq} request GetGroupsReq message or plain object
         * @param {dto.EcustQQService.GetGroupsCallback} callback Node-style callback called with the error, if any, and GetGroupsResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.getGroups = function getGroups(request, callback) {
            return this.rpcCall(getGroups, $root.dto.GetGroupsReq, $root.dto.GetGroupsResp, request, callback);
        }, "name", { value: "GetGroups" });

        /**
         * Calls GetGroups.
         * @function getGroups
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IGetGroupsReq} request GetGroupsReq message or plain object
         * @returns {Promise<dto.GetGroupsResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.EcustQQService#processAdd}.
         * @memberof dto.EcustQQService
         * @typedef ProcessAddCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.ProcessAddResp} [response] ProcessAddResp
         */

        /**
         * Calls ProcessAdd.
         * @function processAdd
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IProcessAddReq} request ProcessAddReq message or plain object
         * @param {dto.EcustQQService.ProcessAddCallback} callback Node-style callback called with the error, if any, and ProcessAddResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EcustQQService.prototype.processAdd = function processAdd(request, callback) {
            return this.rpcCall(processAdd, $root.dto.ProcessAddReq, $root.dto.ProcessAddResp, request, callback);
        }, "name", { value: "ProcessAdd" });

        /**
         * Calls ProcessAdd.
         * @function processAdd
         * @memberof dto.EcustQQService
         * @instance
         * @param {dto.IProcessAddReq} request ProcessAddReq message or plain object
         * @returns {Promise<dto.ProcessAddResp>} Promise
         * @variation 2
         */

        return EcustQQService;
    })();

    return dto;
})();

module.exports = $root;
