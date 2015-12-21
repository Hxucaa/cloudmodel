/**
 * Created by Lance on 2015-12-19.
 */

/**
 * External namespace for LeanCloud Javascript SDK.
 * @external AV
 * @see https://www.leancloud.cn/api-docs/javascript/index.html
 * @see https://www.leancloud.cn/docs/js_guide.html
 */

/**
 * A AV.User object is a local representation of a user persisted to the AV cloud. This class is a subclass of a
 * AV.Object, and retains the same functionality of a AV.Object, but also extends it with various user specific methods,
 * like authentication, signing up, and validation of uniqueness.
 * @external User
 * @memberof external:AV
 * @see https://www.leancloud.cn/docs/js_guide.html#用户
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.User.html
 */

/**
 * Represents a latitude / longitude point that may be associated with a key in a AVObject or used as a reference point
 for geo queries. This allows proximity-based queries on the key.
 *
 * Only one key in a class may contain a GeoPoint.
 * @example
 * var point = new AV.GeoPoint(30.0, -20.0);
 * var object = new AV.Object("PlaceObject");
 * object.set("location", point);
 * object.save();
 * @class GeoPoint
 * @memberof external:AV
 * @see https://www.leancloud.cn/docs/js_guide.html#地理位置
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.GeoPoint.html
 */

/**
 * An AV.File is a local representation of a file that is saved to the AV cloud.
 * @class File
 * @memberof external:AV
 * @see https://www.leancloud.cn/docs/js_guide.html#文件
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.File.html
 */

/**
 * Access control list.
 * @class ACL
 * @memberof external:AV
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.ACL.html
 * @see https://www.leancloud.cn/docs/js_guide.html#其他对象的安全
 * @see https://www.leancloud.cn/docs/acl_guide-js.html
 */

/**
 * AV.Query defines a query that is used to fetch AV.Objects.
 * @class Query
 * @memberof external:AV
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.Query.html
 * @see https://www.leancloud.cn/docs/js_guide.html#查询
 */

/**
 * A AV.Role is a local representation of a role persisted to the AV cloud.
 * @class Role
 * @memberof external:AV
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.Role.html
 * @see https://www.leancloud.cn/docs/js_guide.html#角色
 */

/**
 * Class used for all objects passed to error callbacks.
 * @class Error
 * @memberof external:AV
 * @see https://www.leancloud.cn/api-docs/javascript/symbols/AV.Error.html
 * @see https://www.leancloud.cn/docs/js_guide.html#错误处理-1
 */
