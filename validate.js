$(document).ready(function() {
    $("#booking").validate({
        rules:{
            from:{
                required: true,
                minlength: 2,
            },
            to:{
                required: true,
                minlength: 2,
            },
            sdate: {
                required: true,
            },
            rdate: {
                required: true,
            },
            mdays: {
                required: true,
            },
        },
        messges:{
            from:{
                required:"please enter the destination"
            }
        }
    })
});