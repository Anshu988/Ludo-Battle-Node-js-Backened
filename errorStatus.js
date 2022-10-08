    const errorcode={
    //success
    errorsuccess:200,
    error_Page_Not_Found:404,
    internal_serverError:500,
    //Bad Request & syntax error
    Bad_Request:404,

    allfieldrequired:1001,
    // Name must be of 3char
    char:1002,
    // Phone Invalid..
    phoneinvalid:1003,
    // Email Invalid..
    emailinvalid:1004,
    // Invalid OTP
    InvalidOTP:1005,
    //Phone Not Registered.
    PhoneNotRegistered:1006,
    // You Are Already Register You Can Login
    AlreadyRegister:1007,
    // You have not proper Registered,otp varify panding..
    NotProperRegister:1008,
    // UserId Must be required
    UserIdRequired:1009,
    // Invalid UserId
    InvalidUserId:1010,
    //Game player not complete
    GamePlayernotComplete:1011,

   // no record found
   RecordNotFound:1012,

   profilepicUpdateError:1013,

    linkExpire:1014
    

    //Comment section





}
module.exports= errorcode;
